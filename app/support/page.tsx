"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "../../lib/lang";

// متن‌های داخلی (الان استفاده نمی‌شود ولی می‌گذاریم بماند)
const supportTexts = {
  en: {
    title: "Support",
    subtitle:
      "Tell us what you need help with and we’ll get back to you as soon as possible.",
    formTitle: "Contact support",
    formDescription: "Send us a short message about your issue.",
    nameLabel: "Full name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email address",
    emailPlaceholder: "Enter your email",
    topicLabel: "Topic",
    topicTechnical: "Technical issue / Bug",
    topicBilling: "Billing / Subscription",
    topicOther: "Other / General question",
    messageLabel: "Message",
    messagePlaceholder: "Type your message here…",
    sendButton: "Send message",
    alertSent: "Your message was sent. We'll get back to you soon.",
    alertRequired: "Please fill in your name, email and message.",
    faqTitle: "Frequently Asked Questions",
    faqIntro:
      "Here are a few quick answers for the most common questions from Sellova users:",
    faq1Q: "How can I create ad images and videos with my products?",
    faq1A:
      "Go to the Image & Video Creator pages from the main menu, upload your product and follow the on-screen steps.",
    faq2Q: "How do I upgrade or change my subscription?",
    faq2A:
      "Open the Settings page, check your current plan, then use the Upgrade Plan page to change it.",
    faq3Q: "Can I download the content I generate?",
    faq3A:
      "Yes. On the image / video pages you can click the Download button after generation.",
    extraTitle: "Still need help?",
    extraText:
      "Use the form on the left and describe your case in detail so we can respond faster.",
  },
  fa: {
    title: "پشتیبانی",
    subtitle:
      "بگویید در چه زمینه‌ای کمک می‌خواهید تا در سریع‌ترین زمان راهنمایی‌تان کنیم.",
    formTitle: "ارتباط با پشتیبانی",
    formDescription: "یک توضیح کوتاه درباره مشکل خود برای ما بنویسید.",
    nameLabel: "نام و نام خانوادگی",
    namePlaceholder: "نام خود را وارد کنید",
    emailLabel: "ایمیل",
    emailPlaceholder: "ایمیل خود را وارد کنید",
    topicLabel: "موضوع",
    topicTechnical: "مشکل فنی / باگ",
    topicBilling: "صورتحساب / اشتراک",
    topicOther: "سایر موارد / سوال عمومی",
    messageLabel: "متن پیام",
    messagePlaceholder: "سوال یا مشکل خود را اینجا بنویسید…",
    sendButton: "ارسال پیام",
    alertSent: "پیام شما ارسال شد. به‌زودی پاسخ می‌دهیم.",
    alertRequired: "لطفاً نام، ایمیل و متن پیام را وارد کنید.",
    faqTitle: "سوالات متداول",
    faqIntro:
      "چند پاسخ سریع برای سوال‌هایی که معمولاً کاربران سللووا می‌پرسند:",
    faq1Q: "چطور می‌توانم از محصولم عکس و ویدیوی تبلیغاتی بسازم؟",
    faq1A:
      "به صفحات ساخت تصویر و ویدیو بروید، عکس محصول را آپلود کنید و مراحل روی صفحه را دنبال کنید.",
    faq2Q: "چطور می‌توانم اشتراکم را ارتقا یا تغییر دهم؟",
    faq2A:
      "از منوی بالا به صفحه تنظیمات بروید و از بخش ارتقای پلن، پلن مناسب را انتخاب کنید.",
    faq3Q: "آیا می‌توانم محتوایی که می‌سازم را دانلود کنم؟",
    faq3A:
      "بله، در صفحات ساخت تصویر و ویدیو، بعد از ساخت خروجی، روی دکمه دانلود کلیک کنید.",
    extraTitle: "هنوز سوال دارید؟",
    extraText:
      "فرم سمت چپ را پر کنید و با جزئیات برای ما بنویسید تا دقیق‌تر و سریع‌تر راهنمایی کنیم.",
  },
};

