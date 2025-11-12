"use client";

import { useMemo, useState } from "react";
import { useLang } from "../../lib/lang";

/** -----------------------
 * Advisory & Analysis Page
 * ----------------------*/

type Platform = "Instagram" | "TikTok" | "YouTube" | "Facebook";

type Competitor = {
  handle: string;
  name: string;
  followers: string;
  postsPerWeek: number;
  storiesPerDay?: number;
  avgEngagement: string;
  topTags: string[];
};

export default function AdvisoryConsultationPage() {
  const { messages } = useLang();
  const t = messages.advisory;

  const [bizName, setBizName] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [compSummary, setCompSummary] = useState<string[]>([]);
  const [auditStrengths, setAuditStrengths] = useState<string[]>([]);
  const [auditWeaknesses, setAuditWeaknesses] = useState<string[]>([]);
  const [auditActions, setAuditActions] = useState<string[]>([]);

  const page: React.CSSProperties = {
    minHeight: "100vh",
    background: "#0b1e3d",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 16px",
    gap: 18,
  };

  const container: React.CSSProperties = {
    width: "clamp(320px, 96vw, 1200px)",
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 24,
  };

  const card: React.CSSProperties = {
    background: "#fff",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 14px 36px rgba(0,0,0,0.18)",
    border: "2px solid #1f2937",
  };

  const label: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 800,
    color: "#0b1e3d",
    marginBottom: 6,
    display: "block",
  };

  const input: React.CSSProperties = {
    width: "calc(100% - 4px)",
    boxSizing: "border-box",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.2)",
    outline: "none",
    fontSize: 14,
    marginBottom: 10,
  };

  const btn: React.CSSProperties = {
    width: "100%",
    border: "none",
    borderRadius: 12,
    padding: "12px 14px",
    background: "#0ea5e9",
    color: "#fff",
    fontWeight: 900,
    cursor: "pointer",
    fontSize: 14,
    marginTop: 6,
  };

  const sectionTitle: React.CSSProperties = {
    fontWeight: 900,
    fontSize: 16,
    color: "#0b1e3d",
    marginBottom: 10,
  };

  const smallMuted: React.CSSProperties = {
    color: "#556",
    fontSize: 13,
    lineHeight: 1.5,
  };

  const tableWrap: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    overflow: "hidden",
  };

  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
  };

  const thtd: React.CSSProperties = {
    padding: "10px 12px",
    borderBottom: "1px solid #eef2f7",
    textAlign: "left" as const,
    verticalAlign: "top" as const,
  };

  const list: React.CSSProperties = {
    display: "grid",
    gap: 8,
    margin: 0,
    paddingLeft: 18,
  };

  const header: React.CSSProperties = {
    width: "clamp(320px, 96vw, 1200px)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 8,
  };

  const logoStyle: React.CSSProperties = {
    width: 200,
    height: "auto",
    objectFit: "contain" as const,
  };

  const titleStyle: React.CSSProperties = {
    color: "#fff",
    fontWeight: 900,
    fontSize: "clamp(20px, 3.6vw, 30px)",
  };

  const resGrid: React.CSSProperties = {
    display: "grid",
    gap: 16,
  };

  const resBox: React.CSSProperties = {
    border: "2px solid #1f2937",
    borderRadius: 12,
    padding: 12,
    background: "#fff",
  };

  function handleAnalyze() {
    setLoading(true);
    setTimeout(() => {
      const demo: Competitor[] = buildDemoCompetitors(platform, bizName);
      setCompetitors(demo);

      // متن‌ها را از locale می‌گیریم
      setCompSummary(t.compSummary);
      setAuditStrengths(t.auditStrengths);
      setAuditWeaknesses(t.auditWeaknesses);
      setAuditActions(t.auditActions);

      setAnalyzed(true);
      setLoading(false);
    }, 700);
  }

  const competitorTable = useMemo(() => {
    if (!competitors.length) return null;

    return (
      <div style={tableWrap}>
        <table style={tableStyle}>
          <thead style={{ background: "#f8fafc" }}>
            <tr>
              <th style={thtd}>{t.tableNameHandle}</th>
              <th style={thtd}>{t.tableFollowers}</th>
              <th style={thtd}>{t.tablePostsPerWeek}</th>
              {(platform === "Instagram" || platform === "TikTok") && (
                <th style={thtd}>{t.tableStoriesPerDay}</th>
              )}
              <th style={thtd}>{t.tableAvgEng}</th>
              <th style={thtd}>{t.tableTopTags}</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c) => {
              const link = platformLink(platform, c.handle);
              return (
                <tr key={c.handle}>
                  <td style={thtd}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 700 }}
                    >
                      {c.name}
                    </a>
                    <div style={{ color: "#6b7280", fontSize: 12 }}>{c.handle}</div>
                  </td>
                  <td style={thtd}>{c.followers}</td>
                  <td style={thtd}>{c.postsPerWeek}</td>
                  {(platform === "Instagram" || platform === "TikTok") && (
                    <td style={thtd}>{c.storiesPerDay ?? t.emptyPlaceholder}</td>
                  )}
                  <td style={thtd}>{c.avgEngagement}</td>
                  <td style={thtd}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {c.topTags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: "#eef6ff",
                            border: "1px solid #dbeafe",
                            padding: "2px 8px",
                            borderRadius: 999,
                            fontSize: 12,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }, [competitors, platform, t]);

  return (
    <main style={page}>
      {/* Header */}
      <div style={header}>
        <img src="/logo.png" alt="Sellova" style={logoStyle} />
        <h1 style={titleStyle}>{t.title}</h1>
      </div>

      {/* Grid */}
      <section style={container}>
        {/* LEFT: Inputs */}
        <div style={card}>
          <h2 style={sectionTitle}>{t.setupTitle}</h2>

          <label style={label}>{t.businessFieldLabel}</label>
          <input
            style={input}
            placeholder={t.businessFieldPlaceholder}
            value={bizName}
            onChange={(e) => setBizName(e.target.value)}
          />

          <label style={label}>{t.pageUrlLabel}</label>
          <input
            style={input}
            placeholder={t.pageUrlPlaceholder}
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
          />

          <label style={label}>{t.platformLabel}</label>
          <select
            style={input}
            value={platform}
            onChange={(e) => setPlatform(e.target.value as Platform)}
          >
            <option>Instagram</option>
            <option>TikTok</option>
            <option>YouTube</option>
            <option>Facebook</option>
          </select>

          <button
            style={{ ...btn, opacity: loading ? 0.7 : 1 }}
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? t.analyzingButton : t.analyzeButton}
          </button>

          <div style={{ ...smallMuted, marginTop: 10 }}>{t.setupHint}</div>
        </div>

        {/* RIGHT: Results 3 cards */}
        <div style={{ ...card, ...resGrid }}>
          <h2 style={sectionTitle}>{t.resultsTitle}</h2>

          {/* Card 1: Top 7 competitors */}
          <div style={resBox}>
            <h3 style={{ ...sectionTitle, marginBottom: 8 }}>{t.competitorsCardTitle}</h3>
            {!analyzed ? (
              <div style={smallMuted}>{t.competitorsEmpty}</div>
            ) : (
              competitorTable
            )}
          </div>

          {/* Card 2: Competitor activity analysis */}
          <div style={resBox}>
            <h3 style={{ ...sectionTitle, marginBottom: 8 }}>{t.activityCardTitle}</h3>
            {!analyzed ? (
              <div style={smallMuted}>{t.emptyPlaceholder}</div>
            ) : (
              <ul style={list}>
                {compSummary.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Card 3: Your page audit */}
          <div style={resBox}>
            <h3 style={{ ...sectionTitle, marginBottom: 8 }}>{t.auditCardTitle}</h3>
            {!analyzed ? (
              <div style={smallMuted}>{t.emptyPlaceholder}</div>
            ) : (
              <div style={{ display: "grid", gap: 12 }}>
                <div>
                  <b>{t.strengthsTitle}</b>
                  <ul style={list}>
                    {auditStrengths.map((l, i) => (
                      <li key={`s-${i}`}>{l}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <b>{t.weaknessesTitle}</b>
                  <ul style={list}>
                    {auditWeaknesses.map((l, i) => (
                      <li key={`w-${i}`}>{l}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <b>{t.recommendationsTitle}</b>
                  <ul style={list}>
                    {auditActions.map((l, i) => (
                      <li key={`a-${i}`}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* simple responsive override */}
      <style jsx>{`
        @media (max-width: 980px) {
          section {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

/* ---------- Helpers (mock data & links) ---------- */

function platformLink(platform: Platform, handle: string) {
  const h = handle.replace(/^@/, "");
  switch (platform) {
    case "Instagram":
      return `https://instagram.com/${h}`;
    case "TikTok":
      return `https://www.tiktok.com/@${h}`;
    case "YouTube":
      return `https://www.youtube.com/@${h}`;
    case "Facebook":
      return `https://www.facebook.com/${h}`;
  }
}

function buildDemoCompetitors(platform: Platform, bizName: string): Competitor[] {
  const base = (suffix: string): Competitor => ({
    handle: `@${suffix}`,
    name: suffix.replace(/_/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()),
    followers: ["48K", "95K", "120K", "240K", "310K", "520K", "1.1M"][
      Math.floor(Math.random() * 7)
    ],
    postsPerWeek: 3 + Math.floor(Math.random() * 3),
    storiesPerDay:
      platform === "YouTube" || platform === "Facebook"
        ? undefined
        : 2 + Math.floor(Math.random() * 3),
    avgEngagement: `${(1.9 + Math.random() * 2.2).toFixed(1)}%`,
    topTags:
      platform === "Instagram" || platform === "TikTok"
        ? ["#style", "#trend", "#handmade", "#gift", "#newdrop"].slice(
            0,
            3 + Math.floor(Math.random() * 3)
          )
        : ["#review", "#howto", "#unboxing", "#shorts"].slice(
            0,
            2 + Math.floor(Math.random() * 2)
          ),
  });

  const seed =
    bizName.trim() ||
    (platform === "Instagram"
      ? "luxe_boutique"
      : platform === "TikTok"
      ? "cool_trends"
      : "pro_channel");

  return Array.from({ length: 7 }).map((_, i) => base(`${seed}_${i + 1}`));
}