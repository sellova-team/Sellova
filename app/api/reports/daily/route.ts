import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    const usersSnap = await getDocs(collection(db, "users"));

    let totalUsers = 0;
    let totalCredits = 0;

    usersSnap.forEach((doc) => {
      totalUsers++;
      totalCredits += doc.data().creditBalance || 0;
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
      from: `"Sellova Report" <${process.env.REPORT_EMAIL}>`,
      to: process.env.REPORT_TO,
      subject: "Sellova | Daily Report",
      text: `
Users: ${totalUsers}
Total Credits Remaining: ${totalCredits}
      `,
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    return NextResponse.json({ error: "REPORT_FAILED" }, { status: 500 });
  }
}
