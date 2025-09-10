"use client";

import { useMemo, useState } from "react";

// ---------- Types ----------
type Platform = "Instagram" | "TikTok" | "Twitter" | "Facebook" | "LinkedIn";
type Style = "Aesthetic" | "Luxury" | "Minimal" | "Playful" | "Bold";

type Template = {
  id: string;
  caption: (p: { product: string; vibe: Style; cta: string }) => string;
  hashtags: (p: { product: string; vibe: Style }) => string[];
};

// ---------- Mock templates (client-side) ----------
const templates: Template[] = [
  {
    id: "lux-01",
    caption: ({ product, vibe, cta }) =>
      `Indulge in ${product} crafted for those who appreciate ${vibe.toLowerCase()} details. ${cta}`,
    hashtags: ({ product, vibe }) => [
      "#LuxuryLiving",
      "#ElevateYourSpace",
      `#${product.replace(/\s+/g, "")}`,
      `#${vibe}`,
      "#DesignInspiration",
      "#HomeDecor",
      "#InteriorGoals",
    ],
  },
  {
    id: "aesthetic-01",
    caption: ({ product, vibe, cta }) =>
      `${product} with a ${vibe.toLowerCase()} touch — minimal noise, maximum presence. ${cta}`,
    hashtags: ({ product, vibe }) => [
      "#Aesthetic",
      "#CalmSpaces",
      "#LessButBetter",
      `#${product.replace(/\s+/g, "")}`,
      `#${vibe}`,
      "#VisualPoetry",
    ],
  },
  {
    id: "bold-01",
    caption: ({ product, vibe, cta }) =>
      `Make it bold. Make it yours. ${product} for statement makers. ${cta}`,
    hashtags: ({ product, vibe }) => [
      "#BoldDesign",
      "#StatementPiece",
      "#OwnYourStyle",
      `#${product.replace(/\s+/g, "")}`,
      `#${vibe}`,
      "#DesignDrop",
    ],
  },
];

// ---------- Helpers ----------
const clamp = (min: number, v: number, max: number) => Math.max(min, Math.min(max, v));
const copy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

// ---------- Tiny UI atoms ----------
function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm text-gray-300 mb-1 block">{children}</label>;
}

function Select({
  value,
  onChange,
  options,
  ariaLabel,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  ariaLabel: string;
}) {
  return (
    <select
      aria-label={ariaLabel}
      className="w-full rounded-lg border border-gray-700 bg-black text-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
  readOnly = false,
}: {
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  rows?: number;
  readOnly?: boolean;
}) {
  return (
    <textarea
      className={`w-full rounded-lg border border-gray-700 bg-black text-white px-3 py-2 outline-none ${
        readOnly ? "opacity-80" : "focus:ring-2 focus:ring-sky-500"
      }`}
      rows={rows}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-800 px-2.5 py-1 text-xs text-gray-300">
      {children}
    </span>
  );
}

