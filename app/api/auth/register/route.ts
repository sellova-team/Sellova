import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, securityWord } = await req.json();

    if (!email || !password || !securityWord) {
      return NextResponse.json(
        { ok: false, error: "Email, password and security word are required." },
        { status: 400 }
      );
    }

    // 1) ساخت کاربر در Firebase Auth
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    // 2) آپدیت نام کاربر
    await updateProfile(user, { displayName: name });

    // 3) ساخت سند Firestore
    await setDoc(doc(db, "users", user.uid), {
      role: "user",
      creditBalance: 30,
      monthlyQuota: 0,
      monthlyUsed: 0,
      lastReset: new Date().toISOString(),
      name,
      email,
      securityWord: securityWord.toLowerCase(),
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err.message || "Error registering user." },
      { status: 500 }
    );
  }
}
