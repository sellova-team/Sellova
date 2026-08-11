"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./dashboard.module.css";
import { useLang } from "../../../lib/lang";
import {
  Layers3,
  ChartColumn,
  GraduationCap,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {

  const { messages } = useLang();
  const t = messages.dashboard;

  return (
    <main className={styles.dashboard}>

      {/* SIDEBAR */}
      <aside className={styles.sidebar}>

        {/* LOGO */}
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={110}
            height={50}
            priority
          />
        </div>


        {/* DASHBOARD */}
        <Link
          href="/workspace"
          className={styles.menuItem}
        >
          🏠
          <span>{t.sidebar.dashboard}</span>
        </Link>


        <div className={styles.sectionTitle}>
          {t.sidebar.create}
        </div>


        <Link
         href="/ads/generate-image"
          className={styles.menuItem}
        >
          🖼️
          <span>{t.sidebar.generateImage}</span>
        </Link>


        <Link
        href="/ads/generate-video"
          className={styles.menuItem}
        >
          🎬
          <span>{t.sidebar.generateVideo}</span>
        </Link>


        <Link
          href="/ads/avatar"
          className={styles.menuItem}
        >
          👤
          <span>{t.sidebar.createAvatar}</span>
        </Link>


        <Link
          href="/ads/promo-slides"
          className={styles.menuItem}
        >
          📰
          <span>{t.sidebar.promoSlides}</span>
        </Link>



        <div className={styles.sectionTitle}>
          {t.sidebar.analytics}
        </div>


        <Link
          href="/ads/advisory-consultation"
          className={styles.menuItem}
        >
          📊
          <span>{t.sidebar.advisory}</span>
        </Link>



        <div className={styles.sectionTitle}>
          {t.sidebar.learn}
        </div>


        <Link
          href="/ads/academy-insight"
          className={styles.menuItem}
        >
          🎓
          <span>{t.sidebar.academy}</span>
        </Link>



        <div className={styles.sectionTitle}>
          {t.sidebar.upgrade}
        </div>


        <Link
          href="/ads/golden-plan"
          className={styles.menuItem}
        >
          👑
          <span>{t.sidebar.goldenPlan}</span>
        </Link>


        <Link
          href="/ads/settings"
          className={styles.menuItem}
        >
          ⚙️
          <span>{t.sidebar.settings}</span>
        </Link>


      </aside>
      {/* HEADER */}

<section className={styles.content}>

  <header className={styles.header}>

    {/* Welcome */}

    <div className={styles.welcome}>

      <h1>
        {t.welcome.title}
      </h1>

      <p>
        {t.welcome.subtitle}
      </p>

    </div>



    {/* Credits */}

    <div className={styles.creditBox}>

      <div className={styles.creditIcon}>
        ⚡
      </div>

      <div>

        <h2>
          2,540
        </h2>

        <span>
          {t.credits.available}
        </span>

      </div>

<Link href="/ads/upgrade-plan" className={styles.addCreditsBtn}>
  {t.credits.add}
</Link>

    </div>


    {/* Profile */}

    <div className={styles.profile}>
      S
      <span></span>
    </div>


  </header>

{/* UPLOAD GUIDE */}

<Link
  href="/ads/guide"
  className={styles.guideBanner}
>

  <div className={styles.guideLeft}>

    <span className={styles.guideIcon}>📖</span>

    <div>
      <h3>Upload Guide</h3>

      <p>
        Learn how to prepare your product photos for the best AI results.
      </p>
    </div>

  </div>

  <span className={styles.guideButton}>
    Open Guide →
  </span>

</Link>

{/* TOP CARDS */}

<section className={styles.cards}>

  {/* IMAGE */}

<Link href="/ads/generate-image" className={styles.card}>
    <div className={styles.cardContent}>


      <h2>{t.cards.image.title}</h2>

      <p>
        {t.cards.image.desc}
      </p>

    </div>

    <Image
      src="/assets/icons/ADS/dashboard/1.png"
      alt="Generate Image"
      width={260}
      height={260}
      className={styles.cardImage}
    />

  </Link>



  {/* VIDEO */}

  <Link href="/ads/generate-video" className={styles.card}>

    <div className={styles.cardContent}>

      <h2>{t.cards.video.title}</h2>

      <p>
        {t.cards.video.desc}
      </p>

    </div>

    <Image
      src="/assets/icons/ADS/dashboard/2.png"
      alt="Generate Video"
      width={260}
      height={260}
      className={styles.cardImage}
    />

  </Link>



  {/* AVATAR */}

  <Link href="/ads/avatar" className={styles.card}>

    <div className={styles.cardContent}>

      <h2>{t.cards.avatar.title}</h2>

      <p>
        {t.cards.avatar.desc}
      </p>

    </div>

    <Image
      src="/assets/icons/ADS/dashboard/3.png"
      alt="Avatar"
      width={260}
      height={260}
      className={styles.cardImage}
    />

  </Link>
    {/* MUSIC */}

  <Link href="/ads/music-ads" className={styles.card}>

    <div className={styles.cardContent}>

      <h2>{t.cards.music.title}</h2>

      <p>
        {t.cards.music.desc}
      </p>

    </div>

    <Image
      src="/assets/icons/ADS/dashboard/4.png"
      alt="Music"
      width={260}
      height={260}
      className={styles.cardImage}
    />

  </Link>



  {/* PROMO */}

  <Link href="/ads/promo-slides" className={styles.card}>

    <div className={styles.cardContent}>

      <h2>{t.cards.promo.title}</h2>

      <p>
        {t.cards.promo.desc}
      </p>

    </div>

    <Image
      src="/assets/icons/ADS/dashboard/5.png"
      alt="Promo"
      width={260}
      height={260}
      className={styles.cardImage}
    />

  </Link>

</section>

{/* GOLDEN PLAN */}

<section className={styles.goldenPlan}>

  <Image
    src="/assets/icons/ADS/dashboard/crown.png"
    alt="Golden Plan"
    width={260}
    height={180}
    className={styles.crownImage}
  />


  <div className={styles.goldenText}>

    <h2>
      {t.golden.title}
    </h2>

    <span>
      {t.golden.badge}
    </span>

    <p>
      {t.golden.desc}
    </p>

  </div>

<Link
  href="/ads/golden-plan"
  className={styles.upgradeBtn}
>
  {t.golden.button}
</Link>

</section>

{/* BOTTOM CARDS */}

<section className={styles.bottomCards}>

  <Link href="/ads/brand-overlay" className={styles.smallCard}>

    <div className={styles.smallIcon}>
      <Layers3 size={28} />
    </div>

    <div>
      <h3>{t.bottom.branding.title}</h3>
      <p>{t.bottom.branding.desc}</p>
    </div>

    <span>→</span>

  </Link>


  <Link href="/ads/advisory-consultation" className={styles.smallCard}>

    <div className={styles.smallIcon}>
      <ChartColumn size={28} />
    </div>

    <div>
      <h3>{t.bottom.analysis.title}</h3>
      <p>{t.bottom.analysis.desc}</p>
    </div>

    <span>→</span>

  </Link>
    <Link href="/ads/academy-insight" className={styles.smallCard}>

    <div className={styles.smallIcon}>
      <GraduationCap size={28} />
    </div>

    <div>
      <h3>{t.bottom.academy.title}</h3>
      <p>{t.bottom.academy.desc}</p>
    </div>

    <span>→</span>

  </Link>


  <Link href="/ads/settings" className={styles.smallCard}>

    <div className={styles.smallIcon}>
      <Settings size={28} />
    </div>

    <div>
      <h3>{t.bottom.settings.title}</h3>
      <p>{t.bottom.settings.desc}</p>
    </div>

    <span>→</span>

  </Link>

</section>


{/* EXPLORE FEATURES */}

<section className={styles.featuresSection}>

  <div className={styles.sectionHeader}>

    <h2>
      {t.features.title}
    </h2>

    <Link
      href="/ads/features"
      className={styles.viewAll}
    >
      <ArrowRight size={18} />
    </Link>

  </div>


  <div className={styles.featureGrid}>

    <Link
  href="/ads/generate-image"
      className={styles.featureCard}
    >
      <Image
        src="/assets/icons/ADS/dashboard/6.png"
        alt="AI Product Image"
        width={260}
        height={180}
         className={styles.featureImage}
      />

      <div className={styles.featureContent}>
        <h3>{t.features.image.title}</h3>
        <p>{t.features.image.desc}</p>
      </div>

    </Link>


    <Link
      href="/ads/generate-video"
      className={styles.featureCard}
    >
      <Image
        src="/assets/icons/ADS/dashboard/7.png"
        alt="AI Product Video"
        width={260}
        height={180}
         className={styles.featureImage}
      />

      <div className={styles.featureContent}>
        <h3>{t.features.video.title}</h3>
        <p>{t.features.video.desc}</p>
      </div>

    </Link>


    <Link
      href="/ads/avatar"
      className={styles.featureCard}
    >
      <Image
        src="/assets/icons/ADS/dashboard/8.png"
        alt="AI Avatar"
        width={260}
        height={180}
         className={styles.featureImage}
      />

      <div className={styles.featureContent}>
        <h3>{t.features.avatar.title}</h3>
        <p>{t.features.avatar.desc}</p>
      </div>

    </Link>
        <Link
      href="/ads/music-ads"
      className={styles.featureCard}
    >
      <Image
        src="/assets/icons/ADS/dashboard/9.png"
        alt="music"
        width={260}
        height={180}
         className={styles.featureImage}
      />

      <div className={styles.featureContent}>
        <h3>{t.features.promo.title}</h3>
        <p>{t.features.promo.desc}</p>
      </div>

    </Link>


    <Link
      href="/ads/promo-slides"
      className={styles.featureCard}
    >
      <Image
        src="/assets/icons/ADS/dashboard/10.png"
        alt="Branding"
        width={260}
        height={180}
         className={styles.featureImage}
      />

      <div className={styles.featureContent}>
        <h3>{t.features.branding.title}</h3>
        <p>{t.features.branding.desc}</p>
      </div>

    </Link>

  </div>

</section>

</section>

</main>

  );
}