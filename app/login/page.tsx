"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const fontStack =
  'Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji","Segoe UI Emoji"';

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0b1e3d",
    display: "grid",
    placeItems: "center",
    padding: 24,
    fontFamily: fontStack,
    position: "relative",
  },
  logoWrap: {
    position: "absolute",
    top: 36,
  },
  card: {
    width: "100%",
    maxWidth: 520,
    background: "#ffffff",
    borderRadius: 16,
    boxShadow: "0 14px 40px rgba(0,0,0,.28)",
    padding: 20,
    marginTop: 40,
  },
  tabs: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
    background: "#eef3f7",
    borderRadius: 12,
    padding: 6,
    marginBottom: 16,
  },
  tabBtn: {
    height: 42,
    borderRadius: 10,
    background: "transparent",
    color: "#0b1e3d",
    fontWeight: 800,
    border: "none",
    cursor: "pointer",
  },
  tabBtnActive: {
    background: "#0ea5e9",
    color: "#fff",
  },
  label: {
    display: "block",
    fontSize: 13,
    color: "#334155",
    margin: "8px 4px 6px",
    fontWeight: 700,
  },
  input: {
    width: "100%",
    height: 44,
    borderRadius: 10,
    border: "1px solid #e2e8f0",
    padding: "0 12px",
    outline: "none",
    marginBottom: 10,
    fontFamily: fontStack,
  },
  primary: {
    width: "100%",
    height: 46,
    borderRadius: 12,
    border: "none",
    background: "#0ea5e9",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
    marginTop: 6,
    boxShadow: "0 6px 14px rgba(14,165,233,.35)",
  },
  backLink: {
    color: "#5b6475",
    fontSize: 13,
    textDecoration: "none",
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  return (
    <main style={styles.page}>
      {/* Logo */}
      <div style={styles.logoWrap}>
        <Image
          src="/logo.png"
          alt="Sellova"
          width={210}
          height={56}
          priority
          style={{ display: "block", height: "auto", width: "auto" }}
        />
      </div>

      {/* Card */}
      <div style={styles.card}>
        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            type="button"
            onClick={() => setTab("signin")}
            style={{
              ...styles.tabBtn,
              ...(tab === "signin" ? styles.tabBtnActive : {}),
            }}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => setTab("signup")}
            style={{
              ...styles.tabBtn,
              ...(tab === "signup" ? styles.tabBtnActive : {}),
            }}
          >
            Create account
          </button>
        </div>

        {tab === "signup" && (
          <>
            <label style={styles.label}>Name</label>
            <input style={styles.input} placeholder="Your name" />
          </>
        )}

        <label style={styles.label}>Email</label>
        <input style={styles.input} placeholder="you@example.com" />

        <label style={styles.label}>Password</label>
        <input style={styles.input} placeholder="••••••••" type="password" />

        {/* Continue → Dashboard */}
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          style={styles.primary}
        >
          Continue
        </button>

        <div style={{ textAlign: "center", marginTop: 12 }}>
          <a href="/" style={styles.backLink}>
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}