// lib/email.ts
import nodemailer from "nodemailer";

export async function sendAlertEmail(subject: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ALERT_EMAIL,
      pass: process.env.ALERT_EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Sellova AI Alert" <${process.env.ALERT_EMAIL}>`,
    to: process.env.ADMIN_TARGET_EMAIL,
    subject,
    text: message,
  });

  console.log("📧 هشدار ایمیلی ارسال شد:", subject);
}
