import { NextRequest, NextResponse } from "next/server";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

// جدول مصرف کریديت
const COST: Record<string, number> = {
  photo_simple: 5,
  photo_avatar: 8,
  consult: 3,
  video_simple_5: 25,
  video_simple_10: 35,
  video_avatar_5: 35,
  video_avatar_10: 45,
};

export async function POST(req: NextRequest) {
  try {
    const { uid, type } = await req.json();

    if (!uid || !type) {
      return NextResponse.json(
        { ok: false, error: "Missing uid or type." },
        { status: 400 }
      );
    }

    const cost = COST[type];
    if (!cost) {
      return NextResponse.json(
        { ok: false, error: "Invalid credit type." },
        { status: 400 }
      );
    }

    // دریافت کاربر از Firestore
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json(
        { ok: false, error: "User not found." },
        { status: 404 }
      );
    }

    const user = snap.data();

    // 1) مالک → مصرف کریديت ندارد
    if (user.role === "owner") {
      return NextResponse.json({ ok: true, free: true });
    }

    // 2) ادمین → مصرف از سهمیه ماهانه
    if (user.role === "admin") {
      const now = new Date();
      const last = new Date(user.lastReset);

      // ریست ماهانه
      if (now.getMonth() !== last.getMonth()) {
        await updateDoc(ref, {
          creditBalance: user.monthlyQuota,
          monthlyUsed: 0,
          lastReset: now.toISOString(),
        });
        user.creditBalance = user.monthlyQuota;
      }

      if (user.creditBalance < cost) {
        return NextResponse.json(
          { ok: false, error: "Admin monthly credits finished." },
          { status: 400 }
        );
      }

      await updateDoc(ref, {
        creditBalance: user.creditBalance - cost,
        monthlyUsed: user.monthlyUsed + cost,
      });

      return NextResponse.json({ ok: true });
    }

    // 3) یوزر معمولی → مصرف از creditBalance
    if (user.creditBalance < cost) {
      return NextResponse.json(
        { ok: false, error: "Not enough credits." },
        { status: 400 }
      );
    }

    await updateDoc(ref, {
      creditBalance: user.creditBalance - cost,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Error consuming credits." },
      { status: 500 }
    );
  }
}
