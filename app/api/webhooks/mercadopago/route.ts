import { MercadoPagoConfig, Payment } from 'mercadopago';
import { NextResponse } from 'next/server';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || '',
});

export async function POST(request: Request) {
  try {
    // Mercado Pago envía los datos en el cuerpo o como query params dependiendo de la versión
    const body = await request.json();
    const { data, type } = body;

    // Solo nos interesan las notificaciones de tipo "payment"
    if (type === 'payment') {
      const paymentId = data.id;

      // Consultamos el estado del pago usando el SDK
      const payment = new Payment(client);
      const paymentDetails = await payment.get({ id: paymentId });

      const status = paymentDetails.status;
      const amount = paymentDetails.transaction_amount;
      const externalReference = paymentDetails.external_reference;
      const userEmail = paymentDetails.payer?.email;

      console.log(`🔔 Webhook recibido: Pago ${paymentId} está ${status}`);

      if (status === 'approved') {
        console.log(`✅ ¡Pago aprobado! Monto: ${amount}. Usuario: ${userEmail}`);
        // AQUÍ: Lógica para marcar el pedido como pagado, enviar el taller, etc.
      } else if (status === 'rejected') {
        console.log(`❌ Pago rechazado: ${paymentId}`);
      }
    }

    // Siempre responder con 200 o 201 para que Mercado Pago no reintente infinitamente
    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    console.error('❌ Error en el webhook de Mercado Pago:', error);
    // Aunque falle nuestra lógica, a veces es mejor devolver 200 para que MP no se sature,
    // pero aquí devolvemos 500 para debuguear si algo sale mal en el código.
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
