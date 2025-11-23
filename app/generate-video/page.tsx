"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLang } from "../../lib/lang";

/* ---------- Types ---------- */
type PlatformOpt =
  | "instagram-post"
  | "instagram-reels"
  | "tiktok"
  | "youtube"
  | "custom"
  | "amazon";
type LengthOpt = "5" | "10";
type MotionOpt = "static" | "pan" | "orbit-slow" | "orbit-medium";
type LightOpt =
  | "studio-softbox"
  | "three-point"
  | "warm-sunset"
  | "cool-studio"
  | "dramatic-spot";
type EffectOpt =
  | "auto"
  | "none"
  | "smoke-soft"
  | "sparks-subtle"
  | "steam"
  | "bokeh"
  | "light-streaks";

/* ---------- Component ---------- */
export default function GenerateVideoPage() {
  const { locale, messages } = useLang();

  // platform + length (برای کرِدیت)
  const [platform, setPlatform] = React.useState<PlatformOpt>("instagram-post");
  const [length, setLength] = React.useState<LengthOpt>("5");

  // کنترل‌های حرکت، نور، افکت
  const [motion, setMotion] = React.useState<MotionOpt>("orbit-slow");
  const [lighting, setLighting] = React.useState<LightOpt>("studio-softbox");
  const [effects, setEffects] = React.useState<EffectOpt>("auto");

  // پرامپت
  const [prompt, setPrompt] = React.useState("");

  // ✅ آدرس ویدیو برای دانلود
  const [videoUrl, setVideoUrl] = React.useState<string | null>(null);

  const downloadVideo = () => {
    const url = videoUrl ?? "/demo.mp4";
    const a = document.createElement("a");
    a.href = url;
    a.download = `sellova_${Date.now()}.mp4`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  // محاسبهٔ کردیت‌ها
  const creditCost = React.useMemo(() => {
    const isAmazon = platform === "amazon";
    if (isAmazon) {
      return length === "5" ? 35 : 45;
    } else {
      return length === "5" ? 20 : 30;
    }
  }, [platform, length]);

  // پیشنهاد پرامپت
  const makeSuggestion = () => {
    const parts: string[] = [];
    const lenText = length === "5" ? "5-second" : "10-second";
    const platText =
      platform === "instagram-post"
        ? "Instagram post (1:1)"
        : platform === "instagram-reels"
        ? "Instagram reels (9:16)"
        : platform === "tiktok"
        ? "TikTok (9:16)"
        : platform === "youtube"
        ? "YouTube (16:9)"
        : platform === "amazon"
        ? "Amazon main image video (1:1)"
        : "custom size";

    parts.push(`Create a ${lenText} product promo video for ${platText}.`);

    const motionMap: Record<MotionOpt, string> = {
      static: "static camera",
      pan: "subtle lateral camera pan",
      "orbit-slow": "slow orbital camera move around the product",
      "orbit-medium": "medium-speed orbital camera move around the product",
    };
    parts.push(motionMap[motion]);

    const lightMap: Record<LightOpt, string> = {
      "studio-softbox":
        "studio softbox lighting, soft shadows, controlled highlights",
      "three-point":
        "cinematic three-point lighting (key, fill, rim), natural shadow falloff",
      "warm-sunset": "warm sunset tone, golden highlights, gentle contrast",
      "cool-studio":
        "cool neutral studio lighting, color-true, even exposure",
      "dramatic-spot":
        "dramatic spotlight with vignette, high contrast, glossy reflections",
    };
    parts.push(lightMap[lighting]);

    const fxMap: Record<EffectOpt, string> = {
      auto:
        "tasteful automatic micro-effects based on product category (e.g., soft smoke for luxury, bokeh for cosmetics)",
      none: "no cinematic effects",
      "smoke-soft": "subtle soft smoke behind the product",
      "sparks-subtle": "very subtle metallic sparks",
      steam: "gentle warm steam",
      bokeh: "creamy background bokeh",
      "light-streaks": "subtle light streaks for premium motion",
    };
    parts.push(fxMap[effects]);

    parts.push(
      "physically-plausible reflections, parallax-correct shadows, micro-contrast, no geometry warping."
    );

    setPrompt(parts.join(" "));
  };

  return (
    <main className="pg" dir={locale === "fa" ? "rtl" : "ltr"}>
      {/* ===== Header / Logo ===== */}
      <header className="hdr" aria-label="Sellova brand">
      <div className="logoBox">
        <Image
          src="/logo.png"
          alt="Sellova"
          width={300}
          height={200}
          priority
          className="logo"
        />
        </div>
      </header>

      {/* ===== Title ===== */}
      <h1 className="title">{messages.generateVideo.title}</h1>

      {/* ===== Two-column layout ===== */}
      <section className="grid">
        {/* ---------- Left: Form card ---------- */}
        <article className="card" aria-labelledby="formTitle">
          <h2 id="formTitle" className="visuallyHidden">
            Video generator form
          </h2>

          {/* Upload area */}
          <div className="uploadWrap">
            <div className="uploadBox" role="group" aria-label="Upload image">
              <div className="uploadIcon" aria-hidden>
                ⬆️
              </div>
              <div className="uploadTitle">
                {messages.generateVideo.uploadTitle}
              </div>
              <div className="actionsRow">
                <Link
                  href="/avatar"
                  className="btn btnGhost"
                  aria-label="Choose an avatar"
                >
                  {messages.generateVideo.chooseAvatar}
                </Link>
                <span className="muted">
                  {messages.generateVideo.orContinue}
                </span>
              </div>
            </div>
          </div>

          {/* Video size / platform */}
          <div className="field">
            <label htmlFor="platform" className="label">
              {messages.generateVideo.platformLabel}
            </label>
            <select
              id="platform"
              className="select"
              value={platform}
              onChange={(e) => setPlatform(e.target.value as PlatformOpt)}
            >
              <option value="instagram-post">Instagram Post (1:1)</option>
              <option value="instagram-reels">Instagram Reels (9:16)</option>
              <option value="tiktok">TikTok (9:16)</option>
              <option value="youtube">YouTube (16:9)</option>
              <option value="custom">Custom</option>
              <option value="amazon">Amazon (1:1)</option>
            </select>
            <p className="hint">{messages.generateVideo.sizeHint}</p>
          </div>

          {/* Video length */}
          <div className="field">
            <span className="label">
              {messages.generateVideo.lengthLabel}
            </span>
            <div className="seg">
              <label className="segItem">
                <input
                  type="radio"
                  name="len"
                  value="5"
                  checked={length === "5"}
                  onChange={() => setLength("5")}
                />
                <span>{messages.generateVideo.seconds5}</span>
              </label>
              <label className="segItem">
                <input
                  type="radio"
                  name="len"
                  value="10"
                  checked={length === "10"}
                  onChange={() => setLength("10")}
                />
                <span>{messages.generateVideo.seconds10}</span>
              </label>
            </div>
          </div>

          {/* Motion */}
          <div className="field">
            <label className="label">
              {messages.generateVideo.cameraLabel}
            </label>
            <select
              className="select"
              value={motion}
              onChange={(e) => setMotion(e.target.value as MotionOpt)}
            >
              <option value="static">Static</option>
              <option value="pan">Subtle pan</option>
              <option value="orbit-slow">Orbit (slow)</option>
              <option value="orbit-medium">Orbit (medium)</option>
            </select>
          </div>

          {/* Lighting */}
          <div className="field">
            <label className="label">Lighting</label>
            <select
              className="select"
              value={lighting}
              onChange={(e) => setLighting(e.target.value as LightOpt)}
            >
              <option value="studio-softbox">Studio softbox</option>
              <option value="three-point">Three-point</option>
              <option value="warm-sunset">Warm sunset</option>
              <option value="cool-studio">Cool studio</option>
              <option value="dramatic-spot">Dramatic spot</option>
            </select>
          </div>

          {/* Effects */}
          <div className="field">
            <label className="label">
              {messages.generateVideo.effectsLabel}
            </label>
            <select
              className="select"
              value={effects}
              onChange={(e) => setEffects(e.target.value as EffectOpt)}
            >
              <option value="auto">Auto</option>
              <option value="none">None</option>
              <option value="smoke-soft">Soft smoke</option>
              <option value="sparks-subtle">Subtle sparks</option>
              <option value="steam">Steam</option>
              <option value="bokeh">Bokeh</option>
              <option value="light-streaks">Light streaks</option>
            </select>
            <p className="hint">{messages.generateVideo.effectsHint}</p>
          </div>

          {/* Prompt + Suggest */}
          <div className="field">
            <label htmlFor="prompt" className="label">
              {messages.generateVideo.promptLabel}
            </label>
            <div className="promptRow">
              <textarea
                id="prompt"
                className="textarea"
                placeholder={messages.generateVideo.promptPlaceholder}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                type="button"
                className="btn btnLight"
                aria-label="Suggest prompt"
                onClick={makeSuggestion}
              >
                {messages.generateVideo.suggest}
              </button>
            </div>
          </div>

          {/* Plan / credits */}
          <div className="metaRow">
            <div className="muted">
              {messages.generateVideo.plan}:{" "}
              <b>{messages.generateVideo.planBasic}</b>
            </div>
            <div className="muted">
              {messages.generateVideo.creditsLeft}: <b>23</b>
            </div>
          </div>

          {/* Dynamic credit cost line */}
          <div className="metaRow" style={{ marginTop: 6 }}>
            <div className="muted">
              {messages.generateVideo.creditCostLabel}:&nbsp;
              <b>{creditCost}</b>
            </div>
            <div className="muted">
              {platform === "amazon"
                ? messages.generateVideo.videoTypeAmazon
                : messages.generateVideo.videoTypeStandard}
              &nbsp;•&nbsp;{length}s
            </div>
          </div>

          {/* Generate */}
          <div className="genRow">
            <button type="button" className="btn btnPrimary btnBlock">
              {messages.generateVideo.generate}
            </button>
          </div>
        </article>

        {/* ---------- Right: Preview card ---------- */}
        <aside className="card previewCard" aria-labelledby="previewTitle">
          <h2 id="previewTitle" className="visuallyHidden">
            Video preview
          </h2>

          <div className="previewFrame">
            <Image
              src="/video.png"
              alt="Generated video preview"
              width={520}
              height={640}
              className="previewImg"
              priority
            />
          </div>

          <p className="previewCaption">
            {messages.generateVideo.previewCaption}
          </p>

          <div className="genRow">
            <button
              type="button"
              className="btn btnGhost btnBlock"
              onClick={downloadVideo}
            >
              {locale === "fa" ? "دانلود ویدیو" : "Download video"}
            </button>
          </div>
        </aside>
      </section>

      {/* ===== Styles ===== */}
      <style jsx>{`
        .pg {
          min-height: 100vh;
          padding: 12px 16px 28px;
          background: #0b1e3d;
          color: #111;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-family: Inter, "Segoe UI", system-ui, -apple-system, Roboto,
            Arial, sans-serif;
        }
        .hdr {
          margin-top: 6px;
          margin-bottom: 6px;
          display: flex;
          justify-content: center;
        }
        .logo {
          display: block;
          width: auto;
          height: auto;
          image-rendering: -webkit-optimize-contrast;
          filter: drop-shadow(0 1px 0.5px rgba(0, 0, 0, 0.35));
        }
        .title {
          color: #fff;
          text-align: center;
          font-size: 30px;
          font-weight: 700;
          margin: 20px 0 120px;
          letter-spacing: 0.2px;
          position: relative;
          z-index: 2;
        }
        .grid {
          width: 100%;
          max-width: 1160px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-top: 0;
          transform: translateY(-10px);
        }
        @media (min-width: 980px) {
          .grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            transform: translateY(-95px);
          }
        }
        .card {
          background: #fff;
          border: 1px solid #111;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06),
            0 6px 18px rgba(0, 0, 0, 0.06);
        }
        .uploadWrap {
          padding: 6px 2px 8px;
        }
        .uploadBox {
          border: 2px dashed #222;
          border-radius: 12px;
          padding: 18px 12px 14px;
          text-align: center;
          background: #fafcff;
        }
        .uploadIcon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          margin: 0 auto 8px;
          background: #e9f2ff;
          color: #0b57d0;
          font-size: 18px;
          border: 1px solid #bcd6ff;
        }
        .uploadTitle {
          font-weight: 700;
          color: #0b1e3d;
          margin-bottom: 6px;
        }
        .actionsRow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 2px;
          flex-wrap: wrap;
        }

        .field {
          margin-top: 14px;
        }
        .label {
          display: block;
          font-size: 13px;
          color: #111;
          margin-bottom: 6px;
          font-weight: 700;
        }
        .hint {
          margin-top: 6px;
          font-size: 12px;
          color: #444;
        }

        .select {
          width: 100%;
          height: 40px;
          border-radius: 10px;
          border: 1px solid #111;
          background: #fff;
          color: #111;
          padding: 0 12px;
          outline: none;
        }
        .select:focus {
          box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.15);
          border-color: #0b57d0;
        }

        .seg {
          display: inline-flex;
          gap: 8px;
        }
        .segItem {
          border: 1px solid #111;
          border-radius: 999px;
          padding: 6px 10px;
          cursor: pointer;
          user-select: none;
          background: #fff;
          color: #111;
          font-size: 13px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .segItem input {
          appearance: none;
          width: 12px;
          height: 12px;
          border: 2px solid #0b57d0;
          border-radius: 50%;
        }
        .segItem input:checked {
          background: #0b57d0;
        }
        .segItem:hover {
          background: #f7faff;
        }

        .promptRow {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
          align-items: start;
        }
        .textarea {
          min-height: 92px;
          resize: vertical;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #111;
          color: #111;
          background: #fff;
          outline: none;
          line-height: 1.5;
        }
        .textarea:focus {
          box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.15);
          border-color: #0b57d0;
        }

        .btn {
          height: 40px;
          border-radius: 10px;
          padding: 0 14px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.05s ease, box-shadow 0.15s ease;
        }
        .btn:active {
          transform: translateY(1px);
        }
        .btnGhost {
          background: #fff;
          color: #0b57d0;
          border: 1px solid #0b57d0;
        }
        .btnGhost:hover {
          background: #f0f6ff;
        }
        .btnLight {
          background: #f5f7fb;
          color: #111;
          border: 1px solid #111;
        }
        .btnLight:hover {
          background: #eef2f8;
        }
        .btnPrimary {
          background: #1483ff;
          color: #fff;
          border: 1px solid #0b57d0;
          box-shadow: 0 6px 18px rgba(20, 131, 255, 0.25);
        }
        .btnPrimary:hover {
          background: #0f74e6;
        }
        .btnBlock {
          width: 100%;
        }

        .metaRow {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          margin-top: 10px;
          color: #111;
          font-size: 13px;
        }
        .muted {
          color: #333;
        }
        .genRow {
          margin-top: 10px;
        }

        .previewCard {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #fff;
          border: 1px solid #111;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
        }
        .previewFrame {
          border: 1px solid #111;
          border-radius: 12px;
          padding: 12px;
          background: #fff;
          display: grid;
          place-items: center;
          min-height: 420px;
        }
        .previewImg {
          width: min(360px, 46vw);
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          background: #111;
          display: block;
        }
        .previewCaption {
          color: #ffffff;
          font-size: 13px;
          text-align: center;
          margin-top: 4px;
        }

        .visuallyHidden {
          position: absolute !important;
          clip: rect(1px, 1px, 1px, 1px);
          padding: 0;
          border: 0;
          height: 1px;
          width: 1px;
          overflow: hidden;
          white-space: nowrap;
          clip-path: inset(50%);
          margin: -1px;
        }

        /* RTL tweaks */
        .pg[dir="rtl"] .field,
        .pg[dir="rtl"] .label,
        .pg[dir="rtl"] .hint {
          text-align: right;
        }
        .pg[dir="rtl"] .actionsRow {
          flex-direction: row-reverse;
        }
        .pg[dir="rtl"] .promptRow {
          direction: rtl;
          grid-template-columns: 1fr auto;
        }

        /* ============= Mobile only ============= */
       @media (max-width: 768px) {
  .pg {
    padding: 4px 10px 18px;
  }

  .hdr {
    margin-top: 0;
    margin-bottom: 0;
  }

  /* 👇 کوچیک کردن لوگو با scale و چسباندن به بالای صفحه */
  .logoBox {
    transform: scale(0.28); /* حدوداً ۳–۴ برابر کوچیک‌تر */
    transform-origin: top center;
    margin-top: 0;
    margin-bottom: 4px;
  }

  .title {
    font-size: 22px;
    margin: 6px 0 10px; /* تایتل نزدیک لوگو */
  }

  .grid {
    margin-top: 0;
    gap: 14px;
    transform: translateY(0);
  }

  .card {
    padding: 10px;
    border-radius: 12px;
  }

  .previewFrame {
    min-height: 260px;
    padding: 8px;
  }

  .previewImg {
    max-width: 260px;
    width: 100%;
  }

  .metaRow {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-size: 12px;
  }

  .btn {
    height: 36px;
    font-size: 12px;
    padding: 0 10px;
  }

  .select {
    height: 36px;
    font-size: 12px;
    padding: 0 10px;
  }

  .label {
    font-size: 12px;
    margin-bottom: 4px;
  }

  .field {
    margin-top: 10px;
  }
}
      `}</style>
    </main>
  );
}
