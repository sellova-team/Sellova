"use client";

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import styles from "./promo-slides.module.css";

export default function PromoSlidesPage() {
  const { messages } = useLang();
  const t = messages.PromoSlides;

  const uploadInputRef = useRef<HTMLInputElement>(null);

  const promoSlides = [
    {
      id: 1,
      label: t.preview.brandStory,
      image: "/assets/icons/ADS/promo/4.png",
    },
    {
      id: 2,
      label: t.preview.productDetails,
      image: "/assets/icons/ADS/promo/3.png",
    },
    {
      id: 3,
      label: t.preview.promoSlogan,
      image: "/assets/icons/ADS/promo/2.png",
    },
  ];

  const [brandName, setBrandName] = useState(
    t.brand.defaultBrandName
  );

  const [brandSlogan, setBrandSlogan] = useState(
    t.brand.defaultBrandSlogan
  );

  const [productName, setProductName] = useState(
    t.brand.defaultProductName
  );

  const [price, setPrice] = useState(
    t.product.defaultPrice
  );

  const [description, setDescription] = useState(
    t.product.defaultDescription
  );

  const [features, setFeatures] = useState(
    t.product.defaultFeatures
  );

  const [platform, setPlatform] = useState("instagram-story");
  const [slideStyle, setSlideStyle] = useState("creative-mix");
  const [selectedSlide, setSelectedSlide] = useState(1);
  const [uploadedImage, setUploadedImage] =
    useState<string | null>(null);

  const handleUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  return (
    <div className={styles.layout}>
      {/* SIDEBAR */}

      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={170}
            height={66}
            priority
            className={styles.logo}
          />
        </div>

        <nav className={styles.sidebarMenu}>
          <Link
            href="/ads/dashboard"
            className={styles.menuItem}
          >
            <span>▦</span>
            {t.sidebar.dashboard}
          </Link>

          <Link
            href="/ads/generate-image"
            className={styles.menuItem}
          >
            <span>✣</span>
            {t.sidebar.generateImage}
          </Link>

          <Link
            href="/ads/generate-video"
            className={styles.menuItem}
          >
            <span>▣</span>
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
            href="/ads/hashtags"
            className={styles.menuItem}
          >
            <span>#</span>
            {t.sidebar.captionsHashtags}
          </Link>

          <Link
            href="/ads/brand-overlay"
            className={styles.menuItem}
          >
            <span>♢</span>
            {t.sidebar.brandOverlay}
          </Link>

          <Link
            href="/ads/promo-slides"
            className={`${styles.menuItem} ${styles.activeMenu}`}
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
            <span>⌂</span>
            {t.sidebar.academyInsight}
          </Link>

          <div className={styles.menuDivider} />

          <Link
            href="/ads/upgrade-plan"
            className={styles.planItem}
          >
            <span>♕</span>
            {t.sidebar.goldenPlan}
          </Link>

          <Link
           href="/ads/upgrade-plan"
            className={styles.upgradeItem}
          >
            <span>➤</span>
            {t.sidebar.upgradePlan}
          </Link>

          <div className={styles.menuDivider} />

          <Link
            href="/ads/settings"
            className={styles.menuItem}
          >
            <span>⚙</span>
            {t.sidebar.settings}
          </Link>
        </nav>
      </aside>

      {/* PAGE */}

      <main className={styles.page}>
        {/* HEADER */}

        <header className={styles.header}>
          <div>
            <h1>{t.header.title}</h1>
            <p>{t.header.subtitle}</p>
          </div>

          <div className={styles.headerActions}>
            <div className={styles.creditBox}>
              <span>◉</span>
              {t.header.credits}
            </div>

            <Link
             href="/ads/upgrade-plan"
              className={styles.addCredits}
            >
              {t.header.addCredits}
              <span>＋</span>
            </Link>

            <button
              type="button"
              className={styles.profileButton}
            >
              S
            </button>
          </div>
        </header>

        <div className={styles.mainGrid}>
          {/* LEFT PANEL */}

          <section className={styles.editorPanel}>
            <div className={styles.sectionHeading}>
              <span>1</span>
              <h2>{t.upload.title}</h2>
            </div>

            <button
              type="button"
              className={styles.uploadBox}
              onClick={() =>
                uploadInputRef.current?.click()
              }
            >
              <input
                ref={uploadInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleUpload}
                hidden
              />

              <div className={styles.uploadPreview}>
                <Image
                  src={
                    uploadedImage ??
                    "/assets/icons/ADS/promo/1.png"
                  }
                  alt={t.upload.imageAlt}
                  fill
                  priority
                />
              </div>

              <div className={styles.uploadText}>
                <span className={styles.uploadIcon}>
                  ⇧
                </span>

                <strong>{t.upload.dragDrop}</strong>

                <span>{t.upload.browse}</span>

                <small>{t.upload.formats}</small>
              </div>
            </button>

            {/* BRAND INFORMATION */}

            <div className={styles.formSection}>
              <div className={styles.sectionHeading}>
                <span>2</span>
                <h2>{t.brand.title}</h2>
              </div>

              <label className={styles.field}>
                <span>{t.brand.brandName}</span>

                <input
                  value={brandName}
                  onChange={(event) =>
                    setBrandName(event.target.value)
                  }
                />
              </label>

              <label className={styles.field}>
                <span>{t.brand.brandSlogan}</span>

                <input
                  value={brandSlogan}
                  onChange={(event) =>
                    setBrandSlogan(event.target.value)
                  }
                />
              </label>

              <label className={styles.field}>
                <span>{t.brand.productName}</span>

                <input
                  value={productName}
                  onChange={(event) =>
                    setProductName(event.target.value)
                  }
                />
              </label>
            </div>

            {/* PRODUCT DETAILS */}

            <div className={styles.formSection}>
              <div className={styles.sectionHeading}>
                <span>3</span>
                <h2>{t.product.title}</h2>
              </div>

              <label className={styles.field}>
                <span>{t.product.price}</span>

                <input
                  value={price}
                  onChange={(event) =>
                    setPrice(event.target.value)
                  }
                />
              </label>

              <label className={styles.field}>
                <span>{t.product.description}</span>

                <input
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                />
              </label>

              <label className={styles.field}>
                <span>{t.product.keyFeatures}</span>

                <input
                  value={features}
                  onChange={(event) =>
                    setFeatures(event.target.value)
                  }
                />
              </label>
            </div>

            {/* PLATFORM AND STYLE */}

            <div className={styles.selectRow}>
              <label className={styles.selectField}>
                <span className={styles.selectLabel}>
                  <b>4</b>
                  {t.platform.title}
                </span>

                <select
                  value={platform}
                  onChange={(event) =>
                    setPlatform(event.target.value)
                  }
                >
                  <option value="instagram-story">
                    {t.platform.instagramStory}
                  </option>

                  <option value="instagram-post">
                    {t.platform.instagramPost}
                  </option>

                  <option value="facebook-story">
                    {t.platform.facebookStory}
                  </option>

                  <option value="tiktok">
                    {t.platform.tiktok}
                  </option>
                </select>
              </label>

              <label className={styles.selectField}>
                <span className={styles.selectLabel}>
                  <b>5</b>
                  {t.style.title}
                </span>

                <select
                  value={slideStyle}
                  onChange={(event) =>
                    setSlideStyle(event.target.value)
                  }
                >
                  <option value="creative-mix">
                    {t.style.creativeMix}
                  </option>

                  <option value="luxury">
                    {t.style.luxury}
                  </option>

                  <option value="dark-luxury">
                    {t.style.darkLuxury}
                  </option>

                  <option value="minimal">
                    {t.style.minimal}
                  </option>

                  <option value="modern">
                    {t.style.modern}
                  </option>

                  <option value="elegant">
                    {t.style.elegant}
                  </option>

                  <option value="cinematic">
                    {t.style.cinematic}
                  </option>

                  <option value="editorial">
                    {t.style.editorial}
                  </option>

                  <option value="bold">
                    {t.style.boldAdvertising}
                  </option>

                  <option value="clean-product">
                    {t.style.cleanProduct}
                  </option>

                  <option value="warm-lifestyle">
                    {t.style.warmLifestyle}
                  </option>

                  <option value="fashion">
                    {t.style.fashion}
                  </option>

                  <option value="beauty">
                    {t.style.beauty}
                  </option>

                  <option value="colorful">
                    {t.style.colorful}
                  </option>

                  <option value="seasonal">
                    {t.style.seasonalCampaign}
                  </option>
                </select>
              </label>
            </div>

            <button
              type="button"
              className={styles.generateButton}
            >
              {t.generate.button}
              <span>✦</span>
            </button>

            <div className={styles.generationInfo}>
              <span>{t.generate.credits}</span>
              <i>•</i>
              <span>{t.generate.result}</span>
            </div>
          </section>

          {/* RIGHT PANEL */}

          <section className={styles.previewPanel}>
            <div className={styles.previewHeader}>
              <h2>{t.preview.title}</h2>

              <div>
                <button type="button">
                  ⇩ {t.preview.downloadAll}
                </button>
              </div>
            </div>

            <div className={styles.slidesGrid}>
              {promoSlides.map((slide) => (
                <article
                  key={slide.id}
                  className={`${styles.slideCard} ${
                    selectedSlide === slide.id
                      ? styles.selectedSlide
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedSlide(slide.id)
                  }
                >
                  <div className={styles.slideImage}>
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      fill
                      priority
                      className={styles.previewImage}
                    />
                  </div>

                  <div className={styles.slideActions}>
                    <button
                      type="button"
                      aria-label={`${t.preview.selectSlide} ${slide.id}`}
                    >
                      ○
                    </button>

                    <button type="button">
                      ✎ {t.preview.edit}
                    </button>

                    <button type="button">
                      ⇩ {t.preview.download}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* PREVIEW SUMMARY */}

            <div className={styles.previewSummary}>
              <div>
                <span className={styles.instagramIcon}>
                  ▣
                </span>

                <p>
                  <strong>
                    {t.preview.instagramStory}
                  </strong>

                  <small>
                    {t.preview.resolution}
                  </small>
                </p>
              </div>

              <div>
                <span>▤</span>

                <p>
                  <strong>
                    {t.preview.slidesCount}
                  </strong>
                </p>
              </div>

              <div>
                <span>♢</span>

                <p>
                  <strong>
                    {t.preview.creativeMix}
                  </strong>
                </p>
              </div>

              <div>
                <span>◉</span>

                <p>
                  <strong>
                    {t.preview.credits}
                  </strong>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* BOTTOM INFORMATION */}

        <section className={styles.infoGrid}>
          <article className={styles.infoCard}>
            <h2>
              <span>✣</span>
              {t.whyPromo.title}
            </h2>

            <ul>
              <li>{t.whyPromo.item1}</li>
              <li>{t.whyPromo.item2}</li>
              <li>{t.whyPromo.item3}</li>
              <li>{t.whyPromo.item4}</li>
            </ul>
          </article>

          <article className={styles.infoCard}>
            <h2>
              <span>◎</span>
              {t.perfectFor.title}
            </h2>

            <ul>
              <li>{t.perfectFor.item1}</li>
              <li>{t.perfectFor.item2}</li>
              <li>{t.perfectFor.item3}</li>
              <li>{t.perfectFor.item4}</li>
            </ul>
          </article>

          <article className={styles.infoCard}>
            <h2>
              <span>⌁</span>
              {t.howItWorks.title}
            </h2>

            <ol>
              <li>{t.howItWorks.item1}</li>
              <li>{t.howItWorks.item2}</li>
              <li>{t.howItWorks.item3}</li>
              <li>{t.howItWorks.item4}</li>
            </ol>
          </article>

          <article className={styles.infoCard}>
            <h2>
              <span>?</span>
              {t.faq.title}
            </h2>

            <p>
              <b>{t.faq.questionLabel}</b>
              {" "}
              {t.faq.question1}
            </p>

            <p>
              <b>{t.faq.answerLabel}</b>
              {" "}
              {t.faq.answer1}
            </p>

            <p>
              <b>{t.faq.questionLabel}</b>
              {" "}
              {t.faq.question2}
            </p>

            <p>
              <b>{t.faq.answerLabel}</b>
              {" "}
              {t.faq.answer2}
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}