"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLang } from "../../lib/lang";
import { enMessages } from "../../locales/en";
import { faMessages } from "../../locales/fa";

/* =========================================
   Culture bundle config
========================================= */
type Culture = "arabic" | "european" | "turkish";
const CULTURE_LIST: Culture[] = ["arabic", "european", "turkish"];

/* =========================================
   Types
========================================= */
type Category = "women" | "men" | "kids";
type Platform =
  | "instagram"
  | "instagram-story"
  | "tiktok"
  | "youtube"
  | "facebook"
  | "facebook-cover"
  | "amazon-lifestyle" // 3 photos (30 credits)
  | "amazon-video-5" // 40 credits
  | "amazon-video-10"; // 50 credits

type OutputType = "photo" | "video";
type VideoLen = 5 | 10;
type OutputItem = { url: string; name: string };

/* =========================================
   Config
========================================= */
const TRY_COUNT = 1000; // auto-discover up to 1000 assets

const SIZE_MAP: Record<Platform, { w: number; h: number }> = {
  instagram: { w: 1080, h: 1080 },
  "instagram-story": { w: 1080, h: 1920 },
  tiktok: { w: 1080, h: 1920 },
  youtube: { w: 1280, h: 720 },
  facebook: { w: 1200, h: 630 },
  "facebook-cover": { w: 820, h: 312 },
  "amazon-lifestyle": { w: 2000, h: 2000 }, // Amazon lifestyle square
  "amazon-video-5": { w: 1920, h: 1080 }, // Amazon promo video 5s
  "amazon-video-10": { w: 1920, h: 1080 }, // Amazon promo video 10s
};

function assetPath(
  type: "face" | "pose" | "dress" | "background",
  cat?: string,
  idx?: number
) {
  if (type === "background") return `/assets/avatar/background/Background${idx}.png`;
  if (!cat || typeof idx === "undefined") return "";
  if (type === "face") return `/assets/avatar/face/${cat}/face${idx}.png`;
  if (type === "pose") return `/assets/avatar/pose/${cat}/pose${idx}.png`;
  if (type === "dress") return `/assets/avatar/dress/${cat}/dress${idx}.png`;
  return "";
}

function loadImage(srcOrFile: string | File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    if (typeof srcOrFile === "string") img.src = srcOrFile;
    else img.src = URL.createObjectURL(srcOrFile);
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
  });
}

async function testExists(url: string): Promise<boolean> {
  return new Promise<boolean>((res) => {
    if (!url) return res(false);
    const img = new Image();
    img.src = url;
    img.onload = () => res(true);
    img.onerror = () => res(false);
  });
}

