import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const CREDIT_TABLE: Record<string, number> = {
  simple_image: 5,
  avatar_image: 8,
  advisory: 3,
  video_simple_5: 25,
  video_simple_10: 35,
  video_avatar_5: 35,
  video_avatar_10: 45,
};

export async function POST(req: NextRequest) {
  try {
    const { uid, service } = await req.json();

    if (!uid || !service) {
      return NextResponse.json(
        { ok: false, error: "Missing uid or service type." },
        { status: 400 }
      );
    }

    // مقدار هزینه از جدول
    const cost = CREDIT_TABLE[service];
    if (!cost) {
      return NextResponse.json(
        { ok: false, error: "Invalid service type." },
        { status: 400 }
      );
    }

    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json(
        { ok: false, error: "User not found." },
        { status: 404 }
      );
    }

    const data = snap.data();

    // اگر نقش owner است → کردیت کم نشود
    if (data.role === "owner") {
      return NextResponse.json({ ok: true, credit: "unlimited" });
    }

    const currentCredit = data.creditBalance ?? 0;

    if (currentCredit < cost) {
      return NextResponse.json(
        { ok: false, error: "Not enough credits." },
        { status: 400 }
      );
    }

    // کم کردن کردیت
    await updateDoc(ref, {
      creditBalance: currentCredit - cost,
    });

    return NextResponse.json({
      ok: true,
      newCredit: currentCredit - cost,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error while consuming credit." },
      { status: 500 }
    );
  }
}
