"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // DEMO: فقط مسیردهی؛ بعداً لاجیک واقعی اضافه می‌کنیم
    if (mode === "signup") {
      if (!name || !email || !password) {
        alert("Please fill name, email and password");
        return;
      }
    } else {
      if (!email || !password) {
        alert("Please fill email and password");
        return;
      }
    }
    router.push("/dashboard");
  };

  const onGoogle = () => {
    // DEMO: اینجا بعداً next-auth/google صدا می‌زنیم
    // signIn("google", { callbackUrl: "/dashboard" })
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Tabs */}
        <div className="flex rounded-xl overflow-hidden mb-8 border border-gray-200">
          <button
            onClick={() => setMode("signin")}
            className={`w-1/2 py-3 text-sm font-semibold ${
              mode === "signin"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`w-1/2 py-3 text-sm font-semibold ${
              mode === "signup"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Create account
          </button>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {mode === "signin" ? "Welcome back" : "Join Sellova"}
        </h1>

        {/* Google */}
        <button
          onClick={onGoogle}
          className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition mb-5"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.7 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 18.4-7.3 19.8-16.8.2-1.1.3-2.3.3-3.7 0-1.1-.1-2.1-.5-3z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.9 16 19.1 14 24 14c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"/>
            <path fill="#4CAF50" d="M24 44c5.3 0 10.1-2 13.7-5.3l-6.3-5.2C29.4 36 26.9 37 24 37c-5.4 0-9.9-3.3-11.6-8l-6.6 5C8.1 39.4 15.5 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 4-5 7-11.3 7-4.9 0-9.1-2-11.7-5.1l-6.6 5C8.1 39.4 15.5 44 24 44c10 0 18.4-7.3 19.8-16.8.2-1.1.3-2.3.3-3.7 0-1.1-.1-2.1-.5-3z"/>
          </svg>
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px bg-gray-200 w-full" />
          <span className="text-xs text-gray-400">or</span>
          <div className="h-px bg-gray-200 w-full" />
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 transition"
          >
            {mode === "signin" ? "Continue" : "Create account"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          By continuing you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
}
