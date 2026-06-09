"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/lang";

export default function SupportPage() {

  const { messages, locale } = useLang();

  console.log("LANG CHECK:", locale, messages?.support?.title);
  console.log("locale:", locale);
  console.log("support:", messages.support);
  const t = messages.support;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<"technical" | "billing" | "other">("technical");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name || !email || !message) {
      alert(t.alertRequired);
      return;
    }
    alert(t.alertSent);
    setMessage("");
  };

  console.log("SUPPORT FILE LOADED")
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1e3d",
        display: "flex",
        justifyContent: "center",
        padding: "32px 12px",
      }}
    >
      <div
        style={{
          width: "clamp(320px, 1100px, 96vw)",
          background: "#f9fafb",
          borderRadius: 18,
          boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
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
          <Image src="/logo.png" alt="Sellova" width={180} height={120} />
          <h1
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

        <style jsx>{`
          @media (max-width: 900px) {
            section {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 768px) {

    /* خود لوگو */
    header img {
      width: 80x !important;
      height: auto !important;
      margin-top: 0!important;
    }

    /* فاصله هدر */
    header {
      margin-top: 0 !important;
      padding-top: 0 !important;
      margin-bottom: 6px !important;
    }

    /* تیتر Support نزدیک‌تر شود */
    header h1 {
      margin-top: 2px !important;
      font-size: 20px !important;
    }

    /* توضیح زیر تیتر نزدیک شود */
    header p {
      margin-top: 2px !important;
      font-size: 12px !important;
      liner-height: 1.5 !important;
    }
  }

        `}</style>
      </div>
    </main>
  );
}