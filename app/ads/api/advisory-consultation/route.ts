import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { uid } = await req.json();

    const COST = 3;

    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      return NextResponse.json({ error: "USER_NOT_FOUND" }, { status: 404 });
    }

    if (snap.data().creditBalance < COST) {
      return NextResponse.json({ error: "NO_CREDIT" }, { status: 403 });
    }

    // کم کردن کردیت
    await updateDoc(userRef, {
      creditBalance: increment(-COST),
    });

    // فعلاً خروجی نمایشی
    return NextResponse.json({
      ok: true,
      cost: COST,
    });

  } catch (err) {
    return NextResponse.json(
      { error: "ADVISORY_FAILED" },
      { status: 500 }
    );
  }
}
