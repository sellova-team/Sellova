"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import styles from "./advisory-consultation.module.css";

const sidebarItems = [
  { href: "/ads/dashboard", icon: "⌂", label: "Dashboard" },
  { href: "/ads/generate-image", icon: "▧", label: "AI Image" },
  { href: "/ads/generate-video", icon: "▷", label: "AI Video" },
  { href: "/ads/avatar", icon: "♙", label: "AI Avatar" },
  { href: "/ads/music-ads", icon: "♫", label: "AI Music" },
  { href: "/ads/captions-hashtags", icon: "#", label: "AI Caption" },
  { href: "/ads/promo-slides", icon: "▤", label: "Promo Slides" },
];

const analysisTabs = [
  { id: "overview", icon: "◉", label: "Overview" },
  { id: "competitors", icon: "◎", label: "Competitors" },
  { id: "best-times", icon: "◷", label: "Best Times" },
  { id: "recommendations", icon: "▣", label: "Recommendations" },
  { id: "content-ideas", icon: "✎", label: "Content Ideas" },
];

const metrics = [
  {
    id: 1,
    icon: "♙",
    label: "Followers",
    value: "24.8K",
    change: "↑ 12.5%",
    trend: "positive",
    chart: [18, 22, 25, 31, 35, 42, 55, 68],
  },
  {
    id: 2,
    icon: "♡",
    label: "Engagement Rate",
    value: "2.34%",
    change: "↓ 8.7%",
    trend: "negative",
    chart: [48, 44, 39, 43, 38, 35, 40, 46],
  },
  {
    id: 3,
    icon: "♙",
    label: "Avg. Likes",
    value: "578",
    change: "↑ 5.3%",
    trend: "positive",
    chart: [22, 31, 28, 42, 38, 47, 45, 59],
  },
  {
    id: 4,
    icon: "♡",
    label: "Avg. Comments",
    value: "46",
    change: "↓ 3.2%",
    trend: "negative",
    chart: [46, 40, 43, 36, 31, 34, 29, 37],
  },
  {
    id: 5,
    icon: "▣",
    label: "Posts / Month",
    value: "18",
    change: "↑ 2",
    trend: "positive",
    chart: [12, 18, 25, 32, 43, 50, 62, 75],
  },
];

const competitors = [
  { id: 1, avatar: "A", name: "@chicstyle.official", followers: "82.4K", rate: "3.21%" },
  { id: 2, avatar: "L", name: "@stylebyluna", followers: "67.8K", rate: "2.91%" },
  { id: 3, avatar: "F", name: "@the.fashion.edit", followers: "51.6K", rate: "2.71%" },
  { id: 4, avatar: "O", name: "@ootd.boutique", followers: "44.2K", rate: "2.45%" },
  { id: 5, avatar: "I", name: "@fashion.inspo.daily", followers: "38.7K", rate: "2.31%" },
  { id: 6, avatar: "T", name: "@trendy.womenwear", followers: "33.5K", rate: "2.12%" },
];

const strengths = [
  "Strong visual identity and aesthetics",
  "Good use of Reels and trending audio",
  "High quality product photos",
  "Consistent posting frequency",
  "Good engagement with audience",
];

const improvements = [
  "Low save rate on posts",
  "Captions could be more engaging",
  "Not enough Story interactions",
  "Limited use of CTA (Call to Action)",
  "Posting time is not optimized",
];

const opportunities = [
  "Add more UGC (user generated content)",
  "Collaborate with micro-influencers",
  "Create more how-to & styling content",
  "Use Stories Highlights strategically",
  "Launch giveaways to boost reach",
];

const recommendations = [
  { icon: "◌", title: "Create 3–5 Reels per week", text: "Reels get 2.3x more reach than static posts." },
  { icon: "⌁", title: "Write engaging captions", text: "Ask questions and encourage comments." },
  { icon: "□", title: "Use strong CTAs", text: "Add clear CTA to drive saves and shares." },
  { icon: "≋", title: "Post consistently", text: "Aim for 4–6 posts and daily Stories." },
  { icon: "▤", title: "Track & analyze weekly", text: "Review insights and optimize your strategy." },
];

const contentIdeas = [
  { title: "5 Ways to Style This Dress", type: "Reel" },
  { title: "New Collection Behind the Scenes", type: "Story" },
  { title: "Customer Reviews & Feedback", type: "Post" },
  { title: "Outfit Inspiration for Spring", type: "Reel" },
  { title: "Giveaway: Win a Free Outfit", type: "Post" },
];

const heatmap = [
  [1, 1, 1, 2, 2, 3, 4, 3, 2],
  [1, 1, 2, 2, 3, 4, 5, 4, 3],
  [1, 2, 2, 3, 4, 5, 6, 4, 3],
  [1, 2, 3, 4, 5, 6, 6, 5, 3],
  [1, 2, 3, 4, 5, 5, 4, 3, 2],
  [1, 1, 2, 3, 4, 4, 3, 2, 2],
  [1, 1, 2, 2, 3, 3, 2, 2, 1],
];

