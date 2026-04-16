import { NextResponse } from 'next/server';
import { Payment } from 'mercadopago';
import { Resend } from 'resend';

import { client } from '@/lib/mercadopago';
import { db } from '@/lib/firebase';

export const runtime = 'nodejs';

function getBaseUrl() {
  return (
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_URL ||
    'https://sitio-vicky.vercel.app'
  );
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('Falta RESEND_API_KEY');
  }

  return new Resend(apiKey);
}

function getFromEmail() {
  return (
    process.env.RESEND_FROM_EMAIL ||
    'Vicky Aphalo <onboarding@resend.dev>'
  );
}

function buildEmailContent(productKey: string | null, paymentId: string, downloadUrl: string) {
  const isEbook = productKey === 'EBOOK';
  const isIndividual = productKey === 'SESION_INDIVIDUAL';

  if (isEbook) {
    return {
      subject: '¡Aquí tienes tu Ebook! 📖 - Vicky Aphalo',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h1 style="color: #0ea5e9;">¡Gracias por tu compra!</h1>
          <p>Ya podés descargar tu ebook <strong>"CUANDO EL AULA SE DESORDENA"</strong> y empezar a transformarlo hoy mismo.</p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h2 style="font-size: 18px; margin-top: 0;">Tu descarga segura está lista:</h2>
            <p style="font-size: 14px; color: #64748b; margin-bottom: 20px;">Este enlace es personal y exclusivo para tu compra.</p>
            <a href="${downloadUrl}" style="display: inline-block; background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Descargar Ebook (PDF)</a>
          </div>
          <p style="font-size: 14px; color: #64748b;">Si tenés algún problema con la descarga, respondé a este email.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="text-align: center; color: #94a3b8; font-size: 12px;">Vicky Aphalo - Bienestar para Educadores</p>
        </div>
      `,
    };
  }

  if (isIndividual) {
    return {
      subject: '¡Tu Sesión de Apoyo Emocional está lista! ✨',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h1 style="color: #0ea5e9;">¡Hola! Gracias por confiar en este espacio.</h1>
          <p>Tu pago por la <strong>Sesión Individual de Apoyo Emocional</strong> ha sido confirmado correctamente.</p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="font-size: 18px; margin-top: 0;">¿Cómo agendamos?</h2>
            <p>Por favor, hacé clic en el siguiente botón para coordinar el día y horario de nuestra sesión por WhatsApp:</p>
            <a href="https://wa.me/5491100000000?text=Hola%20Vicky!%20Ya%20realicé%20el%20pago%20de%20mi%20sesión%20individual.%20Me%20gustaría%20agendar." style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Agendar por WhatsApp</a>
          </div>
          <p style="font-size: 14px; color: #64748b;">Te espero con muchas ganas para empezar a trabajar juntas.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="text-align: center; color: #94a3b8; font-size: 12px;">Vicky Aphalo - Bienestar para Educadores</p>
        </div>
      `,
    };
  }

  return {
    subject: '¡Bienvenida/o! ✨',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1>Pago confirmado</h1>
        <p>Tu compra fue aprobada correctamente.</p>
        <p>Referencia: <strong>${paymentId}</strong></p>
        <p>Si necesitás ayuda, respondé este correo.</p>
      </div>
    `,
  };
}

async function sendConfirmationEmail(params: {
  email: string;
  productKey: string | null;
  paymentId: string;
}) {
  const resend = getResendClient();
  const baseUrl = getBaseUrl();
  const downloadUrl = `${baseUrl}/api/download/${encodeURIComponent(params.paymentId)}`;
  const emailContent = buildEmailContent(params.productKey, params.paymentId, downloadUrl);

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: params.email,
    subject: emailContent.subject,
    html: emailContent.html,
  });

  if (error) {
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const rawBody = await request.text();

    let payload: any = {};
    if (rawBody) {
      try {
        payload = JSON.parse(rawBody);
      } catch {
        payload = {};
      }
    }

    const notificationType = String(
      payload?.type ??
      payload?.topic ??
      payload?.action ??
      url.searchParams.get('type') ??
      url.searchParams.get('topic') ??
      ''
    ).toLowerCase();

    const rawPaymentId =
      payload?.data?.id ??
      payload?.id ??
      url.searchParams.get('data.id') ??
      url.searchParams.get('id');

    if (!rawPaymentId) {
      console.warn('Webhook ignorado: no llegó un paymentId');
      return NextResponse.json({ ok: true, ignored: true }, { status: 200 });
    }

    if (
      notificationType &&
      notificationType !== 'payment' &&
      notificationType !== 'payment.created' &&
      notificationType !== 'payment.updated'
    ) {
      return NextResponse.json({ ok: true, ignored: true }, { status: 200 });
    }

    const paymentId = String(rawPaymentId);
    const payment = new Payment(client);
    const paymentDetails = await payment.get({ id: paymentId });

    const status = paymentDetails.status ?? 'pending';
    const externalReference = paymentDetails.external_reference ?? null;
    const email = paymentDetails.payer?.email ?? null;
    const productKey = externalReference ? externalReference.split(':')[0] : null;

    const orderRef = db.collection('orders').doc(paymentId);
    const existingDoc = await orderRef.get();
    const existingData = existingDoc.exists ? existingDoc.data() : null;

    await orderRef.set(
      {
        paymentId,
        status,
        externalReference,
        email,
        productKey,
        updatedAt: new Date(),
        paymentAmount: paymentDetails.transaction_amount ?? null,
        currencyId: paymentDetails.currency_id ?? null,
        mpStatusDetail: paymentDetails.status_detail ?? null,
        ...(existingDoc.exists ? {} : { createdAt: new Date() }),
      },
      { merge: true }
    );

    console.log(`✅ Firestore actualizado: pago ${paymentId} = ${status}`);

    const emailAlreadySent = Boolean(existingData?.emailSentAt);

    if (status === 'approved' && email && !emailAlreadySent) {
      await sendConfirmationEmail({
        email,
        productKey,
        paymentId,
      });

      await orderRef.set(
        {
          emailSentAt: new Date(),
        },
        { merge: true }
      );

      console.log(`📧 Email de confirmación enviado a ${email}`);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('❌ Error en el webhook de Mercado Pago:', error);
    return NextResponse.json(
      { error: 'Error procesando webhook' },
      { status: 500 }
    );
  }
}