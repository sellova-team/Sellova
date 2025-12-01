"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

// فونت جدید خواناتر و زیباتر
const fontStack =
  'IRANSans, Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';

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
    top: 12,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 5,
  },
  card: {
    width: "100%",
    maxWidth: 520,
    background: "#ffffff",
    borderRadius: 16,
    boxShadow: "0 14px 40px rgba(0,0,0,.28)",
    padding: 24, // کمی بزرگ‌تر
    marginTop: 40,
  },
  tabs: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
    background: "#eef3f7",
    borderRadius: 12,
    padding: 6,
    marginBottom: 20,
  },

  // 🔵 دکمه‌های بزرگ‌تر + فونت 18
  tabBtn: {
    height: 50,
    borderRadius: 10,
    background: "transparent",
    color: "#0b1e3d",
    fontWeight: 800,
    fontSize: 18,
    border: "none",
    cursor: "pointer",
    padding: "0 6px",
    touchAction: "manipulation",
  },

  tabBtnActive: {
    background: "#0ea5e9",
    color: "#fff",
    fontSize: 18,
    fontWeight: 900,
  },

  // 🔵 متن لیبل بزرگ‌تر و خواناتر
  label: {
    display: "block",
    fontSize: 18,
    color: "#334155",
    margin: "8px 4px 6px",
    fontWeight: 800,
  },

  // 🔵 ورودی‌ها بزرگ‌تر
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    border: "1px solid #e2e8f0",
    padding: "0 14px",
    outline: "none",
    marginBottom: 14,
    fontFamily: fontStack,
    fontSize: 17,
  },

  // 🔵 دکمه اصلی کمی بزرگ‌تر و خواناتر
  primary: {
    width: "100%",
    height: 52,
    borderRadius: 12,
    border: "none",
    background: "#0ea5e9",
    color: "#fff",
    fontWeight: 900,
    fontSize: 18,
    cursor: "pointer",
    marginTop: 6,
    boxShadow: "0 6px 14px rgba(14,165,233,.35)",
  },

  backLink: {
    color: "#5b6475",
    fontSize: 16,
    textDecoration: "none",
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const handleContinue = async () => {
  setError(null);

  if (!email || !password) {
    setError("Please enter email and password.");
    return;
  }

  try {
    setLoading(true);

    let endpoint = tab === "signup"
      ? "/api/auth/register"
      : "/api/auth/signin";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.ok) {
      setError(data.error || "Failed to continue.");
      return;
    }

    router.push("/dashboard");
  } catch (err: any) {
    console.error(err);
    setError("Server connection error.");
  } finally {
    setLoading(false);
  }
};

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
            onClick={() => {
              setTab("signin");
              setError(null);
            }}
            style={{
              ...styles.tabBtn,
              ...(tab === "signin" ? styles.tabBtnActive : {}),
            }}
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={() => {
              setTab("signup");
              setError(null);
            }}
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
            <input
              style={styles.input}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}

        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        <label style={styles.label}>Password</label>
        <input
          style={styles.input}
          placeholder="••••••••"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={handleContinue}
          style={styles.primary}
          disabled={loading}
        >
          {loading
            ? "Please wait..."
            : tab === "signin"
            ? "Sign in"
            : "Create account"}
        </button>

        {error && (
          <div
            style={{
              color: "#b91c1c",
              fontSize: 15,
              marginTop: 10,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            {error}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 12 }}>
          <a href="/" style={styles.backLink}>
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}