"use client";

import { useRef, useState } from "react";

type StylePreset = "Aesthetic" | "Minimal" | "Bold" | "Luxury" | "Retro";

const SUGGESTIONS: Record<StylePreset, string[]> = {
  Aesthetic: [
    "clean product shot on white background, soft lighting, natural shadows, elegant sans-serif headline",
    "minimal ad layout, airy composition, subtle gradient backdrop, refined typography",
  ],
  Minimal: [
    "ultra minimal composition, monochrome palette, thin typography, crisp edges, grid layout",
    "flat background, single key light, high-key look, no props, lots of whitespace",
  ],
  Bold: [
    "high-contrast palette, dramatic shadows, macro detail highlight, punchy condensed headline",
    "vivid gradient, glassy reflections, neon accents, energetic layout",
  ],
  Luxury: [
    "premium mood, warm gold highlights, soft bokeh, dark glossy background, refined serif headline",
    "moody lighting, soft rim light, rich textures, elegant composition, upscale aesthetic",
  ],
  Retro: [
    "retro palette, grain texture, halftone detail, 80s ad vibe, bold condensed headline",
    "warm film tone, soft vignette, nostalgic typographic lockup, subtle paper texture",
  ],
};

export default function GenerateImagesPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [style, setStyle] = useState<StylePreset>("Luxury");
  const [prompt, setPrompt] = useState("");
  const [credits, setCredits] = useState(3);
  const [previewSrc, setPreviewSrc] = useState<string>("/watch.png"); // default sample
  const [isGenerating, setIsGenerating] = useState(false);

  function handleBrowse() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPreviewSrc(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleSuggest() {
    const pool = SUGGESTIONS[style];
    setPrompt(pool[Math.floor(Math.random() * pool.length)]);
  }

  async function handleGenerate() {
    if (credits <= 0) {
      alert("No free credits remaining.");
      return;
    }
    if (!previewSrc && !prompt.trim()) {
      alert("Please upload an image or enter a prompt.");
      return;
    }
    setIsGenerating(true);
    // TODO: Wire to your backend here
    await new Promise((r) => setTimeout(r, 1100));
    setIsGenerating(false);
    setCredits((c) => c - 1);
    alert("Mock generate complete. Connect your API to produce real images.");
  }

  return (
    <div className="min-h-screen bg-[#0B1220] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 flex items-center gap-4">
          {/* 4× larger logo (responsive) */}
          <img
            src="/logo.png"
            alt="Sellova"
            className="h-12 sm:h-20 lg:h-32 w-auto"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="text-lg sm:text-2xl lg:text-4xl font-extrabold tracking-tight">
            Sellova
          </span>

          <nav className="ml-auto flex items-center gap-4">
            <a
              href="/dashboard"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Dashboard
            </a>
            <a
              href="/upgrade"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              Upgrade
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        <section className="mx-auto w-full max-w-7xl px-6 py-10">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Generate promotional images with AI
            </h1>
            <p className="mt-2 text-white/70 max-w-2xl">
              Upload a product photo and/or provide a short prompt. We’ll compose a polished promotional visual tailored to your style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Controls */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              {/* Upload */}
              <button
                type="button"
                onClick={handleBrowse}
                className="w-full rounded-xl border border-dashed border-white/15 bg-white/5 hover:bg-white/10 transition px-6 py-12 text-center"
                aria-label="Upload an image"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className="font-semibold">Upload an image</div>
                <div className="text-sm text-white/60">Drag & drop or click to browse</div>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Style chips */}
              <div className="mt-6">
                <p className="mb-2 text-sm text-white/70">Style</p>
                <div className="flex flex-wrap gap-2">
                  {(["Aesthetic", "Minimal", "Bold", "Luxury", "Retro"] as StylePreset[]).map(
                    (s) => {
                      const active = s === style;
                      return (
                        <button
                          key={s}
                          onClick={() => setStyle(s)}
                          className={[
                            "px-3 py-1.5 rounded-lg text-sm border transition",
                            active
                              ? "border-blue-500 bg-blue-500/10 text-blue-300"
                              : "border-white/15 hover:border-white/30 text-white/80",
                          ].join(" ")}
                        >
                          {s}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Prompt + Suggest */}
              <div className="mt-6 flex gap-2">
                <input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter a prompt..."
                  className="flex-1 rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
                />
                <button
                  type="button"
                  onClick={handleSuggest}
                  className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition"
                >
                  Suggest
                </button>
              </div>

              {/* Generate */}
              <div className="mt-6">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || credits <= 0}
                  className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 disabled:cursor-not-allowed py-3 font-semibold transition"
                >
                  {isGenerating ? "Generating…" : "Generate"}
                </button>
                <p className="mt-2 text-xs text-white/60">
                  {credits} free credits remaining
                </p>
              </div>
            </div>

            {/* Right: Preview */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm text-white/70">Preview</p>
                <span className="text-xs text-white/50">
                  Static mock — connect your generator to update this area.
                </span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
                <img
                  src={previewSrc}
                  alt="Result preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/75">
                <span className="font-medium text-white/90">Tip:</span> upload a clean product shot
                and pair it with a short prompt (e.g. “premium mood, soft bokeh, warm gold accents,
                refined serif headline”).
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Sellova. All rights reserved.
          </p>
          <nav className="flex items-center gap-5 text-sm">
            <a href="/help" className="text-white/70 hover:text-white transition">
              Help
            </a>
            <a href="/contact" className="text-white/70 hover:text-white transition">
              Contact us
            </a>
            <a href="/settings" className="text-white/70 hover:text-white transition">
              Settings
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
