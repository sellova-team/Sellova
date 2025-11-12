// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "grid",
        placeItems: "center",
        padding: "clamp(12px, 3vw, 24px)",
      }}
    >
      {/* ظرف واکنش‌گرا: روی موبایل باریک، روی دسکتاپ تا 900px */}
      <div
        style={{
          width: "clamp(320px, 92vw, 900px)",
          display: "grid",
          gap: "clamp(14px, 2.5vw, 24px)",
          textAlign: "center",
        }}
      >
        {/* تیتر */}
        <h1
          style={{
            margin: 0,
            fontWeight: 800,
            lineHeight: 1.2,
            fontSize: "clamp(20px, 4.8vw, 36px)",
          }}
        >
          All solutions for AI advertising
        </h1>

        {/* عکس (تمام عرض ظرف) */}
        <div style={{ position: "relative" }}>
          <Image
            src="/homepage.png"
            alt="Sellova"
            width={900}        // مرجع برای Next؛ پایین خودش 100% می‌شود
            height={500}
            priority
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 12,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* دکمه Login: مستطیل تمام‌عرض زیر عکس */}
        <div style={{ width: "100%", marginTop: "4px" }}>
          <Link
            href="/login"
            style={{
              display: "block",                     // کل عرض را می‌گیرد
              width: "100%",
              textDecoration: "none",
              textAlign: "center",
              background: "#0ea5e9",
              color: "#fff",
              fontWeight: 800,
              // اندازه‌ها واکنش‌گرا با clamp
              fontSize: "clamp(16px, 2.4vw, 20px)",
              padding: "clamp(14px, 2.6vw, 18px) 0",
              borderRadius: 10,                     // اگر کاملاً صاف می‌خوای: 0 بگذار
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
