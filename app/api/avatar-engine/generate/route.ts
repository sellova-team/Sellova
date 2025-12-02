import { NextRequest, NextResponse } from "next/server";
import { loadAvatarBank, AvatarItem } from "../../../../lib/avatarLoader";

// انتخاب یکی از آیتم‌ها بر اساس فیلتر، اگر هیچ نبود → null
function pickOne(items: AvatarItem[] | undefined): AvatarItem | null {
  if (!items || items.length === 0) return null;
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

export async function POST(req: NextRequest) {
  try {
    const { faceId, productUrl, prompt } = await req.json();

    if (!faceId) {
      return NextResponse.json(
        { ok: false, error: "faceId is required" },
        { status: 400 }
      );
    }

    const bank = loadAvatarBank();

    // صورت انتخاب‌شده توسط کاربر
    const face = bank.find((i) => i.id === faceId && i.type === "face");
    if (!face) {
      return NextResponse.json(
        { ok: false, error: "Face not found" },
        { status: 400 }
      );
    }

    const gender = face.gender; // men / women / kids

    // فیلتر لیست ژست و لباس بر اساس جنسیت
    const poses = bank.filter(
      (i) => i.type === "pose" && i.gender === gender
    );
    const dresses = bank.filter(
      (i) => i.type === "dress" && i.gender === gender
    );
    const backgrounds = bank.filter((i) => i.type === "background");

    // فعلاً انتخاب ساده (رندوم) — بعداً می‌تونیم بر اساس prompt دقیق‌تر کنیم
    const pose = pickOne(poses);
    const dress = pickOne(dresses);
    const background = pickOne(backgrounds);

    if (!background) {
      return NextResponse.json(
        { ok: false, error: "No background available" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      layers: {
        background: background.src,
        pose: pose?.src || null,
        dress: dress?.src || null,
        face: face.src,
        product: productUrl || null, // فعلاً خودت یه url بده، بعداً آپلود رو وصل می‌کنیم
      },
      meta: {
        gender,
        usedPrompt: prompt || null,
      },
    });
  } catch (err) {
    console.error("Avatar generate error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error while generating avatar layers." },
      { status: 500 }
    );
  }
}
