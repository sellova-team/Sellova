import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";

// هزینه ساخت تصویر
const COST = 5;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { uid } = body;

    if (!uid) {
      return NextResponse.json(
        { ok: false, error: "UID_REQUIRED" },
        { status: 400 }
      );
    }

    // گرفتن کاربر
    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      return NextResponse.json(
        { ok: false, error: "USER_NOT_FOUND" },
        { status: 404 }
      );
    }

    const userData = snap.data();

    // چک کردیت
    if (userData.creditBalance < COST) {
      return NextResponse.json(
        { ok: false, error: "NO_CREDIT" },
        { status: 403 }
      );
    }

    // کم کردن کردیت قبل از AI
    await updateDoc(userRef, {
      creditBalance: increment(-COST),
    });

    // ---- اینجا بعداً AI واقعی وصل می‌شود ----
    // فعلاً خروجی فیک
    const fakeImageUrl = "https://via.placeholder.com/1024";

    return NextResponse.json({
      ok: true,
      imageUrl: fakeImageUrl,
      cost: COST,
    });

  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err.message || "GENERATE_FAILED" },
      { status: 500 }
    );
  }
}
