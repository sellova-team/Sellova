import { NextRequest, NextResponse } from "next/server";
import { avatarOrchestrator } from "@/lib/avatar/orchestrator";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { userId, faceImageUrl, pose, scene, productImageUrl } = body;

    if (!userId || !faceImageUrl || !pose || !scene) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const result = await avatarOrchestrator.generateAvatar({
      userId,
      faceImageUrl,
      pose,
      scene,
      productImageUrl: productImageUrl || null,
    });

    return NextResponse.json({
      ok: true,
      ...result,
    });
  } catch (err) {
    console.error("Avatar AI API Error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error in Avatar AI API" },
      { status: 500 }
    );
  }
}
