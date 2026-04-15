import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'API is working' });
}

export async function POST() {
  return new NextResponse('OK', { status: 200 });
}
