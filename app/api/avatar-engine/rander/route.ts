import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { layers } = await req.json();

    if (!layers) {
      return NextResponse.json(
        { ok: false, error: "No layers provided" },
        { status: 400 }
      );
    }

    const { background, pose, dress, face, product } = layers;

    if (!background) {
      return NextResponse.json(
        { ok: false, error: "Background is required" },
        { status: 400 }
      );
    }

    const base = (p: string) => process.cwd() + "/public" + p;

    let img = sharp(base(background)).png();

    const composites: { input: string }[] = [];

    if (pose) composites.push({ input: base(pose) });
    if (dress) composites.push({ input: base(dress) });
    if (face) composites.push({ input: base(face) });
    if (product) composites.push({ input: base(product) });

    if (composites.length > 0) {
      img = img.composite(composites);
    }

    const buffer = await img.png().toBuffer();

    return new NextResponse(buffer as any, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (err) {
    console.error("Render avatar error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error while rendering avatar" },
      { status: 500 }
    );
  }
}