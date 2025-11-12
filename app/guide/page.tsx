"use client";

import { useLang } from "../../lib/lang";

export default function GuidePage() {
  const { locale } = useLang(); // می‌فهمیم زبان الان en هست یا fa

  return (
    <div
      style={{
        backgroundColor: "#0a1a3f",
        minHeight: "100vh",
        margin: 0,
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "20px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <img
  src={locale === "fa" ? "/guidance-fa.png" : "/guidance.png"}
  alt="Upload guide"
  style={{
    width: "80%", // 👈 عرض رو کمتر کردیم
    maxWidth: "700px", // 👈 بیشتر از این بزرگ نشه
    borderRadius: "8px",
    display: "block",
    margin: "0 auto", // 👈 وسط‌چینش کردیم
  }}
/>
      </div>
    </div>
  );
}