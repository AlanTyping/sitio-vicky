import { client } from '@/lib/mercadopago';
import { Payment } from 'mercadopago';
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { Resend } from 'resend';

const resend = new Resend('re_KYH649zJ_Noc3fDAv4mwfEJ8koeVSaYFr');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, type } = body;

    if (type === 'payment') {
      const paymentId = data.id;
      const payment = new Payment(client);
      const paymentDetails = await payment.get({ id: paymentId });

      const status = paymentDetails.status;
      const externalReference = paymentDetails.external_reference;
      const email = paymentDetails.payer?.email;
      const [productKey] = (externalReference || '').split(':');

      const orderData = {
        paymentId: String(paymentId),
        status,
        externalReference: externalReference || null,
        email: email || null,
        updatedAt: new Date(),
      };

      // Si es un documento nuevo, agregamos createdAt
      const orderRef = db.collection('orders').doc(String(paymentId));
      const doc = await orderRef.get();
      
      if (!doc.exists) {
        Object.assign(orderData, { createdAt: new Date() });
      }

      await orderRef.set(orderData, { merge: true });
      console.log(`✅ Firestore actualizado: Orden ${paymentId} está ${status}`);

      // 📧 ENVIAR EMAIL SI ESTÁ APROBADO
      if (status === 'approved' && email) {
        try {
          const isEbook = productKey === 'EBOOK';
          const isIndividual = productKey === 'SESION_INDIVIDUAL';
          
          let emailConfig = {
            subject: '¡Tu recurso está listo! ✨',
            html: ''
          };

          if (isEbook) {
            emailConfig = {
              subject: '¡Aquí tienes tu Ebook! 📖 - Vicky Aphalo',
              html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                  <h1 style="color: #0ea5e9;">¡Gracias por tu compra!</h1>
                  <p>Ya podés descargar tu ebook <strong>"CUANDO EL AULA SE DESORDENA"</strong> y empezar a transformar tu aula hoy mismo.</p>
                  <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                    <h2 style="font-size: 18px; margin-top: 0;">Tu descarga está lista:</h2>
                    <a href="https://sitio-vicky.vercel.app/descargas/ebook-aula-desordenada.pdf" style="display: inline-block; background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Descargar Ebook (PDF)</a>
                  </div>
                  <p style="font-size: 14px; color: #64748b;">Si tenés algún problema con la descarga, simplemente respondé a este email y te ayudaremos.</p>
                  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                  <p style="text-align: center; color: #94a3b8; font-size: 12px;">Vicky Aphalo - Bienestar para Educadores</p>
                </div>
              `
            };
          } else if (isIndividual) {
            emailConfig = {
              subject: '¡Tu Sesión de Apoyo Emocional está lista! ✨',
              html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                  <h1 style="color: #0ea5e9;">¡Hola! Gracias por confiar en este espacio.</h1>
                  <p>Tu pago por la <strong>Sesión Individual de Apoyo Emocional</strong> ha sido confirmado correctamente.</p>
                  <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h2 style="font-size: 18px; margin-top: 0;">¿Cómo agendamos?</h2>
                    <p>Por favor, hacé clic en el siguiente botón para coordinar el día y horario de nuestra sesión a través de WhatsApp:</p>
                    <a href="https://wa.me/5491100000000?text=Hola%20Vicky!%20Ya%20realicé%20el%20pago%20de%20mi%20sesión%20individual.%20Me%20gustaría%20agendar." style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Agendar por WhatsApp</a>
                  </div>
                  <p style="font-size: 14px; color: #64748b;">Te espero con muchas ganas para empezar a trabajar juntas.</p>
                  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                  <p style="text-align: center; color: #94a3b8; font-size: 12px;">Vicky Aphalo - Bienestar para Educadores</p>
                </div>
              `
            };
          } else {
            // Caso TALLER (por si acaso se reactiva)
            emailConfig = {
              subject: '¡Bienvenida al Taller! 🍎',
              html: `<p>Confirmamos tu pago para el taller. Pronto recibirás más novedades.</p>`
            };
          }

          await resend.emails.send({
            from: 'Vicky Aphalo <onboarding@resend.dev>', // Usando el dominio de prueba de Resend
            to: email,
            subject: emailConfig.subject,
            html: emailConfig.html,
          });

          console.log(`📧 Email de confirmación enviado a ${email}`);
        } catch (emailError) {
          console.error('❌ Error enviando email:', emailError);
          // No detenemos el proceso si el email falla
        }
      }
    }

    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    console.error('❌ Error en el webhook de Mercado Pago:', error);
    // Siempre devolver 200 OK aunque falle lógica interna según requerimiento
    return new NextResponse('OK', { status: 200 });
  }
}
