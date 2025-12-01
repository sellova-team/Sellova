import { NextRequest, NextResponse } from "next/server";
import {
  loadUsers,
  saveUsers,
  hashPassword,
  UserRecord,
} from "../../../../lib/userStore";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, securityWord } = await req.json();

    if (!email || !password || !securityWord) {
      return NextResponse.json(
        {
          ok: false,
          error: "Email, password and security word are required.",
        },
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

    // هش پسورد
    const { salt, hash } = hashPassword(String(password));

    // هش کلمه امنیتی (همیشه lowercase ذخیره می‌کنیم)
    const { salt: secSalt, hash: secHash } = hashPassword(
      String(securityWord).toLowerCase()
    );

    const user: UserRecord = {
      id: Date.now().toString(),
      name: String(name || ""),
      email: String(email),
      salt,
      passwordHash: hash,
      securityWordSalt: secSalt,
      securityWordHash: secHash,
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
