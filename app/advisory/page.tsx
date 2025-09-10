"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  // form state
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [message, setMessage] = useState("");
  const [audience, setAudience] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [product, setProduct] = useState("");
  const [styles, setStyles] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // file helpers
  const handleBrowse = () => inputRef.current?.click();

  function handleFilePick(f: File) {
    if (!f.type.startsWith("image/")) {
      alert("Please upload an image file (PNG, JPG, JPEG, WEBP).");
      return;
    }
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) handleFilePick(f);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) handleFilePick(f);
  }

  const canSubmit =
    !!file && message.trim() && audience.trim() && product.trim() && !submitting;

  async function onSubmit() {
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      // Demo only — connect to your API if needed
      // const fd = new FormData();
      // fd.append("image", file!);
      // fd.append("message", message);
      // fd.append("audience", audience);
      // fd.append("platform", platform);
      // fd.append("product", product);
      // fd.append("styles", styles);
      // await fetch("/api/consultation", { method: "POST", body: fd });

      alert("Submitted! (demo)");
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header (single big logo) */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-5 h-20 flex items-center">
          <a href="/" className="flex items-center">
            {/* 3x bigger logo */}
            <img src="/logo.png" alt="Sellova" className="h-20 w-20" />
          </a>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: uploader */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">
              Get advertising consultation with AI
            </h1>
            <p className="mt-3 text-neutral-600">
              Upload a product photo and answer a few questions to get
              recommendations for your ad.
            </p>

            <div
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              className="mt-6 rounded-2xl border border-blue-200 bg-white shadow-sm p-5"
            >
              {!preview ? (
                <div
                  onClick={handleBrowse}
                  className="aspect-[16/11] w-full cursor-pointer rounded-xl border-2 border-dashed border-neutral-300
                             flex flex-col items-center justify-center text-neutral-500 hover:bg-neutral-50 transition"
                >
                  <div className="text-4xl">⬆️</div>
                  <div className="mt-2 font-medium">Upload a photo</div>
                  <div className="text-xs mt-1 text-neutral-400">
                    PNG, JPG, JPEG, WEBP — up to ~10MB
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full rounded-xl border object-cover"
                    style={{ maxHeight: 360 }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setFile(null);
                      if (inputRef.current) inputRef.current.value = "";
                    }}
                    className="absolute top-2 right-2 rounded-md bg-white/90 hover:bg-white text-sm px-2 py-1 border shadow"
                  >
                    Remove
                  </button>
                </div>
              )}

              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleBrowse}
                  className="rounded-md px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
                >
                  Choose file
                </button>
                <span className="text-xs text-neutral-500">
                  or drag & drop into the box
                </span>
              </div>

              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  What message do you want the ad to convey?
                </label>
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Who is the target audience for the product?
                </label>
                <input
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="e.g., young moms, tech enthusiasts, students…"
                  className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Ad platform
                  </label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {[
                      "Instagram",
                      "TikTok",
                      "Facebook",
                      "YouTube",
                      "LinkedIn",
                      "Website",
                      "Other",
                    ].map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Type of product
                  </label>
                  <input
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="type your product"
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Any specific visual styles you prefer?
                </label>
                <textarea
                  value={styles}
                  onChange={(e) => setStyles(e.target.value)}
                  placeholder="e.g., minimal, bright colors, lifestyle, studio, funny tone…"
                  rows={3}
                  className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>

              <button
                type="button"
                disabled={!canSubmit}
                onClick={onSubmit}
                className={`w-full rounded-xl py-3 font-semibold text-white transition
                  ${canSubmit ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
              >
                {submitting ? "Submitting..." : "Get recommendation"}
              </button>

              <p className="text-xs text-neutral-400 text-center">
                *Demo UI — connect to your API at <code>/api/consultation</code>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
