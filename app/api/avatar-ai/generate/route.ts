import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const avatar = form.get("avatar") as File | null;
    const product = form.get("product") as File | null;
    const faceId = form.get("faceId") as string | null;
    const category = form.get("category") as string | null;
    const prompt = form.get("prompt") as string | null;

    if (!product) {
      return NextResponse.json(
        { ok: false, error: "Missing product image" },
        { status: 400 }
      );
    }

    if (!avatar && !faceId) {
      return NextResponse.json(
        { ok: false, error: "Missing avatar or faceId" },
        { status: 400 }
      );
    }

    // اینجا فعلاً خروجی ساختگی می‌دهیم
    // بعداً توی اورکستریتور واقعی وصلش می‌کنیم
    return NextResponse.json({
      ok: true,
      layers: {
        background: "/assets/avatar/background/Background1.png",
        pose: "/assets/avatar/pose/women/pose1.png",
        dress: "/assets/avatar/dress/women/dress1.png",
        face: avatar ? URL.createObjectURL(avatar) : faceId,
      },
    });
  } catch (err) {
    console.error("Avatar AI API Error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error in Avatar AI API" },
      { status: 500 }
    );
  }
}
