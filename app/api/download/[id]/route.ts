import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: paymentId } = await params;

    // 1. Verificar el pago en Firestore
    const orderRef = db.collection('orders').doc(paymentId);
    const doc = await orderRef.get();

    if (!doc.exists) {
      return new NextResponse('Acceso denegado: Orden no encontrada', { status: 403 });
    }

    const orderData = doc.data();

    // 2. Solo permitir descarga si el pago está aprobado
    if (orderData?.status !== 'approved') {
      return new NextResponse('Acceso denegado: Pago no confirmado', { status: 403 });
    }

    // 3. Leer el archivo desde la carpeta privada
    // En Vercel, process.cwd() apunta a la raíz del proyecto
    const filePath = path.join(process.cwd(), 'private_assets', 'ebook-aula-desordenada.pdf');
    
    if (!fs.existsSync(filePath)) {
      console.error('Archivo no encontrado en:', filePath);
      return new NextResponse('Error: Archivo no disponible', { status: 500 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    // 4. Retornar el archivo con los headers correctos
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Ebook-Vicky-Aphalo-Aula-Desordenada.pdf"',
      },
    });

  } catch (error) {
    console.error('Error en descarga segura:', error);
    return new NextResponse('Error interno', { status: 500 });
  }
}
