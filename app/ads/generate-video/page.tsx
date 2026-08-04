"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaShopify,
  FaAmazon,
  FaStore,
} from "react-icons/fa";

import { useLang } from "../../../lib/lang";
import styles from "./generate-video.module.css";


export default function GenerateVideoPage() {
  const { locale, messages } = useLang();
  const t = messages.generateVideo;

  const [platform, setPlatform] =
    useState("instagramStory");

  const [selectedStyle, setSelectedStyle] =
    useState("luxury");

  const [prompt, setPrompt] = useState("");

  const [showAllStyles, setShowAllStyles] =
    useState(false);

  const [duration, setDuration] =
    useState("10");

  const [openFaq, setOpenFaq] =
    useState<number | null>(null);


  const videoFaqs = t.faq.questions;


  const videoStyles = [
    {
      key: "luxury",
      label: t.style.options.luxury,
      icon: "♛",
    },
    {
      key: "modern",
      label: t.style.options.modern,
      icon: "◇",
    },
    {
      key: "minimal",
      label: t.style.options.minimal,
      icon: "⬡",
    },
    {
      key: "commercial",
      label: t.style.options.commercial,
      icon: "▣",
    },
    {
      key: "cinematic",
      label: t.style.options.cinematic,
      icon: "◈",
    },
    {
      key: "fashion",
      label: t.style.options.fashion,
      icon: "✦",
    },
    {
      key: "beauty",
      label: t.style.options.beauty,
      icon: "✧",
    },
    {
      key: "technology",
      label: t.style.options.technology,
      icon: "⌁",
    },
    {
      key: "automotive",
      label: t.style.options.automotive,
      icon: "◉",
    },
    {
      key: "food",
      label: t.style.options.food,
      icon: "♨",
    },
    {
      key: "jewelry",
      label: t.style.options.jewelry,
      icon: "♢",
    },
    {
      key: "darkLuxury",
      label: t.style.options.darkLuxury,
      icon: "◆",
    },
  ];


  const platformNames: Record<string, string> = {
    instagramStory:
      t.platform.shortNames.instagramStory,

    instagramReels:
      t.platform.shortNames.instagramReels,

    instagramPost:
      t.platform.shortNames.instagramPost,

    facebook:
      t.platform.shortNames.facebook,

    tiktok:
      t.platform.shortNames.tiktok,

    youtube:
      t.platform.shortNames.youtube,

    youtubeShorts:
      t.platform.shortNames.youtubeShorts,

    amazon:
      t.platform.shortNames.amazon,
  };


  const writePromptWithAI = () => {
    const platformName =
      platformNames[platform] ||
      t.platform.shortNames.instagramStory;

    setPrompt(
      `${t.prompt.aiTemplateStart} ${duration}-${t.generate.seconds.toLowerCase()} ${selectedStyle} ${t.prompt.aiTemplateMiddle} ${platformName}. ${t.prompt.aiTemplateEnd}`
    );
  };


  return (
    <main
      className={styles.page}
      dir={locale === "fa" ? "rtl" : "ltr"}
    >

      {/* SIDEBAR */}

      <aside className={styles.sidebar}>

        <div className={styles.logoBox}>

          <Image
            src="/logo.png"
            alt="Sellova"
            width={125}
            height={60}
            className={styles.logo}
            priority
          />

        </div>

                {/* MAIN MENU */}

        <nav className={styles.sidebarMenu}>

          <Link
           href="/ads/dashboard"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>⌂</span>
            {t.sidebar.dashboard}
          </Link>


          <Link
            href="/ads/generate-image"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>▧</span>
            {t.sidebar.generateImage}
          </Link>


          <Link
            href="/ads/generate-video"
            className={`${styles.menuItem} ${styles.activeItem}`}
          >
            <span className={styles.menuIcon}>▣</span>
            {t.sidebar.generateVideo}
          </Link>


          <Link
            href="/ads/avatar"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>♙</span>
            {t.sidebar.createAvatar}
          </Link>


          <Link
            href="/ads/hashtags"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>♧</span>
            {t.sidebar.captionsHashtags}
          </Link>


          <Link
            href="/ads/brand-overlay"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>▱</span>
            {t.sidebar.brandOverlay}
          </Link>


          <Link
            href="/ads/promo-slides"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>▣</span>
            {t.sidebar.promoSlides}
          </Link>

        </nav>


        {/* ANALYTICS */}

        <div className={styles.menuSection}>

          <p className={styles.sectionTitle}>
            {t.sidebar.analyticsTitle}
          </p>


          <Link
            href="/ads/advisory"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>♧</span>
            {t.sidebar.advisoryAnalysis}
          </Link>


          <Link
            href="/ads/academy"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>◇</span>
            {t.sidebar.academyInsight}
          </Link>

        </div>


        {/* ACCOUNT */}

        <div className={styles.menuSection}>

          <p className={styles.sectionTitle}>
            {t.sidebar.accountTitle}
          </p>


          <Link
            href="/upgrade-plan"
            className={styles.goldenItem}
          >
            <span className={styles.menuIcon}>♛</span>
            {t.sidebar.goldenPlan}
          </Link>


          <Link
            href="/upgrade-plan"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>◇</span>
            {t.sidebar.upgradePlan}
          </Link>


          <Link
            href="/settings"
            className={styles.menuItem}
          >
            <span className={styles.menuIcon}>⚙</span>
            {t.sidebar.settings}
          </Link>

        </div>

      </aside>


      {/* PAGE CONTENT */}

      <section className={styles.content}>

        {/* HEADER */}

        <header className={styles.header}>

          <div className={styles.headerTitle}>

            <h1>
              {t.header.title}
              <span> ✨</span>
            </h1>

            <p>
              {t.header.subtitle}
            </p>

          </div>


          <div className={styles.headerActions}>

            <div className={styles.creditBox}>

              <span className={styles.creditIcon}>
                ⚡
              </span>

              <strong>2,540</strong>

              <small>
                {t.header.credits}
              </small>

            </div>


            <Link
              href="/upgrade-plan"
              className={styles.addCreditsButton}
            >
              ＋ {t.header.addCredits}
            </Link>


            <div className={styles.headerProfile}>
              S
            </div>

          </div>

        </header>


        {/* HOW IT WORKS */}

        <div className={styles.howButtonRow}>

          <Link
            href="/ads/guide"
            className={styles.howButton}
          >
            ▷ {t.header.howItWorks}
          </Link>

        </div>


        {/* MAIN VIDEO AREA */}

        <section className={styles.videoWorkspace}>

          {/* LEFT PANEL */}

          <div className={styles.leftPanel}>

                      {/* STEP 1 - UPLOAD */}

            <div className={styles.uploadCard}>

              <div className={styles.cardTitle}>

                <span className={styles.stepNumber}>
                  1
                </span>

                <h3>
                  {t.upload.title}
                </h3>

                <span
                  className={styles.infoIcon}
                  title={t.upload.info}
                >
                  ⓘ
                </span>

              </div>


              <label className={styles.uploadBox}>

                <div className={styles.uploadIcon}>
                  ↑
                </div>

                <strong>
                  {t.upload.dragDrop}
                </strong>

                <p>
                  {t.upload.or}{" "}
                  <span>
                    {t.upload.browse}
                  </span>
                </p>

                <small>
                  {t.upload.formats}
                </small>

                <input
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  hidden
                />

              </label>

            </div>


            {/* STEP 2 - PLATFORM */}

            <div className={styles.optionCard}>

              <div className={styles.cardTitle}>

                <span className={styles.stepNumber}>
                  2
                </span>

                <h3>
                  {t.platform.title}
                </h3>

              </div>


              <div className={styles.selectWrapper}>

                <span className={styles.platformIcon}>
                  ◎
                </span>

                <select
                  className={styles.platformSelect}
                  value={platform}
                  onChange={(event) =>
                    setPlatform(event.target.value)
                  }
                >

                  <option value="instagramStory">
                    {t.platform.options.instagramStory}
                  </option>

                  <option value="instagramReels">
                    {t.platform.options.instagramReels}
                  </option>

                  <option value="instagramPost">
                    {t.platform.options.instagramPost}
                  </option>

                  <option value="facebook">
                    {t.platform.options.facebook}
                  </option>

                  <option value="tiktok">
                    {t.platform.options.tiktok}
                  </option>

                  <option value="youtube">
                    {t.platform.options.youtube}
                  </option>

                  <option value="youtubeShorts">
                    {t.platform.options.youtubeShorts}
                  </option>

                  <option value="amazon">
                    {t.platform.options.amazon}
                  </option>

                </select>

              </div>

            </div>


            {/* STEP 3 - STYLE */}

            <div className={styles.optionCard}>

              <div className={styles.optionCardHeader}>

                <div className={styles.cardTitle}>

                  <span className={styles.stepNumber}>
                    3
                  </span>

                  <h3>
                    {t.style.title}
                  </h3>

                </div>


                <button
                  type="button"
                  className={styles.seeAllButton}
                  onClick={() =>
                    setShowAllStyles(!showAllStyles)
                  }
                >
                  {showAllStyles
                    ? t.style.showLess
                    : t.style.seeAll}
                </button>

              </div>


              <div className={styles.styleButtons}>

                {videoStyles
                  .slice(
                    0,
                    showAllStyles
                      ? videoStyles.length
                      : 4
                  )
                  .map((style) => (

                    <button
                      type="button"
                      key={style.key}
                      className={`${styles.styleButton} ${
                        selectedStyle === style.key
                          ? styles.selectedOption
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedStyle(style.key)
                      }
                    >
                      <span>
                        {style.icon}
                      </span>

                      {style.label}
                    </button>

                  ))}

              </div>

            </div>
                        {/* STEP 4 - PROMPT */}

            <div className={styles.optionCard}>

              <div className={styles.cardTitle}>

                <span className={styles.stepNumber}>
                  4
                </span>

                <h3>
                  {t.prompt.title}{" "}
                  <small>
                    ({t.prompt.optional})
                  </small>
                </h3>

              </div>


              <div className={styles.promptRow}>

                <textarea
                  className={styles.promptBox}
                  value={prompt}
                  onChange={(event) =>
                    setPrompt(event.target.value)
                  }
                  placeholder={t.prompt.placeholder}
                  maxLength={500}
                />


                <button
                  type="button"
                  className={styles.suggestButton}
                  onClick={writePromptWithAI}
                >
                  ✨ {t.prompt.askAI}
                </button>

              </div>


              <div className={styles.promptCount}>
                {prompt.length} / 500
              </div>

            </div>


            {/* GENERATE VIDEO */}

            <div className={styles.generateSection}>

              <button
                type="button"
                className={styles.generateButton}
              >
                {t.generate.button} ✨
              </button>

              <p>
                ⚡ 20 {t.generate.credits}{" "}
                {duration} {t.generate.seconds}
              </p>

            </div>


            {/* WHY USE AI VIDEO ADS */}

            <div className={styles.whyVideoCard}>

              <h3>
                {t.benefits.title}
              </h3>


              <div className={styles.whyVideoItems}>

                <div className={styles.whyVideoItem}>

                  <div className={styles.whyVideoIcon}>
                    ⚡
                  </div>

                  <h4>
                    {t.benefits.fasterCreation.title}
                  </h4>

                  <p>
                    {t.benefits.fasterCreation.description}
                  </p>

                </div>


                <div className={styles.whyVideoItem}>

                  <div className={styles.whyVideoIcon}>
                    📈
                  </div>

                  <h4>
                    {t.benefits.betterEngagement.title}
                  </h4>

                  <p>
                    {t.benefits.betterEngagement.description}
                  </p>

                </div>


                <div className={styles.whyVideoItem}>

                  <div className={styles.whyVideoIcon}>
                    👁
                  </div>

                  <h4>
                    {t.benefits.moreVisibility.title}
                  </h4>

                  <p>
                    {t.benefits.moreVisibility.description}
                  </p>

                </div>


                <div className={styles.whyVideoItem}>

                  <div className={styles.whyVideoIcon}>
                    ＄
                  </div>

                  <h4>
                    {t.benefits.lowerCosts.title}
                  </h4>

                  <p>
                    {t.benefits.lowerCosts.description}
                  </p>

                </div>

              </div>


              {/* VIDEO DURATION */}

              <div className={styles.durationCard}>

                <h3>
                  {t.duration.title}
                </h3>

                <p>
                  {t.duration.subtitle}
                </p>

                <div className={styles.durationChoices}>

                  {[
                    {
                      value: "5",
                      label: t.duration.five,
                    },
                    {
                      value: "10",
                      label: t.duration.ten,
                    },
                    {
                      value: "15",
                      label: t.duration.fifteen,
                    },
                  ].map((time) => (

                    <button
                      key={time.value}
                      type="button"
                      className={
                        duration === time.value
                          ? styles.activeDuration
                          : ""
                      }
                      onClick={() =>
                        setDuration(time.value)
                      }
                    >
                      <span>◷</span>

                      <div>
                        <strong>
                          {time.label}
                        </strong>

                        <small>
                          {t.duration.seconds}
                        </small>
                      </div>

                    </button>

                  ))}

                </div>

              </div>

            </div>


            {/* END LEFT PANEL */}

          </div>
                    {/* RIGHT PANEL */}

          <div className={styles.rightPanel}>

            <div className={styles.previewCard}>

              {/* PREVIEW HEADER */}

              <div className={styles.previewHeader}>

                <h3>
                  {t.preview.title}
                  <span> ✨</span>
                </h3>


                <div className={styles.previewActions}>

                  <button type="button">
                    {t.preview.download} ↓
                  </button>

                  <button type="button">
                    {t.preview.fullscreen} ⛶
                  </button>

                  <button type="button">
                    •••
                  </button>

                </div>

              </div>


              {/* PREVIEW IMAGE */}

              <div className={styles.previewImage}>

                <Image
                  src="/assets/icons/ADS/video/por.png"
                  alt={t.preview.imageAlt}
                  fill
                  priority
                  quality={100}
                  className={styles.perfumeImage}
                />


                {/* VIDEO CONTROLS */}

                <div className={styles.videoControls}>

                  <button
                    type="button"
                    className={styles.playButton}
                    aria-label={t.preview.controls.play}
                  >
                    ▶
                  </button>


                  <span className={styles.videoTime}>
                    0:02 / 0:{duration.padStart(2, "0")}
                  </span>


                  <div className={styles.progressBar}>

                    <div className={styles.progressPlayed}>

                      <span
                        className={styles.progressHandle}
                      ></span>

                    </div>

                  </div>


                  <button
                    type="button"
                    className={styles.controlButton}
                    aria-label={t.preview.controls.volume}
                  >
                    🔊
                  </button>


                  <button
                    type="button"
                    className={styles.controlButton}
                    aria-label={t.preview.controls.settings}
                  >
                    ⚙
                  </button>


                  <button
                    type="button"
                    className={styles.controlButton}
                    aria-label={t.preview.controls.fullscreen}
                  >
                    ⛶
                  </button>

                </div>

              </div>


              {/* VIDEO INFORMATION */}

              <div className={styles.videoInfo}>

                {/* PLATFORM */}

                <div className={styles.videoInfoItem}>

                  <span>▧</span>

                  <div>
                    <small>
                      {t.information.platform}
                    </small>

                    <strong>
                      {platformNames[platform]}
                    </strong>
                  </div>

                </div>


                {/* DURATION */}

                <div className={styles.videoInfoItem}>

                  <span>◷</span>

                  <div>
                    <small>
                      {t.information.duration}
                    </small>

                    <strong>
                      {duration}{" "}
                      {t.information.seconds}
                    </strong>
                  </div>

                </div>


                {/* STYLE */}

                <div className={styles.videoInfoItem}>

                  <span>♛</span>

                  <div>
                    <small>
                      {t.information.style}
                    </small>

                    <strong>
                      {
                        videoStyles.find(
                          (style) =>
                            style.key === selectedStyle
                        )?.label
                      }
                    </strong>
                  </div>

                </div>


                {/* OUTPUT */}

                <div className={styles.videoInfoItem}>

                  <span>▣</span>

                  <div>
                    <small>
                      {t.information.output}
                    </small>

                    <strong>
                      {t.information.oneVideo}
                    </strong>
                  </div>

                </div>


                {/* COST */}

                <div className={styles.videoInfoItem}>

                  <span>ϟ</span>

                  <div>
                    <small>
                      {t.information.cost}
                    </small>

                    <strong>
                      20 {t.information.credits}
                    </strong>
                  </div>

                </div>

              </div>
                            {/* AI SUGGESTIONS */}

              <div className={styles.suggestionCards}>

                {/* SUGGESTED CAPTION */}

                <div className={styles.suggestionCard}>

                  <div className={styles.suggestionHeader}>

                    <div>
                      <span>✨</span>

                      <h3>
                        {t.suggestions.captionTitle}
                      </h3>
                    </div>


                    <button
                      type="button"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          t.suggestions.caption
                        )
                      }
                    >
                      {t.suggestions.copy}
                    </button>

                  </div>


                  <p>
                    {t.suggestions.caption}
                  </p>

                </div>


                {/* SUGGESTED HASHTAGS */}

                <div className={styles.suggestionCard}>

                  <div className={styles.suggestionHeader}>

                    <div>
                      <span>#</span>

                      <h3>
                        {t.suggestions.hashtagTitle}
                      </h3>
                    </div>


                    <button
                      type="button"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          t.suggestions.hashtags.join(" ")
                        )
                      }
                    >
                      {t.suggestions.copy}
                    </button>

                  </div>


                  <div className={styles.hashtagList}>

                    {t.suggestions.hashtags.map(
                      (hashtag) => (
                        <span key={hashtag}>
                          {hashtag}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* BOTTOM VIDEO CARDS */}

        <section className={styles.bottomVideoCards}>

          {/* BEST VIDEO STYLES */}

          <div className={styles.bestStylesCard}>

            <div className={styles.bottomCardHeader}>

              <h3>
                {t.bestStyles.title}
              </h3>

              <button type="button">
                {t.bestStyles.viewAll}
              </button>

            </div>


            <div className={styles.bestStylesGrid}>

              {/* LUXURY */}

              <div className={styles.bestStyleItem}>

                <div className={styles.bestStyleImage}>

                  <Image
                    src="/assets/icons/ADS/video/perfiom.png"
                    alt={t.bestStyles.luxury.title}
                    fill
                    className={styles.bestStyleImg}
                  />

                </div>

                <h4>
                  {t.bestStyles.luxury.title}
                </h4>

                <p>
                  {t.bestStyles.luxury.description}
                </p>

              </div>


              {/* MODERN */}

              <div className={styles.bestStyleItem}>

                <div className={styles.bestStyleImage}>

                  <Image
                    src="/assets/icons/ADS/video/hedphon.png"
                    alt={t.bestStyles.modern.title}
                    fill
                    className={styles.bestStyleImg}
                  />

                </div>

                <h4>
                  {t.bestStyles.modern.title}
                </h4>

                <p>
                  {t.bestStyles.modern.description}
                </p>

              </div>
                            {/* MINIMAL */}

              <div className={styles.bestStyleItem}>

                <div className={styles.bestStyleImage}>

                  <Image
                    src="/assets/icons/ADS/video/sofa.png"
                    alt={t.bestStyles.minimal.title}
                    fill
                    className={styles.bestStyleImg}
                  />

                </div>

                <h4>
                  {t.bestStyles.minimal.title}
                </h4>

                <p>
                  {t.bestStyles.minimal.description}
                </p>

              </div>


              {/* COMMERCIAL */}

              <div className={styles.bestStyleItem}>

                <div className={styles.bestStyleImage}>

                  <Image
                    src="/assets/icons/ADS/video/car.png"
                    alt={t.bestStyles.commercial.title}
                    fill
                    className={styles.bestStyleImg}
                  />

                </div>

                <h4>
                  {t.bestStyles.commercial.title}
                </h4>

                <p>
                  {t.bestStyles.commercial.description}
                </p>

              </div>

            </div>

          </div>


          {/* SUPPORTED PLATFORMS */}

          <div className={styles.supportedCard}>

            <h3>
              {t.supportedPlatforms.title}
            </h3>


            <div className={styles.supportedGrid}>

              {/* INSTAGRAM REELS */}

              <div className={styles.supportedItem}>

                <span className={styles.instagramIcon}>
                  <FaInstagram />
                </span>

                <p>
                  {
                    t.supportedPlatforms
                      .instagramReels.firstLine
                  }

                  <br />

                  {
                    t.supportedPlatforms
                      .instagramReels.secondLine
                  }
                </p>

              </div>


              {/* INSTAGRAM STORIES */}

              <div className={styles.supportedItem}>

                <span className={styles.instagramIcon}>
                  <FaInstagram />
                </span>

                <p>
                  {
                    t.supportedPlatforms
                      .instagramStories.firstLine
                  }

                  <br />

                  {
                    t.supportedPlatforms
                      .instagramStories.secondLine
                  }
                </p>

              </div>


              {/* TIKTOK */}

              <div className={styles.supportedItem}>

                <span className={styles.tiktokIcon}>
                  <FaTiktok />
                </span>

                <p>
                  {
                    t.supportedPlatforms
                      .tiktok.firstLine
                  }

                  {t.supportedPlatforms.tiktok.secondLine && (
                    <>
                      <br />

                      {
                        t.supportedPlatforms
                          .tiktok.secondLine
                      }
                    </>
                  )}
                </p>

              </div>


              {/* FACEBOOK */}

              <div className={styles.supportedItem}>

                <span className={styles.facebookIcon}>
                  <FaFacebookF />
                </span>

                <p>
                  {
                    t.supportedPlatforms
                      .facebookAds.firstLine
                  }

                  <br />

                  {
                    t.supportedPlatforms
                      .facebookAds.secondLine
                  }
                </p>

              </div>


              {/* YOUTUBE */}

              <div className={styles.supportedItem}>

                <span className={styles.youtubeIcon}>
                  <FaYoutube />
                </span>

                <p>
                  {
                    t.supportedPlatforms
                      .youtubeShorts.firstLine
                  }

                  <br />

                  {
                    t.supportedPlatforms
                      .youtubeShorts.secondLine
                  }
                </p>

              </div>
                            {/* SHOPIFY */}

              <div className={styles.supportedItem}>

                <span className={styles.shopifyIcon}>
                  <FaShopify />
                </span>

                <p>
                  {
                    t.supportedPlatforms
                      .shopifyStores.firstLine
                  }

                  <br />

                  {
                    t.supportedPlatforms
                      .shopifyStores.secondLine
                  }
                </p>

              </div>


              {/* AMAZON */}

              <div className={styles.supportedItem}>

                <span className={styles.amazonIcon}>
                  <FaAmazon />
                </span>

                <p>
                  {
                    t.supportedPlatforms
                      .amazonListings.firstLine
                  }

                  <br />

                  {
                    t.supportedPlatforms
                      .amazonListings.secondLine
                  }
                </p>

              </div>


              {/* ONLINE STORES */}

              <div className={styles.supportedItem}>

                <span className={styles.storeIcon}>
                  <FaStore />
                </span>

                <p>
                  {
                    t.supportedPlatforms
                      .onlineStores.firstLine
                  }

                  <br />

                  {
                    t.supportedPlatforms
                      .onlineStores.secondLine
                  }
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* LAST ROW */}

        <section className={styles.lastVideoRow}>

          {/* FREQUENTLY ASKED QUESTIONS */}

          <div className={styles.faqCard}>

            <h3>
              {t.faq.title}
            </h3>


            <div className={styles.faqGrid}>

              {videoFaqs.map(
                (question, index) => (

                  <div
                    className={styles.faqItem}
                    key={`${question}-${index}`}
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(
                          openFaq === index
                            ? null
                            : index
                        )
                      }
                    >

                      <span>
                        {question}
                      </span>

                      <strong>
                        {openFaq === index
                          ? "−"
                          : "+"}
                      </strong>

                    </button>


                    {openFaq === index && (

                      <p>
                        {t.faq.defaultAnswer}
                      </p>

                    )}

                  </div>

                )
              )}

            </div>

          </div>
                    {/* COFFEE CARD */}

          <div className={styles.coffeeVideoCard}>

            <div className={styles.coffeeVideoContent}>

              <h2>
                {t.coffeeCard.titleFirstLine}

                <br />

                {t.coffeeCard.titleSecondLine}
              </h2>


              <strong>
                {t.coffeeCard.highlight}
              </strong>


              <p>
                {t.coffeeCard.description}
              </p>


              <button type="button">
                {t.coffeeCard.button}
              </button>

            </div>


            <div className={styles.coffeeVideoImage}>

              <Image
                src="/assets/icons/ADS/video/coffe.png"
                alt={t.coffeeCard.imageAlt}
                fill
                className={styles.coffeeImg}
              />

            </div>

          </div>

        </section>

      </section>

    </main>
  );
}