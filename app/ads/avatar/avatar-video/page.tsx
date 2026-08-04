"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../../../lib/lang";
import styles from "./avatar-video.module.css";

export default function AvatarVideoPage() {
  const { messages } = useLang();
  const t = messages.avatarVideo;

  const productInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);

  const [duration, setDuration] = useState("5");
  const [cinematic, setCinematic] = useState(true);
  const [prompt, setPrompt] = useState(t.prompt.defaultText);

  useEffect(() => {
    setPrompt(t.prompt.defaultText);
  }, [t.prompt.defaultText]);

  return (
    <div className={styles.layout}>

      {/* ================= SIDEBAR ================= */}

      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={135}
            height={52}
            priority
            className={styles.logo}
          />
        </div>

<nav className={styles.sidebarMenu}>

  {/* DASHBOARD */}
  <Link href="/ads/dashboard" className={styles.menuItem}>
    <span>⌂</span>
    {t.sidebar.dashboard}
  </Link>

  {/* GENERATE IMAGE */}
  <Link
    href="/ads/generate-image"
    className={styles.menuItem}
  >
    <span>▧</span>
    {t.sidebar.generateImage}
  </Link>

  {/* GENERATE VIDEO */}
  <Link
    href="/ads/generate-video"
    className={styles.menuItem}
  >
    <span>▷</span>
    {t.sidebar.generateVideo}
  </Link>

  {/* CREATE AVATAR */}
  <Link
    href="/ads/avatar"
    className={styles.menuItem}
  >
    <span>♙</span>
    {t.sidebar.createAvatar}
  </Link>

  {/* AVATAR VIDEO — ACTIVE PAGE */}
  <Link
    href="/ads/avatar/avatar-video"
    className={`${styles.menuItem} ${styles.activeMenu}`}
  >
    <span>▣</span>
    {t.sidebar.avatarVideo}
    <small className={styles.newBadge}>{t.sidebar.new}</small>
  </Link>

  {/* CAPTIONS */}
  <Link
    href="/ads/captions-hashtags"
    className={styles.menuItem}
  >
    <span>≡</span>
    {t.sidebar.captionsHashtags}
  </Link>

  {/* BRAND OVERLAY */}
  <Link
    href="/ads/brand-overlay"
    className={styles.menuItem}
  >
    <span>◇</span>
    {t.sidebar.brandOverlay}
  </Link>

  {/* PROMO SLIDES */}
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

  {/* ADVISORY */}
  <Link
    href="/ads/advisory-consultation"
    className={styles.menuItem}
  >
    <span>♧</span>
    {t.sidebar.advisoryAnalysis}
  </Link>

  {/* ACADEMY */}
  <Link
    href="/ads/academy-insight"
    className={styles.menuItem}
  >
    <span>◉</span>
    {t.sidebar.academyInsight}
  </Link>

  <p className={styles.menuTitle}>
    {t.sidebar.account}
  </p>

  {/* CREDITS */}
  <Link
    href="/upgrade-plan"
    className={styles.menuItem}
  >
    <span>☷</span>
    {t.sidebar.creditsPlan}
  </Link>

  {/* TRANSACTIONS */}
  <Link
    href="/transactions"
    className={styles.menuItem}
  >
    <span>◌</span>
    {t.sidebar.transactions}
  </Link>

  {/* SETTINGS */}
  <Link
    href="/settings"
    className={styles.menuItem}
  >
    <span>⚙</span>
    {t.sidebar.settings}
  </Link>

</nav>

        <div className={styles.goldenPlan}>
          <h3>♕ {t.plan.title}</h3>
          <p>{t.plan.description}</p>

          <Link href="/upgrade-plan">
            {t.plan.upgrade} →
          </Link>
        </div>

        <div className={styles.userBox}>
          <span className={styles.userAvatar}>S</span>

          <div>
            <strong>{t.user.name}</strong>
            <small>{t.user.plan}</small>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}

      <main className={styles.page}>

        {/* HEADER */}

        <header className={styles.header}>
          <div>
            <h1>
              {t.header.title}
              <span> ✦</span>
            </h1>

            <p>{t.header.description}</p>
          </div>

          <div className={styles.headerActions}>
            <div className={styles.credits}>
              <span>⚡</span>
              {t.header.credits}
            </div>

            <Link href="/upgrade-plan" className={styles.addCredits}>
              ＋ {t.header.addCredits}
            </Link>

            <button type="button" className={styles.profile}>
              S
            </button>
          </div>
        </header>

        {/* ================= TOP CONTENT ================= */}

        <section className={styles.workspace}>

          {/* LEFT PANEL */}

          <div className={styles.controlPanel}>

            {/* STEP 1 */}

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <span>1</span>
                {t.uploadProduct.title}
                <small>ⓘ</small>
              </div>

              <button
                type="button"
                className={styles.uploadBox}
                onClick={() => productInputRef.current?.click()}
              >
                <span className={styles.uploadIcon}>☁</span>
                <strong>{t.uploadProduct.upload}</strong>
                <small>{t.uploadProduct.formats}</small>
              </button>

              <input
                ref={productInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                hidden
              />
            </div>
        
        {/* STEP 2 */}

<div className={styles.formGroup}>
  <div className={styles.label}>
    <span>2</span>
    {t.chooseAvatar.title}
    <em>{t.chooseAvatar.optional}</em>
    <small>ⓘ</small>
  </div>

  <p className={styles.modelHelp}>{t.chooseAvatar.description}</p>

  <button
    type="button"
    className={styles.modelUpload}
    onClick={() => modelInputRef.current?.click()}
  >
    <span>♙</span>
    {t.chooseAvatar.upload}
  </button>

  <input
    ref={modelInputRef}
    type="file"
    accept="image/png,image/jpeg,image/webp"
    hidden
  />
</div>
            {/* STEP 3 AND 4 */}

            <div className={styles.twoColumns}>
              <div className={styles.formGroup}>
                <div className={styles.label}>
                  <span>3</span>
                  {t.avatarStyle.title}
                </div>

              <select className={styles.select} defaultValue="luxury-fashion">
  <option value="luxury-fashion">{t.avatarStyle.options.luxuryFashion}</option>
  <option value="natural-lifestyle">{t.avatarStyle.options.naturalLifestyle}</option>
  <option value="professional-presenter">
    {t.avatarStyle.options.professionalPresenter}
  </option>
  <option value="product-demo">{t.avatarStyle.options.productDemonstration}</option>
  <option value="social-media-influencer">
    {t.avatarStyle.options.socialMediaInfluencer}
  </option>
  <option value="beauty-model">{t.avatarStyle.options.beautyModel}</option>
  <option value="kids-toys">{t.avatarStyle.options.kidsToys}</option>
  <option value="friendly-casual">{t.avatarStyle.options.friendlyCasual}</option>
  <option value="business-corporate">
    {t.avatarStyle.options.businessCorporate}
  </option>
  <option value="sports-fitness">{t.avatarStyle.options.sportsFitness}</option>
  <option value="cinematic-character">{t.avatarStyle.options.cinematicCharacter}</option>
  <option value="fantasy-character">{t.avatarStyle.options.fantasyCharacter}</option>
  <option value="animated-3d">{t.avatarStyle.options.animated3D}</option>
  <option value="cartoon">{t.avatarStyle.options.cartoon}</option>
  <option value="minimal-studio">{t.avatarStyle.options.minimalStudio}</option>
  <option value="custom-avatar">{t.avatarStyle.options.customAvatar}</option>
</select>

 </div>
              <div className={styles.formGroup}>
                <div className={styles.label}>
                  <span>4</span>
                  {t.platform.title}
                </div>

               <select className={styles.select} defaultValue="instagram-reel">
  <option value="instagram-reel">
    {t.platform.options.instagramReel}
  </option>

  <option value="instagram-story">
    {t.platform.options.instagramStory}
  </option>

  <option value="instagram-post">
    {t.platform.options.instagramPost}
  </option>

  <option value="tiktok">
    {t.platform.options.tiktok}
  </option>

  <option value="youtube-shorts">
    {t.platform.options.youtubeShorts}
  </option>

  <option value="youtube-video">
    {t.platform.options.youtubeVideo}
  </option>

  <option value="facebook-reel">
    {t.platform.options.facebookReel}
  </option>

  <option value="facebook-post">
    {t.platform.options.facebookPost}
  </option>

  <option value="linkedin">
    {t.platform.options.linkedin}
  </option>

  <option value="x-twitter">
    {t.platform.options.twitter}
  </option>

  <option value="amazon">
    {t.platform.options.amazon}
  </option>

  <option value="website">
    {t.platform.options.website}
  </option>
</select>
              </div>
            </div>

            {/* STEP 5 */}

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <span>5</span>
                {t.videoLength.title}
                <small>ⓘ</small>
              </div>

              <div className={styles.durationGrid}>
                <button
                  type="button"
                  className={
                    duration === "5"
                      ? styles.activeDuration
                      : styles.durationButton
                  }
                  onClick={() => setDuration("5")}
                >
                  <span>●</span>
                  {t.videoLength.fiveSeconds}
                  <small>{t.videoLength.oneUnit}</small>
                </button>

                <button
                  type="button"
                  className={
                    duration === "10"
                      ? styles.activeDuration
                      : styles.durationButton
                  }
                  onClick={() => setDuration("10")}
                >
                  <span>○</span>
                  {t.videoLength.tenSeconds}
                  <small>{t.videoLength.twoUnits}</small>
                </button>
              </div>
            </div>

            {/* CINEMATIC */}

            <div className={styles.cinematicRow}>
              <div>
                <div className={styles.label}>
                  <span>⚡</span>
                  {t.cinematic.title}
                  <b>{t.cinematic.new}</b>
                  <small>ⓘ</small>
                </div>

                <p>{t.cinematic.description}</p>
              </div>

              <button
                type="button"
                className={
                  cinematic ? styles.switchOn : styles.switchOff
                }
                onClick={() => setCinematic(!cinematic)}
                aria-label={t.cinematic.toggleLabel}
              >
                <span />
              </button>
            </div>

            {/* PROMPT */}

            <div className={styles.promptArea}>
              <div className={styles.promptBox}>
                <div className={styles.label}>
                  <span>6</span>
                  {t.prompt.title}
                  <em>{t.prompt.optional}</em>
                </div>

                <textarea
                  value={prompt}
                  maxLength={300}
                  onChange={(event) => setPrompt(event.target.value)}
                />

                <small>{prompt.length}/300</small>
              </div>

              <div className={styles.unitsBox}>
                <div className={styles.label}>
                  <span>⚡</span>
                  {t.prompt.requiredUnits}
                </div>

                <p>
                  {t.prompt.fiveSeconds}
                  <strong>{t.prompt.oneUnit}</strong>
                </p>

                <p>
                  {t.prompt.tenSeconds}
                  <strong>{t.prompt.twoUnits}</strong>
                </p>
              </div>
            </div>

            <button type="button" className={styles.generateButton}>
              ✦ {t.generateButton}
            </button>
          </div>

          {/* RIGHT PANEL */}

          <div className={styles.previewPanel}>
            <div className={styles.videoPreview}>
              <Image
                src="/assets/icons/ADS/avatar/kid.png"
                alt={t.preview.imageAlt}
                fill
                priority
                className={styles.previewImage}
              />

              <h3>{t.preview.title}</h3>

              <div className={styles.previewActions}>
                <button type="button">⇩ {t.preview.download}</button>
                <button type="button">▣ {t.preview.copy}</button>
                <button type="button">•••</button>
              </div>

              <button
                type="button"
                className={styles.playButton}
                aria-label={t.preview.playLabel}
              >
                ▶
              </button>

              <div className={styles.videoControls}>
                <span>▷</span>
                <span>00:00</span>

                <div className={styles.progress}>
                  <span />
                </div>

                <span>00:08</span>
                <span>⛶</span>
              </div>
            </div>

            {/* CAPTION AND HASHTAGS */}

            <div className={styles.resultBox}>
              <div className={styles.captionBox}>
                <h3>✦ {t.caption.title}</h3>
                <small>{t.caption.description}</small>

                <p>
                  {t.caption.line1}
                  <br />
                  {t.caption.line2}
                  <br />
                  {t.caption.line3}
                  <br />
                  {t.caption.line4}
                </p>

                <div className={styles.resultButtons}>
                  <button type="button">▣ {t.caption.copy}</button>
                  <button type="button">✦ {t.caption.regenerate}</button>
                </div>
              </div>

              <div className={styles.hashtagBox}>
                <h3>◇ {t.hashtags.title}</h3>
                <small>{t.hashtags.description}</small>

                <div className={styles.hashtags}>
                  <span>{t.hashtags.items.toysForKids}</span>
                  <span>{t.hashtags.items.kidsToys}</span>
                  <span>{t.hashtags.items.softToys}</span>
                  <span>{t.hashtags.items.foxPlush}</span>
                  <span>{t.hashtags.items.playtime}</span>
                  <span>{t.hashtags.items.toygram}</span>
                  <span>{t.hashtags.items.cuteAndCuddly}</span>
                  <span>{t.hashtags.items.kidsFashion}</span>
                  <span>{t.hashtags.items.giftIdeas}</span>
                  <span>{t.hashtags.items.parenting}</span>
                  <span>{t.hashtags.items.babyToys}</span>
                  <span>{t.hashtags.items.earlyLearning}</span>
                </div>

                <div className={styles.resultButtons}>
                  <button type="button">▣ {t.hashtags.copy}</button>
                  <button type="button">✦ {t.hashtags.regenerate}</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM GUIDE ================= */}

        <section className={styles.bottomGuide}>
          <div className={styles.aboutAvatar}>
            <h2>{t.about.title}</h2>

            <p>{t.about.description}</p>

            <div className={styles.smallIcons}>
              <span>♙<small>{t.about.realisticModels}</small></span>
              <span>🏃<small>{t.about.naturalMovement}</small></span>
              <span>▥<small>{t.about.highEngagement}</small></span>
              <span>◷<small>{t.about.saveTime}</small></span>
            </div>
          </div>

          <div className={styles.bestFor}>
            <h2>{t.bestFor.title}</h2>

            <ul>
              <li>✓ {t.bestFor.fashionClothing}</li>
              <li>✓ {t.bestFor.toysKids}</li>
              <li>✓ {t.bestFor.bagsAccessories}</li>
              <li>✓ {t.bestFor.watchesJewelry}</li>
              <li>✓ {t.bestFor.beautyProducts}</li>
              <li>✓ {t.bestFor.homeLiving}</li>
            </ul>

            <Image
              src="/assets/icons/ADS/avatar/maket.png"
              alt=""
              width={100}
              height={125}
              className={styles.maketImage}
            />
          </div>

          <div className={styles.faq}>
            <h2>{t.faq.title}</h2>

            <details>
              <summary>{t.faq.question1}</summary>
              <p>{t.faq.answer1}</p>
            </details>

            <details>
              <summary>{t.faq.question2}</summary>
              <p>{t.faq.answer2}</p>
            </details>

            <details>
              <summary>{t.faq.question3}</summary>
              <p>{t.faq.answer3}</p>
            </details>

            <details>
              <summary>{t.faq.question4}</summary>
              <p>{t.faq.answer4}</p>
            </details>
          </div>

          <div className={styles.howItWorks}>
            <h2>{t.howItWorks.title}</h2>

            <p><span>1</span> {t.howItWorks.step1}</p>
            <p><span>2</span> {t.howItWorks.step2}</p>
            <p><span>3</span> {t.howItWorks.step3}</p>
            <p><span>4</span> {t.howItWorks.step4}</p>

            <Image
              src="/assets/icons/ADS/avatar/video.png"
              alt=""
              width={105}
              height={105}
              className={styles.videoImage}
            />
          </div>
        </section>

      </main>
    </div>
  );
}