import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Vicky Aphalo <contacto@vickyaphalo.site>';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Falta RESEND_API_KEY');
  }
  return new Resend(apiKey);
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ['v.aphalo@gmail.com'], // El email donde Vicky quiere recibir los mensajes
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0ea5e9; margin-top: 0;">Nuevo mensaje de contacto</h2>
          <p>Has recibido un nuevo mensaje desde el sitio web:</p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 14px; color: #64748b;">Podés responder directamente a este email para contactar a ${name}.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="text-align: center; color: #94a3b8; font-size: 12px;">Vicky Aphalo - Sitio Web</p>
        </div>
      `,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
