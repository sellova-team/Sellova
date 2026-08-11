"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import styles from "./academy-insight.module.css";

const sidebarItems = [
  {
    href: "/ads/dashboard",
    icon: "⌂",
    label: "Dashboard",
  },
  {
    href: "/ads/generate-image",
    icon: "▧",
    label: "Generate Image",
  },
  {
    href: "/ads/generate-video",
    icon: "▷",
    label: "Generate Video",
  },
  {
    href: "/ads/avatar",
    icon: "♙",
    label: "Avatars",
  },
  {
    href: "/ads/promo-slides",
    icon: "▤",
    label: "Promo Slides",
  },
  {
    href: "/ads/academy-insight",
    icon: "◇",
    label: "Academy",
  },
  {
    href: "/ads/brand-overlay",
    icon: "♢",
    label: "Brand Overlay",
  },
  {
    href: "/ads/settings",
    icon: "⚙",
    label: "Settings",
  },
];

const learningCategories = [
  {
    id: 1,
    title: "Buyer Psychology",
    description:
      "Understand your buyers and influence their decisions.",
    image: "/assets/icons/ADS/academy/brain.png",
  },
  {
    id: 2,
    title: "Visual Marketing",
    description:
      "Create visuals that grab attention and build desire.",
    image: "/assets/icons/ADS/academy/pen.png",
  },
  {
    id: 3,
    title: "Social Media Strategy",
    description:
      "Grow your brand and reach the right audience.",
    image: "/assets/icons/ADS/academy/social.png",
  },
  {
    id: 4,
    title: "Sales Growth",
    description:
      "Boost conversions and increase average order value.",
    image: "/assets/icons/ADS/academy/why.png",
  },
];

const popularInsights = [
  {
    id: 1,
    category: "Psychology",
    title: "Why Luxury Brands Use Dark Colors",
    description:
      "The hidden psychology behind dark colors in marketing.",
    time: "6 min read",
    image: "/assets/icons/ADS/academy/perfium.png",
  },
  {
    id: 2,
    category: "Pricing",
    title: "7 Pricing Tricks That Increase Sales",
    description:
      "Smart pricing strategies proven to boost your revenue.",
    time: "7 min read",
    image: "/assets/icons/ADS/academy/price.png",
  },
  {
    id: 3,
    category: "Visuals",
    title: "How To Make Products Look Premium",
    description:
      "Simple visual techniques that create a premium feel.",
    time: "8 min read",
    image: "/assets/icons/ADS/academy/camera.png",
  },
  {
    id: 4,
    category: "Psychology",
    title: "The Psychology Of Scarcity",
    description:
      "Why limited availability increases product demand.",
    time: "6 min read",
    image: "/assets/icons/ADS/academy/time.png",
  },
  {
    id: 5,
    category: "Marketing",
    title: "Why Customers Ignore Most Ads",
    description:
      "The reasons most advertisements fail in the first seconds.",
    time: "6 min read",
    image: "/assets/icons/ADS/academy/why.png",
  },
];

const keyInsights = [
  {
    id: 1,
    icon: "◉",
    value: "73%",
    description:
      "of buyers decide in less than 3 seconds.",
  },
  {
    id: 2,
    icon: "♡",
    value: "89%",
    description:
      "of users stop scrolling because of visuals.",
  },
  {
    id: 3,
    icon: "⌁",
    value: "3x",
    description:
      "higher conversion with emotional ads.",
  },
  {
    id: 4,
    icon: "🛒",
    value: "47%",
    description:
      "increase in sales with clear value proposition.",
  },
];

const successStories = [
  {
    id: 1,
    brand: "Perfume Brand",
    result: "+42%",
    resultLabel: "Sales Increase",
    description:
      "By improving product visuals and emotional storytelling.",
    image: "/assets/icons/ADS/academy/perfium.png",
  },
  {
    id: 2,
    brand: "Jewelry Store",
    result: "+28%",
    resultLabel: "Engagement",
    description:
      "Using new lighting techniques and background strategy.",
    image: "/assets/icons/ADS/academy/price.png",
  },
  {
    id: 3,
    brand: "Fashion Store",
    result: "+63%",
    resultLabel: "Click Through Rate",
    description:
      "With better ad creatives and audience targeting.",
    image: "/assets/icons/ADS/academy/camera.png",
  },
];

