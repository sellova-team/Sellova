import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // --- Read FormData ---
    const form = await req.formData();

    const avatar = form.get("avatar");    // File (when user uploads own face)
    const face = form.get("face");        // URL from selected preset face
    const product = form.get("product");  // File (product image)
    const category = form.get("category"); // women / men / kids
    const prompt = form.get("prompt") || "";

    // --- VALIDATION ---
    if (!avatar && !face) {
      return NextResponse.json(
        { ok: false, error: "Missing avatar or faceId" },
        { status: 400 }
      );
    }

    if (!product) {
      return NextResponse.json(
        { ok: false, error: "Missing product image" },
        { status: 400 }
      );
    }

    // --- SIMULATED AI LAYERS (for now) ---
    // Later when you connect real AI, replace these URLs with generated ones.
    const defaultFace =
      typeof face === "string"
        ? face
        : "/assets/avatar/face/women/face1.png";

    const resultLayers = {
      background: "/assets/avatar/background/Background1.png",
      pose: null,
      dress: null,
      face: defaultFace,
    };

    return NextResponse.json({
      ok: true,
      layers: resultLayers,
    });
  } catch (err) {
    console.error("Avatar AI Error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error in Avatar AI API" },
      { status: 500 }
    );
  }
}
