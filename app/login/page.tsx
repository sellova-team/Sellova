"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Firebase
import { auth, db } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
    top: 0,
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
    marginTop: 80,
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
  tabBtn: {
    height: 50,
    borderRadius: 10,
    background: "transparent",
    color: "#0b1e3d",
    fontWeight: 800,
    fontSize: 18,
    border: "none",
    cursor: "pointer",
  },
  tabBtnActive: {
    background: "#0ea5e9",
    color: "#fff",
    fontSize: 18,
    fontWeight: 900,
  },
  label: {
    display: "block",
    fontSize: 18,
    color: "#334155",
    margin: "8px 4px 6px",
    fontWeight: 800,
  },
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
  forgot: {
    color: "#0ea5e9",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
    cursor: "pointer",
    fontWeight: 700,
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [securityWord, setSecurityWord] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleContinue = async () => {
    setError(null);

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    if (tab === "signup" && securityWord.length !== 5) {
      setError("Security word must be exactly 5 letters.");
      return;
    }

    try {
      setLoading(true);

      /** 🔵 SIGN UP */
      if (tab === "signup") {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCred.user;

        await setDoc(doc(db, "users", user.uid), {
          name,
          email,
          securityWord,
          role: "user",
          creditBalance: 30,
          monthlyQuota: 0,
          monthlyUsed: 0,
          lastReset: new Date().toISOString(),
        });

        localStorage.setItem("uid", user.uid);
        router.push("/dashboard");
        return;
      }

      /** 🔵 SIGN IN */
      if (tab === "signin") {
        const userCred = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        localStorage.setItem("uid", userCred.user.uid);
        router.push("/dashboard");
        return;
      }
    } catch (err: any) {
      setError("Firebase Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.page}>
      <div style={styles.logoWrap}>
        <Image src="/logo.png" alt="Sellova" width={210} height={100} priority />
      </div>

      <div style={styles.card}>
        {/* ⭐ Tabs */}
        <div style={styles.tabs}>
          <button
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

        {/* ⭐ Signup */}
        {tab === "signup" && (
          <>
            <label style={styles.label}>Name</label>
            <input
              style={styles.input}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label style={styles.label}>Security word (5 letters)</label>
            <input
              style={styles.input}
              placeholder="ex: apple"
              value={securityWord}
              maxLength={5}
              onChange={(e) => setSecurityWord(e.target.value.toLowerCase())}
            />
          </>
        )}

        {/* ⭐ Email */}
        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* ⭐ Password */}
        <label style={styles.label}>Password</label>
        <div style={{ position: "relative" }}>
          <input
            style={styles.input}
            type={showPass ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            style={{
              position: "absolute",
              right: 12,
              top: 15,
              cursor: "pointer",
              color: "#777",
              fontSize: 18,
            }}
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>

        <button onClick={handleContinue} disabled={loading} style={styles.primary}>
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

        {tab === "signin" && (
          <div style={styles.forgot} onClick={() => router.push("/forgot-password")}>
            Forgot password?
          </div>
        )}

        {/* ⭐ FIXED — Next.js Safe Navigation */}
        <div style={{ textAlign: "center", marginTop: 12 }}>
          <Link href="/" style={styles.backLink}>
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
