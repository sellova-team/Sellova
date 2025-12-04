import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
  service: "gmail", // یا هر سرویس دیگری
  auth: {
    user: process.env.ALERT_EMAIL,
    pass: process.env.ALERT_EMAIL_PASS,
  },
});

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    await mailer.sendMail({
      from: `"Sellova AI Manager" <${process.env.ALERT_EMAIL}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent:", subject);
  } catch (err) {
    console.error("Email error:", err);
  }
}