/* =========================================
   Lighting / shading helpers (natural look)
========================================= */
function applyGlobalLighting(ctx: CanvasRenderingContext2D, w: number, h: number) {
  // Subtle vignette
  const g = ctx.createRadialGradient(
    w * 0.5,
    h * 0.42,
    Math.min(w, h) * 0.25,
    w * 0.5,
    h * 0.42,
    Math.max(w, h) * 0.66
  );
  g.addColorStop(0, "rgba(255,255,255,0.08)");
  g.addColorStop(1, "rgba(0,0,0,0.25)");
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();

  // Gentle warm soft-light
  ctx.save();
  ctx.globalCompositeOperation = "soft-light";
  ctx.fillStyle = "rgba(255,200,150,0.08)";
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

function drawChinShadow(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.filter = "blur(10px)";
  ctx.fillStyle = "rgba(0,0,0,0.95)";
  ctx.beginPath();
  ctx.ellipse(x + w * 0.5, y + h * 0.96, w * 0.28, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function tintDressSoft(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number) {
  const colors = [
    "hsla(210,18%,58%,0.35)", "hsla(15,20%,55%,0.35)", "hsla(125,18%,55%,0.35)",
    "hsla(195,18%,58%,0.35)","hsla(260,16%,58%,0.35)","hsla(35,22%,58%,0.35)",
    "hsla(0,10%,55%,0.35)", "hsla(280,14%,58%,0.35)","hsla(180,18%,58%,0.35)","hsla(340,16%,58%,0.35)",
  ];
  const color = colors[Math.abs(seed) % colors.length];
  ctx.save();
  ctx.globalCompositeOperation = "source-atop";
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

function applyCultureGrading(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  culture: Culture
) {
  ctx.save();
  if (culture === "arabic") {
    ctx.filter = "contrast(1.05) saturate(1.06) sepia(0.06) brightness(1.01)";
    ctx.globalCompositeOperation = "soft-light";
    ctx.fillStyle = "rgba(210,140,60,0.05)"; // natural bronze
  } else if (culture === "european") {
    ctx.filter = "contrast(1.04) saturate(0.96) hue-rotate(195deg) brightness(1.01)";
    ctx.globalCompositeOperation = "soft-light";
    ctx.fillStyle = "rgba(140,170,230,0.05)"; // cooler
  } else {
    ctx.filter = "contrast(1.05) saturate(1.05) sepia(0.03)";
    ctx.globalCompositeOperation = "soft-light";
    ctx.fillStyle = "rgba(255,170,150,0.05)"; // warm-modern
  }
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

/* =========================================
   Component
========================================= */
export default function AvatarPage(): JSX.Element {
  // ---------- STATE ----------
  const [selectedCategory, setSelectedCategory] = useState<Category>("women");
  const [faces, setFaces] = useState<string[]>([]);
  const [selectedFace, setSelectedFace] = useState<string | null>(null);

  const [useOwnAvatar, setUseOwnAvatar] = useState<boolean>(false);
  const [ownAvatarFile, setOwnAvatarFile] = useState<File | null>(null);
  const [productFile, setProductFile] = useState<File | null>(null);

  const [platform, setPlatform] = useState<Platform>("instagram");
  const [plan] = useState<string>("Basic");
  const [credits, setCredits] = useState<number>(500); // demo

  const [generating, setGenerating] = useState<boolean>(false);
  const [outputs, setOutputs] = useState<OutputItem[]>([]);

  const [prompt, setPrompt] = useState<string>("");
  const [outputType, setOutputType] = useState<OutputType>("photo"); // UI controls it implicitly for Amazon video
  const [videoLength, setVideoLength] = useState<VideoLen>(5);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // === ADDED: download current preview (canvas) ===
  const downloadPreview = () => {
    const c = canvasRef.current;
    if (!c) return;
    c.toBlob((b) => {
      if (!b) return;
      const url = URL.createObjectURL(b);
      handleDownload(url, `sellova_avatar_preview_${Date.now()}.png`);
      setTimeout(() => URL.revokeObjectURL(url), 1200);
    }, "image/png");
  };

  // ---------- i18n ----------
  const { messages } = useLang();
  const t = messages.avatar;

  // ---------- Required credits (by platform) ----------
  const requiredCredits = useMemo(() => {
    if (platform === "amazon-lifestyle") return 30; // 3 photos (premium quality)
    if (platform === "amazon-video-5") return 40;
    if (platform === "amazon-video-10") return 50;
    // Non-Amazon photos: 3 photos = 18 credits
    if (outputType === "photo") return 18;
    // Non-Amazon video (if you add later) — fallback:
    return videoLength === 10 ? 60 : 45;
  }, [platform, outputType, videoLength]);

  // ---------- LOAD FACES ----------
  useEffect(() => {
    let mounted = true;
    setFaces([]);
    setSelectedFace(null);

    const candidates = selectedCategory === "kids" ? ["kids", "kid", "children"] : [selectedCategory];

    const tryLoadOne = (folder: string, i: number) =>
      new Promise<void>((resolve) => {
        const p = assetPath("face", folder, i);
        if (!p) return resolve();
        const img = new Image();
        img.src = p;
        img.onload = () => {
          if (mounted) setFaces((prev) => (prev.includes(p) ? prev : [...prev, p]));
          resolve();
        };
        img.onerror = () => resolve();
      });

    (async () => {
      for (let i = 1; i <= TRY_COUNT; i++) {
        for (const folder of candidates) {
          // eslint-disable-next-line no-await-in-loop
          await tryLoadOne(folder, i);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [selectedCategory]);

  // ---------- UPLOADS ----------
  const onProductUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setProductFile(e.target.files[0]);
  };
  const onOwnAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setOwnAvatarFile(e.target.files[0]);
      setUseOwnAvatar(true);
      setSelectedFace(null);
    }
  };

  // ---------- DISCOVER ASSETS ----------
  const discoverAssets = async (cat: Category) => {
    const existingPoses: number[] = [];
    const existingDresses: number[] = [];
    const existingBackgrounds: number[] = [];

    for (let i = 1; i <= TRY_COUNT; i++) {
      const pPose = assetPath("pose", cat, i);
      if (pPose && (await testExists(pPose))) existingPoses.push(i);

      const pDress = assetPath("dress", cat, i);
      if (pDress && (await testExists(pDress))) existingDresses.push(i);

      const pBg = assetPath("background", undefined, i);
      if (pBg && (await testExists(pBg))) existingBackgrounds.push(i);
    }
    if (existingPoses.length === 0) existingPoses.push(1);
    if (existingDresses.length === 0) existingDresses.push(1);
    if (existingBackgrounds.length === 0) existingBackgrounds.push(1);

    return { existingPoses, existingDresses, existingBackgrounds };
  };

  // ---------- GENERATE ----------
  const generateOutputs = async () => {
    // Determine mode based on platform selection
    const isAmazonVideo5 = platform === "amazon-video-5";
    const isAmazonVideo10 = platform === "amazon-video-10";
    const isAmazonLifestyle = platform === "amazon-lifestyle";
    const forceVideo = isAmazonVideo5 || isAmazonVideo10;
    const localOutputType: OutputType = forceVideo ? "video" : "photo";
    const localVideoLen: VideoLen = isAmazonVideo10 ? 10 : 5;

    if (!productFile) {
      alert(t.alertNoProduct || "Please upload a product image.");
      return;
    }
    if (!useOwnAvatar && !selectedFace) {
      alert(t.alertNoFace || "Please select a face or upload your own avatar.");
      return;
    }
    if (credits < requiredCredits) {
      alert(
        (t.alertNoCreditsPrefix || "Insufficient credits. Required:") +
          ` ${requiredCredits}, ` +
          (t.alertNoCreditsSuffix || "Available: ") +
          credits
      );
      return;
    }

    setGenerating(true);
    setOutputs([]);

    const canvasSize = SIZE_MAP[platform];
    if (!canvasRef.current) canvasRef.current = document.createElement("canvas");
    const canvas = canvasRef.current!;
    canvas.width = canvasSize.w;
    canvas.height = canvasSize.h;
    const ctx = canvas.getContext("2d")!;
    const outArr: OutputItem[] = [];

    const { existingPoses, existingDresses, existingBackgrounds } = await discoverAssets(
      selectedCategory
    );

    const productImg = await loadImage(productFile);

    try {
      if (localOutputType === "photo") {
        // 3 photos bundle
        const cultures = CULTURE_LIST;
        for (const cul of cultures) {
          const poseIdx = existingPoses[Math.floor(Math.random() * existingPoses.length)];
          const dressIdx = existingDresses[Math.floor(Math.random() * existingDresses.length)];
          const bgIdx = existingBackgrounds[Math.floor(Math.random() * existingBackgrounds.length)];
          const faceSrc = useOwnAvatar && ownAvatarFile ? ownAvatarFile : (selectedFace as string);

          const [bgImg, poseImg, dressImg, faceImg] = await Promise.all([
            loadImage(assetPath("background", undefined, bgIdx)),
            loadImage(assetPath("pose", selectedCategory, poseIdx)),
            loadImage(assetPath("dress", selectedCategory, dressIdx)),
            loadImage(faceSrc),
          ]);

          // Background + global lighting
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
          applyGlobalLighting(ctx, canvas.width, canvas.height);

          // Body & dress
          ctx.drawImage(poseImg, 0, 0, canvas.width, canvas.height);
          ctx.drawImage(dressImg, 0, 0, canvas.width, canvas.height);
          tintDressSoft(ctx, canvas.width, canvas.height, dressIdx + bgIdx * 7);

          // Face (slight rotation)
          const faceW = Math.floor(canvas.width * 0.3);
          const faceH = Math.floor((faceImg.height / faceImg.width) * faceW);
          const faceX = Math.floor((canvas.width - faceW) / 2);
          const faceY = Math.floor(canvas.height * 0.18);
          const angle = ((poseIdx % 5) - 2) * (Math.PI / 180) * 1.6;
          ctx.save();
          ctx.translate(faceX + faceW / 2, faceY + faceH / 2);
          ctx.rotate(angle);
          ctx.drawImage(faceImg, -faceW / 2, -faceH / 2, faceW, faceH);
          ctx.restore();

          // Chin shadow
          drawChinShadow(ctx, faceX, faceY, faceW, faceH);

          // Product with soft shadow
          const prodMaxW = Math.floor(canvas.width * 0.35);
          const prodScaledH = Math.floor((productImg.height / productImg.width) * prodMaxW);
          const prodX = canvas.width - prodMaxW - 40;
          const prodY = canvas.height - prodScaledH - 40;
          ctx.save();
          ctx.shadowColor = "rgba(0,0,0,0.35)";
          ctx.shadowBlur = 18;
          ctx.shadowOffsetX = 6;
          ctx.shadowOffsetY = 8;
          ctx.drawImage(productImg, prodX, prodY, prodMaxW, prodScaledH);
          ctx.restore();

          // Culture grading
          applyCultureGrading(ctx, canvas.width, canvas.height, cul);

          // Optional prompt bar (short)
          if (prompt) {
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            const barW = Math.min(900, canvas.width - 28);
            ctx.fillRect(14, 14, barW, 52);
            ctx.fillStyle = "#fff";
            ctx.font = "16px sans-serif";
            const short = prompt.length > 150 ? `${prompt.slice(0, 147)}...` : prompt;
            ctx.fillText(short, 22, 46);
          }

          // Footer meta
          const isAmazon = isAmazonLifestyle;
          const footerText = isAmazon
            ? (t.footerAmazon || `${plan} • ${credits} credits • Amazon Lifestyle • 3 photos = 30 credits`)
            : (t.footerStandard || `${plan} • ${credits} credits • 3 photos = 18 credits`);

          ctx.fillStyle = "rgba(0,0,0,0.6)";
          ctx.fillRect(10, canvas.height - 56, Math.min(820, canvas.width - 20), 40);
          ctx.fillStyle = "#fff";
          ctx.font = "15px sans-serif";
          ctx.fillText(footerText, 18, canvas.height - 30);

          // Export
          // eslint-disable-next-line no-await-in-loop
          const blob = await new Promise<Blob | null>((res) => canvas.toBlob((b) => res(b), "image/png"));
          if (blob) {
            const url = URL.createObjectURL(blob);
            const name = isAmazon
              ? `sellova_amazon_lifestyle_${selectedCategory}_${cul}.png`
              : `sellova_photo_${selectedCategory}_${cul}.png`;
            outArr.push({ url, name });
          }
        }
      } else {
        // Amazon promo video preview frame (single image)
        const poseIdx = existingPoses[Math.floor(Math.random() * existingPoses.length)];
        const dressIdx = existingDresses[Math.floor(Math.random() * existingDresses.length)];
        const bgIdx = existingBackgrounds[Math.floor(Math.random() * existingBackgrounds.length)];
        const faceSrc = useOwnAvatar && ownAvatarFile ? ownAvatarFile : (selectedFace as string);

        const [bgImg, poseImg, dressImg, faceImg] = await Promise.all([
          loadImage(assetPath("background", undefined, bgIdx)),
          loadImage(assetPath("pose", selectedCategory, poseIdx)),
          loadImage(assetPath("dress", selectedCategory, dressIdx)),
          loadImage(faceSrc),
        ]);

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
        applyGlobalLighting(ctx, canvas.width, canvas.height);

        ctx.drawImage(poseImg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(dressImg, 0, 0, canvas.width, canvas.height);
        tintDressSoft(ctx, canvas.width, canvas.height, dressIdx + bgIdx * 7);

        const faceW = Math.floor(canvas.width * 0.28);
        const faceH = Math.floor((faceImg.height / faceImg.width) * faceW);
        const faceX = Math.floor(canvas.width * 0.15);
        const faceY = Math.floor(canvas.height * 0.18);
        const angle = ((poseIdx % 5) - 2) * (Math.PI / 180) * 1.6;

        ctx.save();
        ctx.translate(faceX + faceW / 2, faceY + faceH / 2);
        ctx.rotate(angle);
        ctx.drawImage(faceImg, -faceW / 2, -faceH / 2, faceW, faceH);
        ctx.restore();

        drawChinShadow(ctx, faceX, faceY, faceW, faceH);

        // Product larger prominence for video
        const prodMaxW = Math.floor(canvas.width * 0.38);
        const prodScaledH = Math.floor((productImg.height / productImg.width) * prodMaxW);
        const prodX = canvas.width - prodMaxW - 56;
        const prodY = canvas.height - prodScaledH - 60;

        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.35)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 6;
        ctx.shadowOffsetY = 8;
        ctx.drawImage(productImg, prodX, prodY, prodMaxW, prodScaledH);
        ctx.restore();

        // Promo bar
        ctx.fillStyle = "rgba(0,0,0,0.62)";
        ctx.fillRect(0, canvas.height - 92, canvas.width, 92);
        ctx.fillStyle = "#fff";
        ctx.font = "22px sans-serif";
        ctx.fillText(
          t.amazonVideoBanner ||
            `Amazon Promo Video Preview • ${localVideoLen}s • Conversion Optimized`,
          18,
          canvas.height - 44
        );

        // Export (single frame preview)
        const blob = await new Promise<Blob | null>((res) => canvas.toBlob((b) => res(b), "image/png"));
        if (blob) {
          const url = URL.createObjectURL(blob);
          const name = `sellova_amazon_video_preview_${selectedCategory}_${localVideoLen}s.png`;
          outArr.push({ url, name });
        }
      }
    } catch (e) {
      console.error(e);
      alert(t.alertGenericError || "Generation error. Please try again.");
    }

    setCredits((prev) => Math.max(0, prev - requiredCredits));
    setOutputs(outArr);
    setGenerating(false);
  };

  // ---------- Helpers ----------
  const handleDownload = (u: string, name: string) => {
    const a = document.createElement("a");
    a.href = u;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  // ---------- UI ----------
  return (
    <div className="page-root" data-testid="avatar-page">
      <style>{`
        :root {
          --primary: #2563eb;
          --bg: #f6f8fb;
          --card: #ffffff;
          --muted: #6b7280;
          --text: #111827;
          --line: #e5e7eb;
        }
        .page-root { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; max-width: 1180px; margin: 28px auto; padding: 20px; color: var(--text); }
        .header { display:flex; align-items:center; gap:16px; margin-bottom: 16px; }
        .logo { height: 200px; width: auto; object-fit:contain; display:block; }
        h1.title { font-size:20px; margin:0; font-weight:800; letter-spacing: -0.2px; }
        .layout { display:grid; grid-template-columns: 1fr 380px; gap:20px; align-items:start; }
        .panel { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding:14px; box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04); }
        .label { display:block; font-weight:700; margin-bottom:8px; }
        .muted { color: var(--muted); font-size:13px; }
        .controls-row { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
        .cat-row { display:flex; gap:10px; margin-bottom:12px; flex-wrap:wrap; }
        .faces-grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(96px,1fr)); gap:10px; max-height: 360px; overflow:auto; padding-right:6px; }
        .face-box { border:1px solid var(--line); border-radius:8px; padding:6px; display:flex; align-items:center; justify-content:center; background:#fff; cursor:pointer; transition: transform .12s ease, box-shadow .12s ease; }
        .face-box:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(15,23,42,0.06); }
        .face-box.selected { border: 3px solid var(--primary); }
        .face-img { width:100%; height:92px; object-fit:cover; border-radius:6px; display:block; }
        .btn { padding:10px 14px; border-radius:10px; border: none; background: #111827; color: #fff; cursor:pointer; font-weight:600; }
        .btn-primary { background: var(--primary); color: #fff; border-radius:10px; padding:10px 14px; border:none; font-weight:700; cursor:pointer; }
        .btn-disabled { opacity:0.6; cursor:not-allowed; }
        .outputs { display:flex; gap:12px; flex-wrap:wrap; margin-top:12px; }
        .output-card { border:1px solid var(--line); border-radius:10px; padding:8px; background:#fff; width:240px; box-shadow: 0 6px 18px rgba(15, 23, 42, 0.03); }
        .output-img { width:100%; height: 140px; display:block; border-radius:8px; object-fit:cover; }
        .aside { background: linear-gradient(180deg,#ffffff, #fbfdff); border:1px solid var(--line); border-radius:12px; padding:12px; }
        .preview-box { width:100%; height:360px; background:#fff; border-radius:10px; display:flex; align-items:center; justify-content:center; overflow:hidden; border:1px solid var(--line); }
        .small-muted { font-size:13px; color: var(--muted); }
        select, input[type="number"], input[type="file"], textarea { padding:8px 10px; border-radius:10px; border:1px solid var(--line); background:#fff; }
        @media (max-width: 980px) { .layout { grid-template-columns: 1fr; } .aside { order: -1; margin-bottom: 12px; } .preview-box { height:300px; } }
      `}</style>

      <header className="header">
        <img className="logo" src="/logo.png" alt="Sellova logo" />
        <div>
          <h1 className="title">{t.title}</h1>
          <div className="small-muted">{t.subtitle}</div>
        </div>
      </header>

      <div className="layout">
        {/* Left controls */}
        <section className="panel">
          <label className="label">{t.categoryLabel}</label>
          <div className="cat-row">
            {(["women","men","kids"] as Category[]).map(cat => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setUseOwnAvatar(false); setOwnAvatarFile(null); }}
                className={`btn ${selectedCategory===cat ? "btn-primary" : ""}`}
                type="button"
                aria-pressed={selectedCategory===cat}
              >
                {cat === "women" ? t.women : cat === "men" ? t.men : t.kids}
              </button>
            ))}
          </div>

          <label className="label">{t.faceSelectionLabel}</label>
          <div className="controls-row">
            <input type="file" accept="image/*" onChange={onOwnAvatarUpload} />
            <span className="small-muted">{t.faceUploadHelp}</span>
          </div>

          {!useOwnAvatar && (
            <div className="faces-grid" style={{marginTop:10}}>
              {faces.map((f) => (
                <div
                  key={f}
                  onClick={() => setSelectedFace(f)}
                  className={`face-box ${selectedFace===f ? "selected": ""}`}
                  role="button"
                  tabIndex={0}
                >
                  <img className="face-img" src={f} alt="face" />
                </div>
              ))}
            </div>
          )}

          <div className="controls-row" style={{marginTop:14, rowGap:10}}>
            <div>
              <label className="label">{t.platformLabel}</label>
              <select
                value={platform}
                onChange={(e)=>setPlatform(e.target.value as Platform)}
                title={t.platformHelp}
              >
                <option value="instagram">{t.platformInstagram}</option>
                <option value="instagram-story">{t.platformInstagramStory}</option>
                <option value="tiktok">{t.platformTiktok}</option>
                <option value="youtube">{t.platformYoutube}</option>
                <option value="facebook">{t.platformFacebook}</option>
                <option value="facebook-cover">{t.platformFacebookCover}</option>
                <option value="amazon-lifestyle">{t.platformAmazonLifestyle}</option>
                <option value="amazon-video-5">{t.platformAmazonVideo5}</option>
                <option value="amazon-video-10">{t.platformAmazonVideo10}</option>
              </select>
            </div>

            {(platform === "amazon-video-5" || platform === "amazon-video-10") ? (
              <div>
                <label className="label">{t.outputVideoLabel}</label>
                <div className="small-muted">{t.outputVideoHelp}</div>
              </div>
            ) : (
              <div>
                <label className="label">{t.outputTypeLabel}</label>
                <select
                  value={outputType}
                  onChange={(e)=>setOutputType(e.target.value as OutputType)}
                >
                  <option value="photo">{t.outputTypePhoto}</option>
                  <option value="video">{t.outputTypeVideo}</option>
                </select>
              </div>
            )}
          </div>

          <label className="label" style={{marginTop:12}}>{t.productImageLabel}</label>
          <input type="file" accept="image/*" onChange={onProductUpload} />

          <label className="label" style={{marginTop:12}}>{t.promptLabel}</label>
          <textarea
            value={prompt}
            onChange={(e)=>setPrompt(e.target.value)}
            placeholder={t.promptPlaceholder}
            style={{width:"100%", minHeight:96, resize:"vertical", padding:12, borderRadius:10, border:"1px solid var(--line)"}}
          />

          <div className="controls-row" style={{marginTop:16, justifyContent:"space-between"}}>
            <button className="btn" onClick={generateOutputs} disabled={generating}>
              {generating ? t.generatingButton : t.generateButton}
            </button>
            <div className="small-muted">
              {t.requiredCreditsPrefix} {requiredCredits}
              {platform === "amazon-lifestyle" && ` ${t.requiredCreditsAmazonLifestyle}`}
              {(platform === "amazon-video-5" || platform === "amazon-video-10") && ` ${t.requiredCreditsAmazonVideo}`}
            </div>
          </div>
        </section>

        {/* Right preview / outputs */}
        <aside className="aside">
          <div className="preview-box">
            <canvas
              ref={canvasRef}
              width={SIZE_MAP[platform].w}
              height={SIZE_MAP[platform].h}
              style={{maxWidth:"100%", height:"auto"}}
            />
          </div>

          {/* === ADDED: preview download button (no other changes) === */}
          <div style={{ marginTop: 8, textAlign: "right" }}>
            <button className="btn" onClick={downloadPreview}>
              {t.downloadButton}
            </button>
          </div>

          <div className="panel" style={{marginTop:12}}>
            <div className="label">{t.outputsLabel}</div>
            <div className="outputs">
              {outputs.map((o)=>(
                <div key={o.url} className="output-card">
                  <img className="output-img" src={o.url} alt={o.name} />
                  <div className="controls-row" style={{justifyContent:"space-between", marginTop:8}}>
                    <span
                      className="small-muted"
                      title={o.name}
                      style={{maxWidth:160, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}
                    >
                      {o.name}
                    </span>
                    <button className="btn" onClick={()=>handleDownload(o.url, o.name)}>
                      {t.downloadButton}
                    </button>
                  </div>
                </div>
              ))}
              {outputs.length===0 && (
                <div className="small-muted">{t.noOutputsYet}</div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
