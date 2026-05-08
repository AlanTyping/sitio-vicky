import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { Payment } from 'mercadopago';
import { client } from '@/lib/mercadopago';
import { Resend } from 'resend';

// Reutilizamos la lógica de email del webhook para consistencia
// En un proyecto más grande, esto debería estar en un servicio compartido
function getBaseUrl() {
  return (
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_URL ||
    'https://sitio-vicky.vercel.app'
  );
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('Falta RESEND_API_KEY');
  return new Resend(apiKey);
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
            <a href="https://wa.me/5492204709105?text=Hola%20Vicky!%20Ya%20realicé%20el%20pago%20de%20mi%20sesión%20individual.%20Me%20gustaría%20agendar." style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Agendar por WhatsApp</a>
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
    html: `<p>Pago confirmado. Referencia: ${paymentId}</p>`,
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

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Vicky Aphalo <contacto@vickyaphalo.site>';

  await resend.emails.send({
    from: fromEmail,
    to: params.email,
    subject: emailContent.subject,
    html: emailContent.html,
  });
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: paymentId } = await params;
    
    // 1. Consultar Firestore primero
    const orderRef = db.collection('orders').doc(paymentId);
    const doc = await orderRef.get();
    let data = doc.exists ? doc.data() : null;

    // 2. Si no existe o no es un estado final, consultar Mercado Pago directamente
    if (!data || (data.status !== 'approved' && data.status !== 'rejected')) {
      console.log(`🔍 Consultando Mercado Pago directamente para pago: ${paymentId}`);
      try {
        const payment = new Payment(client);
        const mpDetails = await payment.get({ id: paymentId });
        
        const mpStatus = mpDetails.status ?? 'pending';
        const externalReference = mpDetails.external_reference ?? null;
        const email = mpDetails.payer?.email ?? null;
        const productKey = externalReference ? externalReference.split(':')[0] : null;

        // Actualizar Firestore con lo que diga Mercado Pago
        const updateData: Record<string, unknown> = {
          paymentId,
          status: mpStatus,
          externalReference,
          email,
          productKey,
          updatedAt: new Date(),
          paymentAmount: mpDetails.transaction_amount ?? null,
          mpStatusDetail: mpDetails.status_detail ?? null,
        };

        if (!doc.exists) {
          updateData.createdAt = new Date();
        }

        await orderRef.set(updateData, { merge: true });
        
        // Recargar datos para el retorno
        data = (await orderRef.get()).data();

        // 3. Si acaba de ser aprobado y no se mandó el email, mandarlo
        if (mpStatus === 'approved' && email && !data?.emailSentAt) {
          console.log(`📧 Enviando email proactivamente desde status API a ${email}`);
          await sendConfirmationEmail({ email, productKey, paymentId });
          await orderRef.update({ emailSentAt: new Date() });
          data!.emailSentAt = new Date();
        }
      } catch (mpError) {
        console.error('Error al consultar Mercado Pago en status API:', mpError);
        // Si falla MP, seguimos con lo que tengamos en Firestore (que podría ser nada)
      }
    }

    return NextResponse.json({
      status: data?.status || 'pending',
      externalReference: data?.externalReference,
      email: data?.email,
      updatedAt: data?.updatedAt?.toDate?.() || data?.updatedAt,
    });
  } catch (error) {
    console.error('Error al consultar status:', error);
    return NextResponse.json({ error: 'No se pudo obtener el estado' }, { status: 500 });
  }
}