function Button({
  children,
  onClick,
  variant = "primary",
  disabled,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-sky-500 hover:bg-sky-600 text-white"
      : variant === "secondary"
      ? "bg-gray-800 hover:bg-gray-700 text-gray-100"
      : "bg-transparent hover:bg-gray-900 text-gray-300 border border-gray-700";
  const disabledCls = disabled ? "opacity-50 cursor-not-allowed" : "";
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${styles} ${disabledCls} ${className}`}>
      {children}
    </button>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl bg-[#0b0f14] border border-gray-800 p-6">{children}</div>;
}

// ---------- Main Page ----------
export default function CaptionsPage() {
  // form state
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [style, setStyle] = useState<Style>("Luxury");
  const [product, setProduct] = useState("hand-knotted rug");
  const [cta, setCta] = useState("Tap to explore the collection ✨");
  const [length, setLength] = useState<number>(160);

  // outputs
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [creditsLeft, setCreditsLeft] = useState(3);
  const [copyState, setCopyState] = useState<{ cap: "idle" | "ok"; tags: "idle" | "ok" }>({
    cap: "idle",
    tags: "idle",
  });

  // computed preview / limits
  const maxLength = useMemo(() => {
    switch (platform) {
      case "Twitter":
        return 280;
      case "Instagram":
      case "TikTok":
        return 2200;
      case "Facebook":
      case "LinkedIn":
      default:
        return 3000;
    }
  }, [platform]);

  const effectiveLength = clamp(60, length, maxLength);

  // generate
  const onGenerate = () => {
    if (creditsLeft <= 0) return;
    const t = templates[Math.floor(Math.random() * templates.length)];
    const cap = t.caption({ product, vibe: style, cta });
    const ht = t.hashtags({ product, vibe: style });

    // enforce rough length limit
    const clipped =
      cap.length > effectiveLength ? cap.slice(0, effectiveLength - 1).trimEnd() + "…" : cap;

    setCaption(clipped);
    setTags(ht);
    setCreditsLeft((c) => Math.max(0, c - 1));
  };

  // copy helpers
  const copyCaption = async () => {
    const ok = await copy(caption);
    if (ok) {
      setCopyState((s) => ({ ...s, cap: "ok" }));
      setTimeout(() => setCopyState((s) => ({ ...s, cap: "idle" })), 1200);
    }
  };
  const copyTags = async () => {
    const ok = await copy(tags.join(" "));
    if (ok) {
      setCopyState((s) => ({ ...s, tags: "ok" }));
      setTimeout(() => setCopyState((s) => ({ ...s, tags: "idle" })), 1200);
    }
  };

  return (
    <main className="min-h-screen bg-[#070b10] text-white">
      {/* Top bar with LARGE logo */}
      <header className="w-full px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* BIG logo (≈ 5–10x) */}
          <img src="/logo.png" alt="Sellova" className="h-28 sm:h-32 md:h-40 lg:h-48 w-auto select-none" />
          <Badge>Captions & Hashtags</Badge>
        </div>
        <div className="text-xs text-gray-400">
          {creditsLeft} free credits remaining
        </div>
      </header>

      {/* Title */}
      <section className="px-6 mt-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Generate <span className="text-sky-400">captions</span> &{" "}
            <span className="text-sky-400">hashtags</span> with AI
          </h1>
          <p className="mt-2 text-gray-400">
            Pick a platform and style, describe your product, and get a polished caption plus a set of
            relevant hashtags—ready to copy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 mt-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <SectionCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <FieldLabel>Platform</FieldLabel>
                <Select
                  value={platform}
                  onChange={(v) => setPlatform(v as Platform)}
                  options={["Instagram", "TikTok", "Twitter", "Facebook", "LinkedIn"]}
                  ariaLabel="Select platform"
                />
              </div>
              <div>
                <FieldLabel>Style</FieldLabel>
                <Select
                  value={style}
                  onChange={(v) => setStyle(v as Style)}
                  options={["Luxury", "Aesthetic", "Minimal", "Playful", "Bold"]}
                  ariaLabel="Select style"
                />
              </div>

              <div className="md:col-span-2">
                <FieldLabel>Product</FieldLabel>
                <input
                  className="w-full rounded-lg border border-gray-700 bg-black text-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="e.g., hand-knotted rug"
                />
              </div>

              <div className="md:col-span-2">
                <FieldLabel>Call to action</FieldLabel>
                <input
                  className="w-full rounded-lg border border-gray-700 bg-black text-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
                  value={cta}
                  onChange={(e) => setCta(e.target.value)}
                  placeholder="e.g., Tap to explore the collection ✨"
                />
              </div>

              <div className="md:col-span-2">
                <FieldLabel>
                  Target caption length{" "}
                  <span className="text-gray-500">(max {maxLength.toLocaleString()} chars)</span>
                </FieldLabel>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={60}
                    max={maxLength}
                    value={effectiveLength}
                    onChange={(e) => setLength(parseInt(e.target.value, 10))}
                    className="w-full accent-sky-500"
                  />
                  <Badge>{effectiveLength} chars</Badge>
                </div>
              </div>

              <div className="md:col-span-2 flex items-center gap-3">
                <Button
                  onClick={onGenerate}
                  variant="primary"
                  disabled={creditsLeft <= 0}
                  className="w-40"
                >
                  Generate
                </Button>
                <Badge>Credits: {creditsLeft}</Badge>
              </div>
            </div>
          </SectionCard>

          {/* Right: Live Preview */}
          <SectionCard>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Live preview</h2>
              <div className="flex items-center gap-2">
                <Badge>{platform}</Badge>
                <Badge>{style}</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <FieldLabel>Caption</FieldLabel>
                <TextArea value={caption || "Your generated caption will appear here…"} readOnly rows={4} />
                <div className="mt-2 flex items-center gap-2">
                  <Button onClick={copyCaption} variant="secondary" disabled={!caption}>
                    {copyState.cap === "ok" ? "Copied!" : "Copy caption"}
                  </Button>
                  <Badge>{caption.length} / {maxLength}</Badge>
                </div>
              </div>

              <div>
                <FieldLabel>Hashtags</FieldLabel>
                <TextArea
                  value={tags.length ? tags.map((t) => t.trim()).join(" ") : "#Hashtags #Will #Appear #Here"}
                  readOnly
                  rows={3}
                />
                <div className="mt-2 flex items-center gap-2">
                  <Button onClick={copyTags} variant="secondary" disabled={!tags.length}>
                    {copyState.tags === "ok" ? "Copied!" : "Copy hashtags"}
                  </Button>
                  <Badge>{tags.length} tags</Badge>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </section>
    </main>
  );
}
