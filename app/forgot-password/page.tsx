"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    padding: 24,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 900,
    marginBottom: 14,
    color: "#0f172a",
    textAlign: "center",
  },
  label: {
    display: "block",
    fontSize: 16,
    color: "#334155",
    margin: "8px 4px 6px",
    fontWeight: 700,
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    border: "1px solid #e2e8f0",
    padding: "0 14px",
    outline: "none",
    marginBottom: 12,
    fontFamily: fontStack,
    fontSize: 16,
  },
  primary: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    border: "none",
    background: "#0ea5e9",
    color: "#fff",
    fontWeight: 900,
    fontSize: 18,
    cursor: "pointer",
    marginTop: 8,
    boxShadow: "0 6px 14px rgba(14,165,233,.35)",
  },
  link: {
    color: "#5b6475",
    fontSize: 15,
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [securityWord, setSecurityWord] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleReset = async () => {
    setError(null);
    setSuccess(null);

    if (!email || !securityWord || !newPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (securityWord.length !== 5) {
      setError("Security word must be exactly 5 characters.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/reset-with-security", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          securityWord,
          newPassword,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (!data.ok) {
        setError(data.error || "Failed to reset password.");
        return;
      }

      setSuccess("Password changed successfully. You can now sign in.");
    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
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
        <div style={styles.title}>Reset password</div>

        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        <label style={styles.label}>Security word (5 letters)</label>
        <input
          style={styles.input}
          placeholder="Your 5-letter word"
          value={securityWord}
          maxLength={5}
          onChange={(e) => setSecurityWord(e.target.value.toLowerCase())}
        />

        <label style={styles.label}>New password</label>
        <div style={{ position: "relative" }}>
          <input
            style={styles.input}
            placeholder="••••••••"
            type={showPass ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span
            style={{
              position: "absolute",
              right: 12,
              top: 13,
              cursor: "pointer",
              color: "#777",
              fontSize: 18,
            }}
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>

        {error && (
          <div
            style={{
              color: "#b91c1c",
              fontSize: 14,
              marginTop: 8,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            style={{
              color: "#15803d",
              fontSize: 14,
              marginTop: 8,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            {success}
          </div>
        )}

        <button
          style={styles.primary}
          onClick={handleReset}
          disabled={loading}
        >
          {loading ? "Please wait..." : "Reset password"}
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: 14,
          }}
        >
          <span
            style={styles.link}
            onClick={() => router.push("/login")}
          >
            ← Back to login
          </span>
        </div>
      </div>
    </main>
  );
}