export default function SupportPage() {
  const { messages } = useLang();
  const t = messages.support as any;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<"technical" | "billing" | "other">(
    "technical"
  );
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name || !email || !message) {
      alert(t.alertRequired);
      return;
    }
    alert(t.alertSent);
    setMessage("");
  };

  return (
    <>
      {/* استایل فقط برای موبایل – لوگو کوچیک و همه چیز می‌آید بالا */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .support-page-main {
            padding-top: 12px !important;
            padding-bottom: 16px !important;
          }

          .support-card-wrapper {
            padding: 12px !important;
          }

          .support-logo-header {
            margin-top: 0 !important;
            margin-bottom: 8px !important;
            padding-bottom: 4px !important;
          }

          .support-logo-img {
            width: 120px !important;
            height: auto !important;
          }

          .support-title {
            margin-top: 4px !important;
            font-size: 22px !important;
          }

          .support-subtitle {
            margin-top: 4px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <main
        className="support-page-main"
        style={{
          minHeight: "100vh",
          background: "#0b1e3d",
          display: "flex",
          justifyContent: "center",
          padding: "32px 12px",
        }}
      >
        <div
          className="support-card-wrapper"
          style={{
            width: "clamp(320px, 1100px, 96vw)",
            background: "#f9fafb",
            borderRadius: 18,
            boxShadow: "0 18px 45px rgba(0, 0, 0, 0.25)",
            padding: 24,
          }}
        >
          {/* Header */}
          <header
            className="support-logo-header"
            style={{
              textAlign: "center",
              marginBottom: 24,
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: 16,
            }}
          >
            <Image
              src="/logo.png"
              alt="Sellova"
              width={180}
              height={120}
              className="support-logo-img"
            />
            <h1
              className="support-title"
              style={{
                marginTop: 8,
                fontSize: 26,
                fontWeight: 800,
                color: "#111827",
              }}
            >
              {t.title}
            </h1>
            <p
              className="support-subtitle"
              style={{
                marginTop: 8,
                color: "#6b7280",
                fontSize: 14,
                lineHeight: 1.9,
              }}
            >
              {t.subtitle}
            </p>
          </header>

          {/* Grid */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.1fr)",
              gap: 20,
            }}
          >
            {/* LEFT: form */}
            <article
              style={{
                background: "#ffffff",
                borderRadius: 14,
                border: "1px solid #e5e7eb",
                padding: 18,
              }}
            >
              <h2
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: "#111827",
                }}
              >
                {t.formTitle}
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 18,
                  lineHeight: 1.9,
                }}
              >
                {t.formDescription}
              </p>

              {/* name */}
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                    fontSize: 13,
                  }}
                />
              </div>

              {/* email */}
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                    fontSize: 13,
                  }}
                />
              </div>

              {/* topic */}
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  {t.topicLabel}
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value as any)}
                  style={{
                    width: "100%",
                    padding: "9px 10px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                    fontSize: 13,
                  }}
                >
                  <option value="technical">{t.topicTechnical}</option>
                  <option value="billing">{t.topicBilling}</option>
                  <option value="other">{t.topicOther}</option>
                </select>
              </div>

              {/* message */}
              <div style={{ marginBottom: 18 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  {t.messageLabel}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                    fontSize: 13,
                    resize: "vertical",
                    lineHeight: 1.8,
                  }}
                />
              </div>

              <button
                onClick={handleSend}
                style={{
                  width: "100%",
                  padding: "11px 0",
                  borderRadius: 999,
                  border: "none",
                  background: "#0ea5e9",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                {t.sendButton}
              </button>
            </article>

            {/* RIGHT: FAQ */}
            <article
              style={{
                background: "#ffffff",
                borderRadius: 14,
                border: "1px solid #e5e7eb",
                padding: 18,
              }}
            >
              <h2
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: "#111827",
                }}
              >
                {t.faqTitle}
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 18,
                  lineHeight: 1.9,
                }}
              >
                {t.faqIntro}
              </p>

              <div style={{ fontSize: 13, color: "#111827" }}>
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontWeight: 700, marginBottom: 6 }}>{t.faq1Q}</p>
                  <p style={{ lineHeight: 1.9 }}>{t.faq1A}</p>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontWeight: 700, marginBottom: 6 }}>{t.faq2Q}</p>
                  <p style={{ lineHeight: 1.9 }}>{t.faq2A}</p>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <p style={{ fontWeight: 700, marginBottom: 6 }}>{t.faq3Q}</p>
                  <p style={{ lineHeight: 1.9 }}>{t.faq3A}</p>
                </div>
              </div>

              <div
                style={{
                  marginTop: 18,
                  paddingTop: 12,
                  borderTop: "1px dashed #e5e7eb",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    marginBottom: 6,
                    fontSize: 13,
                    color: "#111827",
                  }}
                >
                  {t.extraTitle}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    lineHeight: 1.9,
                  }}
                >
                  {t.extraText}
                </p>
              </div>
            </article>
          </section>

          {/* استایل قبلی برای تک ستون شدن گرید در موبایل */}
          <style jsx>{`
            @media (max-width: 900px) {
              section {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </main>
    </>
  );
}