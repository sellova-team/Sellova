"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "../../lib/lang";
import styles from "./music.module.css";

export default function MusicPage() {
  const { messages } = useLang();
  const t = messages.music;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="Sellova"
          width={180}
          height={70}
          className={styles.logo}
          priority
        />

        <div className={styles.actions}>
          <Link href="/music/create" className={styles.button}>
            {t.buttons.getStarted}
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.left}>
          <span className={styles.badge}>
            {t.badge}
          </span>

          <h1 className={styles.title}>
            {t.title1}
            <br />
            <span>{t.title2}</span>
          </h1>

          <p className={styles.subtitle}>
            {t.subtitle}
          </p>
        </div>

        <div className={styles.right}>
          <Image
            src="/assets/icons/music/11.png"
            alt="Music"
            width={950}
            height={950}
            priority
            className={styles.musicImage}
          />
        </div>
      </section>

      <div className={styles.tags}>
        <button className={styles.tagActive}>
          {t.tags.chill}
        </button>

        <button className={styles.tag}>
          {t.tags.cinematic}
        </button>

        <button className={styles.tag}>
          {t.tags.energetic}
        </button>

        <button className={styles.tag}>
          {t.tags.sad}
        </button>

        <button className={styles.tag}>
          {t.tags.dark}
        </button>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          🎵 {t.features.aiSongGenerator}
        </div>

        <div className={styles.feature}>
          🎤 {t.features.yourVoiceSinging}
        </div>

        <div className={styles.feature}>
          🎧 {t.features.backgroundMusic}
        </div>

        <div className={styles.feature}>
          🎬 {t.features.cinematicSoundtracks}
        </div>

        <div className={styles.feature}>
          🎹 {t.features.brandJingles}
        </div>

        <div className={styles.feature}>
          ⚡ {t.features.royaltyFreeMusic}
        </div>
      </div>
    </main>
  );
}