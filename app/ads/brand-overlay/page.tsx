"use client";

import {
  ChangeEvent,
  CSSProperties,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";

import styles from "./brand-overlay.module.css";

export default function BrandOverlayPage() {
  const { messages } = useLang();
  const t = messages.BrandOverlay;

  const designInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const [designImage, setDesignImage] =
    useState<string | null>(null);

  const [brandLogo, setBrandLogo] =
    useState<string | null>(null);

  const [logoPosition, setLogoPosition] =
    useState("top-right");

  const [logoSizePreset, setLogoSizePreset] =
    useState("medium");

  const [logoSize, setLogoSize] = useState(18);
  const [opacity, setOpacity] = useState(85);
  const [safeMargin, setSafeMargin] = useState(24);
  const [compareMode, setCompareMode] = useState(false);

  const positionOptions = [
    {
      value: "top-left",
      label: t.position.topLeft,
      icon: "↖",
    },
    {
      value: "top-center",
      label: t.position.topCenter,
      icon: "↑",
    },
    {
      value: "top-right",
      label: t.position.topRight,
      icon: "↗",
    },
    {
      value: "center-left",
      label: t.position.centerLeft,
      icon: "←",
    },
    {
      value: "center",
      label: t.position.center,
      icon: "●",
    },
    {
      value: "center-right",
      label: t.position.centerRight,
      icon: "→",
    },
    {
      value: "bottom-left",
      label: t.position.bottomLeft,
      icon: "↙",
    },
    {
      value: "bottom-center",
      label: t.position.bottomCenter,
      icon: "↓",
    },
    {
      value: "bottom-right",
      label: t.position.bottomRight,
      icon: "↘",
    },
  ];

  const handleDesignUpload = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setDesignImage(imageUrl);
  };

  const handleLogoUpload = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setBrandLogo(imageUrl);
  };

  const handleSizePreset = (
    preset: "small" | "medium" | "large",
  ) => {
    setLogoSizePreset(preset);

    if (preset === "small") {
      setLogoSize(12);
    }

    if (preset === "medium") {
      setLogoSize(18);
    }

    if (preset === "large") {
      setLogoSize(26);
    }
  };

  const handleReset = () => {
    setLogoPosition("top-right");
    setLogoSizePreset("medium");
    setLogoSize(18);
    setOpacity(85);
    setSafeMargin(24);
    setCompareMode(false);
  };

  const getLogoPositionStyle = (): CSSProperties => {
    const margin = `${safeMargin}px`;

    const baseStyle: CSSProperties = {
      width: `${logoSize}%`,
      opacity: opacity / 100,
    };

    switch (logoPosition) {
      case "top-left":
        return {
          ...baseStyle,
          top: margin,
          left: margin,
        };

      case "top-center":
        return {
          ...baseStyle,
          top: margin,
          left: "50%",
          transform: "translateX(-50%)",
        };

      case "top-right":
        return {
          ...baseStyle,
          top: margin,
          right: margin,
        };

      case "center-left":
        return {
          ...baseStyle,
          top: "50%",
          left: margin,
          transform: "translateY(-50%)",
        };

      case "center":
        return {
          ...baseStyle,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };

      case "center-right":
        return {
          ...baseStyle,
          top: "50%",
          right: margin,
          transform: "translateY(-50%)",
        };

      case "bottom-left":
        return {
          ...baseStyle,
          bottom: margin,
          left: margin,
        };

      case "bottom-center":
        return {
          ...baseStyle,
          bottom: margin,
          left: "50%",
          transform: "translateX(-50%)",
        };

      case "bottom-right":
        return {
          ...baseStyle,
          right: margin,
          bottom: margin,
        };

      default:
        return {
          ...baseStyle,
          top: margin,
          right: margin,
        };
    }
  };

  return (
    <div className={styles.layout}>
      {/* ================= SIDEBAR ================= */}

      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt={t.mediaAlt.sellovaLogo}
            width={145}
            height={55}
            priority
            className={styles.sidebarLogo}
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
            href="/ads/hashtags"
            className={styles.menuItem}
          >
            <span>◎</span>
            {t.sidebar.captionsHashtags}
          </Link>

          <Link
            href="/ads/brand-overlay"
            className={`${styles.menuItem} ${styles.activeMenu}`}
          >
            <span>♕</span>
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

        <div className={styles.upgradeCard}>
          <h3>♕ {t.upgrade.title}</h3>

          <p>{t.upgrade.description}</p>

          <Link href="/ads/golden-plan">
            {t.upgrade.button}
            <span>→</span>
          </Link>
        </div>

        <div className={styles.userBox}>
          <span className={styles.userAvatar}>S</span>

          <div>
            <strong>{t.upgrade.userName}</strong>
            <small>{t.upgrade.userPlan}</small>
          </div>
        </div>
      </aside>

      {/* ================= PAGE ================= */}

      <main className={styles.page}>
        {/* ================= HEADER ================= */}

        <header className={styles.header}>
          <div>
            <h1>
              {t.header.title}
              <span> ✧</span>
            </h1>

            <p>{t.header.subtitle}</p>
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

        {/* ================= MAIN CONTENT ================= */}

        <div className={styles.mainGrid}>
          {/* ================= SETTINGS PANEL ================= */}

          <section className={styles.settingsPanel}>
            {/* UPLOAD DESIGNED IMAGE */}

            <div className={styles.settingSection}>
              <div className={styles.sectionTitle}>
                <b>1</b>

                <span>{t.uploadDesign.title}</span>

                <small>ⓘ</small>
              </div>

              <button
                type="button"
                className={styles.uploadBox}
                onClick={() =>
                  designInputRef.current?.click()
                }
              >
                <input
                  ref={designInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleDesignUpload}
                  hidden
                />

                <div className={styles.uploadPreview}>
                  <Image
                    src={
                      designImage ??
                      "/assets/icons/ADS/berand overly/axe.png"
                    }
                    alt={t.mediaAlt.uploadedDesign}
                    fill
                    priority
                    className={styles.uploadPreviewImage}
                  />
                </div>

                <span className={styles.uploadIcon}>
                  ⇧
                </span>

                <div className={styles.uploadText}>
                  <strong>
                    {t.uploadDesign.button}
                  </strong>

                  <small>
                    {t.uploadDesign.formats}
                  </small>
                </div>
              </button>
            </div>

            {/* UPLOAD BRAND LOGO */}

            <div className={styles.settingSection}>
              <div className={styles.sectionTitle}>
                <b>2</b>

                <span>{t.uploadLogo.title}</span>

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
                  accept="image/png,image/webp,image/svg+xml"
                  onChange={handleLogoUpload}
                  hidden
                />

                <div
                  className={`${styles.uploadPreview} ${styles.logoPreview}`}
                >
                  <Image
                    src={brandLogo ?? "/logo.png"}
                    alt={t.mediaAlt.uploadedBrandLogo}
                    fill
                    priority
                    className={styles.uploadLogoImage}
                  />
                </div>

                <span className={styles.uploadIcon}>
                  ⇧
                </span>

                <div className={styles.uploadText}>
                  <strong>
                    {t.uploadLogo.button}
                  </strong>

                  <small>{t.uploadLogo.formats}</small>
                </div>
              </button>
            </div>

            {/* LOGO POSITION */}

            <div className={styles.settingSection}>
              <div className={styles.sectionTitle}>
                <b>3</b>

                <span>{t.position.title}</span>

                <small>ⓘ</small>
              </div>

              <div className={styles.positionGrid}>
                {positionOptions.map((position) => (
                  <button
                    key={position.value}
                    type="button"
                    className={`${
                      styles.positionButton
                    } ${
                      logoPosition === position.value
                        ? styles.activePosition
                        : ""
                    }`}
                    onClick={() =>
                      setLogoPosition(position.value)
                    }
                  >
                    <span>{position.icon}</span>
                    {position.label}
                  </button>
                ))}
              </div>
            </div>

            {/* LOGO SIZE */}

            <div className={styles.settingSection}>
              <div className={styles.sectionTitle}>
                <b>4</b>

                <span>{t.size.title}</span>

                <small>ⓘ</small>
              </div>

              <div className={styles.sizeButtons}>
                <button
                  type="button"
                  className={
                    logoSizePreset === "small"
                      ? styles.activeSize
                      : ""
                  }
                  onClick={() =>
                    handleSizePreset("small")
                  }
                >
                  {t.size.small}
                </button>

                <button
                  type="button"
                  className={
                    logoSizePreset === "medium"
                      ? styles.activeSize
                      : ""
                  }
                  onClick={() =>
                    handleSizePreset("medium")
                  }
                >
                  {t.size.medium}
                </button>

                <button
                  type="button"
                  className={
                    logoSizePreset === "large"
                      ? styles.activeSize
                      : ""
                  }
                  onClick={() =>
                    handleSizePreset("large")
                  }
                >
                  {t.size.large}
                </button>
              </div>

              <div className={styles.rangeRow}>
                <input
                  type="range"
                  min="8"
                  max="40"
                  value={logoSize}
                  onChange={(event) => {
                    setLogoSize(
                      Number(event.target.value),
                    );

                    setLogoSizePreset("custom");
                  }}
                />

                <output>{logoSize}%</output>
              </div>
            </div>

            {/* OPACITY */}

            <div className={styles.settingSection}>
              <div className={styles.sectionTitle}>
                <b>5</b>

                <span>{t.controls.opacity}</span>

                <small>ⓘ</small>
              </div>

              <div className={styles.rangeRow}>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={opacity}
                  onChange={(event) =>
                    setOpacity(
                      Number(event.target.value),
                    )
                  }
                />

                <output>{opacity}%</output>
              </div>
            </div>

            {/* SAFE MARGIN */}

            <div className={styles.settingSection}>
              <div className={styles.sectionTitle}>
                <b>6</b>

                <span>{t.controls.safeMargin}</span>

                <small>ⓘ</small>
              </div>

              <div className={styles.rangeRow}>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={safeMargin}
                  onChange={(event) =>
                    setSafeMargin(
                      Number(event.target.value),
                    )
                  }
                />

                <output>{safeMargin} px</output>
              </div>
            </div>

            <button
              type="button"
              className={styles.applyButton}
            >
              {t.controls.applyButton}

              <small>
                {t.controls.creditNotice}
              </small>
            </button>
          </section>

          {/* ================= LIVE PREVIEW ================= */}

          <section className={styles.previewPanel}>
            <div className={styles.previewHeader}>
              <h2>{t.preview.title}</h2>

              <div>
                <button
                  type="button"
                  onClick={handleReset}
                >
                  ↻ {t.preview.reset}
                </button>

                <button
                  type="button"
                  className={
                    compareMode
                      ? styles.activeCompare
                      : ""
                  }
                  onClick={() =>
                    setCompareMode(
                      (current) => !current,
                    )
                  }
                >
                  ◫ {t.preview.compare}
                </button>

                <button
                  type="button"
                  className={styles.downloadButton}
                >
                  ⇩ {t.preview.download}
                </button>
              </div>
            </div>

            <div className={styles.livePreview}>
              <Image
                src={
                  designImage ??
                  "/assets/icons/ADS/berand overly/axe.png"
                }
                alt={t.mediaAlt.livePreview}
                fill
                priority
                className={styles.mainPreviewImage}
              />

              {!compareMode && (
                <div
                  className={styles.movableLogo}
                  style={getLogoPositionStyle()}
                >
                  <Image
                    src={brandLogo ?? "/logo.png"}
                    alt={t.mediaAlt.overlayLogo}
                    fill
                    priority
                    className={styles.overlayLogoImage}
                  />

                  <span
                    className={`${styles.resizeHandle} ${styles.topLeftHandle}`}
                  />

                  <span
                    className={`${styles.resizeHandle} ${styles.topRightHandle}`}
                  />

                  <span
                    className={`${styles.resizeHandle} ${styles.bottomLeftHandle}`}
                  />

                  <span
                    className={`${styles.resizeHandle} ${styles.bottomRightHandle}`}
                  />
                </div>
              )}

              {compareMode && (
                <div className={styles.compareLabel}>
                  {t.preview.originalDesign}
                </div>
              )}
            </div>

            {/* PREVIEW INFORMATION */}

            <div className={styles.previewInfo}>
              <article>
                <span>▦</span>

                <div>
                  <small>{t.preview.position}</small>

                  <strong>
                    {
                      positionOptions.find(
                        (item) =>
                          item.value === logoPosition,
                      )?.label
                    }
                  </strong>
                </div>
              </article>

              <article>
                <span>↗</span>

                <div>
                  <small>{t.preview.size}</small>
                  <strong>{logoSize}%</strong>
                </div>
              </article>

              <article>
                <span>◉</span>

                <div>
                  <small>{t.preview.opacity}</small>
                  <strong>{opacity}%</strong>
                </div>
              </article>

              <article>
                <span>▭</span>

                <div>
                  <small>{t.preview.output}</small>

                  <strong>
                    {t.preview.resolution}
                  </strong>
                </div>
              </article>
            </div>
          </section>
        </div>

        {/* ================= BOTTOM INFORMATION ================= */}

        <section className={styles.infoGrid}>
          <article className={styles.infoCard}>
            <div className={styles.infoIcon}>♙</div>

            <div>
              <h2>{t.information.whyTitle}</h2>

              <p>
                {t.information.whyDescription}
              </p>
            </div>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.infoIcon}>▧</div>

            <div>
              <h2>
                {t.information.formatsTitle}
              </h2>

              <p>
                {t.information.designFormat}
                <br />

                {t.information.logoFormat}
                <br />

                {t.information.outputFormat}
                <br />

                {t.information.transparentLogo}
              </p>
            </div>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.infoIcon}>♢</div>

            <div>
              <h2>
                {t.information.protectionTitle}
              </h2>

              <p>
                {t.information.protectionDescription}
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}