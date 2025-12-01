import { NextRequest, NextResponse } from "next/server";
import {
  loadUsers,
  saveUsers,
  hashPassword,
  UserRecord,
} from "../../../../lib/userStore";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    const users = loadUsers();

    const existing = users.find(
      (u) => u.email.toLowerCase() === String(email).toLowerCase()
    );

    if (existing) {
      return NextResponse.json(
        { ok: false, error: "This email is already registered." },
        { status: 400 }
      );
    }

    const { salt, hash } = hashPassword(String(password));

    const user: UserRecord = {
      id: Date.now().toString(),
      name: String(name || ""),
      email: String(email),
      salt,
      passwordHash: hash,
      createdAt: new Date().toISOString(),
    };

    users.push(user);
    saveUsers(users);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error while registering." },
      { status: 500 }
    );
  }
}
