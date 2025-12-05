// lib/ai/aiRouter.ts

import { NextRequest, NextResponse } from "next/server";
import { aiDispatcher } from "./dispatcher";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.type) {
      return NextResponse.json(
        { error: "'type' is required" },
        { status: 400 }
      );
    }

    const result = await aiDispatcher.process(body);

    return NextResponse.json(
      {
        success: true,
        model: result.model,
        result: result.result,  // ⬅️ فقط این دوتا فعلاً وجود دارن
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("AI Router Error:", err);
    return NextResponse.json(
      { error: err.message || "AI dispatcher error" },
      { status: 500 }
    );
  }
}