type AcademyDetail = {
  badge: string;
  title: string;
  intro: string;
  points: string[];
  action: string;
  warning?: string;
};

const academyDetails: Record<string, AcademyDetail> = {
  /* ================= CATEGORIES ================= */

  "Buyer Psychology": {
    badge: "BUYER PSYCHOLOGY",
    title: "How Customers Make Buying Decisions",
    intro:
      "Customers usually buy when they quickly understand the value of a product, trust the seller, and feel that the product solves a real problem.",
    points: [
      "Show the customer’s problem before introducing the product.",
      "Explain the benefit instead of listing only technical features.",
      "Use real customer reviews to reduce fear and uncertainty.",
      "Keep the offer simple so the customer can decide more easily.",
      "Use honest urgency, such as a real deadline or limited stock.",
    ],
    action:
      "Choose one product and write three reasons why a customer truly needs it.",
  },

  "Visual Marketing": {
    badge: "VISUAL MARKETING",
    title: "Create Product Images That Stop Scrolling",
    intro:
      "A strong product image should quickly show what the product is, who it is for, and why it is valuable.",
    points: [
      "Make the product the main subject of the image.",
      "Use clean lighting and strong contrast.",
      "Avoid adding too much text to one image.",
      "Show the product from different angles and in real use.",
      "Prepare different image sizes for Feed, Story and Reels.",
    ],
    action:
      "Create one clean product photo and one lifestyle photo, then compare their engagement.",
  },

  "Social Media Strategy": {
    badge: "SOCIAL MEDIA",
    title: "Build a Practical Social Media Strategy",
    intro:
      "A good social strategy combines useful content, product demonstrations, customer trust and clear sales offers.",
    points: [
      "Create separate content for awareness, trust and sales.",
      "Use a mixture of short videos, images and carousels.",
      "Repeat successful ideas with new visuals instead of always starting over.",
      "Answer customer questions through posts and short videos.",
      "Review reach, saves, clicks and sales—not only likes.",
    ],
    action:
      "Plan four posts: one educational, one product demo, one customer story and one sales offer.",
  },

  "Sales Growth": {
    badge: "SALES GROWTH",
    title: "Increase Sales Without Constant Discounts",
    intro:
      "Sales growth comes from improving the offer, product page, trust and buying experience—not only reducing the price.",
    points: [
      "Write one clear value proposition for every product.",
      "Make price, delivery and return information easy to find.",
      "Use bundles to increase average order value.",
      "Show complementary products after the customer selects an item.",
      "Test one change at a time and measure the result.",
    ],
    action:
      "Review your best-selling product and remove one point of confusion from its sales page.",
  },

  /* ================= POPULAR ARTICLES ================= */

  "Why Luxury Brands Use Dark Colors": {
    badge: "PSYCHOLOGY",
    title: "Why Luxury Brands Often Use Dark Colors",
    intro:
      "Black and deep colors can create a premium and dramatic feeling, but color alone does not make a brand luxurious.",
    points: [
      "Dark backgrounds can create strong contrast with gold, silver and bright products.",
      "Large empty spaces can make a design feel more exclusive.",
      "Use fewer elements and avoid crowded luxury advertisements.",
      "Choose high-quality lighting so dark products do not disappear.",
      "Keep typography elegant, readable and consistent.",
    ],
    action:
      "Create two versions of the same advertisement: one light and one dark, then test which performs better.",
  },

  "7 Pricing Tricks That Increase Sales": {
    badge: "PRICING",
    title: "Smart and Ethical Pricing Techniques",
    intro:
      "The way a price is presented can affect how customers understand value. Pricing must always remain clear and honest.",
    points: [
      "Use three options: basic, recommended and premium.",
      "Show the value included in each option.",
      "Use bundles when the combined offer is genuinely better.",
      "Display unit price when quantity or package sizes are different.",
      "Use real discounts only—never create a fake original price.",
      "Test rounded prices for premium products and ending prices for value products.",
      "Make extra fees visible before checkout.",
    ],
    action:
      "Create three honest price choices and mark only one as the recommended option.",
  },

  "How To Make Products Look Premium": {
    badge: "VISUALS",
    title: "Make Product Images Look More Premium",
    intro:
      "Premium visuals depend on lighting, composition, texture and consistency more than expensive equipment.",
    points: [
      "Use one main light and control harsh shadows.",
      "Clean the product before photography.",
      "Use a background that matches the brand identity.",
      "Show important textures and small details clearly.",
      "Keep colors consistent across all product images.",
      "Do not use excessive filters that change the real product.",
    ],
    action:
      "Photograph one product near a window with a clean background and compare it with the old image.",
  },

  "The Psychology Of Scarcity": {
    badge: "PSYCHOLOGY",
    title: "Use Scarcity Without Damaging Trust",
    intro:
      "Scarcity can help customers decide when availability is genuinely limited. Fake scarcity can damage long-term trust.",
    points: [
      "Show limited stock only when stock is actually limited.",
      "Use deadlines only for real campaigns.",
      "Explain why availability is limited.",
      "Avoid resetting countdown timers after they finish.",
      "Combine urgency with useful product information.",
    ],
    action:
      "If an offer has a real deadline, clearly explain the date, time and reason.",
    warning:
      "Fake countdowns and fake stock messages may increase short-term clicks but reduce customer trust.",
  },

  "Why Customers Ignore Most Ads": {
    badge: "MARKETING",
    title: "Why Customers Scroll Past Advertisements",
    intro:
      "Customers ignore ads that feel irrelevant, confusing, repetitive or too slow to explain their value.",
    points: [
      "Show the main benefit in the first seconds.",
      "Use one clear message instead of several competing messages.",
      "Design the advertisement for the correct platform and screen size.",
      "Refresh overused creatives before the audience becomes tired of them.",
      "Match the message to the customer’s actual need.",
      "Use a clear action such as Buy, Learn More or View Product.",
    ],
    action:
      "Look at your advertisement for three seconds. If its main message is unclear, simplify it.",
  },

  /* ================= KEY INSIGHTS ================= */

  "73%": {
    badge: "FAST DECISIONS",
    title: "The First Seconds Matter",
    intro:
      "Customers form an initial impression very quickly, so the opening image and message must be understandable immediately.",
    points: [
      "Place the product in the most visible area.",
      "Use a short and specific headline.",
      "Remove decorative elements that hide the offer.",
      "Make the call-to-action easy to recognize.",
      "Test your design on a small mobile screen.",
    ],
    action:
      "Show your advertisement to someone for three seconds and ask what they understood.",
    warning:
      "Percentages can vary by industry and audience. Measure the behavior of your own customers.",
  },

  "89%": {
    badge: "VISUAL ATTENTION",
    title: "Visuals Can Stop or Lose the Customer",
    intro:
      "Strong visuals help customers notice an offer, but relevance and clarity are more important than decoration.",
    points: [
      "Use a clear visual hierarchy.",
      "Keep the product separate from the background.",
      "Use readable text and sufficient contrast.",
      "Avoid low-resolution and stretched images.",
      "Match the visual style to the target customer.",
    ],
    action:
      "Check whether the product and headline remain clear when the image is viewed as a small thumbnail.",
    warning:
      "Treat displayed percentages as educational examples unless they are connected to a named study.",
  },

  "3x": {
    badge: "EMOTIONAL MARKETING",
    title: "Emotion Helps People Remember",
    intro:
      "Emotion can make an advertisement more memorable when it supports the product’s real value.",
    points: [
      "Choose one emotion: confidence, comfort, joy, curiosity or aspiration.",
      "Use people and situations that match the target audience.",
      "Connect the emotion directly to the product benefit.",
      "Avoid exaggerated stories that feel unrelated to the product.",
      "Finish with a clear and practical action.",
    ],
    action:
      "Write one sentence explaining how the customer should feel after using your product.",
    warning:
      "Conversion improvements differ between products, platforms and audiences. Test before making a claim.",
  },

  "47%": {
    badge: "VALUE PROPOSITION",
    title: "Make the Product Value Clear",
    intro:
      "A value proposition explains why a customer should choose your product instead of another option.",
    points: [
      "Say who the product is designed for.",
      "Describe the main problem it solves.",
      "Show the most important difference from competitors.",
      "Support the promise with evidence or customer reviews.",
      "Keep the message specific and easy to understand.",
    ],
    action:
      "Complete this sentence: This product helps ___ achieve ___ without ___.",
    warning:
      "Use your own store analytics before publishing a specific sales-increase percentage.",
  },

  /* ================= SUCCESS STORIES ================= */

  "Perfume Brand": {
    badge: "CASE STUDY",
    title: "Perfume Brand Visual Improvement",
    intro:
      "This is an example scenario showing how a perfume seller could improve advertising through better product presentation.",
    points: [
      "Use close-up images to show the bottle and packaging quality.",
      "Choose lighting that reflects the perfume’s personality.",
      "Create lifestyle images for different customer groups.",
      "Add a short emotional slogan instead of too much text.",
      "Compare product-only photos with model-based advertisements.",
    ],
    action:
      "Measure clicks and sales before and after replacing the main product image.",
    warning:
      "The displayed +42% result is sample content unless it comes from a verified real Sellova customer.",
  },

  "Jewelry Store": {
    badge: "CASE STUDY",
    title: "Jewelry Store Engagement Strategy",
    intro:
      "This example shows how a jewelry seller could improve engagement with lighting, close-ups and consistent branding.",
    points: [
      "Use macro images to show stones and metal texture.",
      "Include one image showing the real size of the jewelry.",
      "Use consistent lighting across the collection.",
      "Show jewelry being worn when possible.",
      "Answer common questions about material and care.",
    ],
    action:
      "Test one close-up photo, one lifestyle photo and one short product video.",
    warning:
      "The displayed +28% result should be labeled as an example until verified by real analytics.",
  },

  "Fashion Store": {
    badge: "CASE STUDY",
    title: "Fashion Store Click Strategy",
    intro:
      "This example shows how a fashion seller could increase interest with better styling and clearer product information.",
    points: [
      "Show front, back and detail views.",
      "Show the item on a person when possible.",
      "Include clear sizing and fit information.",
      "Create separate visuals for different platforms.",
      "Use styling ideas to help customers imagine wearing the product.",
    ],
    action:
      "Add one complete outfit image beside the standard product images and compare clicks.",
    warning:
      "The displayed +63% result is sample content and should not be presented as a verified result yet.",
  },
};

