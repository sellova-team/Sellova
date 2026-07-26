"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../../lib/lang";
import styles from "./musicPricing.module.css";

export default function MusicPricingPage() {
  const { messages } = useLang();
  const t = messages.musicPricing;

  return (
    <main className={styles.page}>
      {/* Header */}

      <header className={styles.header}>
        <Link href="/music">
          <Image
            src="/logo.png"
            alt="Sellova"
            width={180}
            height={120}
            priority
          />
        </Link>
      </header>

      {/* Hero */}

      <section className={styles.hero}>
        <div className={styles.badge}>{t.badge}</div>

        <h1 className={styles.title}>
          {t.title1}
          <br />
          <span>{t.title2}</span>
        </h1>

        <p className={styles.subtitle}>
          {t.subtitle1}
          <br />
          {t.subtitle2}
        </p>
      </section>

      {/* Pricing */}

      <section className={styles.pricingGrid}>
        {/* FREE */}

        <div className={`${styles.planCard} ${styles.free}`}>
          <h3 className={styles.planTitle}>{t.plans.free.title}</h3>

          <p className={styles.planDesc}>
            {t.plans.free.description}
          </p>

          <div className={styles.iconCircle}></div>

          <div className={styles.price}>
            {t.plans.free.price}
            <span>{t.plans.free.period}</span>
          </div>

          <ul className={styles.features}>
            {t.plans.free.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button className={styles.freeButton}>
            {t.plans.free.button}
          </button>
        </div>

        {/* STARTER */}

        <div className={`${styles.planCard} ${styles.starter}`}>
          <div className={styles.popular}>
            {t.plans.starter.popular}
          </div>

          <h3 className={styles.planTitle}>
            {t.plans.starter.title}
          </h3>

          <p className={styles.planDesc}>
            {t.plans.starter.description}
          </p>

          <div className={styles.iconCircle}></div>

          <div className={styles.price}>
            {t.plans.starter.price}
            <span>{t.plans.starter.period}</span>
          </div>

          <ul className={styles.features}>
            {t.plans.starter.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button className={styles.primaryButton}>
            {t.plans.starter.button}
          </button>
        </div>

        {/* PRO */}

        <div className={`${styles.planCard} ${styles.pro}`}>
          <h3 className={styles.planTitle}>{t.plans.pro.title}</h3>

          <p className={styles.planDesc}>
            {t.plans.pro.description}
          </p>

          <div className={styles.iconCircle}></div>

          <div className={styles.price}>
            {t.plans.pro.price}
            <span>{t.plans.pro.period}</span>
          </div>

          <ul className={styles.features}>
            {t.plans.pro.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button className={styles.proButton}>
            {t.plans.pro.button}
          </button>
        </div>

        {/* SIGNATURE */}

        <div className={`${styles.planCard} ${styles.signature}`}>
          <h3 className={styles.planTitle}>
            {t.plans.signature.title}
          </h3>

          <p className={styles.planDesc}>
            {t.plans.signature.description}
          </p>

          <div className={styles.iconCircle}></div>

          <div className={styles.price}>
            {t.plans.signature.price}
            <span>{t.plans.signature.period}</span>
          </div>

          <ul className={styles.features}>
            {t.plans.signature.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button className={styles.goldButton}>
            {t.plans.signature.button}
          </button>
        </div>
      </section>
    </main>
  );
}