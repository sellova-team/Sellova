// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        padding: "clamp(12px, 3vw, 24px)",
      }}
    >
      <div
        style={{
          width: "clamp(320px, 92vw, 850px)",
          textAlign: "center",
          display: "grid",
          gap: "clamp(18px, 2.5vw, 28px)",
        }}
      >
        {/* تیتر */}
        <h1
          style={{
            margin: 0,
            fontWeight: 800,
            lineHeight: 1.25,
            fontSize: "clamp(22px, 4vw, 34px)",
          }}
        >
          AI Solutions for Advertising
        </h1>

        {/* عکس کوچیک‌تر (دیگه کل صفحه نیست) */}
        <div
          style={{
            width: "clamp(260px, 65vw, 500px)",
            margin: "0 auto",
          }}
        >
          <Image
            src="/homepage.png"
            alt="Sellova"
            width={500}
            height={400}
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

        {/* دکمه Login → بزرگ، واضح، حرفه‌ای */}
        <div style={{ marginTop: "4px" }}>
          <Link
            href="/login"
            style={{
              display: "block",
              width: "clamp(200px, 40vw, 280px)",
              margin: "0 auto",
              textDecoration: "none",
              textAlign: "center",
              background: "#0ea5e9",
              color: "#fff",
              fontWeight: 800,
              fontSize: "clamp(18px, 2.4vw, 22px)",
              padding: "clamp(14px, 2.6vw, 18px) 0",
              borderRadius: 12,
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
