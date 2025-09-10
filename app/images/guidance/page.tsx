"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GuidancePage() {
  const router = useRouter();
  const [ack, setAck] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-5 h-14 flex items-center">
          <div className="flex items-center gap-2">
            {/* change /logo.png if your logo name differs */}
            <img src="/logo.png" alt="Sellova" className="h-7 w-7" />
            <span className="font-bold text-lg text-blue-600">Sellova</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Image Upload Guidance
          </h1>
          <p className="mt-2 text-neutral-500">
            Please review these do’s & don’ts before uploading product images.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border rounded-2xl shadow-sm p-5 md:p-8">
          {/* Guidance image */}
          <div className="mx-auto w-full max-w-[900px]">
            <img
              src="/guidance.png"
              alt="Image upload guidance"
              className="w-full h-auto rounded-xl border shadow-sm"
            />
          </div>

          {/* Actions */}
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 justify-center">
            <label className="inline-flex items-center gap-3 text-sm text-neutral-700">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={ack}
                onChange={(e) => setAck(e.target.checked)}
              />
              I’ve read and understood the image submission guidelines.
            </label>

            <button
              type="button"
              disabled={!ack}
              onClick={() => router.push("/images/upload")}
              className={`rounded-xl px-6 py-3 font-semibold text-white transition
                ${ack ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
            >
              Proceed to upload
            </button>
          </div>
        </div>

        {/* Footer helper (optional) */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="text-sm text-neutral-500 hover:text-neutral-700 underline underline-offset-4"
          >
            Back to dashboard
          </button>
        </div>
      </section>
    </main>
  );
}
