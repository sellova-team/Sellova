
"use client";

import styles from "./page.module.css";

export default function MusicPage() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow}></div>

      <header className={styles.topBar}>
        <button className={styles.backBtn}>
          ← Back to Dashboard
        </button>

        <div className={styles.ownerCard}>
          <img
            src="/logo.png"
            alt="Sellova"
            className={styles.ownerLogo}
          />
          <div>
            <div className={styles.ownerName}>
              Sellova Owner
            </div>
            <div className={styles.ownerCredits}>
              Credits: Unlimited
            </div>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.crown}>👑</div>

        <h1 className={styles.heroTitle}>
          SELLOVA
        </h1>

        <h2 className={styles.heroSub}>
          AI MUSIC STUDIO
        </h2>

        <p className={styles.heroText}>
          Create unique AI music for your brand
        </p>
      </section>

      <section className={styles.mainCard}>
        <h3>Brand Information</h3>

        <div className={styles.formGrid}>
          <input
            placeholder="Brand Name"
            className={styles.input}
          />

          <input
            placeholder="Business Type"
            className={styles.input}
          />

          <select className={styles.input}>
            <option>English</option>
            <option>Turkish</option>
            <option>Persian</option>
            <option>Arabic</option>
          </select>
        </div>

        <textarea
          className={styles.textarea}
          placeholder="Describe your brand and the style of music you want..."
        />
      </section>

      <section className={styles.stylesSection}>
        <h3>Choose Music Style</h3>

        <div className={styles.stylesGrid}>
          <div className={styles.styleCard}>Luxury</div>
          <div className={styles.styleCard}>Cinematic</div>
          <div className={styles.styleCard}>Modern</div>
          <div className={styles.styleCard}>Electronic</div>
          <div className={styles.styleCard}>Fashion</div>
          <div className={styles.styleCard}>Epic</div>
          <div className={styles.styleCard}>Corporate</div>
          <div className={styles.styleCard}>Emotional</div>
        </div>

        <button className={styles.generateBtn}>
          Generate Music
        </button>
      </section>
    </main>
  );
}
