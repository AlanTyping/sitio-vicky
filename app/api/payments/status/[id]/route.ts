import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: paymentId } = await params;
    
    // Consultar Firestore
    const orderRef = db.collection('orders').doc(paymentId);
    const doc = await orderRef.get();

    if (!doc.exists) {
      // Si no existe aún en Firestore, devolvemos pendiente
      return NextResponse.json({ status: 'pending' });
    }

    const data = doc.data();
    return NextResponse.json({
      status: data?.status || 'pending',
      externalReference: data?.externalReference,
      email: data?.email,
      updatedAt: data?.updatedAt?.toDate?.() || data?.updatedAt,
    });
  } catch (error) {
    console.error('Error al consultar status en Firestore:', error);
    return NextResponse.json({ error: 'No se pudo obtener el estado' }, { status: 500 });
  }
}
