import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebase";
import { updatePassword, signInWithEmailAndPassword } from "firebase/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, newPassword } = await req.json();

    // لاگین مخفی برای اجازه تغییر رمز
    const cred = await signInWithEmailAndPassword(auth, email, newPassword);

    await updatePassword(cred.user, newPassword);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({
      ok: false,
      error: e.message || "Could not reset password",
    });
  }
}
