"use client";

import { useMemo, useState } from "react";

// -----------------------------
// Types
// -----------------------------
type Platform = "Instagram" | "TikTok" | "YouTube" | "X (Twitter)";

type Competitor = {
  rank: number;
  name: string;
  followers: number;
  avgEngagement: number; // %
  bestPostHour: string;   // e.g. "21:00"
  topHashtags: string[];
  topKeywords: string[];
};

type HeatmapCell = {
  day: string;   // Mon..Sun
  hour: number;  // 0..23
  value: number; // 0..100 heat score
};

// -----------------------------
// Helpers (mock generators)
// -----------------------------
function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick<T>(arr: T[], n: number) {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < n && copy.length) {
    const i = rand(0, copy.length - 1);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const KEYWORDS_BANK = [
  "luxury", "handmade", "persian", "exclusive", "minimal",
  "vintage", "artisan", "premium", "limited", "authentic",
  "gift", "decor", "interior", "modern", "classic",
];
const HASHTAG_BANK = [
  "#LuxuryLiving", "#HomeDecor", "#InteriorDesign", "#Handmade",
  "#Persian", "#Artisan", "#Minimal", "#Premium", "#Vintage",
  "#Crafted", "#Design", "#Exclusive", "#Trending", "#Style",
];

// Create 10 mock competitors based on a keyword & platform
function createCompetitors(keyword: string, platform: Platform): Competitor[] {
  const base = keyword ? keyword.replace(/\s+/g, "-").toLowerCase() : "brand";
  const items: Competitor[] = [];
  for (let i = 1; i <= 10; i++) {
    const followers = rand(10, 900) * 1000;
    const engagement = parseFloat((Math.random() * 5 + 1).toFixed(2));
    const hour = rand(8, 23);
    items.push({
      rank: i,
      name: `${base}-${platform.toLowerCase()}-${i}`,
      followers,
      avgEngagement: engagement,
      bestPostHour: `${hour.toString().padStart(2, "0")}:00`,
      topHashtags: pick(HASHTAG_BANK, 4),
      topKeywords: pick(KEYWORDS_BANK, 4),
    });
  }
  return items.sort((a, b) => b.avgEngagement - a.avgEngagement);
}

// Create a weekly posting-time heatmap
function createHeatmap(): HeatmapCell[] {
  const cells: HeatmapCell[] = [];
  for (const day of DAYS) {
    for (let h = 0; h < 24; h++) {
      // Make evenings slightly hotter for realism
      const bias = h >= 18 && h <= 23 ? 25 : 0;
      cells.push({ day, hour: h, value: rand(0, 75) + bias });
    }
  }
  return cells;
}

// Export helpers (simple CSVs in-browser)
function exportCSV(filename: string, rows: string[][]) {
  const csv = rows.map(r => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// -----------------------------
// Component
// -----------------------------
export default function Page() {
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [keyword, setKeyword] = useState("");
  const [product, setProduct] = useState("");
  const [topCompetitorsInput, setTopCompetitorsInput] = useState("");
  const [postingNotes, setPostingNotes] = useState("");

  const [analyzed, setAnalyzed] = useState(false);

  const competitors = useMemo(
    () => (analyzed ? createCompetitors(keyword || product, platform) : []),
    [analyzed, keyword, product, platform]
  );

  const heatmap = useMemo(() => (analyzed ? createHeatmap() : []), [analyzed]);

  const topKeywords = useMemo(() => {
    if (!analyzed) return [];
    const all = competitors.flatMap(c => c.topKeywords);
    const counts: Record<string, number> = {};
    all.forEach(k => (counts[k] = (counts[k] || 0) + 1));
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);
  }, [analyzed, competitors]);

  const topHashtags = useMemo(() => {
    if (!analyzed) return [];
    const all = competitors.flatMap(c => c.topHashtags);
    const counts: Record<string, number> = {};
    all.forEach(h => (counts[h] = (counts[h] || 0) + 1));
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);
  }, [analyzed, competitors]);

  const handleAnalyze = () => setAnalyzed(true);
  const handleReset = () => {
    setAnalyzed(false);
    setKeyword("");
    setProduct("");
    setTopCompetitorsInput("");
    setPostingNotes("");
  };

  const exportCompetitors = () => {
    const header = [
      "Rank",
      "Name",
      "Followers",
      "Avg Engagement %",
      "Best Post Hour",
      "Top Hashtags",
      "Top Keywords",
    ];
    const rows = competitors.map(c => [
      String(c.rank),
      c.name,
      String(c.followers),
      String(c.avgEngagement),
      c.bestPostHour,
      c.topHashtags.join(" "),
      c.topKeywords.join(" "),
    ]);
    exportCSV("competitors.csv", [header, ...rows]);
  };

  const exportKeywords = () => {
    exportCSV(
      "keywords.csv",
      [["Keyword", "Count"], ...topKeywords.map(([k, n]) => [k, String(n)])]
    );
  };

  const exportHashtags = () => {
    exportCSV(
      "hashtags.csv",
      [["Hashtag", "Count"], ...topHashtags.map(([h, n]) => [h, String(n)])]
    );
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Header / Logo */}
      <header className="px-6 pt-10 pb-6 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="text-5xl md:text-6xl font-black text-sky-400">Sellova</div>
        </div>
      </header>

      {/* Title */}
      <section className="px-6 mb-8">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold">
          Competitor <span className="text-sky-400">Analysis</span>
        </h1>
        <p className="text-center text-zinc-400 mt-2">
          Enter your product/keyword and (optionally) competitor names. We’ll simulate top 10 competitors,
          posting-time heatmap, trending hashtags and keywords. Later we can plug in real APIs.
        </p>
      </section>

      {/* Inputs */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Keyword */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <label className="block text-sm font-semibold mb-2">Keyword</label>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. luxury rug"
              className="w-full p-3 rounded-xl bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <p className="text-xs text-zinc-400 mt-2">
              Use a market/topic keyword. It influences mock ranking & tags.
            </p>
          </div>

          {/* Product */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <label className="block text-sm font-semibold mb-2">Your Product</label>
            <input
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="e.g. Persian handmade carpet"
              className="w-full p-3 rounded-xl bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <p className="text-xs text-zinc-400 mt-2">
              Optional but helpful for name/hashtag generation.
            </p>
          </div>

          {/* Platform */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <label className="block text-sm font-semibold mb-2">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value as Platform)}
              className="w-full p-3 rounded-xl bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option>Instagram</option>
              <option>TikTok</option>
              <option>YouTube</option>
              <option>X (Twitter)</option>
            </select>
            <p className="text-xs text-zinc-400 mt-2">
              Affects naming and timing hints in the mock data.
            </p>
          </div>

          {/* Top 5 Competitors */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg md:col-span-2">
            <label className="block text-sm font-semibold mb-2">Top 5 Competitors (optional)</label>
            <textarea
              value={topCompetitorsInput}
              onChange={(e) => setTopCompetitorsInput(e.target.value)}
              rows={3}
              placeholder="One per line…"
              className="w-full p-3 rounded-xl bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <p className="text-xs text-zinc-400 mt-2">
              If provided, we’ll blend them into the mock ranking.
            </p>
          </div>

          {/* Posting Times Notes */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <label className="block text-sm font-semibold mb-2">Posting time notes (optional)</label>
            <input
              value={postingNotes}
              onChange={(e) => setPostingNotes(e.target.value)}
              placeholder="e.g. Evenings & weekends perform best"
              className="w-full p-3 rounded-xl bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={handleAnalyze}
            className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 font-semibold transition"
          >
            Analyze
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-2xl bg-zinc-700 hover:bg-zinc-600 font-semibold transition"
          >
            Reset
          </button>
          {analyzed && (
            <div className="text-xs text-zinc-400 ml-2">
              Showing simulated results — ready to hook to real APIs later.
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="px-6 max-w-7xl mx-auto mt-10 pb-20">
        {!analyzed ? (
          <div className="bg-zinc-800/60 rounded-2xl p-10 text-center text-zinc-400">
            No analysis yet. Press <span className="text-sky-400 font-semibold">Analyze</span> to generate mock insights.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Competitors table (spans 2 cols) */}
            <div className="lg:col-span-2 bg-zinc-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Top competitors (mock)</h3>
                <button
                  onClick={exportCompetitors}
                  className="text-sm px-3 py-2 rounded-xl bg-zinc-700 hover:bg-zinc-600"
                >
                  Export CSV
                </button>
              </div>
              <div className="overflow-auto rounded-xl border border-zinc-700">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-900/60">
                    <tr className="[&>th]:px-4 [&>th]:py-3 text-left text-zinc-300">
                      <th>#</th>
                      <th>Name</th>
                      <th>Followers</th>
                      <th>Engagement %</th>
                      <th>Best hour</th>
                      <th>Top hashtags</th>
                      <th>Top keywords</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((c) => (
                      <tr key={c.rank} className="border-t border-zinc-700/60 hover:bg-zinc-900/30">
                        <td className="px-4 py-3">{c.rank}</td>
                        <td className="px-4 py-3 font-semibold">{c.name}</td>
                        <td className="px-4 py-3">{c.followers.toLocaleString()}</td>
                        <td className="px-4 py-3">{c.avgEngagement}%</td>
                        <td className="px-4 py-3">{c.bestPostHour}</td>
                        <td className="px-4 py-3">{c.topHashtags.join(" ")}</td>
                        <td className="px-4 py-3">{c.topKeywords.join(", ")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Heatmap */}
            <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Posting-time heatmap (mock)</h3>
              <div className="grid grid-cols-7 gap-1 text-[10px]">
                {DAYS.map((d) => (
                  <div key={d} className="text-center text-zinc-400 mb-1">{d}</div>
                ))}
                {heatmap
                  .sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day) || a.hour - b.hour)
                  .map((cell, i) => {
                    // Value 0..100 => shade
                    const shade = Math.min(100, Math.max(0, cell.value));
                    const bg = `hsla(200, 90%, ${100 - shade / 1.3}%, 1)`; // blue-ish
                    return (
                      <div
                        key={i}
                        title={`${cell.day} ${cell.hour}:00 – score ${cell.value}`}
                        className="h-6 rounded"
                        style={{ background: bg }}
                      />
                    );
                  })}
              </div>
              {postingNotes && (
                <p className="text-xs text-zinc-400 mt-3">
                  Note: <span className="text-zinc-300">{postingNotes}</span>
                </p>
              )}
            </div>

            {/* Keywords */}
            <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Top keywords (mock)</h3>
                <button
                  onClick={exportKeywords}
                  className="text-sm px-3 py-2 rounded-xl bg-zinc-700 hover:bg-zinc-600"
                >
                  Export CSV
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {topKeywords.map(([k, n]) => (
                  <span key={k} className="px-3 py-1 rounded-full bg-zinc-700 text-sm">
                    {k} <span className="text-zinc-400">×{n}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Hashtags */}
            <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Top hashtags (mock)</h3>
                <button
                  onClick={exportHashtags}
                  className="text-sm px-3 py-2 rounded-xl bg-zinc-700 hover:bg-zinc-600"
                >
                  Export CSV
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {topHashtags.map(([h, n]) => (
                  <span key={h} className="px-3 py-1 rounded-full bg-zinc-700 text-sm">
                    {h} <span className="text-zinc-400">×{n}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
