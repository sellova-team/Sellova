import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { uid, duration } = await req.json();
    // duration: 5 | 10

    let COST = 0;
    if (duration === 5) COST = 25;
    if (duration === 10) COST = 35;

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

    return NextResponse.json({
      ok: true,
      cost: COST,
    });

  } catch (err) {
    return NextResponse.json(
      { error: "VIDEO_GENERATE_FAILED" },
      { status: 500 }
    );
  }
}
