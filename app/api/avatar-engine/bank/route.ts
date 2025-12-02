import { NextResponse } from "next/server";
import { loadAvatarBank } from "../../../../lib/avatarLoader";

export async function GET() {
  const items = loadAvatarBank();
  return NextResponse.json({ ok: true, items });
}