export default function AdvisoryConsultationPage() {
  const { messages } = useLang();
  const t = messages.AdvisoryAnalysis;

  const [activeTab, setActiveTab] = useState("overview");
  const [username, setUsername] = useState("@yourpage");
  const [category, setCategory] = useState("women-fashion");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAnalyzing(true);
    window.setTimeout(() => setIsAnalyzing(false), 1600);
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image src="/logo.png" alt={t.accessibility.sellovaLogo} width={140} height={52} priority className={styles.logo} />
         
        </div>

        <nav className={styles.sidebarMenu}>
          {sidebarItems.map((item, index) => (
            <Link key={item.href} href={item.href} className={styles.menuItem}>
              <span>{item.icon}</span>
              {[
                t.sidebar.dashboard,
                t.sidebar.aiImage,
                t.sidebar.aiVideo,
                t.sidebar.aiAvatar,
                t.sidebar.aiMusic,
                t.sidebar.aiCaption,
                t.sidebar.promoSlides,
              ][index]}
            </Link>
          ))}

          <p className={styles.menuTitle}>{t.sidebar.analytics}</p>

          <Link href="/ads/advisory-consultation" className={`${styles.menuItem} ${styles.activeMenu}`}>
            <span>⌗</span>
            {t.sidebar.advisoryAnalysis}
          </Link>

          <Link href="/ads/academy-insight" className={styles.menuItem}>
            <span>◇</span>
            {t.sidebar.academyInsight}
          </Link>

          <p className={styles.menuTitle}>{t.sidebar.account}</p>

          <Link href="/ads/golden-plan" className={styles.goldenMenuItem}>
            <span>♕</span>
            {t.sidebar.goldenPlan}
          </Link>

          <Link href="/ads/upgrade-plan" className={styles.menuItem}>
            <span>◇</span>
            {t.sidebar.upgradePlan}
          </Link>

          <Link href="/ads/settings" className={styles.menuItem}>
            <span>⚙</span>
            {t.sidebar.settings}
          </Link>
        </nav>

        <div className={styles.upgradeCard}>
  <span className={styles.upgradeCrown}></span>

  <h3>{t.upgrade.title}</h3>

  <p>{t.upgrade.description}</p>

  <Link href="/ads/upgrade-plan">
    {t.upgrade.button} <span>→</span>
  </Link>
</div>

        <div className={styles.userBox}>
          <span className={styles.userAvatar}>S</span>
          <div>
            <strong>{t.user.name}</strong>
            <small>{t.user.plan}</small>
          </div>
          <span>⌄</span>
        </div>
      </aside>

      <main className={styles.page}>
        <header className={styles.topbar}>
          

          <div className={styles.topbarActions}>
            <div className={styles.creditBox}><span>ϟ</span> {t.header.credits}</div>
            <Link href="/ads/golden-plan" className={styles.goldenButton}><span>♕</span> {t.header.goldenPlan}</Link>
            <button type="button" className={styles.profileButton}>S</button>
          </div>
        </header>

        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>{t.hero.titleFirst} <span>{t.hero.titleHighlight}</span> ✦</h1>
            <p>{t.hero.description}</p>

            <form className={styles.analysisForm} onSubmit={handleAnalyze}>
              <label className={styles.formField}>
                <span><b>◎</b> {t.hero.usernameLabel}</span>
                <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder={t.hero.usernamePlaceholder} />
              </label>

              <label className={styles.formField}>
                <span><b>◉</b> {t.hero.categoryLabel}</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                  {t.businessCategories.map((item) => (
                    <option key={item.key} value={item.key}>{item.label}</option>
                  ))}
                </select>
              </label>

              <div className={styles.analyzeArea}>
                <button type="submit" disabled={isAnalyzing}>
                  {isAnalyzing ? t.hero.analyzingButton : t.hero.analyzeButton}
                  <span>→</span>
                </button>
                <small>{t.hero.analysisTime}</small>
              </div>
            </form>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/assets/icons/ADS/analiz/axe.png"
              alt={t.accessibility.heroImage}
              fill
              priority
              className={styles.heroImage}
            />
          </div>
        </section>

        <div className={styles.tabs}>
          {analysisTabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? styles.activeTab : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              {t.tabs[index].label}
            </button>
          ))}
        </div>

        <div className={styles.dashboardGrid}>
          <div className={styles.analysisColumn}>
            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <h2><span>⌁</span> {t.pageAnalysis.title}</h2>
                  <p>{t.pageAnalysis.subtitle}</p>
                </div>
                <button type="button" className={styles.periodButton}>▣ {t.pageAnalysis.period}⌄</button>
              </div>

              <div className={styles.metricsGrid}>
                {metrics.map((metric, index) => (
                  <article key={metric.id} className={styles.metricCard}>
                    <div className={styles.metricTitle}><span>{metric.icon}</span>{t.metrics[index].label}</div>
                    <strong>{t.metrics[index].value}</strong>
                    <b className={metric.trend === "positive" ? styles.positive : styles.negative}>{t.metrics[index].change}</b>
                    <small>{t.pageAnalysis.comparison}</small>
                    <div className={`${styles.miniChart} ${metric.trend === "negative" ? styles.negativeChart : ""}`}>
                      {metric.chart.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.insightColumns}>
              <article className={`${styles.insightCard} ${styles.strengthCard}`}>
                <h2><span>✓</span> {t.insightCards.strengths.title}</h2>
                <ul>{t.insightCards.strengths.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
              </article>
              <article className={`${styles.insightCard} ${styles.improveCard}`}>
                <h2><span>!</span> {t.insightCards.improve.title}</h2>
                <ul>{t.insightCards.improve.items.map((item) => <li key={item}><span>×</span>{item}</li>)}</ul>
              </article>
              <article className={`${styles.insightCard} ${styles.opportunityCard}`}>
                <h2><span>☆</span> {t.insightCards.opportunities.title}</h2>
                <ul>{t.insightCards.opportunities.items.map((item) => <li key={item}><span>×</span>{item}</li>)}</ul>
              </article>
            </section>

            <div className={styles.bottomGrid}>
              <section className={`${styles.panel} ${styles.bestTimesPanel}`}>
                <div className={styles.smallPanelTitle}>
                  <span>◷</span>
                  <div><h2>{t.bestTimes.title}</h2><p>{t.bestTimes.subtitle}</p></div>
                </div>

                <div className={styles.heatmapArea}>
                  <div className={styles.dayLabels}>{t.bestTimes.days.map((day) => <span key={day}>{day}</span>)}</div>
                  <div className={styles.heatmap}>
                    {heatmap.flatMap((row, rowIndex) => row.map((level, columnIndex) => (
                      <i key={`${rowIndex}-${columnIndex}`} data-level={level} />
                    )))}
                  </div>
                  <div className={styles.timeLabels}>{t.bestTimes.times.map((time) => <span key={time}>{time}</span>)}</div>
                </div>

                <div className={styles.bestSlots}>
                  <p>{t.bestTimes.bestDays}</p>
                  <div className={styles.dayPills}>{t.bestTimes.selectedDays.map((day) => <span key={day}>{day}</span>)}</div>
                  <p>{t.bestTimes.bestTimeSlots}</p>
                  <ol>{t.bestTimes.slots.map((slot, index) => <li key={slot}><b>{index + 1}</b> {slot}</li>)}</ol>
                </div>
                <div className={styles.tipBox}>♧ {t.bestTimes.tip}</div>
              </section>

              <section className={`${styles.panel} ${styles.recommendationsPanel}`}>
                <div className={styles.smallPanelTitle}><span>☆</span><div><h2>{t.recommendations.title}</h2></div></div>
                <div className={styles.recommendationList}>
                  {recommendations.map((item, index) => (
                    <article key={item.title}>
                      <span>{item.icon}</span>
                      <div><h3>{t.recommendations.items[index].title}</h3><p>{t.recommendations.items[index].text}</p></div>
                      <button type="button" aria-label={`${t.accessibility.openRecommendation} ${t.recommendations.items[index].title}`}>→</button>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className={styles.rightColumn}>
            <section className={`${styles.panel} ${styles.competitorPanel}`}>
              <div className={styles.panelHeader}>
                <div><h2>{t.competitors.title} <small>ⓘ</small></h2><p>{t.competitors.subtitle}</p></div>
                <button type="button" className={styles.viewButton}>{t.competitors.viewAll}</button>
              </div>
              <div className={styles.competitorList}>
                {competitors.map((competitor, index) => (
                  <article key={competitor.id}>
                    <b>{competitor.id}</b>
                    <span className={styles.competitorAvatar}>{competitor.avatar}</span>
                    <strong>{t.competitors.list[index].name}</strong>
                    <span>{t.competitors.list[index].followers}</span>
                    <span>{t.competitors.list[index].rate}</span>
                    <i>↗</i>
                  </article>
                ))}
              </div>
              <button type="button" className={styles.fullButton}>{t.competitors.benchmarkButton} <span>→</span></button>
            </section>

            <section className={`${styles.panel} ${styles.contentIdeasPanel}`}>
              <div className={styles.panelHeader}><h2><span>♧</span> {t.contentIdeas.title} <small>ⓘ</small></h2></div>
              <div className={styles.contentIdeaList}>
                {contentIdeas.map((idea, index) => (
                  <article key={idea.title}><span>◇</span><p>{t.contentIdeas.items[index].title}</p><b>{t.contentIdeas.items[index].type}</b></article>
                ))}
              </div>
              <button type="button" className={styles.fullButton}>{t.contentIdeas.calendarButton} <span>→</span></button>
            </section>
          </aside>
        </div>

        <footer className={styles.footer}>
          <span>{t.footer.copyright}</span>
          <nav><Link href="/privacy">{t.footer.privacy}</Link><Link href="/terms">{t.footer.terms}</Link><Link href="/support">{t.footer.support}</Link></nav>
          <div><span>◎</span><span>♪</span><span>▶</span><span>f</span></div>
        </footer>
      </main>
    </div>
  );
}