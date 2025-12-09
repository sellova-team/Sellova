"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLang } from "../../lib/lang";

/* ===== Types ===== */
type Platform =
  | "instagram"
  | "instagram-story"
  | "tiktok"
  | "youtube"
  | "facebook"
  | "facebook-cover"
  | "amazon";

type PhotoStyle = "luxury" | "normal" | "vintage" | "minimal" | "bold" | "soft";

type BgKey =
  | "studio" | "store" | "home" | "beach" | "nature" | "forest" | "mountain" | "desert"
  | "cafe" | "kitchen" | "office" | "workshop" | "marble" | "concrete" | "wood" | "glass"
  | "city" | "night-city" | "campfire" | "abstract";

/* ===== Sizes ===== */
const SIZE_MAP: Record<Platform, { w: number; h: number; label: string }> = {
  instagram: { w: 1080, h: 1080, label: "Instagram (1:1 1080×1080)" },
  "instagram-story": { w: 1080, h: 1920, label: "Instagram Story (9:16 1080×1920)" },
  tiktok: { w: 1080, h: 1920, label: "TikTok (9:16 1080×1920)" },
  youtube: { w: 1280, h: 720, label: "YouTube (16:9 1280×720)" },
  facebook: { w: 1200, h: 630, label: "Facebook (1200×630)" },
  "facebook-cover": { w: 820, h: 312, label: "Facebook Cover (820×312)" },
  amazon: { w: 1600, h: 1600, label: "Amazon Product (1:1 1600×1600)" },
};

/* ===== BG Palettes ===== */
const BG_PALETTES: Record<BgKey, string> = {
  studio: "linear-gradient(180deg,#0e1420,#121a2b)",
  store: "linear-gradient(180deg,#121820,#1a2431)",
  home: "linear-gradient(180deg,#12151c,#19202b)",
  beach: "linear-gradient(180deg,#0d1a2a,#14344f)",
  nature: "linear-gradient(180deg,#0f1b13,#153120)",
  forest: "linear-gradient(180deg,#0c1a12,#12301f)",
  mountain: "linear-gradient(180deg,#0f1420,#1c2a3c)",
  desert: "linear-gradient(180deg,#2a1c10,#3b2a18)",
  cafe: "linear-gradient(180deg,#1a1412,#2a211d)",
  kitchen: "linear-gradient(180deg,#111519,#1b2026)",
  office: "linear-gradient(180deg,#0f1522,#182436)",
  workshop: "linear-gradient(180deg,#14161b,#222832)",
  marble: "radial-gradient(800px 400px at 40% -10%,#394150,#0f1524)",
  concrete: "linear-gradient(180deg,#1a1f26,#2b313a)",
  wood: "linear-gradient(180deg,#2a1c10,#3a2413)",
  glass: "linear-gradient(180deg,#0f1524,#0a1a2e)",
  city: "linear-gradient(180deg,#0b1220,#162238)",
  "night-city": "linear-gradient(180deg,#0b0f1c,#141a30)",
  campfire: "linear-gradient(180deg,#1a120e,#2a1b14)",
  abstract: "radial-gradient(900px 460px at 20% 0%,#1b2a5a,#091326)",
};

/* ===== Utils ===== */
function loadImage(srcOrFile: string | File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    if (typeof srcOrFile === "string") img.src = srcOrFile;
    else img.src = URL.createObjectURL(srcOrFile);
  });
}

