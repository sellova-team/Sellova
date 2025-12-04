// app/api/ai/route.ts

import { NextRequest, NextResponse } from "next/server";
import { aiDispatcher } from "../../lib/ai/dispatcher";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // چک اولیه
    if (!body.type) {
      return NextResponse.json({ error: "type is required" }, { status: 400 });
    }

    // پردازش درخواست
    const result = await aiDispatcher.process(body);

    return NextResponse.json({
      success: true,
      model_used: result.model,
      output: result.result,
    });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "AI router error" },
      { status: 500 }
    );
  }
}
