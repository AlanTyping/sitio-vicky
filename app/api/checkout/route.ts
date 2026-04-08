import { MercadoPagoConfig, Preference } from 'mercadopago';
import { NextResponse } from 'next/server';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || '',
});

export async function POST(request: Request) {
  try {
    const { title, quantity, price } = await request.json();

    const preference = new Preference(client);

    const baseUrl = process.env.APP_URL || 'http://localhost:3000';

    const result = await preference.create({
      body: {
        items: [
          {
            id: 'taller-vicky',
            title: title || 'Taller de apoyo emocional',
            quantity: Number(quantity) || 1,
            unit_price: Number(price) || 5000,
            currency_id: 'ARS',
          },
        ],
        back_urls: {
          success: new URL('/success', baseUrl).toString(),
          failure: new URL('/failure', baseUrl).toString(),
          pending: new URL('/pending', baseUrl).toString(),
        },
        auto_return: 'approved',
      },
    });

    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error('Mercado Pago Error:', error);
    return NextResponse.json(
      { error: 'Error al crear la preferencia de pago' },
      { status: 500 }
    );
  }
}