const translatedDetailKeys: Record<string, string> = {
  "Buyer Psychology": "buyerPsychology",
  "Visual Marketing": "visualMarketing",
  "Social Media Strategy": "socialMediaStrategy",
  "Sales Growth": "salesGrowth",
  "Why Luxury Brands Use Dark Colors": "luxuryDarkColors",
  "7 Pricing Tricks That Increase Sales": "pricingTricks",
  "How To Make Products Look Premium": "premiumProducts",
  "The Psychology Of Scarcity": "scarcityPsychology",
  "Why Customers Ignore Most Ads": "ignoredAds",
  "73%": "fastDecisions",
  "89%": "visualAttention",
  "3x": "emotionalMarketing",
  "47%": "valueProposition",
  "Perfume Brand": "perfumeBrand",
  "Jewelry Store": "jewelryStore",
  "Fashion Store": "fashionStore",
};

export default function AcademyInsightPage() {
  const { messages } = useLang();
  const t = messages.AcademyInsight;

  const [selectedTopic, setSelectedTopic] =
    useState<string | null>(null);

  const selectedDetail: AcademyDetail | null = selectedTopic
    ? (t.details[
        translatedDetailKeys[selectedTopic] as keyof typeof t.details
      ] as AcademyDetail) ?? academyDetails[selectedTopic]
    : null;

  const sidebarLabels = [
    t.sidebar.dashboard,
    t.sidebar.generateImage,
    t.sidebar.generateVideo,
    t.sidebar.avatars,
    t.sidebar.promoSlides,
    t.sidebar.academy,
    t.sidebar.brandOverlay,
    t.sidebar.settings,
  ];

  const openTopic = (topic: string) => {
    setSelectedTopic(topic);
  };

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  return (
    <div className={styles.layout}>
      {/* ================= SIDEBAR ================= */}

      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={140}
            height={50}
            priority
            className={styles.logo}
          />
        </div>

        <nav className={styles.sidebarMenu}>
          {sidebarItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${
                item.href === "/ads/academy-insight"
                  ? styles.activeMenu
                  : ""
              }`}
            >
              <span className={styles.menuIcon}>
                {item.icon}
              </span>

              <span>{sidebarLabels[index]}</span>
            </Link>
          ))}
        </nav>

        {/* UPGRADE CARD */}

        <div className={styles.upgradeCard}>
          <div className={styles.upgradeHeading}>
            <h3>
              {t.upgrade.title}
              <strong>{t.upgrade.plan}</strong>
            </h3>

            <span>♕</span>
          </div>

          <ul>
            <li>✓ {t.upgrade.moreCredits}</li>
            <li>✓ {t.upgrade.priorityGeneration}</li>
            <li>✓ {t.upgrade.premiumSupport}</li>
            <li>✓ {t.upgrade.advancedTools}</li>
          </ul>

          <Link
            href="/ads/upgrade-plan"
            className={styles.upgradeButton}
          >
            {t.upgrade.button}
          </Link>
        </div>


        {/* USER */}

        <div className={styles.userBox}>
          <span className={styles.userAvatar}>S</span>

          <div>
            <strong>{t.user.name}</strong>
            <small>{t.user.plan}</small>
          </div>

          <span className={styles.userArrow}>⌄</span>
        </div>
      </aside>

      {/* ================= PAGE ================= */}

      <main className={styles.page}>
        {/* ================= HEADER ================= */}

        <header className={styles.header}>
         
          <div className={styles.headerActions}>
            <Link
              href="/upgrade-plan"
              className={styles.creditBox}
            >
              <span>♙</span>
              {t.header.credits}
            </Link>

            

            <button
              type="button"
              className={styles.profileButton}
            >
              S
            </button>
          </div>
        </header>

        {/* ================= HERO ================= */}

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              {t.hero.badge}
            </span>

            <h1>
              {t.hero.titleFirst}
              <br />
              {t.hero.titleSecond} <span>{t.hero.titleHighlight}</span>
            </h1>

            <p>{t.hero.description}</p>

            <div className={styles.heroButtons}>
              <Link
                href="#popular-insights"
                className={styles.startButton}
              >
                {t.hero.startLearning}
                <span>→</span>
              </Link>

              <button
                type="button"
                className={styles.watchButton}
              >
                <span className={styles.watchIcon}>◉</span>
                {t.hero.watchIntro}
                <span>▷</span>
              </button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/assets/icons/ADS/academy/axe.png"
              alt={t.accessibility.academyHero}
              fill
              priority
              className={styles.heroMainImage}
            />
          </div>
        </section>

        {/* ================= LEARNING CATEGORIES ================= */}

        <section className={styles.categoryGrid}>
          {learningCategories.map((category, index) => (
           <article
  key={category.id}
  className={styles.categoryCard}
  onClick={() => openTopic(category.title)}
>
              <div className={styles.categoryIcon}>
                <Image
  src={category.image}
  alt={t.categories[index].title}
  fill
  className={`${styles.categoryImage} ${
    category.id === 1
      ? styles.brainCategoryImage
      : category.id === 3
        ? styles.phoneCategoryImage
        : category.id === 4
  ? styles.laptopCategoryImage
          : ""
  }`}
/>
              </div>

              <h2>{t.categories[index].title}</h2>

              <p>{t.categories[index].description}</p>

              <button
  type="button"
  className={styles.categoryButton}
  aria-label={`${t.accessibility.openCategory} ${t.categories[index].title}`}
  onClick={(event) => {
    event.stopPropagation();
    openTopic(category.title);
  }}
>
                →
              </button>
            </article>
          ))}
        </section>

        {/* ================= POPULAR INSIGHTS ================= */}

        <section
          id="popular-insights"
          className={styles.contentSection}
        >
          <div className={styles.sectionHeader}>
            <div>
              <h2>{t.popularSection.title}</h2>
              <p>{t.popularSection.subtitle}</p>
            </div>

            <Link
              href="/ads/academy-insight/articles"
              className={styles.viewAll}
            >
              {t.popularSection.viewAll}
              <span>→</span>
            </Link>
          </div>

          <div className={styles.insightsGrid}>
            {popularInsights.map((article, index) => (
              <article
  key={article.id}
  className={styles.insightCard}
  onClick={() => openTopic(article.title)}
>
                <div className={styles.insightImage}>
                 <Image
  src={article.image}
  alt={t.popularInsights[index].title}
  fill
  className={`${styles.articleImage} ${
    article.id === 1
      ? styles.perfumeArticleImage
      : ""
  }`}
/>
                </div>

                <div className={styles.insightContent}>
                  <span className={styles.articleCategory}>
                    {t.popularInsights[index].category}
                  </span>

                  <h3>{t.popularInsights[index].title}</h3>

                  <p>{t.popularInsights[index].description}</p>

                  <div className={styles.articleFooter}>
                    <span>◷ {t.popularInsights[index].time}</span>

                    <button
                      type="button"
                      aria-label={t.accessibility.saveArticle}
                    >
                      ♧
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= KEY INSIGHTS ================= */}

        <section className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>{t.keyInsightsSection.title}</h2>

              <p>{t.keyInsightsSection.subtitle}</p>
            </div>
          </div>

          <div className={styles.statisticsGrid}>
            {keyInsights.map((insight, index) => (
              <article
  key={insight.id}
  className={styles.statisticCard}
  onClick={() => openTopic(insight.value)}
>
                <div className={styles.statisticTop}>
                  <span className={styles.statisticIcon}>
                    {insight.icon}
                  </span>

                  <strong>{t.keyInsights[index].value}</strong>
                </div>

                <p>{t.keyInsights[index].description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ================= SUCCESS STORIES ================= */}

        <section className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>{t.successSection.title}</h2>

              <p>{t.successSection.subtitle}</p>
            </div>

            <Link
              href="/ads/academy-insight/case-studies"
              className={styles.viewAll}
            >
              {t.successSection.viewAll}
              <span>→</span>
            </Link>
          </div>

          <div className={styles.storiesGrid}>
            {successStories.map((story, index) => (
              <article
  key={story.id}
  className={styles.storyCard}
  onClick={() => openTopic(story.brand)}
>
                <div className={styles.storyImage}>
                 <Image
  src={story.image}
  alt={t.successStories[index].brand}
  fill
  className={`${styles.caseStudyImage} ${
    story.id === 1
      ? styles.perfumeStoryImage
      : ""
  }`}
/>
                </div>

                <div className={styles.storyContent}>
                  <h3>{t.successStories[index].brand}</h3>

                  <strong>{t.successStories[index].result}</strong>

                  <span>{t.successStories[index].resultLabel}</span>

                  <p>{t.successStories[index].description}</p>

                 <button
  type="button"
  className={styles.readCaseButton}
  onClick={(event) => {
    event.stopPropagation();
    openTopic(story.brand);
  }}
>
  {t.successSection.readCaseStudy}
  <span>→</span>
</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}

        <section className={styles.newsletter}>
          <div className={styles.newsletterIcon}>
            <span>◇</span>
          </div>

          <div className={styles.newsletterText}>
            <h2>{t.newsletter.title}</h2>

            <p>
              {t.newsletter.descriptionFirst}
              <br />
              {t.newsletter.descriptionSecond}
            </p>
          </div>

          <form
            className={styles.newsletterForm}
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              aria-label={t.newsletter.emailLabel}
            />

            <button type="submit">
              {t.newsletter.button}
            </button>
          </form>
        </section>

                {/* ================= ACADEMY MODAL ================= */}

        {selectedDetail && (
          <div
            className={styles.modalBackdrop}
            onClick={closeTopic}
          >
            <section
              className={styles.academyModal}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                className={styles.modalClose}
                onClick={closeTopic}
                aria-label={t.accessibility.closeModal}
              >
                ×
              </button>

              <span className={styles.modalBadge}>
                {selectedDetail.badge}
              </span>

              <h2>{selectedDetail.title}</h2>

              <p className={styles.modalIntro}>
                {selectedDetail.intro}
              </p>

              <div className={styles.modalKeyTitle}>
                <span>✦</span>
                {t.modal.keyPoints}
              </div>

              <ul className={styles.modalPoints}>
                {selectedDetail.points.map(
                  (point, index) => (
                    <li key={point}>
                      <span>{index + 1}</span>
                      <p>{point}</p>
                    </li>
                  ),
                )}
              </ul>

              <div className={styles.modalAction}>
                <strong>{t.modal.tryThisNow}</strong>
                <p>{selectedDetail.action}</p>
              </div>

              {selectedDetail.warning && (
                <div className={styles.modalWarning}>
                  <span>ⓘ</span>
                  <p>{selectedDetail.warning}</p>
                </div>
              )}

              <button
                type="button"
                className={styles.modalDone}
                onClick={closeTopic}
              >
                <button
  type="button"
  className={styles.modalDone}
  onClick={closeTopic}
>
   {t.modal.backToAcademy}
</button>
              </button>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}