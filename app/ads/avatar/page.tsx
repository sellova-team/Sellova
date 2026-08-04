"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../../lib/lang";
import styles from "./avatar.module.css";

export default function AvatarPage() {
  const { messages } = useLang();
  const t = messages.avatar;

  return (
    <div className={styles.layout}>

      {/* ================= SIDEBAR ================= */}

      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={165}
            height={75}
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

          <p className={styles.menuTitle}>
            {t.sidebar.analytics}
          </p>

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

          <p className={styles.menuTitle}>
            {t.sidebar.account}
          </p>

          <Link
            href="/upgrade-plan"
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
            href="/settings"
            className={styles.menuItem}
          >
            <span>⚙</span>
            {t.sidebar.settings}
          </Link>
        </nav>

        {/* GOLDEN PLAN */}

        <div className={styles.goldenPlan}>
          <h3>♕ {t.plan.title}</h3>

          <p>
            {t.plan.descriptionLine1}
            <br />
            {t.plan.descriptionLine2}
          </p>

          <Link href="/upgrade-plan">
            {t.plan.upgrade} →
          </Link>
        </div>

        {/* USER */}

        <div className={styles.userBox}>
          <span className={styles.userAvatar}>S</span>

          <div>
            <strong>{t.user.name}</strong>
            <small>{t.user.plan}</small>
          </div>
        </div>
      </aside>

      {/* ================= PAGE ================= */}

      <main className={styles.page}>

        {/* HEADER */}

        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>
              {t.header.title}
              <span> ✦</span>
            </h1>

            <p className={styles.subtitle}>
              {t.header.subtitle}
            </p>
          </div>

          <div className={styles.headerActions}>
            <div className={styles.creditBox}>
              <span className={styles.creditIcon}>⚡</span>
              <span>{t.header.credits}</span>
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

        {/* SECTION TITLE */}

        <div className={styles.sectionTitle}>
          <span className={styles.titleLine} />
          <span>✧</span>

          <h2>{t.sectionTitle}</h2>

          <span>✧</span>
          <span className={styles.titleLine} />
        </div>

        {/* ================= AVATAR CARDS ================= */}

        <section className={styles.avatarGrid}>

          {/* PHOTO AVATAR */}

          <article
            className={`${styles.avatarCard} ${styles.photoCard}`}
          >
            <div className={styles.cardHeading}>
              <div className={styles.photoIcon}>
                <span>▧</span>
              </div>

              <div>
                <h2>{t.photoAvatar.title}</h2>
                <p>{t.photoAvatar.description}</p>
              </div>
            </div>

            <Link
              href="/ads/avatar/avatar-axe"
              className={styles.previewLink}
            >
              <div className={styles.photoPreview}>
                <Image
                  src="/assets/icons/ADS/avatar/girle.png"
                  alt={t.photoAvatar.imageAlt}
                  fill
                  priority
                  className={styles.previewImage}
                />
              </div>
            </Link>

            <div className={styles.photoTags}>
              <span>
                ♙ {t.photoAvatar.tags.productPhotos}
              </span>

              <span>
                ♡ {t.photoAvatar.tags.socialPosts}
              </span>

              <span>
                🛒 {t.photoAvatar.tags.ecommerce}
              </span>
            </div>

            <Link
              href="/ads/avatar/avatar-axe"
              className={`${styles.createButton} ${styles.photoButton}`}
            >
              {t.photoAvatar.button}
              <span>→</span>
            </Link>
          </article>

          {/* VIDEO AVATAR */}

          <article
            className={`${styles.avatarCard} ${styles.videoCard}`}
          >
            <div className={styles.cardHeading}>
              <div className={styles.videoIcon}>
                <span>▷</span>
              </div>

              <div>
                <h2>{t.videoAvatar.title}</h2>
                <p>{t.videoAvatar.description}</p>
              </div>
            </div>

            <div className={styles.videoPreview}>
              <Image
                src="/assets/icons/ADS/avatar/kid.png"
                alt={t.videoAvatar.imageAlt}
                fill
                priority
                className={styles.previewImage}
              />

              <Link
                href="/ads/avatar/avatar-video"
                className={styles.playButton}
                aria-label={t.videoAvatar.playLabel}
              >
                ▶
              </Link>

              <div className={styles.videoControls}>
                <span>▷</span>
                <span>00:00</span>

                <div className={styles.progressTrack}>
                  <span className={styles.progressFill} />
                  <span className={styles.progressDot} />
                </div>

                <span>00:30</span>
                <span>⛶</span>
              </div>
            </div>

            <div className={styles.videoTags}>
              <span>
                ✣ {t.videoAvatar.tags.naturalMotion}
              </span>

              <span>
                ▱ {t.videoAvatar.tags.voiceCaption}
              </span>

              <span>
                ⌯ {t.videoAvatar.tags.readyToShare}
              </span>
            </div>

            <Link
              href="/ads/avatar/avatar-video"
              className={`${styles.createButton} ${styles.videoButton}`}
            >
              {t.videoAvatar.button}
              <span>→</span>
            </Link>
          </article>
        </section>

        {/* ================= THREE STEPS ================= */}

        <section className={styles.stepsBox}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>

            <div>
              <h3>{t.steps.step1.title}</h3>

              <p>
                {t.steps.step1.descriptionLine1}
                <br />
                {t.steps.step1.descriptionLine2}
              </p>
            </div>
          </div>

          <span className={styles.stepLine} />

          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>

            <div>
              <h3>{t.steps.step2.title}</h3>

              <p>
                {t.steps.step2.descriptionLine1}
                <br />
                {t.steps.step2.descriptionLine2}
              </p>
            </div>
          </div>

          <span className={styles.stepLine} />

          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>

            <div>
              <h3>{t.steps.step3.title}</h3>

              <p>
                {t.steps.step3.descriptionLine1}
                <br />
                {t.steps.step3.descriptionLine2}
              </p>
            </div>
          </div>
        </section>

        {/* ================= GUIDE ================= */}

        <section className={styles.guideBox}>
          <div className={styles.guideIntro}>
            <div className={styles.questionIcon}>?</div>

            <div>
              <h2>{t.guide.title}</h2>
              <p>{t.guide.description}</p>
            </div>
          </div>

          <div className={styles.guideItem}>
            <div className={styles.guidePhotoIcon}>▧</div>

            <div>
              <h3>{t.guide.photo.title}</h3>

              <p>
                {t.guide.photo.descriptionLine1}
                <br />
                {t.guide.photo.descriptionLine2}
              </p>
            </div>
          </div>

          <div className={styles.guideDivider} />

          <div className={styles.guideItem}>
            <div className={styles.guideVideoIcon}>▷</div>

            <div>
              <h3>{t.guide.video.title}</h3>

              <p>
                {t.guide.video.descriptionLine1}
                <br />
                {t.guide.video.descriptionLine2}
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}