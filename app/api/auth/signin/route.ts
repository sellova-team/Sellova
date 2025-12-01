import { NextRequest, NextResponse } from "next/server";
import { loadUsers, verifyPassword } from "../../../../lib/userStore";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    const users = loadUsers();

    const user = users.find(
      (u) => u.email.toLowerCase() === String(email).toLowerCase()
    );

    if (!user) {
      return NextResponse.json(
        { ok: false, error: "Invalid email or password." },
        { status: 400 }
      );
    }

    const valid = verifyPassword(password, user.salt, user.passwordHash);

    if (!valid) {
      return NextResponse.json(
        { ok: false, error: "Invalid email or password." },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error while login." },
      { status: 500 }
    );
  }
}
