"use client";

import {
  ChangeEvent,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";

import styles from "./golden-plan.module.css";

export default function GoldenPlanPage() {
  const { messages } = useLang();
  const t = messages.GoldenPlan;

  const productInputRef =
    useRef<HTMLInputElement>(null);

  const logoInputRef =
    useRef<HTMLInputElement>(null);

  const [productImage, setProductImage] =
    useState<string | null>(null);

  const [brandLogo, setBrandLogo] =
    useState<string | null>(null);

  const [brandName, setBrandName] =
    useState(t.defaults.brandName);

  const [productName, setProductName] =
    useState(t.defaults.productName);

  const [slogan, setSlogan] =
    useState(t.defaults.slogan);

  const [musicLanguage, setMusicLanguage] =
    useState("english");

  const [singerVoice, setSingerVoice] =
    useState<"female" | "male">("female");

  const [musicStyle, setMusicStyle] =
    useState("luxury");

  const [cinematicEffect, setCinematicEffect] =
    useState("luxury-studio");

  const [platform, setPlatform] =
    useState("instagram-reel");

  const languageOptions = [
    {
      value: "english",
      label: t.languages.english,
    },
    {
      value: "persian",
      label: t.languages.persian,
    },
    {
      value: "turkish",
      label: t.languages.turkish,
    },
    {
      value: "kurdish",
      label: t.languages.kurdish,
    },
    {
      value: "arabic",
      label: t.languages.arabic,
    },
    {
      value: "spanish",
      label: t.languages.spanish,
    },
    {
      value: "german",
      label: t.languages.german,
    },
    {
      value: "kazakh",
      label: t.languages.kazakh,
    },
    {
      value: "turkmen",
      label: t.languages.turkmen,
    },
    {
      value: "urdu",
      label: t.languages.urdu,
    },
    {
      value: "armenian",
      label: t.languages.armenian,
    },
    {
      value: "tajik",
      label: t.languages.tajik,
    },
  ];

  const musicStyleOptions = [
    {
      value: "luxury",
      label: t.musicStyles.luxury,
    },
    {
      value: "cinematic",
      label: t.musicStyles.cinematic,
    },
    {
      value: "elegant",
      label: t.musicStyles.elegant,
    },
    {
      value: "modern",
      label: t.musicStyles.modern,
    },
    {
      value: "dramatic",
      label: t.musicStyles.dramatic,
    },
    {
      value: "electronic",
      label: t.musicStyles.electronic,
    },
    {
      value: "indie-pop",
      label: t.musicStyles.indiePop,
    },
    {
      value: "dance-pop",
      label: t.musicStyles.dancePop,
    },
    {
      value: "synth-pop",
      label: t.musicStyles.synthPop,
    },
    {
      value: "electropop",
      label: t.musicStyles.electroPop,
    },
    {
      value: "indie-rock",
      label: t.musicStyles.indieRock,
    },
    {
      value: "soft-rock",
      label: t.musicStyles.softRock,
    },
    {
      value: "alternative-rock",
      label: t.musicStyles.alternativeRock,
    },
    {
      value: "pop-rock",
      label: t.musicStyles.popRock,
    },
    {
      value: "trap",
      label: t.musicStyles.trap,
    },
    {
      value: "cinematic-trap",
      label: t.musicStyles.cinematicTrap,
    },
    {
      value: "afrobeat",
      label: t.musicStyles.afrobeat,
    },
    {
      value: "reggae",
      label: t.musicStyles.reggae,
    },
    {
      value: "latin",
      label: t.musicStyles.latin,
    },
    {
      value: "flamenco",
      label: t.musicStyles.flamenco,
    },
    {
      value: "salsa",
      label: t.musicStyles.salsa,
    },
    {
      value: "disco",
      label: t.musicStyles.disco,
    },
    {
      value: "funk",
      label: t.musicStyles.funk,
    },
    {
      value: "soul",
      label: t.musicStyles.soul,
    },
    {
      value: "blues",
      label: t.musicStyles.blues,
    },
    {
      value: "gospel",
      label: t.musicStyles.gospel,
    },
    {
      value: "house",
      label: t.musicStyles.house,
    },
    {
      value: "deep-house",
      label: t.musicStyles.deepHouse,
    },
    {
      value: "progressive-house",
      label: t.musicStyles.progressiveHouse,
    },
    {
      value: "techno",
      label: t.musicStyles.techno,
    },
    {
      value: "edm",
      label: t.musicStyles.edm,
    },
    {
      value: "dubstep",
      label: t.musicStyles.dubstep,
    },
    {
      value: "drum-and-bass",
      label: t.musicStyles.drumAndBass,
    },
    {
      value: "chillout",
      label: t.musicStyles.chillout,
    },
    {
      value: "dreamy",
      label: t.musicStyles.dreamy,
    },
    {
      value: "meditation",
      label: t.musicStyles.meditation,
    },
    {
      value: "nature",
      label: t.musicStyles.natureInspired,
    },
    {
      value: "piano",
      label: t.musicStyles.piano,
    },
    {
      value: "violin",
      label: t.musicStyles.violin,
    },
    {
      value: "guitar",
      label: t.musicStyles.guitar,
    },
    {
      value: "cinematic-piano",
      label: t.musicStyles.cinematicPiano,
    },
    {
      value: "cinematic-orchestra",
      label: t.musicStyles.cinematicOrchestra,
    },
    {
      value: "trailer",
      label: t.musicStyles.epicTrailer,
    },
    {
      value: "suspense",
      label: t.musicStyles.suspense,
    },
    {
      value: "mystery",
      label: t.musicStyles.mystery,
    },
    {
      value: "action",
      label: t.musicStyles.action,
    },
    {
      value: "adventure",
      label: t.musicStyles.adventure,
    },
    {
      value: "happy",
      label: t.musicStyles.happy,
    },
    {
      value: "energetic",
      label: t.musicStyles.energetic,
    },
    {
      value: "motivational",
      label: t.musicStyles.motivational,
    },
    {
      value: "powerful",
      label: t.musicStyles.powerful,
    },
    {
      value: "soft-emotional",
      label: t.musicStyles.softEmotional,
    },
    {
      value: "wedding",
      label: t.musicStyles.wedding,
    },
    {
      value: "beauty-commercial",
      label: t.musicStyles.beautyCommercial,
    },
    {
      value: "fashion-runway",
      label: t.musicStyles.fashionRunway,
    },
    {
      value: "technology",
      label: t.musicStyles.technology,
    },
    {
      value: "automotive",
      label: t.musicStyles.automotive,
    },
    {
      value: "food-commercial",
      label: t.musicStyles.foodCommercial,
    },
    {
      value: "kids",
      label: t.musicStyles.kidsFamily,
    },
    {
      value: "persian-pop",
      label: t.musicStyles.persianPop,
    },
    {
      value: "persian-traditional",
      label: t.musicStyles.persianTraditional,
    },
    {
      value: "turkish-pop",
      label: t.musicStyles.turkishPop,
    },
    {
      value: "turkish-traditional",
      label: t.musicStyles.turkishTraditional,
    },
    {
      value: "arabic-pop",
      label: t.musicStyles.arabicPop,
    },
    {
      value: "arabic-traditional",
      label: t.musicStyles.arabicTraditional,
    },
    {
      value: "kurdish",
      label: t.musicStyles.kurdishMusic,
    },
    {
      value: "armenian",
      label: t.musicStyles.armenianMusic,
    },
    {
      value: "kazakh",
      label: t.musicStyles.kazakhMusic,
    },
    {
      value: "turkmen",
      label: t.musicStyles.turkmenMusic,
    },
    {
      value: "tajik",
      label: t.musicStyles.tajikMusic,
    },
    {
      value: "urdu-pop",
      label: t.musicStyles.urduPop,
    },
  ];

  const cinematicEffectOptions = [
    {
      value: "ice-reveal",
      label: t.cinematicEffects.iceReveal,
    },
    {
      value: "rain-lightning",
      label: t.cinematicEffects.rainLightning,
    },
    {
      value: "fire-explosion",
      label: t.cinematicEffects.fireExplosion,
    },
    {
      value: "sandstorm",
      label: t.cinematicEffects.sandstorm,
    },
    {
      value: "underwater",
      label: t.cinematicEffects.underwater,
    },
    {
      value: "luxury-studio",
      label: t.cinematicEffects.luxuryStudio,
    },
    {
      value: "snowfall",
      label: t.cinematicEffects.heavySnowfall,
    },
    {
      value: "frozen-glass",
      label: t.cinematicEffects.frozenGlass,
    },
    {
      value: "ice-explosion",
      label: t.cinematicEffects.iceExplosion,
    },
    {
      value: "water-splash",
      label: t.cinematicEffects.waterSplash,
    },
    {
      value: "ocean-waves",
      label: t.cinematicEffects.oceanWaves,
    },
    {
      value: "waterfall-reveal",
      label: t.cinematicEffects.waterfallReveal,
    },
    {
      value: "smoke-reveal",
      label: t.cinematicEffects.smokeReveal,
    },
    {
      value: "colored-smoke",
      label: t.cinematicEffects.coloredSmoke,
    },
    {
      value: "fog-mist",
      label: t.cinematicEffects.fogMist,
    },
    {
      value: "fire-reveal",
      label: t.cinematicEffects.fireReveal,
    },
    {
      value: "burning-background",
      label: t.cinematicEffects.burningBackground,
    },
    {
      value: "lava-flow",
      label: t.cinematicEffects.lavaFlow,
    },
    {
      value: "electric-energy",
      label: t.cinematicEffects.electricEnergy,
    },
    {
      value: "neon-lightning",
      label: t.cinematicEffects.neonLightning,
    },
    {
      value: "energy-explosion",
      label: t.cinematicEffects.energyExplosion,
    },
    {
      value: "golden-particles",
      label: t.cinematicEffects.goldenParticles,
    },
    {
      value: "diamond-sparkle",
      label: t.cinematicEffects.diamondSparkle,
    },
    {
      value: "glitter-reveal",
      label: t.cinematicEffects.glitterReveal,
    },
    {
      value: "gold-dust",
      label: t.cinematicEffects.goldDust,
    },
    {
      value: "luxury-gold",
      label: t.cinematicEffects.luxuryGold,
    },
    {
      value: "black-gold-studio",
      label: t.cinematicEffects.blackGoldStudio,
    },
    {
      value: "marble-studio",
      label: t.cinematicEffects.luxuryMarbleStudio,
    },
    {
      value: "mirror-studio",
      label: t.cinematicEffects.mirrorStudio,
    },
    {
      value: "spotlight-reveal",
      label: t.cinematicEffects.spotlightReveal,
    },
    {
      value: "runway-lights",
      label: t.cinematicEffects.runwayLights,
    },
    {
      value: "camera-flash",
      label: t.cinematicEffects.cameraFlash,
    },
    {
      value: "laser-show",
      label: t.cinematicEffects.laserShow,
    },
    {
      value: "neon-city",
      label: t.cinematicEffects.neonCity,
    },
    {
      value: "cyberpunk",
      label: t.cinematicEffects.cyberpunk,
    },
    {
      value: "hologram",
      label: t.cinematicEffects.hologramReveal,
    },
    {
      value: "space-galaxy",
      label: t.cinematicEffects.spaceGalaxy,
    },
    {
      value: "starfield",
      label: t.cinematicEffects.starfield,
    },
    {
      value: "cosmic-explosion",
      label: t.cinematicEffects.cosmicExplosion,
    },
    {
      value: "flower-bloom",
      label: t.cinematicEffects.flowerBloom,
    },
    {
      value: "rose-petals",
      label: t.cinematicEffects.fallingRosePetals,
    },
    {
      value: "autumn-leaves",
      label: t.cinematicEffects.autumnLeaves,
    },
    {
      value: "forest-magic",
      label: t.cinematicEffects.magicalForest,
    },
    {
      value: "desert-reveal",
      label: t.cinematicEffects.desertReveal,
    },
    {
      value: "sand-explosion",
      label: t.cinematicEffects.sandExplosion,
    },
    {
      value: "product-rotation",
      label: t.cinematicEffects.productRotation,
    },
    {
      value: "slow-motion",
      label: t.cinematicEffects.cinematicSlowMotion,
    },
    {
      value: "zoom-reveal",
      label: t.cinematicEffects.cinematicZoom,
    },
    {
      value: "glass-break",
      label: t.cinematicEffects.glassBreak,
    },
    {
      value: "fabric-reveal",
      label: t.cinematicEffects.silkFabricReveal,
    },
    {
      value: "curtain-reveal",
      label: t.cinematicEffects.luxuryCurtainReveal,
    },
    {
      value: "ink-transition",
      label: t.cinematicEffects.inkTransition,
    },
    {
      value: "paint-splash",
      label: t.cinematicEffects.paintSplash,
    },
    {
      value: "minimal-shadow",
      label: t.cinematicEffects.minimalShadowStudio,
    },
    {
      value: "clean-white-studio",
      label: t.cinematicEffects.cleanWhiteStudio,
    },
    {
      value: "dark-studio",
      label: t.cinematicEffects.darkCinematicStudio,
    },
  ];

  const platformOptions = [
    {
      value: "instagram-post",
      label: t.platforms.instagramPost,
    },
    {
      value: "instagram-reel",
      label: t.platforms.instagramReels,
    },
    {
      value: "instagram-story",
      label: t.platforms.instagramStory,
    },
    {
      value: "instagram-landscape",
      label: t.platforms.instagramLandscape,
    },
    {
      value: "tiktok",
      label: t.platforms.tiktokVideo,
    },
    {
      value: "facebook-post",
      label: t.platforms.facebookPost,
    },
    {
      value: "facebook-reel",
      label: t.platforms.facebookReels,
    },
    {
      value: "facebook-story",
      label: t.platforms.facebookStory,
    },
    {
      value: "facebook-video",
      label: t.platforms.facebookVideo,
    },
    {
      value: "youtube-video",
      label: t.platforms.youtubeVideo,
    },
    {
      value: "youtube-shorts",
      label: t.platforms.youtubeShorts,
    },
    {
      value: "youtube-square",
      label: t.platforms.youtubeSquare,
    },
    {
      value: "snapchat-story",
      label: t.platforms.snapchatStory,
    },
    {
      value: "snapchat-ad",
      label: t.platforms.snapchatAd,
    },
    {
      value: "pinterest-pin",
      label: t.platforms.pinterestPin,
    },
    {
      value: "pinterest-video",
      label: t.platforms.pinterestVideo,
    },
    {
      value: "linkedin-post",
      label: t.platforms.linkedinPost,
    },
    {
      value: "linkedin-video",
      label: t.platforms.linkedinVideo,
    },
    {
      value: "x-post",
      label: t.platforms.xPost,
    },
    {
      value: "x-video",
      label: t.platforms.xVideo,
    },
    {
      value: "amazon-product",
      label: t.platforms.amazonProduct,
    },
    {
      value: "amazon-square",
      label: t.platforms.amazonSquare,
    },
    {
      value: "shopify",
      label: t.platforms.shopifyProduct,
    },
    {
      value: "website-banner",
      label: t.platforms.websiteBanner,
    },
    {
      value: "vertical-ad",
      label: t.platforms.verticalAd,
    },
    {
      value: "square-ad",
      label: t.platforms.squareAd,
    },
    {
      value: "landscape-ad",
      label: t.platforms.landscapeAd,
    },
  ];

  const handleProductUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProductImage(imageUrl);
  };

  const handleLogoUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setBrandLogo(imageUrl);
  };

  return (
    <div className={styles.layout}>
      {/* ================= SIDEBAR ================= */}

      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={145}
            height={55}
            priority
            className={styles.logo}
          />
        </div>

        <nav className={styles.sidebarMenu}>
          <Link
            href="/ads/dashboard"
            className={styles.menuItem}
          >
            <span>⌂</span>
            {t.sidebar.dashboard}
          </Link>

          <Link
            href="/ads/generate-image"
            className={styles.menuItem}
          >
            <span>▧</span>
            {t.sidebar.generateImage}
          </Link>

          <Link
            href="/ads/generate-video"
            className={styles.menuItem}
          >
            <span>▷</span>
            {t.sidebar.generateVideo}
          </Link>

          <Link
            href="/ads/avatar"
            className={styles.menuItem}
          >
            <span>♙</span>
            {t.sidebar.createAvatar}
          </Link>

          <Link
            href="/ads/avatar/avatar-video"
            className={styles.menuItem}
          >
            <span>◉</span>
            {t.sidebar.avatarVideo}
          </Link>

          <Link
           href="/ads/upgrade-plan"
            className={`${styles.menuItem} ${styles.activeMenu}`}
          >
            <span>♕</span>

            {t.sidebar.goldenPlan}

            <small className={styles.newBadge}>
              {t.sidebar.newBadge}
            </small>
          </Link>

          <Link
            href="/ads/hashtags"
            className={styles.menuItem}
          >
            <span>◌</span>
            {t.sidebar.captionsHashtags}
          </Link>

          <Link
            href="/ads/brand-overlay"
            className={styles.menuItem}
          >
            <span>◇</span>
            {t.sidebar.brandOverlay}
          </Link>

          <Link
            href="/ads/promo-slides"
            className={styles.menuItem}
          >
            <span>▤</span>
            {t.sidebar.promoSlides}
          </Link>

          <p className={styles.menuTitle}>
            {t.sidebar.analytics}
          </p>

          <Link
            href="/ads/advisory-consultation"
            className={styles.menuItem}
          >
            <span>⌁</span>
            {t.sidebar.advisoryAnalysis}
          </Link>

          <Link
            href="/ads/academy-insight"
            className={styles.menuItem}
          >
            <span>▣</span>
            {t.sidebar.academyInsight}
          </Link>

          <p className={styles.menuTitle}>
            {t.sidebar.account}
          </p>

          <Link
          href="/ads/upgrade-plan"
            className={styles.menuItem}
          >
            <span>☷</span>
            {t.sidebar.creditsPlan}
          </Link>

          <Link
            href="/transactions"
            className={styles.menuItem}
          >
            <span>◌</span>
            {t.sidebar.transactions}
          </Link>

          <Link
            href="/ads/settings"
            className={styles.menuItem}
          >
            <span>⚙</span>
            {t.sidebar.settings}
          </Link>
        </nav>

        <div className={styles.sidebarPlan}>
          <h3>{t.sidebarPlan.title}</h3>

          <strong>
            {t.sidebarPlan.subtitle}
          </strong>

          <p>
            {t.sidebarPlan.description}
          </p>

          <Link href="/ads/upgrade-plan">
            {t.sidebarPlan.button}
            <span>→</span>
          </Link>
        </div>

        <div className={styles.userBox}>
          <span className={styles.userAvatar}>
            S
          </span>

          <div>
            <strong>
              {t.sidebarPlan.userName}
            </strong>

            <small>
              {t.sidebarPlan.userPlan}
            </small>
          </div>
        </div>
      </aside>

      {/* ================= PAGE ================= */}

      <main className={styles.page}>
        {/* ================= HEADER ================= */}

        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <span className={styles.goldenLabel}>
              ♕ {t.header.label}
            </span>

            <h1>{t.header.title}</h1>

            <p>{t.header.subtitle}</p>
          </div>

          <div className={styles.headerActions}>
            <div className={styles.creditBox}>
              <span>⚡</span>
              {t.header.credits}
            </div>

            <Link
              href="/upgrade-plan"
              className={styles.addCredits}
            >
              <span>＋</span>
              {t.header.addCredits}
            </Link>

            <button
              type="button"
              className={styles.profileButton}
            >
              S
            </button>
          </div>
        </header>

        {/* ================= MAIN AREA ================= */}

        <div className={styles.mainGrid}>
          {/* ================= EDITOR ================= */}

          <section className={styles.editorPanel}>
            {/* PRODUCT IMAGE */}

            <div className={styles.formGroup}>
              <div className={styles.fieldTitle}>
                <b>1</b>

                <span>
                  {t.form.productImage}
                </span>

                <small>ⓘ</small>
              </div>

              <button
                type="button"
                className={styles.uploadBox}
                onClick={() =>
                  productInputRef.current?.click()
                }
              >
                <input
                  ref={productInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleProductUpload}
                  hidden
                />

                <div className={styles.smallPreview}>
                  <Image
                    src={
                      productImage ??
                      "/assets/icons/ADS/golden plan/axe.png"
                    }
                    alt={t.mediaAlt.uploadedProduct}
                    fill
                    className={styles.uploadedImage}
                  />
                </div>

                <span className={styles.uploadIcon}>
                  ⇧
                </span>

                <div>
                  <strong>
                    {t.form.uploadProduct}
                  </strong>

                  <small>
                    {t.form.productFormats}
                  </small>
                </div>
              </button>
            </div>

            {/* BRAND LOGO */}

            <div className={styles.formGroup}>
              <div className={styles.fieldTitle}>
                <b>2</b>

                <span>{t.form.brandLogo}</span>

                <small>ⓘ</small>
              </div>

              <button
                type="button"
                className={styles.uploadBox}
                onClick={() =>
                  logoInputRef.current?.click()
                }
              >
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                  onChange={handleLogoUpload}
                  hidden
                />

                <div className={styles.smallPreview}>
                  {brandLogo ? (
                    <Image
                      src={brandLogo}
                      alt={
                        t.mediaAlt
                          .uploadedBrandLogo
                      }
                      fill
                      className={
                        styles.uploadedImage
                      }
                    />
                  ) : (
                    <span
                      className={
                        styles.sampleBrandLogo
                      }
                    >
                      ♕
                      <small>SELLOVA</small>
                    </span>
                  )}
                </div>

                <span className={styles.uploadIcon}>
                  ⇧
                </span>

                <div>
                  <strong>
                    {t.form.uploadLogo}
                  </strong>

                  <small>
                    {t.form.logoFormats}
                  </small>
                </div>
              </button>
            </div>

            {/* BRAND NAME */}

            <label className={styles.inputRow}>
              <span className={styles.fieldTitle}>
                <b>3</b>
                <span>{t.form.brandName}</span>
              </span>

              <input
                value={brandName}
                onChange={(event) =>
                  setBrandName(event.target.value)
                }
              />
            </label>

            {/* PRODUCT NAME */}

            <label className={styles.inputRow}>
              <span className={styles.fieldTitle}>
                <b>4</b>
                <span>{t.form.productName}</span>
              </span>

              <input
                value={productName}
                onChange={(event) =>
                  setProductName(event.target.value)
                }
              />
            </label>

            {/* SLOGAN */}

            <label className={styles.inputRow}>
              <span className={styles.fieldTitle}>
                <b>5</b>

                <span>
                  {t.form.advertisingSlogan}
                </span>
              </span>

              <div className={styles.sloganInput}>
                <input
                  value={slogan}
                  maxLength={100}
                  onChange={(event) =>
                    setSlogan(event.target.value)
                  }
                />

                <small>
                  {slogan.length}/100
                </small>
              </div>
            </label>

            {/* MUSIC LANGUAGE */}

            <label className={styles.inputRow}>
              <span className={styles.fieldTitle}>
                <b>6</b>

                <span>
                  {t.form.musicLanguage}
                </span>

                <small>ⓘ</small>
              </span>

              <select
                value={musicLanguage}
                onChange={(event) =>
                  setMusicLanguage(
                    event.target.value
                  )
                }
              >
                {languageOptions.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            {/* SINGER VOICE */}

            <div className={styles.voiceRow}>
              <span className={styles.fieldTitle}>
                <b>7</b>

                <span>
                  {t.form.singerVoice}
                </span>

                <small>ⓘ</small>
              </span>

              <div className={styles.voiceOptions}>
                <label
                  className={
                    singerVoice === "female"
                      ? styles.activeVoice
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name="singerVoice"
                    value="female"
                    checked={
                      singerVoice === "female"
                    }
                    onChange={() =>
                      setSingerVoice("female")
                    }
                  />

                  <span>♀</span>
                  {t.form.female}
                </label>

                <label
                  className={
                    singerVoice === "male"
                      ? styles.activeVoice
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name="singerVoice"
                    value="male"
                    checked={
                      singerVoice === "male"
                    }
                    onChange={() =>
                      setSingerVoice("male")
                    }
                  />

                  <span>♂</span>
                  {t.form.male}
                </label>
              </div>
            </div>

            {/* MUSIC STYLE */}

            <label className={styles.inputRow}>
              <span className={styles.fieldTitle}>
                <b>8</b>

                <span>
                  {t.form.musicStyle}
                </span>

                <small>ⓘ</small>
              </span>

              <select
                value={musicStyle}
                onChange={(event) =>
                  setMusicStyle(event.target.value)
                }
              >
                {musicStyleOptions.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            {/* CINEMATIC EFFECT */}

            <label className={styles.inputRow}>
              <span className={styles.fieldTitle}>
                <b>9</b>

                <span>
                  {t.form.cinematicEffect}
                </span>

                <small>ⓘ</small>
              </span>

              <select
                value={cinematicEffect}
                onChange={(event) =>
                  setCinematicEffect(
                    event.target.value
                  )
                }
              >
                {cinematicEffectOptions.map(
                  (item) => (
                    <option
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  )
                )}
              </select>
            </label>

            {/* PLATFORM */}

            <label className={styles.inputRow}>
              <span className={styles.fieldTitle}>
                <b>10</b>

                <span>{t.form.platform}</span>

                <small>ⓘ</small>
              </span>

              <select
                value={platform}
                onChange={(event) =>
                  setPlatform(event.target.value)
                }
              >
                {platformOptions.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className={styles.generateButton}
            >
              <span>♕</span>
              {t.form.generateButton}
            </button>
          </section>

          {/* ================= VIDEO PREVIEW ================= */}

          <section className={styles.previewSection}>
            <div className={styles.heroPreview}>
              <Image
                src="/assets/icons/ADS/golden plan/axe.png"
                alt={t.preview.imageAlt}
                fill
                priority
                className={styles.heroImage}
              />

              <button
                type="button"
                className={styles.playButton}
                aria-label={t.preview.playLabel}
              >
                ▶
              </button>

              <div className={styles.videoControls}>
                <span>▷</span>

                <span>
                  {t.preview.startTime}
                </span>

                <div className={styles.progressTrack}>
                  <span
                    className={styles.progressFill}
                  />

                  <span
                    className={styles.progressDot}
                  />
                </div>

                <span>
                  {t.preview.endTime}
                </span>

                <span>⛶</span>
              </div>
            </div>

            {/* INCLUDED FEATURES */}

            <div className={styles.includedFeatures}>
              <div>
                <span>♙</span>

                <p>
                  <strong>
                    {t.preview.aiAvatar}
                  </strong>

                  <small>
                    {t.preview.included}
                  </small>
                </p>
              </div>

              <div>
                <span>♫</span>

                <p>
                  <strong>
                    {t.preview.brandMusic}
                  </strong>

                  <small>
                    {t.preview.included}
                  </small>
                </p>
              </div>

              <div>
                <span>♕</span>

                <p>
                  <strong>
                    {t.preview.logoAnimation}
                  </strong>

                  <small>
                    {t.preview.included}
                  </small>
                </p>
              </div>

              <div>
                <span>✣</span>

                <p>
                  <strong>
                    {t.preview.cinematicEffects}
                  </strong>

                  <small>
                    {t.preview.included}
                  </small>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ================= INFORMATION ================= */}

        <section className={styles.informationGrid}>
          {/* DESCRIPTION */}

          <article className={styles.infoCard}>
            <h2>
              {t.commercialInfo.title}
            </h2>

            <p>
              {t.commercialInfo.description}
            </p>

            <div className={styles.qualityGrid}>
              <span>
                <b>♙</b>
                {t.commercialInfo.premiumQuality}
              </span>

              <span>
                <b>▷</b>
                {
                  t.commercialInfo
                    .cinematicStorytelling
                }
              </span>

              <span>
                <b>◎</b>
                {t.commercialInfo.brandFocused}
              </span>

              <span>
                <b>▥</b>
                {t.commercialInfo.highConversions}
              </span>
            </div>
          </article>

          {/* HOW IT WORKS */}

          <article className={styles.infoCard}>
            <h2 className={styles.goldTitle}>
              {t.howItWorks.title}
            </h2>

            <div className={styles.infoWithImage}>
              <ol className={styles.numberList}>
                <li>{t.howItWorks.step1}</li>
                <li>{t.howItWorks.step2}</li>
                <li>{t.howItWorks.step3}</li>
                <li>{t.howItWorks.step4}</li>
                <li>{t.howItWorks.step5}</li>
              </ol>

              <div className={styles.clapperImage}>
                <Image
                  src="/assets/icons/ADS/golden plan/arm.png"
                  alt={t.mediaAlt.clapperboard}
                  fill
                  className={styles.bottomImage}
                />
              </div>
            </div>
          </article>

          {/* WHAT YOU GET */}

          <article className={styles.infoCard}>
            <h2 className={styles.goldTitle}>
              {t.whatYouGet.title}
            </h2>

            <div className={styles.infoWithImage}>
              <ul className={styles.checkList}>
                <li>{t.whatYouGet.item1}</li>
                <li>{t.whatYouGet.item2}</li>
                <li>{t.whatYouGet.item3}</li>
                <li>{t.whatYouGet.item4}</li>
                <li>{t.whatYouGet.item5}</li>
                <li>{t.whatYouGet.item6}</li>
                <li>{t.whatYouGet.item7}</li>
              </ul>

              <div className={styles.girlImage}>
                <Image
                  src="/assets/icons/ADS/golden plan/girle.png"
                  alt={t.mediaAlt.avatar}
                  fill
                  className={styles.bottomImage}
                />
              </div>
            </div>
          </article>

          {/* FAQ */}

          <article className={styles.infoCard}>
            <h2>{t.faq.title}</h2>

            <details>
              <summary>
                {t.faq.question1}
              </summary>

              <p>{t.faq.answer1}</p>
            </details>

            <details>
              <summary>
                {t.faq.question2}
              </summary>

              <p>{t.faq.answer2}</p>
            </details>

            <details>
              <summary>
                {t.faq.question3}
              </summary>

              <p>{t.faq.answer3}</p>
            </details>

            <details>
              <summary>
                {t.faq.question4}
              </summary>

              <p>{t.faq.answer4}</p>
            </details>

            <details>
              <summary>
                {t.faq.question5}
              </summary>

              <p>{t.faq.answer5}</p>
            </details>
          </article>
        </section>

        {/* ================= BOTTOM BANNER ================= */}

        <section className={styles.bottomBanner}>
          <div>
            <h2>
              ♕ {t.bottomBanner.title}
            </h2>

            <p>
              {t.bottomBanner.description}
            </p>
          </div>

          <div className={styles.bannerAction}>
            <button type="button">
              {t.bottomBanner.getStarted}
              <b>→</b>
            </button>
          </div>
        </section>

        {/* ================= FOOTER ================= */}

        <footer className={styles.footer}>
          <span>
            {t.footer.copyright}
          </span>

          <nav>
            <Link href="/terms">
              {t.footer.terms}
            </Link>

            <Link href="/privacy">
              {t.footer.privacy}
            </Link>

            <Link href="/refund">
              {t.footer.refund}
            </Link>

            <Link href="/contact">
              {t.footer.contact}
            </Link>
          </nav>

          <div className={styles.socialLinks}>
            <span>f</span>
            <span>◎</span>
            <span>♪</span>
            <span>▶</span>
          </div>
        </footer>
      </main>
    </div>
  );
}