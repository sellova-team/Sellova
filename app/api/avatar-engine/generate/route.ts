import { NextRequest, NextResponse } from "next/server";
import { loadAvatarBank, AvatarItem } from "../../../../lib/avatarLoader";

// انتخاب یک آیتم تصادفی
function pickOne(items: AvatarItem[]): AvatarItem | null {
  if (!items || items.length === 0) return null;
  return items[Math.floor(Math.random() * items.length)];
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // اطلاعات ورودی
    const faceUrl = form.get("faceId") as string | null; // این الان URL است
    const prompt = form.get("prompt") as string | null;
    const category = form.get("category") as string | null;

    const avatarFile = form.get("avatar") as File | null;
    const productFile = form.get("product") as File | null;

    // اگر چهره انتخاب نشده و فایل هم نیست
    if (!avatarFile && !faceUrl) {
      return NextResponse.json(
        { ok: false, error: "Please upload avatar or select a face." },
        { status: 400 }
      );
    }

    // لود بانک
    const bank = loadAvatarBank();

    // نسخه ساده: چون فعلاً URL می‌فرستی، face را خودمان می‌سازیم
    let face = null;
    if (faceUrl) {
      face = {
        id: "manual-face",
        src: faceUrl,
        type: "face",
        gender: "women", // فعلاً ثابت، بعداً اصلاح می‌کنیم
        label: "custom-face",
      };
    }

    const gender = face ? face.gender : category || "women";

    // انتخاب pose/dress/background مناسب
    const poses = bank.filter((i) => i.type === "pose" && i.gender === gender);
    const dresses = bank.filter((i) => i.type === "dress" && i.gender === gender);
    const backgrounds = bank.filter((i) => i.type === "background");

    const pose = pickOne(poses);
    const dress = pickOne(dresses);
    const background = pickOne(backgrounds);

    if (!background) {
      return NextResponse.json(
        { ok: false, error: "No background found." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      layers: {
        background: background.src,
        pose: pose?.src || null,
        dress: dress?.src || null,
        face: face?.src || null,
        avatarUploaded: !!avatarFile,
        productUploaded: !!productFile,
      },
      meta: {
        prompt,
        gender,
      },
    });

  } catch (err) {
    console.error("Avatar generate error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error while generating avatar." },
      { status: 500 }
    );
  }
}
