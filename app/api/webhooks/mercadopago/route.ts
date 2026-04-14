import { client } from '@/lib/mercadopago';
import { Payment } from 'mercadopago';
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, type } = body;

    if (type === 'payment') {
      const paymentId = data.id;
      const payment = new Payment(client);
      const paymentDetails = await payment.get({ id: paymentId });

      const orderData = {
        paymentId: String(paymentId),
        status: paymentDetails.status, // 'pending' | 'approved' | 'rejected' | etc
        externalReference: paymentDetails.external_reference || null,
        email: paymentDetails.payer?.email || null,
        updatedAt: new Date(),
      };

      // Si es un documento nuevo, agregamos createdAt
      const orderRef = db.collection('orders').doc(String(paymentId));
      const doc = await orderRef.get();
      
      if (!doc.exists) {
        Object.assign(orderData, { createdAt: new Date() });
      }

      await orderRef.set(orderData, { merge: true });
      console.log(`✅ Firestore actualizado: Orden ${paymentId} está ${paymentDetails.status}`);
    }

    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    console.error('❌ Error en el webhook de Mercado Pago:', error);
    // Siempre devolver 200 OK aunque falle lógica interna según requerimiento
    return new NextResponse('OK', { status: 200 });
  }
}
