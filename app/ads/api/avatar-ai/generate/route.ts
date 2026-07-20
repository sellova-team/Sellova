import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // FormData → چون فایل داریم
    const form = await req.formData();

    const avatarFile = form.get("avatar") as File | null;
    const faceUrl = form.get("face") as string | null;
    const category = form.get("category") as string | null;
    const prompt = form.get("prompt") as string | null;
    const productFile = form.get("product") as File | null;

    // اگر نه چهره و نه آواتار → خطا
    if (!avatarFile && !faceUrl) {
      return NextResponse.json(
        { ok: false, error: "No face or avatar provided" },
        { status: 400 }
      );
    }

    // چیزی برای تست نمی‌سازیم — فقط ورودی‌ها را برمی‌گردانیم
    return NextResponse.json({
      ok: true,
      received: {
        hasAvatarFile: !!avatarFile,
        hasProductFile: !!productFile,
        faceUrl,
        category,
        prompt,
      },
      message: "Inputs received successfully. AI generation will be added later.",
    });

  } catch (err) {
    console.error("Avatar-AI error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
