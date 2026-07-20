import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    const snap = await getDocs(collection(db, "users"));

    let users = 0;
    let totalCredits = 0;

    snap.forEach(d => {
      users++;
      totalCredits += d.data().creditBalance ?? 0;
    });

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
      from: `"Sellova Weekly" <${process.env.REPORT_EMAIL}>`,
      to: process.env.REPORT_TO,
      subject: "Sellova | Weekly Report",
      text: `
Weekly Summary
Users: ${users}
Total Credits Remaining: ${totalCredits}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "WEEKLY_REPORT_FAILED" }, { status: 500 });
  }
}
