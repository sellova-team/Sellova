"use client";

import styles from "./edit-video.module.css";
import { useRouter } from "next/navigation";
import { useLang } from "../../../lib/lang";
import { useState } from "react";

export default function EditVideoPage() {
  const router = useRouter();

  const { messages } = useLang();

  const t = messages.editVideo;

  const [vocalType, setVocalType] = useState("instrumental");
  const [voiceGender, setVoiceGender] = useState("female");

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>

        <header className={styles.header}>

          <div className={styles.leftHeader}>

            <img
              src="/logo.png"
              alt="Sellova"
              className={styles.logo}
            />

            <button
              className={styles.backBtn}
              onClick={() => router.back()}
            >
              ← {t.header.back}
            </button>

          </div>

          <div className={styles.rightHeader}>

            <button
              className={styles.upgradeBtn}
              onClick={() => router.push("/studio/pricing")}
            >
              👑 {t.header.upgrade}
            </button>

            <div className={styles.planBox}>

              <span className={styles.planLabel}>
                {t.header.activePlan}
              </span>

              <span className={styles.planName}>
                {t.header.starter}
              </span>

            </div>

            <button className={styles.notifyBtn}>
              🔔
            </button>

            <div className={styles.userBox}>

              <img
                src="/avatar.jpg"
                className={styles.avatar}
                alt="User"
              />

              <span>Shabnam</span>

            </div>

          </div>

        </header>

        <main className={styles.main}>

          <section className={styles.left}>

            <h2 className={styles.leftTitle}>
              {t.left.title}
            </h2>

            <p className={styles.leftDesc}>
              {t.left.description}
            </p>

            <div className={styles.topRow}>

              <div className={styles.preview}>

                <img
                  src="/assets/icons/edit/1/4.jpg"
                  alt="preview"
                  className={styles.previewImage}
                />

              </div>

              <div className={styles.videoInfo}>

                <div className={styles.videoCard}>

                  <img
                    src="/assets/icons/edit/1/1.jpg"
                    alt="thumb"
                    className={styles.videoThumb}
                  />

                  <div className={styles.videoDetails}>

                    <h3>{t.left.reel}</h3>

                    <p>{t.left.videoInfo}</p>

                  </div>

                  <button className={styles.changeVideo}>
                    {t.left.changeVideo}
                  </button>

                </div>

                <div className={styles.selectorBox}>

                  <h3>{t.left.coverTitle}</h3>

                  <div className={styles.selectorButtons}>

                    <button className={styles.aiBtn}>
                      {t.left.aiGenerated}
                    </button>

                    <button className={styles.manualBtn}>
                      {t.left.uploadOwn}
                    </button>

                  </div>

                </div>

                <div className={styles.coverGrid}>

                  <img
                    src="/assets/icons/edit/1/1.jpg"
                    className={styles.coverImage}
                  />

                  <img
                    src="/assets/icons/edit/1/2.jpg"
                    className={styles.coverImage}
                  />

                  <img
                    src="/assets/icons/edit/1/3.jpg"
                    className={styles.coverImage}
                  />

                  <div className={styles.uploadBox}>
                    <p>{t.left.upload}</p>
                  </div>

                  <div className={styles.moreBox}>
                    <p>{t.left.more}</p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          <section className={styles.right}>

            <h2 className={styles.musicTitle}>
              {t.music.title}
            </h2>

            <p className={styles.musicDesc}>
              {t.music.description}
            </p>

            <div className={styles.vocalTabs}>

              <button
                className={`${styles.vocalTab} ${
                  vocalType === "instrumental"
                    ? styles.activeTab
                    : ""
                }`}
                onClick={() => setVocalType("instrumental")}
              >
                {t.music.instrumental}

                <span>{t.music.instrumentalDesc}</span>

              </button>

              <button
                className={`${styles.vocalTab} ${
                  vocalType === "vocals"
                    ? styles.activeTab
                    : ""
                }`}
                onClick={() => setVocalType("vocals")}
              >
                {t.music.vocals}

                <span>{t.music.vocalsDesc}</span>

              </button>

            </div>

            <div className={styles.musicNotice}>
              {t.music.notice.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>

            <div className={styles.musicRow}>

              <div>

                <label>{t.music.mode}</label>

 <select>
        <option>{t.options.energetic}</option>
        <option>{t.options.calm}</option>
        <option>{t.options.cinematic}</option>
        <option>{t.options.happy}</option>
        <option>{t.options.relaxing}</option>
        <option>{t.options.epic}</option>
        <option>{t.options.dark}</option>
        <option>{t.options.inspirational}</option>
        <option>{t.options.romantic}</option>
        <option>{t.options.suspense}</option>
        <option>{t.options.dreamy}</option>
      </select>
    </div>

    <div>

      <label>{t.music.style}</label>

      <select>
        <option>{t.options.cinematic}</option>
        <option>{t.options.pop}</option>
        <option>{t.options.rock}</option>
        <option>{t.options.electronic}</option>
        <option>{t.options.hiphop}</option>
        <option>{t.options.lofi}</option>
        <option>{t.options.acoustic}</option>
        <option>{t.options.corporate}</option>
        <option>{t.options.jazz}</option>
        <option>{t.options.orchestra}</option>
        <option>{t.options.classical}</option>
      </select>

    </div>

  </div>

  <div className={styles.lyricsHeader}>

    <label className={styles.musicLabel}>
      {t.music.lyrics}
    </label>

    <label className={styles.aiHelpCheck}>

      <input type="checkbox" />

      <span>{t.music.aiHelp}</span>

    </label>

  </div>

  <textarea
    placeholder={t.music.lyricsPlaceholder}
  />

  <div className={styles.languageRow}>

    <div className={styles.languageSelect}>

      <label className={styles.musicLabel}>
        {t.music.language}
      </label>

      <select>
        <option>English 🇺🇸</option>
        <option>Persian (Farsi) 🇮🇷</option>
        <option>Turkish 🇹🇷</option>
        <option>Arabic 🇸🇦</option>
        <option>Urdu 🇵🇰</option>
        <option>Armenian 🇦🇲</option>
        <option>Uzbek 🇺🇿</option>
        <option>Azerbaijani 🇦🇿</option>
        <option>Kazakh 🇰🇿</option>
        <option>French 🇫🇷</option>
        <option>German 🇩🇪</option>
        <option>Spanish 🇪🇸</option>
        <option>Italian 🇮🇹</option>
        <option>Portuguese 🇵🇹</option>
        <option>Russian 🇷🇺</option>
        <option>Hindi 🇮🇳</option>
        <option>Chinese 🇨🇳</option>
        <option>Japanese 🇯🇵</option>
        <option>Korean 🇰🇷</option>
      </select>

    </div>

    <div className={styles.genderBox}>

      <label className={styles.musicLabel}>
        {t.music.singer}
      </label>

      <div className={styles.genderButtons}>

        <button
          type="button"
          className={voiceGender === "female" ? styles.genderActive : ""}
          onClick={() => setVoiceGender("female")}
        >
          {t.music.female}
        </button>

        <button
          type="button"
          className={voiceGender === "male" ? styles.genderActive : ""}
          onClick={() => setVoiceGender("male")}
        >
          {t.music.male}
        </button>

      </div>

    </div>

  </div>

  <div className={styles.musicPlayer}>

    <button className={styles.playBtn}>
      ▶
    </button>

    <div className={styles.progressBar}>
      <div className={styles.progress}></div>
    </div>

    <span className={styles.time}>
      02:16
    </span>

  </div>

  <div className={styles.musicActions}>

    <label className={styles.addMusic}>

      <input type="checkbox" />

      <span>{t.music.addMusic}</span>

    </label>

    <button className={styles.downloadMusic}>
      {t.music.downloadMusic}
    </button>

  </div>

</section>

</main>

<div className={styles.customizeBox}>

  <div className={styles.customizeHeader}>

    <h3>{t.customize.title}</h3>

    <p>{t.customize.description}</p>

    <div className={styles.headerHint}>

      <span>{t.customize.aiEditor}</span>

      <span>•</span>

      <span>{t.customize.styles}</span>

      <span>•</span>

      <span>{t.customize.themes}</span>

    </div>

  </div>

  <div className={styles.customizeGrid}>

    <div className={styles.panel}>

      <div className={styles.panelTitle}>
        {t.customize.textTitle}
      </div>

      <input defaultValue="BUILDING" />
      <input defaultValue="YOUR BRAND" />
      <input defaultValue="IN THE DIGITAL ERA" />

      <button className={styles.addBtn}>
        {t.customize.addLine}
      </button>

    </div>

    <div className={styles.panel}>

      <div className={styles.panelTitle}>
        {t.customize.textStyle}
      </div>

      <select>
        <option>Bebas Neue</option>
        <option>Montserrat</option>
        <option>Poppins</option>
        <option>Oswald</option>
        <option>Anton</option>
        <option>League Spartan</option>
        <option>Archivo Black</option>
        <option>Roboto Condensed</option>
        <option>Playfair Display</option>
        <option>Cinzel</option>
      </select>

      <div className={styles.styleRow}>
        <button>B</button>
        <button>I</button>
        <button>O</button>
      </div>

      <div className={styles.colorRow}>

        <span style={{ background: "#ffffff" }} />
        <span style={{ background: "#d1d5db" }} />
        <span style={{ background: "#6b7280" }} />
        <span style={{ background: "#111111" }} />

        <span style={{ background: "#ff0000" }} />
        <span style={{ background: "#ff5a5f" }} />

        <span style={{ background: "#ff7a18" }} />
        <span style={{ background: "#ffb000" }} />

        <span style={{ background: "#facc15" }} />

        <span style={{ background: "#22c55e" }} />
        <span style={{ background: "#00e676" }} />

        <span style={{ background: "#00e5ff" }} />
        <span style={{ background: "#3b82f6" }} />

        <span style={{ background: "#8b5cf6" }} />
        <span style={{ background: "#ec4899" }} />

        <span style={{ background: "#8b4513" }} />
        <span style={{ background: "#c08457" }} />

        <span
          style={{
            background:
              "conic-gradient(red,orange,yellow,green,cyan,blue,purple,red)",
          }}
        />

      </div>

    </div>

    <div className={styles.panel}>

      <div className={styles.panelTitle}>
        {t.customize.layout}
      </div>

      <div className={styles.layoutGrid}>

        <button className={styles.layoutItem}>
          <div className={styles.layoutTop}></div>
        </button>

        <button className={styles.layoutItem}>
          <div className={styles.layoutCenter}></div>
        </button>

        <button className={styles.layoutItem}>
          <div className={styles.layoutBottom}></div>
        </button>

        <button className={styles.layoutItem}>
          <div className={styles.layoutFull}></div>
        </button>

      </div>

      <label>{t.customize.horizontal}</label>

      <input type="range" min="0" max="100" />

      <label>{t.customize.vertical}</label>

      <input type="range" min="0" max="100" />

    </div>

  </div>

</div>

<footer className={styles.footer}></footer>

<div className={styles.planStatus}>

  <div className={styles.planLeft}>

    <div className={styles.planName}>
      {t.footer.starter}
    </div>

    <div className={styles.planItem}>
      <small>{t.footer.video}</small>
      <strong>1h 25m / 3h</strong>
    </div>

    <div className={styles.planItem}>
      <small>{t.footer.clips}</small>
      <strong>12 / 30</strong>
    </div>

    <div className={styles.planItem}>
      <small>{t.footer.covers}</small>
      <strong>8 / 20</strong>
    </div>

    <div className={styles.planItem}>
      <small>{t.footer.music}</small>
      <strong>1 / 3</strong>
    </div>

  </div>

  <div className={styles.actionButtons}>

    <button className={styles.downloadBtn}>
      {t.footer.download}
    </button>

    <button className={styles.generateBtn}>
      {t.footer.generate}
    </button>

  </div>

</div>

</div>
</div>
);
}
