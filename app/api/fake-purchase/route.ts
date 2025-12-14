import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(req: Request) {
  const body = await req.json();

  await adminDb
    .collection('purchases')
    .add({
      uid: body.uid,
      credits: body.credits,
      isFake: true,
      createdAt: new Date(),
    });

  await adminDb
    .collection('users')
    .doc(body.uid)
    .update({
      creditBalance: body.credits,
    });

  return NextResponse.json({ ok: true });
}
