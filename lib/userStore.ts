import fs from "fs";
import path from "path";
import crypto from "crypto";

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
  securityWordHash: string; // 🔵 هش کلمه امنیتی
  securityWordSalt: string; // 🔵 نمک کلمه امنیتی
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, "[]", "utf8");
  }
}

export function loadUsers(): UserRecord[] {
  ensureFile();
  const raw = fs.readFileSync(USERS_FILE, "utf8");
  try {
    const parsed = JSON.parse(raw) as any[];

    // اگر قبلاً فیلدهای جدید نبودن، مقدار پیش‌فرض بده
    return parsed.map((u) => ({
      id: u.id,
      name: u.name ?? "",
      email: u.email,
      passwordHash: u.passwordHash,
      salt: u.salt,
      securityWordHash: u.securityWordHash ?? "",
      securityWordSalt: u.securityWordSalt ?? "",
      createdAt: u.createdAt ?? new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

export function saveUsers(users: UserRecord[]) {
  ensureFile();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
}

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return { salt, hash };
}

export function verifyPassword(
  password: string,
  salt: string,
  hash: string
): boolean {
  const testHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return testHash === hash;
}
