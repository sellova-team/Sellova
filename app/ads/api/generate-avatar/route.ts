import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { uid, type } = await req.json();
    // type:
    // "photo_single"
    // "photo_triple"
    // "video_5"
    // "video_10"

    let COST = 0;

    if (type === "photo_single") COST = 8;
    if (type === "photo_triple") COST = 24;
    if (type === "video_5") COST = 35;
    if (type === "video_10") COST = 45;

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
      { error: "AVATAR_GENERATE_FAILED" },
      { status: 500 }
    );
  }
}
