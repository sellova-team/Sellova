"use client";

import styles from "./about.module.css";
import { useLang } from "../../lib/lang";

export default function AboutPage() {
  const { messages } = useLang();
  const t = messages.about;

  return (
    <div className={styles.container}>

      <div className={styles.hero}>

        <img
          src="/logo.png"
          alt="Sellova"
          className={styles.logo}
        />

        <h1>{t.title}</h1>

        <p>{t.intro}</p>

      </div>

      <section className={styles.section}>
        <h2>{t.whatTitle}</h2>
        <p>{t.whatText}</p>
      </section>

      <div className={styles.cards}>

        <div className={styles.card}>
          <h3>{t.adsTitle}</h3>
          <p>{t.adsText}</p>
        </div>

        <div className={styles.card}>
          <h3>{t.brandingTitle}</h3>
          <p>{t.brandingText}</p>
        </div>

        <div className={styles.card}>
          <h3>{t.studioTitle}</h3>
          <p>{t.studioText}</p>
        </div>

        <div className={styles.card}>
          <h3>{t.musicTitle}</h3>
          <p>{t.musicText}</p>
        </div>

      </div>

      <section className={styles.section}>
        <h2>{t.visionTitle}</h2>
        <p>{t.visionText}</p>
      </section>

    </div>
  );
}
