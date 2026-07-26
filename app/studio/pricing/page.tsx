"use client";

import Image from "next/image";
import styles from "./pricing.module.css";
import Link from "next/link";
import { useLang } from "../../../lib/lang";

export default function PricingPage() {
  const { messages } = useLang();
  const t = messages.pricing;

  return (
    <main className={styles.page}>

      {/* ================= HEADER ================= */}

      <header className={styles.header}>

        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={190}
            height={160}
          />
        </div>

        <div className={styles.buttons}>
          <Link href="/studio">
            <button className={styles.start}>
              {t.header.startFree}
            </button>
          </Link>
        </div>

      </header>

      {/* ================= TITLE ================= */}

      <section className={styles.hero}>

        <div className={styles.badge}>
          {t.hero.badge}
        </div>

        <h1>
          {t.hero.title1}
          <br />
          {t.hero.title2} <span>{t.hero.highlight}</span>
        </h1>

      </section>

      {/* ================= CARDS ================= */}

      <section className={styles.cards}>

        {/* FREE */}

        <div className={styles.card}>

          <h3>{t.free.title}</h3>

          <p>{t.free.description}</p>

          <div className={styles.priceBox}>

            <div className={styles.features}>
              <div className={styles.feature}>✓ {t.free.upload}</div>
              <div className={styles.feature}>✓ {t.free.shorts}</div>

              <div className={styles.feature}>✓ {t.free.ai}</div>
              <div className={styles.feature}>✓ {t.free.watermark}</div>

              <div className={styles.feature}>✓ {t.free.export}</div>
              <div className={styles.feature}>✓ {t.free.trial}</div>
            </div>

            <div>
              <h2>{t.free.price}</h2>
              <span>{t.free.period}</span>
            </div>

          </div>

          <Link href="/studio">
            <button className={styles.startBtn}>
              {t.free.button}
            </button>
          </Link>

        </div>

        {/* STARTER */}

        <div className={styles.cardActive}>

          <div className={styles.popular}>
            {t.starter.popular}
          </div>

          <h3>{t.starter.title}</h3>

          <p className={styles.planDescription}>
            {t.starter.description}
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>✓ {t.starter.upload}</div>
            <div className={styles.feature}>✓ {t.starter.shorts}</div>

            <div className={styles.feature}>✓ {t.starter.images}</div>
            <div className={styles.feature}>✓ {t.starter.covers}</div>

            <div className={styles.feature}>✓ {t.starter.music}</div>
            <div className={styles.feature}>✓ {t.starter.export}</div>

            <div className={styles.feature}>✓ {t.starter.watermark}</div>
            <div className={styles.feature}>✓ {t.starter.priority}</div>
          </div>

          <div className={styles.priceBox}>

            <div>
              <h2>{t.starter.price}</h2>
              <span>{t.starter.period}</span>
            </div>

          </div>

          <button>{t.starter.button}</button>

        </div>

        {/* VIP */}

        <div className={styles.card}>

          <h3>{t.vip.title}</h3>

          <p>{t.vip.description}</p>

          <div className={styles.features}>
            <div className={styles.feature}>✓ {t.vip.upload}</div>
            <div className={styles.feature}>✓ {t.vip.shorts}</div>

            <div className={styles.feature}>✓ {t.vip.images}</div>
            <div className={styles.feature}>✓ {t.vip.covers}</div>

            <div className={styles.feature}>✓ {t.vip.music}</div>
            <div className={styles.feature}>✓ {t.vip.export}</div>

            <div className={styles.feature}>✓ {t.vip.watermark}</div>
            <div className={styles.feature}>✓ {t.vip.premium}</div>
          </div>

          <div className={styles.priceBox}>

            <div>
              <h2>{t.vip.price}</h2>
              <span>{t.vip.period}</span>
            </div>

          </div>

          <button>{t.vip.button}</button>

        </div>

      </section>

      <p className={styles.bottomText}>
        {t.footer.text}
      </p>

    </main>
  );
}