import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    // 1) ورود با Firebase Auth
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    // 2) گرفتن اطلاعات Firestore
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json(
        { ok: false, error: "User profile not found in Firestore." },
        { status: 500 }
      );
    }

    const userData = snap.data();

    // 3) برگرداندن نقش و کریديت
    return NextResponse.json({
      ok: true,
      uid: user.uid,
      email: user.email,
      role: userData.role,
      creditBalance: userData.creditBalance,
    });

  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      { ok: false, error: err.message || "Sign-in failed." },
      { status: 500 }
    );
  }
}
