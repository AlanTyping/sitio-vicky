import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { Preference } from 'mercadopago';

import { client } from '@/lib/mercadopago';
import { PRODUCTS, ProductKey } from '@/config/products';

export const runtime = 'nodejs';

function getBaseUrl() {
  return (
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_URL ||
    'https://sitio-vicky.vercel.app'
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    const productKey = body?.productKey as ProductKey | undefined;
    const quantity = Math.max(1, Number(body?.quantity ?? 1));

    if (!productKey) {
      return NextResponse.json({ error: 'Falta productKey' }, { status: 400 });
    }

    const product = PRODUCTS[productKey];
    if (!product) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 400 });
    }

    const baseUrl = getBaseUrl();
    const preference = new Preference(client);

    const externalReference = `${productKey}:${crypto.randomUUID()}`;

    const result = await preference.create({
      body: {
        items: [
          {
            id: product.id,
            title: product.title,
            quantity,
            unit_price: product.price,
            currency_id: 'ARS',
          },
        ],
        back_urls: {
          success: `${baseUrl}/?mp_status=approved&external_reference=${encodeURIComponent(externalReference)}`,
          failure: `${baseUrl}/?mp_status=failure&external_reference=${encodeURIComponent(externalReference)}`,
          pending: `${baseUrl}/?mp_status=pending&external_reference=${encodeURIComponent(externalReference)}`,
        },
        auto_return: 'approved',
        notification_url: `${baseUrl}/api/webhooks/mercadopago`,
        external_reference: externalReference,
      },
    });

    return NextResponse.json({
      id: result.id,
      preferenceId: result.id,
      init_point: result.init_point,
      sandbox_init_point: result.sandbox_init_point,
      external_reference: externalReference,
    });
  } catch (error) {
    console.error('Mercado Pago Error en checkout:', error);
    return NextResponse.json(
      { error: 'Error al procesar el pago' },
      { status: 500 }
    );
  }
}