import { MercadoPagoConfig, Payment } from 'mercadopago';
import { NextResponse } from 'next/server';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || '',
});

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const paymentId = params.id;
    const payment = new Payment(client);
    const result = await payment.get({ id: paymentId });

    return NextResponse.json({
      status: result.status,
      status_detail: result.status_detail,
      external_reference: result.external_reference,
    });
  } catch (error) {
    console.error('Error al consultar pago:', error);
    return NextResponse.json({ error: 'No se pudo obtener el estado' }, { status: 500 });
  }
}
