"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import styles from "./music-ads.module.css";

export default function MusicAdsPage() {
  const { messages } = useLang();
  const t = messages.MusicAds;

  const [brandName, setBrandName] = useState("Sellova");
  const [businessType, setBusinessType] = useState("ecommerce");
  const [language, setLanguage] = useState("english");
  const [description, setDescription] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("cinematic");
  const [isPlaying, setIsPlaying] = useState(false);
  const [voice, setVoice] = useState("female");
  const [duration, setDuration] = useState("20");

  const requiredCredits = duration === "20" ? 10 : 15;

  const musicStyles = [
    { id: "classical", title: t.style.styles.classical, icon: "♩" },
    { id: "cinematic", title: t.style.styles.cinematic, icon: "▰" },
    { id: "corporate", title: t.style.styles.corporate, icon: "▣" },
    { id: "electronic", title: t.style.styles.electronic, icon: "▥" },
    { id: "jazz", title: t.style.styles.jazz, icon: "♬" },
    { id: "rock", title: t.style.styles.rock, icon: "🎸" },
  ];

  const supportedStyles = [
    { title: t.style.styles.cinematic, icon: "▰" },
    { title: t.style.styles.classical, icon: "♩" },
    { title: t.style.styles.corporate, icon: "▣" },
    { title: t.style.styles.electronic, icon: "▥" },
    { title: t.style.styles.jazz, icon: "♬" },
    { title: t.style.styles.rock, icon: "🎸" },
    { title: t.style.styles.luxury, icon: "♕" },
    { title: t.style.styles.epic, icon: "✦" },
    { title: t.style.styles.inspirational, icon: "♡" },
    { title: t.style.styles.modernAds, icon: "♫" },
  ];

  const advertisingBenefits = [
    t.information.benefits.brandIdentity,
    t.information.benefits.advertisingPerformance,
    t.information.benefits.emotionalEngagement,
    t.information.benefits.socialMediaContent,
    t.information.benefits.professionalCommercials,
    t.information.benefits.differentAudiences,
  ];

  const perfectFor = [
    t.information.perfectFor.fashionBrands,
    t.information.perfectFor.beautyProducts,
    t.information.perfectFor.jewelryStores,
    t.information.perfectFor.luxuryAccessories,
    t.information.perfectFor.homeDecorBrands,
    t.information.perfectFor.kidsProducts,
    t.information.perfectFor.ecommerceStores,
    t.information.perfectFor.contentCreators,
    t.information.perfectFor.startups,
  ];

  const musicFeatures = [
    t.features.items.aiGenerated,
    t.features.items.multipleLanguages,
    t.features.items.commercialUse,
    t.features.items.fastGeneration,
    t.features.items.brandFocused,
    t.features.items.marketingReady,
    t.features.items.socialMedia,
    t.features.items.premiumQuality,
  ];

  return (
    <main className={styles.page}>
      {/* ================= HEADER ================= */}

      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Image
            src="/logo.png"
            alt={t.imageAlt.logo}
            width={150}
            height={75}
            priority
            className={styles.headerLogo}
          />

          <Link href="/ads/dashboard" className={styles.backButton}>
            ← {t.backToDashboard}
          </Link>
        </div>

        <div className={styles.brandHeader}>
          <h1>{t.header.title}</h1>
          <p>{t.header.subtitle}</p>
        </div>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.profileButton}
            aria-label={t.header.profileLabel}
          >
            S
          </button>
        </div>
      </header>

      {/* ================= HERO IMAGE ================= */}

      <div className={styles.heroImage}>
        <Image
          src="/assets/icons/ADS/music/arm.png"
          alt={t.imageAlt.hero}
          fill
          priority
          className={styles.armImage}
        />
      </div>

      {/* ================= STEP 1 ================= */}

      <section className={`${styles.card} ${styles.brandCard}`}>
        <div className={styles.sectionHeading}>
          <span>1</span>

          <div>
            <h2>{t.brand.title}</h2>
            <p>{t.brand.subtitle}</p>
          </div>
        </div>

        <div className={styles.brandFields}>
          <label>
            <span>{t.brand.brandName}</span>

            <input
              type="text"
              value={brandName}
              onChange={(event) => setBrandName(event.target.value)}
              placeholder={t.brand.brandNamePlaceholder}
            />
          </label>

          <label>
            <span>{t.brand.businessType}</span>

            <select
              value={businessType}
              onChange={(event) => setBusinessType(event.target.value)}
            >
              <option value="ecommerce">{t.brand.businessTypes.ecommerce}</option>
              <option value="fashion">{t.brand.businessTypes.fashion}</option>
              <option value="beauty">{t.brand.businessTypes.beauty}</option>
              <option value="jewelry">{t.brand.businessTypes.jewelry}</option>
              <option value="food">{t.brand.businessTypes.food}</option>
              <option value="technology">{t.brand.businessTypes.technology}</option>
              <option value="education">{t.brand.businessTypes.education}</option>
              <option value="health">{t.brand.businessTypes.health}</option>
              <option value="personal">{t.brand.businessTypes.personal}</option>
              <option value="other">{t.brand.businessTypes.other}</option>
            </select>
          </label>

          <label>
            <span>{t.brand.language}</span>

            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="english">{t.brand.languages.english}</option>
              <option value="persian">{t.brand.languages.persian}</option>
              <option value="turkish">{t.brand.languages.turkish}</option>
              <option value="arabic">{t.brand.languages.arabic}</option>
              <option value="spanish">{t.brand.languages.spanish}</option>
              <option value="french">{t.brand.languages.french}</option>
              <option value="german">{t.brand.languages.german}</option>
              <option value="portuguese">{t.brand.languages.portuguese}</option>
            </select>
          </label>
        </div>

        <label className={styles.descriptionField}>
          <span>{t.brand.description}</span>

          <textarea
            value={description}
            maxLength={300}
            placeholder={t.brand.descriptionPlaceholder}
            onChange={(event) => setDescription(event.target.value)}
          />

          <small>{description.length}/300</small>
        </label>

        <div className={styles.compactOptions}>
          <div className={styles.compactOptionGroup}>
            <h3>{t.brand.chooseVoice}</h3>

            <div className={styles.compactButtons}>
              <button
                type="button"
                className={
                  voice === "female"
                    ? styles.activeCompactButton
                    : styles.compactButton
                }
                onClick={() => setVoice("female")}
              >
                <span>♀</span>
                {t.brand.femaleVoice}
                <b>{voice === "female" ? "✓" : ""}</b>
              </button>

              <button
                type="button"
                className={
                  voice === "male"
                    ? styles.activeCompactButton
                    : styles.compactButton
                }
                onClick={() => setVoice("male")}
              >
                <span>♂</span>
                {t.brand.maleVoice}
                <b>{voice === "male" ? "✓" : ""}</b>
              </button>
            </div>
          </div>

          <div className={styles.compactOptionGroup}>
            <h3>{t.brand.musicDuration}</h3>

            <div className={styles.compactButtons}>
              <button
                type="button"
                className={
                  duration === "20"
                    ? styles.activeCompactButton
                    : styles.compactButton
                }
                onClick={() => setDuration("20")}
              >
                <span>◷</span>
                {t.brand.twentySeconds}
                <em>{t.brand.tenCredits}</em>
              </button>

              <button
                type="button"
                className={
                  duration === "30"
                    ? styles.activeCompactButton
                    : styles.compactButton
                }
                onClick={() => setDuration("30")}
              >
                <span>◷</span>
                {t.brand.thirtySeconds}
                <em>{t.brand.fifteenCredits}</em>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.compactCredit}>
          <span>⚡</span>
          {requiredCredits} {t.brand.creditsWillBeUsed}
        </div>
      </section>

      {/* ================= STEP 2 ================= */}

      <section className={`${styles.card} ${styles.styleCard}`}>
        <div className={styles.sectionHeading}>
          <span>2</span>

          <div>
            <h2>{t.style.title}</h2>
            <p>{t.style.subtitle}</p>
          </div>
        </div>

        <div className={styles.musicStyles}>
          {musicStyles.map((musicStyle) => (
            <button
              key={musicStyle.id}
              type="button"
              className={
                selectedStyle === musicStyle.id
                  ? styles.activeMusicStyle
                  : styles.musicStyle
              }
              onClick={() => setSelectedStyle(musicStyle.id)}
            >
              <span>{musicStyle.icon}</span>
              <strong>{musicStyle.title}</strong>

              {selectedStyle === musicStyle.id && <small>✓</small>}
            </button>
          ))}
        </div>

        <button type="button" className={styles.generateButton}>
          {t.style.generateButton}
          <span>✦</span>
        </button>
      </section>

      {/* ================= STEP 3 ================= */}

      <section className={`${styles.card} ${styles.generatedCard}`}>
        <div className={styles.generatedInfo}>
          <div className={styles.sectionHeading}>
            <span>3</span>

            <div>
              <h2>{t.generated.title}</h2>
              <p>{t.generated.subtitle}</p>
            </div>
          </div>

          <div className={styles.songInfo}>
            <div className={styles.songCover}>
              <span>♫</span>
            </div>

            <div>
              <h3>{t.generated.songTitle}</h3>

              <div className={styles.songMeta}>
                <span>02:45</span>
                <small>
                  {musicStyles.find((item) => item.id === selectedStyle)?.title}
                </small>
              </div>
            </div>

            <div className={styles.waveform}>
              {Array.from({ length: 55 }).map((_, index) => (
                <span
                  key={index}
                  style={{ height: `${8 + ((index * 13) % 29)}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.musicControls}>
          <button type="button" aria-label={t.generated.previous}>
            |◀
          </button>

          <button
            type="button"
            className={styles.mainPlayButton}
            aria-label={isPlaying ? t.generated.pause : t.generated.play}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? "Ⅱ" : "▶"}
          </button>

          <button type="button" aria-label={t.generated.next}>
            ▶|
          </button>
        </div>

        <div className={styles.musicActions}>
          <h3>{t.generated.actions}</h3>

          <div>
            <button type="button">
              <span>⇩</span>
              {t.generated.download}
            </button>

            <button type="button">
              <span>✎</span>
              {t.generated.edit}
            </button>

            <button type="button">
              <span>⌯</span>
              {t.generated.share}
            </button>

            <button type="button">
              <span>♡</span>
              {t.generated.favorite}
            </button>
          </div>
        </div>
      </section>

      {/* ================= INFORMATION ROW ================= */}

      <section className={styles.informationGrid}>
        <article className={styles.infoCard}>
          <h2>{t.information.generatorTitle}</h2>
          <p>{t.information.generatorTextOne}</p>
          <p>{t.information.generatorTextTwo}</p>

          <div className={styles.miniWave}>
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                style={{ height: `${5 + ((index * 11) % 23)}px` }}
              />
            ))}
          </div>
        </article>

        <article className={styles.infoCard}>
          <h2>{t.information.benefitsTitle}</h2>

          <ul>
            {advertisingBenefits.map((benefit) => (
              <li key={benefit}>
                <span>✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className={styles.headphoneIcon}>◉</div>
        </article>

        <article className={styles.infoCard}>
          <h2>{t.information.supportedStylesTitle}</h2>

          <div className={styles.supportedStyles}>
            {supportedStyles.map((item) => (
              <div key={item.title}>
                <span>{item.icon}</span>
                <small>{item.title}</small>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.infoCard}>
          <h2>{t.information.perfectForTitle}</h2>

          <div className={styles.perfectList}>
            {perfectFor.map((item) => (
              <span key={item}>
                <b>✓</b>
                {item}
              </span>
            ))}
          </div>

          <div className={styles.bagIcon}>♙</div>
        </article>
      </section>

      {/* ================= SECOND INFORMATION ROW ================= */}

      <section className={styles.bottomInformation}>
        <article className={styles.howItWorks}>
          <h2>{t.howItWorks.title}</h2>

          <div className={styles.steps}>
            <div>
              <span>▤</span>
              <small>{t.howItWorks.steps.brandInformation}</small>
            </div>

            <b>→</b>

            <div>
              <span>◎</span>
              <small>{t.howItWorks.steps.languageAndStyle}</small>
            </div>

            <b>→</b>

            <div>
              <span>✦</span>
              <small>{t.howItWorks.steps.generateMusic}</small>
            </div>

            <b>→</b>

            <div>
              <span>⇩</span>
              <small>{t.howItWorks.steps.previewAndDownload}</small>
            </div>

            <b>→</b>

            <div>
              <span>▣</span>
              <small>{t.howItWorks.steps.useInContent}</small>
            </div>
          </div>
        </article>

        <article className={styles.featuresCard}>
          <h2>{t.features.title}</h2>

          <div>
            {musicFeatures.map((feature) => (
              <span key={feature}>
                <b>✓</b>
                {feature}
              </span>
            ))}
          </div>
        </article>

        <article className={styles.faqCard}>
          <h2>{t.faq.title}</h2>

          <div className={styles.faqGrid}>
            <div>
              <details>
                <summary>{t.faq.commercialUse.question}</summary>
                <p>{t.faq.commercialUse.answer}</p>
              </details>

              <details>
                <summary>{t.faq.supportedLanguages.question}</summary>
                <p>{t.faq.supportedLanguages.answer}</p>
              </details>

              <details>
                <summary>{t.faq.brandMusic.question}</summary>
                <p>{t.faq.brandMusic.answer}</p>
              </details>
            </div>

            <div>
              <details>
                <summary>{t.faq.availableStyles.question}</summary>
                <p>{t.faq.availableStyles.answer}</p>
              </details>

              <details>
                <summary>{t.faq.uniqueMusic.question}</summary>
                <p>{t.faq.uniqueMusic.answer}</p>
              </details>

              <details>
                <summary>{t.faq.productVideos.question}</summary>
                <p>{t.faq.productVideos.answer}</p>
              </details>
            </div>
          </div>
        </article>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className={styles.finalCta}>
        <div>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.description}</p>
        </div>

        <button type="button">
          {t.cta.button}
          <span>→</span>
        </button>

        <Image
          src="/assets/icons/ADS/music/rocet1.png"
          alt={t.imageAlt.rocket}
          width={280}
          height={150}
          className={styles.rocketImage}
        />
      </section>
    </main>
  );
}