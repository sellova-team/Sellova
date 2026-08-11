"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../../../lib/lang";
import styles from "./avatar-axe.module.css";

export default function AvatarPhotoPage() {
  const { messages } = useLang();
  const t = messages.avatarAxe;
  const hashtags = Object.values(t.results.hashtags.items);

  const productInputRef = useRef<HTMLInputElement>(null);
  const faceInputRef = useRef<HTMLInputElement>(null);
  const bodyInputRef = useRef<HTMLInputElement>(null);

  const [gender, setGender] = useState("kids");
  const [style, setStyle] = useState("casual");
  const [platform, setPlatform] = useState("instagram-post");
  const [output, setOutput] = useState("3");
  const [prompt, setPrompt] = useState("");

  return (
    <div className={styles.layout}>

      {/* ================= SIDEBAR ================= */}

      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={165}
            height={80}
            priority
            className={styles.logo}
          />
        </div>

        <nav className={styles.sidebarMenu}>
          <Link href="/ads/dashboard" className={styles.menuItem}>
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
            className={`${styles.menuItem} ${styles.activeMenu}`}
          >
            <span>♙</span>
            {t.sidebar.createAvatar}
          </Link>

          <Link
            href="/ads/captions-hashtags"
            className={styles.menuItem}
          >
            <span>≡</span>
            {t.sidebar.captionsHashtags}
          </Link>

          <Link
            href="/ads/brand-overlay"
            className={styles.menuItem}
          >
            <span>▣</span>
            {t.sidebar.brandOverlay}
          </Link>

          <Link
            href="/ads/promo-slides"
            className={styles.menuItem}
          >
            <span>▤</span>
            {t.sidebar.promoSlides}
          </Link>

          <p className={styles.menuTitle}>{t.sidebar.analytics}</p>

          <Link
            href="/ads/advisory-consultation"
            className={styles.menuItem}
          >
            <span>♧</span>
            {t.sidebar.advisoryAnalysis}
          </Link>

          <Link
            href="/ads/academy-insight"
            className={styles.menuItem}
          >
            <span>◉</span>
            {t.sidebar.academyInsight}
          </Link>

          <p className={styles.menuTitle}>{t.sidebar.account}</p>

          <Link
          href="/ads/upgrade-plan"
            className={styles.menuItem}
          >
            <span>♕</span>
            {t.sidebar.goldenPlan}
          </Link>

          <Link
            href="/ads/upgrade-plan"
            className={styles.menuItem}
          >
            <span>＋</span>
            {t.sidebar.upgradePlan}
          </Link>

          <Link
            href="/settings"
            className={styles.menuItem}
          >
            <span>⚙</span>
            {t.sidebar.settings}
          </Link>
        </nav>

        <div className={styles.goldenPlan}>
          <h3>
            {t.plan.title}
            <span>♕</span>
          </h3>

          <p>{t.plan.description}</p>

          <Link href="/ads/upgrade-plan">
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

      {/* ================= MAIN PAGE ================= */}

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
            <div className={styles.creditBox}>
              <span>⚡</span>
              {t.header.credits}
            </div>

            <Link
              href="/ads/upgrade-plan"
              className={styles.addCredits}
            >
              ＋ {t.header.addCredits}
            </Link>

            

            <button type="button" className={styles.profileButton}>
              S
            </button>
          </div>
        </header>

        {/* ================= WORKSPACE ================= */}

        <section className={styles.workspace}>

          {/* LEFT CONTROL PANEL */}

          <div className={styles.controlPanel}>

            {/* STEP 1 */}

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <span>1</span>
                {t.uploadProduct.title}
                <small>ⓘ</small>
              </div>

              <div className={styles.productUploadRow}>
                <button
                  type="button"
                  className={styles.uploadBox}
                  onClick={() => productInputRef.current?.click()}
                >
                  <span className={styles.uploadIcon}>☁</span>
                  <strong>{t.uploadProduct.upload}</strong>
                  <small>{t.uploadProduct.formats}</small>
                </button>

                <div className={styles.productExample}>
                  <Image
                    src="/assets/icons/ADS/avatar/poliver.png"
                    alt={t.uploadProduct.imageAlt}
                    fill
                    priority
                    className={styles.productImage}
                  />

                  <button
                    type="button"
                    className={styles.removeImage}
                    aria-label={t.uploadProduct.removeLabel}
                  >
                    ×
                  </button>
                </div>
              </div>

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
                {t.uploadModel.title}
                <em>{t.uploadModel.optional}</em>
                <small>ⓘ</small>
              </div>

              <p className={styles.modelHelp}>{t.uploadModel.description}</p>

              <div className={styles.modelButtons}>
                <button
                  type="button"
                  onClick={() => faceInputRef.current?.click()}
                >
                  <span>☺</span>
                  {t.uploadModel.facePhoto}
                </button>

                <button
                  type="button"
                  onClick={() => bodyInputRef.current?.click()}
                >
                  <span>♙</span>
                  {t.uploadModel.fullBodyPhoto}
                </button>
              </div>

              <input
                ref={faceInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                hidden
              />

              <input
                ref={bodyInputRef}
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
                  {t.model.title}
                </div>

                <select
                  className={styles.select}
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                >
                  <option value="woman">{t.model.options.woman}</option>
                  <option value="man">{t.model.options.man}</option>
                  <option value="girl">{t.model.options.girl}</option>
                  <option value="boy">{t.model.options.boy}</option>
                  <option value="kids">{t.model.options.kids}</option>
                  <option value="family">{t.model.options.family}</option>
                  <option value="custom">{t.model.options.custom}</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.label}>
                  <span>4</span>
                  {t.style.title}
                </div>

                <select
                  className={styles.select}
                  value={style}
                  onChange={(event) => setStyle(event.target.value)}
                >
                  <option value="casual">{t.style.options.casual}</option>
                  <option value="luxury">{t.style.options.luxury}</option>
                  <option value="studio">{t.style.options.studio}</option>
                  <option value="street">{t.style.options.street}</option>
                  <option value="minimal">{t.style.options.minimal}</option>
                  <option value="outdoor">{t.style.options.outdoor}</option>
                  <option value="business">{t.style.options.business}</option>
                  <option value="beauty">{t.style.options.beauty}</option>
                  <option value="sport">{t.style.options.sport}</option>
                  <option value="cinematic">{t.style.options.cinematic}</option>
                </select>
              </div>
            </div>

            {/* STEP 5 AND 6 */}

            <div className={styles.twoColumns}>
              <div className={styles.formGroup}>
                <div className={styles.label}>
                  <span>5</span>
                  {t.platform.title}
                </div>

                <select
                  className={styles.select}
                  value={platform}
                  onChange={(event) => setPlatform(event.target.value)}
                >
                  <option value="instagram-post">
                    {t.platform.options.instagramPost}
                  </option>

                  <option value="instagram-story">
                    {t.platform.options.instagramStory}
                  </option>

                  <option value="instagram-reel">
                    {t.platform.options.instagramReel}
                  </option>

                  <option value="tiktok">
                    {t.platform.options.tiktok}
                  </option>

                  <option value="facebook">
                    {t.platform.options.facebook}
                  </option>

                  <option value="amazon">
                    {t.platform.options.amazon}
                  </option>

                  <option value="website">
                    {t.platform.options.website}
                  </option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.label}>
                  <span>6</span>
                  {t.output.title}
                </div>

                <select
                  className={styles.select}
                  value={output}
                  onChange={(event) => setOutput(event.target.value)}
                >
                  <option value="1">{t.output.options.onePhoto}</option>
                 
                  <option value="3">{t.output.options.threePhotos}</option>
                 
                </select>
              </div>
            </div>

            {/* STEP 7 */}

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <span>7</span>
                {t.prompt.title}
                <em>{t.prompt.optional}</em>
              </div>

              <div className={styles.promptBox}>
                <textarea
                  value={prompt}
                  maxLength={300}
                  placeholder={t.prompt.placeholder}
                  onChange={(event) => setPrompt(event.target.value)}
                />

                <small>{prompt.length}/300</small>
              </div>
            </div>

            <div className={styles.creditNotice}>
              <span>⚡</span>
              {t.creditNotice}
            </div>

            <button
              type="button"
              className={styles.generateButton}
            >
              {t.generateButton}
              <span>✦</span>
            </button>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className={styles.previewSide}>

            {/* MODEL PREVIEW */}

            <div className={styles.previewCard}>
              <div className={styles.previewTitle}>
                <h3>
                  {t.preview.title}
                  <span> ✦</span>
                </h3>

                <small>{t.preview.exampleResult}</small>
              </div>

              <div className={styles.previewContent}>
                <div className={styles.mainPreview}>
                  <Image
                    src="/assets/icons/ADS/avatar/boy.png"
                    alt={t.preview.mainImageAlt}
                    fill
                    priority
                    className={styles.previewImage}
                  />
                </div>

                <div className={styles.exampleList}>
                  <div>
                    <Image
                      src="/assets/icons/ADS/avatar/boy1.png"
                      alt={t.preview.exampleOneAlt}
                      fill
                      className={styles.exampleImage}
                    />
                  </div>

                  <div>
                    <Image
                      src="/assets/icons/ADS/avatar/boy2.png"
                      alt={t.preview.exampleTwoAlt}
                      fill
                      className={styles.exampleImage}
                    />
                  </div>

                  <div>
                    <Image
                      src="/assets/icons/ADS/avatar/boy3.png"
                      alt={t.preview.exampleThreeAlt}
                      fill
                      className={styles.exampleImage}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.previewBenefits}>
                <span>✦ {t.preview.highQuality}</span>
                <span>♙ {t.preview.realisticLighting}</span>
                <span>◇ {t.preview.commercialReady}</span>
              </div>
            </div>

            {/* CAPTION AND HASHTAGS */}

            <div className={styles.resultBox}>
              <div className={styles.resultHeader}>
                <h2>{t.results.title}</h2>

                <p>{t.results.description}</p>
              </div>

              <div className={styles.resultColumns}>
                <div className={styles.captionBox}>
                  <h3>✎ {t.results.caption.title}</h3>

                  <p>
                    {t.results.caption.line1}
                    <br />
                    {t.results.caption.line2}
                    <br />
                    {t.results.caption.line3}
                    <br />
                    {t.results.caption.line4}
                  </p>

                  <small>156/300</small>

                  <div className={styles.resultButtons}>
                    <button type="button">▣ {t.results.caption.copy}</button>
                    <button type="button">⟳ {t.results.caption.regenerate}</button>
                  </div>
                </div>

                <div className={styles.hashtagBox}>
                  <h3>◇ {t.results.hashtags.title}</h3>

                  <div className={styles.hashtags}>
                    {hashtags.map((hashtag) => (
                      <span key={hashtag}>{hashtag}</span>
                    ))}
                  </div>

                  <div className={styles.hashtagFooter}>
                    <div className={styles.resultButtons}>
                      <button type="button">▣ {t.results.hashtags.copy}</button>
                      <button type="button">⟳ {t.results.hashtags.regenerate}</button>
                    </div>

                    <div className={styles.rating}>
                      <small>{t.results.hashtags.rate}</small>
                      <span>☆ ☆ ☆ ☆ ☆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}

        <section className={styles.howItWorks}>
          <h2>{t.howItWorks.title}</h2>

          <div className={styles.examplesRow}>

            {/* EXAMPLE 1 */}

            <div className={styles.examplePair}>
              <div>
                <small>{t.howItWorks.uploadProduct}</small>

                <div className={styles.examplePhoto}>
                  <Image
                    src="/assets/icons/ADS/avatar/poliver.png"
                    alt={t.howItWorks.hoodieAlt}
                    fill
                    className={styles.exampleImage}
                  />
                </div>
              </div>

              <span className={styles.arrow}>→</span>

              <div>
                <small>{t.howItWorks.modelResult}</small>

                <div className={styles.examplePhoto}>
                  <Image
                    src="/assets/icons/ADS/avatar/boy2.png"
                    alt={t.howItWorks.hoodieResultAlt}
                    fill
                    className={styles.exampleImage}
                  />
                </div>
              </div>
            </div>

            {/* EXAMPLE 2 */}

            <div className={styles.examplePair}>
              <div>
                <small>{t.howItWorks.uploadProduct}</small>

                <div className={styles.examplePhoto}>
                  <Image
                    src="/assets/icons/ADS/avatar/bag.png"
                    alt={t.howItWorks.bagAlt}
                    fill
                    className={styles.exampleImage}
                  />
                </div>
              </div>

              <span className={styles.arrow}>→</span>

              <div>
                <small>{t.howItWorks.modelResult}</small>

                <div className={styles.examplePhoto}>
                  <Image
                    src="/assets/icons/ADS/avatar/bag1.png"
                    alt={t.howItWorks.bagResultAlt}
                    fill
                    className={styles.exampleImage}
                  />
                </div>
              </div>
            </div>

            {/* EXAMPLE 3 */}

            <div className={styles.examplePair}>
              <div>
                <small>{t.howItWorks.uploadProduct}</small>

                <div className={styles.examplePhoto}>
                  <Image
                    src="/assets/icons/ADS/avatar/dress.png"
                    alt={t.howItWorks.dressAlt}
                    fill
                    className={styles.exampleImage}
                  />
                </div>
              </div>

              <span className={styles.arrow}>→</span>

              <div>
                <small>{t.howItWorks.modelResult}</small>

                <div className={styles.examplePhoto}>
                  <Image
                    src="/assets/icons/ADS/avatar/dress1.png"
                    alt={t.howItWorks.dressResultAlt}
                    fill
                    className={styles.exampleImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INFORMATION ================= */}

        <section className={styles.information}>
          <div className={styles.infoText}>
            <h2>{t.information.avatarTitle}</h2>

            <p>{t.information.avatarDescription}</p>

            <h3>{t.information.howTitle}</h3>

            <p>{t.information.howDescription}</p>
          </div>

          <div className={styles.infoText}>
            <h2>{t.information.categoriesTitle}</h2>

            <p>{t.information.categoriesDescription}</p>

            <h3>{t.information.whyTitle}</h3>

            <p>{t.information.whyDescription}</p>
          </div>

          <div className={styles.faq}>
            <h2>{t.faq.title}</h2>

            <div className={styles.faqGrid}>
              <div>
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

              <div>
                <details>
                  <summary>{t.faq.question5}</summary>
                  <p>{t.faq.answer5}</p>
                </details>

                <details>
                  <summary>{t.faq.question6}</summary>
                  <p>{t.faq.answer6}</p>
                </details>

                <details>
                  <summary>{t.faq.question7}</summary>
                  <p>{t.faq.answer7}</p>
                </details>

                <details>
                  <summary>{t.faq.question8}</summary>
                  <p>{t.faq.answer8}</p>
                </details>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}