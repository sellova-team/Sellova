import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const snap = await getDocs(collection(db, "users"));
    const users = snap.docs.map((d) => ({ id: d.id, ...d.data() }));

    return NextResponse.json({ ok: true, users });
  } catch (err: any) {
    console.error("Users API error:", err);
    return NextResponse.json({ ok: false, error: err.message });
  }
}