function applyGlobalLighting(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const g = ctx.createRadialGradient(
    w * 0.5,
    h * 0.45,
    Math.min(w, h) * 0.3,
    w * 0.5,
    h * 0.5,
    Math.max(w, h) * 0.85
  );
  g.addColorStop(0, "rgba(255,255,255,0.06)");
  g.addColorStop(1, "rgba(0,0,0,0.28)");

  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();

  ctx.save();
  ctx.globalCompositeOperation = "soft-light";
  ctx.fillStyle = "rgba(255,210,170,0.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

function drawSoftShadow(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number
) {
  ctx.save();
  ctx.filter = "blur(14px)";
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.ellipse(
    x + w * 0.5,
    y + h,
    Math.max(8, w * 0.36),
    Math.max(4, h * 0.12),
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.restore();
}

function applyStyleGrading(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  style: PhotoStyle
) {
  ctx.save();
  ctx.globalCompositeOperation = "soft-light";

  if (style === "luxury") ctx.fillStyle = "rgba(240,190,90,0.08)";
  else if (style === "vintage") ctx.fillStyle = "rgba(180,140,100,0.10)";
  else if (style === "minimal") ctx.fillStyle = "rgba(255,255,255,0.06)";
  else if (style === "bold") ctx.fillStyle = "rgba(255,80,80,0.05)";
  else if (style === "soft") ctx.fillStyle = "rgba(200,220,255,0.05)";
  else ctx.fillStyle = "rgba(0,0,0,0.03)";

  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

/* ===== Component ===== */
export default function ProductStudio() {
  const { locale, messages } = useLang();

  const [platform, setPlatform] = useState<Platform>("instagram");
  const [style, setStyle] = useState<PhotoStyle>("luxury");
  const [bg, setBg] = useState<BgKey>("studio");
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [out, setOut] = useState<{ url: string; name: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  /* first preview */
  useEffect(() => {
    (async () => {
      const { w, h } = SIZE_MAP[platform];
      if (!canvasRef.current) canvasRef.current = document.createElement("canvas");
      const c = canvasRef.current!;
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d")!;

      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const o = off.getContext("2d")!;
      o.fillStyle = "#0d1626";
      o.fillRect(0, 0, w, h);
      (o as any).fillStyle = BG_PALETTES[bg];
      (o as any).fillRect(0, 0, w, h);
      ctx.drawImage(off, 0, 0);

      try {
        const img = await loadImage("/watch.png");
        const scale = Math.min(w / img.width, h / img.height);
        const dw = Math.floor(img.width * scale);
        const dh = Math.floor(img.height * scale);
        const dx = Math.floor((w - dw) / 2);
        const dy = Math.floor((h - dh) / 2);
        drawSoftShadow(
          ctx,
          dx,
          dy + Math.floor(dh * 0.92),
          dw,
          Math.floor(dh * 0.06)
        );
        ctx.drawImage(img, dx, dy, dw, dh);
      } catch {}

      applyGlobalLighting(ctx, w, h);
      applyStyleGrading(ctx, w, h, style);
      setOut({ url: c.toDataURL("image/png"), name: "preview_watch.png" });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeSuggestion = () => {
    const p = SIZE_MAP[platform].label;
    const styleWords: Record<PhotoStyle, string> = {
      luxury:
        "luxury lighting, glossy highlights, elegant mood, shallow depth of field",
      normal: "realistic well-balanced lighting, true colors",
      vintage: "warm vintage tones, gentle fade, subtle grain",
      minimal: "clean minimal look, high negative space, soft shadows",
      bold: "high-contrast bold look, crisp edges",
      soft: "soft dreamy lighting, pastel tones",
    };
    const bgWords: Record<BgKey, string> = {
      studio: "professional studio backdrop",
      store: "modern store shelf background",
      home: "cozy home background",
      beach: "beach background with soft bokeh",
      nature: "green nature background",
      forest: "forest background",
      mountain: "mountain background",
      desert: "desert sand background",
      cafe: "cafe background",
      kitchen: "kitchen counter background",
      office: "office desk background",
      workshop: "workshop background",
      marble: "light marble tabletop",
      concrete: "matte concrete backdrop",
      wood: "dark wood tabletop",
      glass: "glassy reflective surface",
      city: "urban city background",
      "night-city": "night city bokeh",
      campfire: "warm campfire glow",
      abstract: "abstract gradient background",
    };
    setPrompt(
      `High-end product photo on ${bgWords[bg]}, ${styleWords[style]}, correctly scaled inside ${p}, ultra-realistic shadows and natural lighting, no distortion.`
    );
  };

 const generate = async () => {
  // --- 1) هشدار به کاربر قبل از کم کردن کردیت ---
  const confirmCost = window.confirm(
    "This action will cost 5 credits. Do you want to continue?"
  );
  if (!confirmCost) return;

  // --- 2) گرفتن UID کاربر ---
  const uid = localStorage.getItem("uid");
  if (!uid) {
    alert("User not logged in.");
    return;
  }

  // --- 3) درخواست به API برای کم کردن کردیت ---
  const creditRes = await fetch("/api/credits/use", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uid,
      service: "simple_image", // ⭐ این صفحه عکس ساده است → 5 کردیت
    }),
  });

  const creditData = await creditRes.json();

  if (!creditData.ok) {
    alert(creditData.error || "Not enough credits.");
    return;
  }

  // اگر owner بود:
  if (creditData.newCredit === "unlimited") {
    console.log("Owner user – credit unchanged.");
  } else {
    console.log("New credit:", creditData.newCredit);
  }

  // --- 4) ادامه کار ساخت عکس ---
  setBusy(true);
  setOut(null);

  try {
    const { w, h } = SIZE_MAP[platform];
    if (!canvasRef.current) canvasRef.current = document.createElement("canvas");
    const c = canvasRef.current!;
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d")!;

    const off = document.createElement("canvas");
    off.width = w;
    off.height = h;
    const o = off.getContext("2d")!;
    o.fillStyle = "#0e1422";
    o.fillRect(0, 0, w, h);
    (o as any).fillStyle = BG_PALETTES[bg];
    (o as any).fillRect(0, 0, w, h);
    ctx.drawImage(off, 0, 0);

    const img = await loadImage(file ? file : "/watch.png");
    const scale = Math.min(w / img.width, h / img.height);
    const dw = Math.floor(img.width * scale);
    const dh = Math.floor(img.height * scale);
    const dx = Math.floor((w - dw) / 2);
    const dy = Math.floor((h - dh) / 2);
    drawSoftShadow(
      ctx,
      dx,
      dy + Math.floor(dh * 0.92),
      dw,
      Math.floor(dh * 0.06)
    );
    ctx.drawImage(img, dx, dy, dw, dh);

    applyGlobalLighting(ctx, w, h);
    applyStyleGrading(ctx, w, h, style);

    if (platform === "amazon") {
      ctx.save();
      ctx.globalCompositeOperation = "overlay";
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }

    const blob = await new Promise<Blob | null>((res) =>
      c.toBlob((b) => res(b), "image/png")
    );
    if (blob)
      setOut({
        url: URL.createObjectURL(blob),
        name: `sellova_${platform}.png`,
      });

  } catch (e) {
    console.error(e);
    alert("Generation failed. Please try again.");
  } finally {
    setBusy(false);
  }
};

  const download = () => {
    if (!out) return;
    const a = document.createElement("a");
    a.href = out.url;
    a.download = out.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const goAvatar = () => {
    window.location.href = "/avatar";
  };

  return (
    <div className="wrap" dir={locale === "fa" ? "rtl" : "ltr"}>
      <style>{`
        :root{
          --navy:#0a1124;
          --brand:#2d6df6;
          --ink:#0f172a;
          --muted:#6b7280;
          --line:#e5e7eb;
          --card:#ffffff;
          --cardH: 470px;
          --rightW: 430px;
        }
        *{box-sizing:border-box}
        .wrap{
          min-height:100vh;
          background: radial-gradient(1000px 600px at 18% 0%, #1b2a5a 0%, #0b1224 45%, #060b17 100%);
          padding: 18px 18px 34px;
          color:#e8eefc;
          display:flex;
          flex-direction:column;
          align-items:center;
          font-size:16px;
        }
        .top{
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:6px;
          margin-bottom:10px;
        }
        .logo{
          width:210px;
          height:auto;
          object-fit:contain;
          display:block;
          filter: drop-shadow(0 6px 18px rgba(0,0,0,.35));
        }
        .title{
          margin:0;
          font-weight:900;
          font-size:30px;
          opacity:.97;
          letter-spacing:.2px;
          text-align:center;
        }

        .grid{
          width:min(1180px,96vw);
          display:grid;
          grid-template-columns: 1fr var(--rightW);
          gap:18px;
          align-items:start;
        }

        .card{
          background:var(--card);
          border:1px solid var(--line);
          border-radius:16px;
          box-shadow:0 15px 42px rgba(3,8,20,.28);
          overflow:hidden;
          height:var(--cardH);
          display:flex;
          flex-direction:column;
        }

        .leftPanel{
          padding:14px 14px 10px;
          color:var(--ink);
          overflow:auto;
          font-size:16px;
        }
        .label{
          display:block;
          font-size:18px;
          font-weight:800;
          margin-bottom:6px;
          color:#111827;
        }
        .control{
          width:100%;
          padding:9px 11px;
          border:1px solid var(--line);
          border-radius:10px;
          background:#fff;
          color:#111827;
          outline:none;
          font-size:15px;
        }
        .control + .label{
          margin-top:9px;
        }
        .promptWrap{
          position:relative;
          margin-bottom:22px;
        }
        .suggest{
          position:absolute;
          bottom:-22px;
          right:0;
          padding:5px 10px;
          border-radius:8px;
          border:1px solid var(--line);
          background:#f3f4f6;
          color:#111827;
          cursor:pointer;
          font-weight:800;
          font-size:16px;
        }
        .btnRow{
          display:flex;
          gap:8px;
          margin-top:10px;
          flex-wrap:wrap;
        }
        .btn{
          padding:10px 15px;
          border:none;
          border-radius:11px;
          cursor:pointer;
          font-weight:5s00;
          letter-spacing:.2px;
          font-size:16px;
        }
        .btnPrimary{
          background:var(--brand);
          color:#fff;
        }
        .btnDark{
          background:#0b1224;
          color:#fff;
          border:1px solid rgba(255,255,255,.15);
        }
        .hint{
          font-size:11px;
          color:#6b7280;
          margin-top:8px;
          text-align:center;
        }

        .rightBox{
          padding:10px;
          background:linear-gradient(180deg,#0c1226,#0b1022);
          height:100%;
          display:flex;
        }
        .luxOuter{
          border-radius:16px;
          background:#102047;
          padding:8px;
          outline:2px solid rgba(255,255,255,.85);
          width:100%;
          height:100%;
        }
        .luxInner{
          border-radius:12px;
          padding:8px;
          background: radial-gradient(600px 300px at 50% -10%, rgba(145,110,60,.25), rgba(40,30,18,.35));
          height:100%;
        }
        .canvasHolder{
          border-radius:10px;
          overflow:hidden;
          width:100%;
          height:100%;
          background:#0d162e;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .previewImg{
          width:100%;
          height:100%;
          object-fit:contain;
          display:block;
        }

        @media (max-width:980px){
          .grid{
            grid-template-columns:1fr;
          }
          .card{
            height:auto;
          }
          .rightBox{
            min-height:360px;
          }
        }

        /* 🟢 موبایل: همه‌چیز ریزتر و جمع‌وجورتر */
       @media (max-width:640px){
  .wrap{
    padding: 6px 8px 18px; /* صفحه بیاد بالاتر */
    font-size:13px;
  }

  .top{
    gap: 0px;
    margin-top: 0px;
    margin-bottom: 4px; /* فاصله خیلی کم تا فرم */
  }

  .logo{
    width: 100px; /* دقیقا مثل صفحه‌ی ویدیو */
    height: auto;
    margin-top: -12px; /* کمی نزدیک‌تر به بالای صفحه */
  }

  .title{
    font-size: 20px; /* یک سایز ریزتر */
    margin-top: -4px; /* به لوگو نزدیک‌تر */
    margin-bottom: 4px; /* از فرم کمی فاصله بگیره */
    text-align: center;
  }

  .grid{
    width:100vw;
    gap:10px;
  }

  .card{
    border-radius:12px;
    box-shadow:0 10px 30px rgba(3,8,20,.26);
  }
  .leftPanel{
    padding:10px 10px 8px;
    font-size:13px;
  }
  .label{
    font-size:13px;
    margin-bottom:4px;
  }
  .control{
    padding:7px 9px;
    font-size:12px;
    border-radius:8px;
  }
  .btn{
    padding:8px 11px;
    font-size:12px;
    border-radius:9px;
  }
  .hint{
    font-size:10px;
  }
  .rightBox{
    padding:8px;
    min-height:260px;
  }
  .luxOuter{
    padding:6px;
    border-radius:14px;
  }
  .luxInner{
    padding:6px;
    border-radius:10px;
  }
}

        [dir="rtl"] .leftPanel{
          direction: rtl;
          text-align: right;
        }
        [dir="rtl"] .label{
          text-align:right;
        }
        [dir="rtl"] .control,
        [dir="rtl"] select,
        [dir="rtl"] textarea{
          text-align:right;
        }
        [dir="rtl"] .suggest{
          right:auto;
          left:0;
        }
      `}</style>

      <div className="top">
        <img className="logo" src="/logo.png" alt="Sellova" />
        <h1 className="title">{messages.generateImage.title}</h1>
      </div>

      <div className="grid">
        {/* LEFT: Controls */}
        <div className="card">
          <div className="leftPanel">
            <label className="label">
              {messages.generateImage.uploadLabel}
            </label>
            <input
              className="control"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />

            <label className="label">
              {messages.generateImage.styleLabel}
            </label>
            <select
              className="control"
              value={style}
              onChange={(e) => setStyle(e.target.value as PhotoStyle)}
            >
              <option value="luxury">Luxury</option>
              <option value="normal">Normal</option>
              <option value="vintage">Vintage / Traditional</option>
              <option value="minimal">Minimal</option>
              <option value="bold">Bold</option>
              <option value="soft">Soft</option>
            </select>

            <label className="label">
              {messages.generateImage.bgLabel}
            </label>
            <select
              className="control"
              value={bg}
              onChange={(e) => setBg(e.target.value as BgKey)}
            >
              {Object.keys(BG_PALETTES).map((k) => (
                <option key={k} value={k}>
                  {k.replace("-", " ")}
                </option>
              ))}
            </select>

            <label className="label">
              {messages.generateImage.platformLabel}
            </label>
            <select
              className="control"
              value={platform}
              onChange={(e) => setPlatform(e.target.value as Platform)}
            >
              {Object.entries(SIZE_MAP).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>

            <label className="label">
              {messages.generateImage.promptLabel}
            </label>
            <div className="promptWrap">
              <textarea
                className="control"
                style={{ minHeight: 85, resize: "vertical" }}
                placeholder={messages.generateImage.placeholder || ""}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                className="suggest"
                type="button"
                onClick={makeSuggestion}
              >
                {messages.generateImage.suggest}
              </button>
            </div>

            <div className="btnRow">
              <button
                className="btn btnPrimary"
                onClick={generate}
                disabled={busy}
              >
                {busy
                  ? messages.generateImage.generating || "Generating..."
                  : messages.generateImage.generate}
              </button>
              <button className="btn btnDark" onClick={goAvatar}>
                {messages.generateImage.createAvatar}
              </button>
              <button className="btn" onClick={download} disabled={!out}>
                {messages.generateImage.download}
              </button>
            </div>

            <div className="hint">
              {messages.generateImage.hint || ""}
            </div>
          </div>
        </div>

        {/* RIGHT: Preview */}
        <div className="card">
          <div className="rightBox">
            <div className="luxOuter">
              <div className="luxInner">
                <div className="canvasHolder">
                  {out ? (
                    <img
                      className="previewImg"
                      src={out.url}
                      alt={out.name}
                    />
                  ) : (
                    <img
                      className="previewImg"
                      src="/watch.png"
                      alt="sample watch"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}