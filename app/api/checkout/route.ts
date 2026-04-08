import { client } from '@/lib/mercadopago';
import { Preference } from 'mercadopago';
import { NextResponse } from 'next/server';
import { PRODUCTS, ProductKey } from '@/config/products';

export async function POST(request: Request) {
  try {
    const { productKey, quantity = 1 } = await request.json();

    // Validamos que el producto exista en nuestra configuración
    const product = PRODUCTS[productKey as ProductKey];
    if (!product) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 400 });
    }

    const preference = new Preference(client);
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://sitio-vicky.vercel.app';

    const result = await preference.create({
      body: {
        items: [
          {
            id: product.id,
            title: product.title,
            quantity: Number(quantity),
            unit_price: product.price,
            currency_id: 'ARS',
          },
        ],
        backUrls: {
          success: `${baseUrl}/`,
          failure: `${baseUrl}/`,
          pending: `${baseUrl}/`,
        },
        autoReturn: 'approved',
        // Opcional: Para el webhook
        external_reference: `${productKey}-${Date.now()}`,
      },
    } as any);

    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error('Mercado Pago Error:', error);
    return NextResponse.json({ error: 'Error al procesar el pago' }, { status: 500 });
  }
}
