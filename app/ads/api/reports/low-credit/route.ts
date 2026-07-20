import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import nodemailer from "nodemailer";

const THRESHOLD = 5;

export async function GET() {
  try {
    const snap = await getDocs(collection(db, "users"));

    const lowUsers: string[] = [];
    snap.forEach(d => {
      const c = d.data().creditBalance ?? 0;
      if (c <= THRESHOLD) lowUsers.push(`${d.data().email} (${c})`);
    });

    if (!lowUsers.length) return NextResponse.json({ ok: true });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.REPORT_EMAIL,
        pass: process.env.REPORT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Sellova Alert" <${process.env.REPORT_EMAIL}>`,
      to: process.env.REPORT_TO,
      subject: "Sellova | Low Credit Alert",
      text: lowUsers.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "LOW_CREDIT_FAILED" }, { status: 500 });
  }
}
