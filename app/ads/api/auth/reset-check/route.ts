import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { email, securityWord } = await req.json();

    const q = query(
      collection(db, "users"),
      where("email", "==", email),
    );

    const snap = await getDocs(q);

    if (snap.empty) {
      return NextResponse.json({ ok: false, error: "User not found" });
    }

    const user = snap.docs[0].data();

    if (user.securityWord !== securityWord.toLowerCase()) {
      return NextResponse.json({ ok: false, error: "Security word incorrect" });
    }

    return NextResponse.json({ ok: true, uid: snap.docs[0].id });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Server error" });
  }
}
