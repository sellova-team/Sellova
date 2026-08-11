"use client";

import Image from "next/image";
import Link from "next/link";
import { FiUpload, FiPlus } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useLang } from "../../../lib/lang";
import styles from "./generate-image.module.css";

export default function GenerateImagePage() {
  const { messages } = useLang();
  const t = messages.generateImage;

  const pathname = usePathname();

  const [showPlatforms, setShowPlatforms] = useState(false);
  const [showStyles, setShowStyles] = useState(false);

  const [selectedPlatform, setSelectedPlatform] =
    useState("instagram");

  const [selectedStyle, setSelectedStyle] =
    useState("luxury");

  const platforms = [
    {
      key: "instagram",
      label: t.platform.options.instagram,
    },
    {
      key: "facebook",
      label: t.platform.options.facebook,
    },
    {
      key: "tiktok",
      label: t.platform.options.tiktok,
    },
    {
      key: "youtube",
      label: t.platform.options.youtube,
    },
    {
      key: "instagramStory",
      label: t.platform.options.instagramStory,
    },
    {
      key: "instagramPortrait",
      label: t.platform.options.instagramPortrait,
    },
    {
      key: "instagramReel",
      label: t.platform.options.instagramReel,
    },
    {
      key: "youtubeShorts",
      label: t.platform.options.youtubeShorts,
    },
    {
      key: "youtubeThumbnail",
      label: t.platform.options.youtubeThumbnail,
    },
    {
      key: "linkedin",
      label: t.platform.options.linkedin,
    },
    {
      key: "twitter",
      label: t.platform.options.twitter,
    },
    {
      key: "pinterest",
      label: t.platform.options.pinterest,
    },
    {
      key: "snapchat",
      label: t.platform.options.snapchat,
    },
    {
      key: "googleAds",
      label: t.platform.options.googleAds,
    },
    {
      key: "website",
      label: t.platform.options.website,
    },
    {
      key: "amazon",
      label: t.platform.options.amazon,
    },
    {
      key: "shopify",
      label: t.platform.options.shopify,
    },
    {
      key: "etsy",
      label: t.platform.options.etsy,
    },
    {
      key: "customSize",
      label: t.platform.options.customSize,
    },
  ];

  const stylesList = [
    {
      key: "luxury",
      label: t.imageStyle.options.luxury,
    },
    {
      key: "minimal",
      label: t.imageStyle.options.minimal,
    },
    {
      key: "modern",
      label: t.imageStyle.options.modern,
    },
    {
      key: "cinematic",
      label: t.imageStyle.options.cinematic,
    },
    {
      key: "premium",
      label: t.imageStyle.options.premium,
    },
    {
      key: "studio",
      label: t.imageStyle.options.studio,
    },
    {
      key: "ecommerce",
      label: t.imageStyle.options.ecommerce,
    },
    {
      key: "whiteBackground",
      label: t.imageStyle.options.whiteBackground,
    },
    {
      key: "darkLuxury",
      label: t.imageStyle.options.darkLuxury,
    },
    {
      key: "golden",
      label: t.imageStyle.options.golden,
    },
    {
      key: "fashion",
      label: t.imageStyle.options.fashion,
    },
    {
      key: "jewelry",
      label: t.imageStyle.options.jewelry,
    },
    {
      key: "cosmetics",
      label: t.imageStyle.options.cosmetics,
    },
    {
      key: "food",
      label: t.imageStyle.options.food,
    },
    {
      key: "furniture",
      label: t.imageStyle.options.furniture,
    },
    {
      key: "realEstate",
      label: t.imageStyle.options.realEstate,
    },
    {
      key: "technology",
      label: t.imageStyle.options.technology,
    },
    {
      key: "automotive",
      label: t.imageStyle.options.automotive,
    },
    {
      key: "render3d",
      label: t.imageStyle.options.render3d,
    },
    {
      key: "flatLay",
      label: t.imageStyle.options.flatLay,
    },
    {
      key: "vintage",
      label: t.imageStyle.options.vintage,
    },
    {
      key: "neon",
      label: t.imageStyle.options.neon,
    },
    {
      key: "futuristic",
      label: t.imageStyle.options.futuristic,
    },
  ];

  return (
    <main className={styles.page}>

      {/* HEADER */}

      <header className={styles.header}>

        <div className={styles.headerLeft}></div>

        <div className={styles.headerCenter}>
          <h1>{t.header.title}</h1>
          <p>{t.header.subtitle}</p>
        </div>

        <div className={styles.headerRight}>

          <div className={styles.creditSection}>

           <Link
  href="/ads/upgrade-plan"
  className={styles.addBtn}
>
  <FiPlus />

  <span>{t.header.addCredits}</span>
</Link>

            <button className={styles.creditBtn}>
              <div className={styles.creditDot}></div>

              <span className={styles.creditValue}>
                2,540
              </span>

              <span className={styles.creditText}>
                {t.header.credits}
              </span>
            </button>

          </div>

          <button className={styles.profile}>

            <div className={styles.avatar}>
              S
            </div>

            <div className={styles.profileInfo}>
              <span className={styles.userName}>
                {t.header.userName}
              </span>

              <span className={styles.userPlan}>
                {t.header.userPlan}
              </span>
            </div>

          </button>

        </div>

      </header>

            {/* SIDEBAR */}

      <aside className={styles.sidebar}>

        <div className={styles.sidebarTop}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={145}
            height={45}
            className={styles.sidebarLogo}
            priority
          />
        </div>

        <nav className={styles.sidebarMenu}>
<Link
  href="/ads/dashboard"
  className={`${styles.menuItem} ${
    pathname === "/ads" ? styles.active : ""
  }`}
>
  {t.sidebar.dashboard}
</Link>
          <Link
            href="/ads/generate-image"
            className={`${styles.menuItem} ${
              pathname === "/ads/generate-image" ? styles.active : ""
            }`}
          >
            {t.sidebar.aiImage}
          </Link>

          <Link
            href="/ads/generate-video"
            className={`${styles.menuItem} ${
              pathname === "/ads/generate-video" ? styles.active : ""
            }`}
          >
            {t.sidebar.aiVideo}
          </Link>

          <Link
            href="/ads/avatar"
            className={`${styles.menuItem} ${
              pathname === "/ads/avatar" ? styles.active : ""
            }`}
          >
            {t.sidebar.avatar}
          </Link>

          <Link
            href="/ads/brand-overlay"
            className={`${styles.menuItem} ${
              pathname === "/ads/brand-overlay" ? styles.active : ""
            }`}
          >
            {t.sidebar.brandOverlay}
          </Link>

          <Link
            href="/ads/promo-slides"
            className={`${styles.menuItem} ${
              pathname === "/ads/promo-slides" ? styles.active : ""
            }`}
          >
            {t.sidebar.promoSlides}
          </Link>

          <Link
            href="/ads/product-mockup"
            className={`${styles.menuItem} ${
              pathname === "/ads/product-mockup" ? styles.active : ""
            }`}
          >
            {t.sidebar.productMockup}
          </Link>

          <Link
            href="/settings"
            className={`${styles.menuItem} ${
              pathname === "/settings" ? styles.active : ""
            }`}
          >
            {t.sidebar.settings}
          </Link>

          <Link href="/ads/upgrade-plan" className={styles.textItem}>
            {t.sidebar.goldenPlan}
          </Link>

        </nav>

      </aside>


      {/* MAIN CONTENT */}

      <section className={styles.content}>

        {/* LEFT PANEL */}

        <div className={styles.leftPanel}>

          {/* UPLOAD */}

          <div className={styles.card}>

            <div className={styles.cardTitle}>
              <span className={styles.step}>1</span>
              <h3>{t.upload.title}</h3>
            </div>

            <label className={styles.uploadBox}>

              <FiUpload className={styles.uploadIcon} />

              <h4>{t.upload.dragDrop}</h4>

              <p>
                {t.upload.or}{" "}
                <span>{t.upload.browse}</span>
              </p>

              <small>{t.upload.formats}</small>

              <input
                type="file"
                accept="image/*"
                hidden
              />

            </label>

          </div>


          {/* PLATFORM */}

          <div className={`${styles.card} ${styles.smallCard}`}>

            <div className={styles.platformHeader}>

              <div className={styles.cardTitle}>
                <span className={styles.step}>2</span>
                <h3>{t.platform.title}</h3>
              </div>

              <button
                type="button"
                className={styles.seeAllBtn}
                onClick={() => setShowPlatforms(!showPlatforms)}
              >
                {showPlatforms
                  ? t.platform.hide
                  : t.platform.seeAll}
              </button>

            </div>

            <div className={styles.platformGrid}>

              {platforms.slice(0, 4).map((platform) => (
                <button
                  type="button"
                  key={platform.key}
                  className={`${styles.platformItem} ${
                    selectedPlatform === platform.key
                      ? styles.activeItem
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedPlatform(platform.key)
                  }
                >
                  {platform.label}
                </button>
              ))}

            </div>

            {showPlatforms && (
              <div className={styles.platformGrid}>

                {platforms.slice(4).map((platform) => (
                  <button
                    type="button"
                    key={platform.key}
                    className={`${styles.platformItem} ${
                      selectedPlatform === platform.key
                        ? styles.activeItem
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedPlatform(platform.key)
                    }
                  >
                    {platform.label}
                  </button>
                ))}

              </div>
            )}

          </div>
                    {/* STYLE */}

          <div className={`${styles.card} ${styles.smallCard}`}>

            <div className={styles.platformHeader}>

              <div className={styles.cardTitle}>
                <span className={styles.step}>3</span>
                <h3>{t.imageStyle.title}</h3>
              </div>

              <button
                type="button"
                className={styles.seeAllBtn}
                onClick={() => setShowStyles(!showStyles)}
              >
                {showStyles
                  ? t.imageStyle.hide
                  : t.imageStyle.seeAll}
              </button>

            </div>

            <div className={styles.styleGrid}>

              {stylesList.slice(0, 4).map((style) => (
                <button
                  type="button"
                  key={style.key}
                  className={`${styles.styleItem} ${
                    selectedStyle === style.key
                      ? styles.activeItem
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedStyle(style.key)
                  }
                >
                  {style.label}
                </button>
              ))}

            </div>

            {showStyles && (
              <div className={styles.styleGrid}>

                {stylesList.slice(4).map((style) => (
                  <button
                    type="button"
                    key={style.key}
                    className={`${styles.styleItem} ${
                      selectedStyle === style.key
                        ? styles.activeItem
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedStyle(style.key)
                    }
                  >
                    {style.label}
                  </button>
                ))}

              </div>
            )}

          </div>


          {/* PROMPT */}

          <div className={`${styles.card} ${styles.smallCard}`}>

            <div className={styles.platformHeader}>

              <div className={styles.cardTitle}>
                <span className={styles.step}>4</span>
                <h3>{t.prompt.title}</h3>
              </div>

              <button
                type="button"
                className={styles.seeAllBtn}
              >
                ✨ {t.prompt.aiPrompt}
              </button>

            </div>

            <textarea
              className={styles.promptBox}
              placeholder={t.prompt.placeholder}
            />

          </div>


          {/* GENERATE BUTTON */}

          <div className={styles.generateSection}>
            <button
              type="button"
              className={styles.generateBtn}
            >
              ✨ {t.generateButton}
            </button>
          </div>

        </div>


        {/* RIGHT PANEL */}

        <div className={styles.rightPanel}>

          <div className={styles.resultCard}>

            <div className={styles.resultHeader}>

              <h3>{t.result.title}</h3>

              <div className={styles.resultActions}>
                <button type="button">
                  {t.result.download}
                </button>
              </div>

            </div>


            {/* GENERATED IMAGE */}

            <div className={styles.resultImage}>

              <Image
                src="/assets/icons/ADS/axe/watch.png"
                alt={t.result.imageAlt}
                fill
                quality={100}
                priority
                className={styles.clockImage}
              />

            </div>


            {/* RESULT INFORMATION */}

            <div className={styles.resultInfo}>

              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  {t.result.information.resolution}
                </span>
                <strong>1080 × 1080</strong>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  {t.result.information.platform}
                </span>

                <strong>
                  {
                    platforms.find(
                      (platform) =>
                        platform.key === selectedPlatform
                    )?.label
                  }
                </strong>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  {t.result.information.size}
                </span>
                <strong>1 : 1</strong>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  {t.result.information.style}
                </span>

                <strong>
                  {
                    stylesList.find(
                      (style) =>
                        style.key === selectedStyle
                    )?.label
                  }
                </strong>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  {t.result.information.output}
                </span>
                <strong>
                  {t.result.information.images}
                </strong>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  {t.result.information.credits}
                </span>
                <strong>
                  {t.result.information.creditAmount}
                </strong>
              </div>

            </div>
                        {/* FEATURE CARDS */}

            <div className={styles.featureCards}>

              <div className={styles.featureCard}>

                <div className={styles.featureIcon}>
                  ⚡
                </div>

                <div className={styles.featureText}>
                  <h3>
                    {t.features.lightningFast.title}
                  </h3>

                  <p>
                    {t.features.lightningFast.description}
                  </p>
                </div>

              </div>


              <div className={styles.featureCard}>

                <div className={styles.featureIcon}>
                  ⚙️
                </div>

                <div className={styles.featureText}>
                  <h3>
                    {t.features.highQuality.title}
                  </h3>

                  <p>
                    {t.features.highQuality.description}
                  </p>
                </div>

              </div>


              <div className={styles.featureCard}>

                <div className={styles.featureIcon}>
                  🎨
                </div>

                <div className={styles.featureText}>
                  <h3>
                    {t.features.customizableStyles.title}
                  </h3>

                  <p>
                    {t.features.customizableStyles.description}
                  </p>
                </div>

              </div>


              <div className={styles.featureCard}>

                <div className={styles.featureIcon}>
                  📈
                </div>

                <div className={styles.featureText}>
                  <h3>
                    {t.features.increaseSales.title}
                  </h3>

                  <p>
                    {t.features.increaseSales.description}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* BOTTOM CARDS */}

      <section className={styles.bottomCards}>

        {/* POPULAR IMAGE STYLES */}

        <div className={styles.popularCard}>

          <div className={styles.bottomCardHeader}>

            <h3>{t.popularStyles.title}</h3>

            <button type="button">
              {t.popularStyles.viewAll}
            </button>

          </div>

          <div className={styles.popularImages}>

            {[
              {
                image:
                  "/assets/icons/ADS/axe/perfiom.png",
                title: t.popularStyles.luxury,
              },
              {
                image:
                  "/assets/icons/ADS/axe/sofa.png",
                title: t.popularStyles.minimal,
              },
              {
                image:
                  "/assets/icons/ADS/axe/hedphon.png",
                title: t.popularStyles.modern,
              },
              {
                image:
                  "/assets/icons/ADS/axe/car.png",
                title: t.popularStyles.cinematic,
              },
              {
                image:
                  "/assets/icons/ADS/axe/bag.png",
                title: t.popularStyles.ecommerce,
              },
            ].map((item) => (
              <div
                className={styles.popularItem}
                key={item.title}
              >

                <div className={styles.popularImage}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.popularImg}
                  />
                </div>

                <strong>{item.title}</strong>

              </div>
            ))}

          </div>

        </div>
                {/* PERFECT FOR */}

        <div className={styles.perfectCard}>

          <h3>{t.perfectFor.title}</h3>

          <div className={styles.perfectItems}>

            <div className={styles.perfectItem}>
              <span>◎</span>

              <p>
                {t.perfectFor.instagram.title}
                <br />
                {t.perfectFor.instagram.description}
              </p>
            </div>


            <div className={styles.perfectItem}>
              <span>f</span>

              <p>
                {t.perfectFor.facebook.title}
                <br />
                {t.perfectFor.facebook.description}
              </p>
            </div>


            <div className={styles.perfectItem}>
              <span>🛒</span>

              <p>
                {t.perfectFor.ecommerce.title}
                <br />
                {t.perfectFor.ecommerce.description}
              </p>
            </div>


            <div className={styles.perfectItem}>
              <span>a</span>

              <p>
                {t.perfectFor.amazon.title}
                <br />
                {t.perfectFor.amazon.description}
              </p>
            </div>

          </div>

        </div>


        {/* HOW IT WORKS */}

        <div className={styles.howCard}>

          <h3>{t.howItWorks.title}</h3>

          <div className={styles.howSteps}>

            <div className={styles.howStep}>
              <span>1</span>

              <strong>
                {t.howItWorks.upload.title}
              </strong>

              <p>
                {t.howItWorks.upload.description}
              </p>
            </div>


            <div className={styles.stepLine}></div>


            <div className={styles.howStep}>
              <span>2</span>

              <strong>
                {t.howItWorks.choose.title}
              </strong>

              <p>
                {t.howItWorks.choose.description}
              </p>
            </div>


            <div className={styles.stepLine}></div>


            <div className={styles.howStep}>
              <span>3</span>

              <strong>
                {t.howItWorks.generate.title}
              </strong>

              <p>
                {t.howItWorks.generate.description}
              </p>
            </div>


            <div className={styles.stepLine}></div>


            <div className={styles.howStep}>
              <span>4</span>

              <strong>
                {t.howItWorks.download.title}
              </strong>

              <p>
                {t.howItWorks.download.description}
              </p>
            </div>

          </div>

        </div>

      </section>
            {/* SEO AND COFFEE SECTION */}

      <section className={styles.seoCoffeeSection}>

        {/* SEO CONTENT */}

        <div className={styles.seoContentCard}>

          <h2>{t.seo.title}</h2>

          <p>{t.seo.description}</p>

          <div className={styles.seoTags}>

            <span>
              {t.seo.tags.aiImageGenerator}
            </span>

            <span>
              {t.seo.tags.productPhotography}
            </span>

            <span>
              {t.seo.tags.advertisingImages}
            </span>

            <span>
              {t.seo.tags.increaseSales}
            </span>

            <span>
              {t.seo.tags.socialMediaAds}
            </span>

          </div>

        </div>


        {/* COFFEE CARD */}

        <div className={styles.coffeeCard}>

          <div className={styles.coffeeContent}>

            <span>
              {t.coffeeCard.firstTitle}
            </span>

            <h2>
              {t.coffeeCard.secondTitle}
              <br />
              {t.coffeeCard.thirdTitle}
            </h2>

            <button type="button">
              {t.coffeeCard.button}
            </button>

          </div>


          <div className={styles.coffeeImage}>

            <Image
              src="/assets/icons/ADS/axe/coffe.png"
              alt={t.coffeeCard.imageAlt}
              fill
              className={styles.coffeeImg}
            />

          </div>

        </div>

      </section>

    </main>
  );
}