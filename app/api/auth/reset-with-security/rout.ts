import { NextRequest, NextResponse } from "next/server";
import {
  loadUsers,
  saveUsers,
  verifyPassword,
  hashPassword,
} from "../../../../lib/userStore";

export async function POST(req: NextRequest) {
  try {
    const { email, securityWord, newPassword } = await req.json();

    if (!email || !securityWord || !newPassword) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const users = loadUsers();
    const idx = users.findIndex(
      (u) => u.email.toLowerCase() === String(email).toLowerCase()
    );

    if (idx === -1) {
      return NextResponse.json(
        { ok: false, error: "User not found." },
        { status: 400 }
      );
    }

    const user = users[idx];

    if (!user.securityWordSalt || !user.securityWordHash) {
      return NextResponse.json(
        {
          ok: false,
          error: "Security word not set for this account.",
        },
        { status: 400 }
      );
    }

    // چک کردن صحیح بودن کلمه سکیوریتی (همه‌جا lowercase)
    const ok = verifyPassword(
      String(securityWord).toLowerCase(),
      user.securityWordSalt,
      user.securityWordHash
    );

    if (!ok) {
      return NextResponse.json(
        { ok: false, error: "Security word is incorrect." },
        { status: 400 }
      );
    }

    // وقتی درست بود → پسورد جدید بساز
    const { salt, hash } = hashPassword(String(newPassword));
    user.salt = salt;
    user.passwordHash = hash;

    users[idx] = user;
    saveUsers(users);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error while resetting password." },
      { status: 500 }
    );
  }
}
