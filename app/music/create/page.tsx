"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "../../../lib/lang";
import styles from "./create.module.css";
import Link from "next/link";

export default function MusicCreatePage() {

  const { messages } = useLang();
  const t = messages.musicCreate;

  const [language, setLanguage] = useState("English");
  const [duration, setDuration] = useState("30 sec");

  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedMood, setSelectedMood] = useState("");

  const [showAllStyles, setShowAllStyles] = useState(false);
  const [showAllMoods, setShowAllMoods] = useState(false);

  const [prompt, setPrompt] = useState("");

  const [singerMode, setSingerMode] = useState("musicOnly");
  const [voiceType, setVoiceType] = useState("female");

  const [showAiChat, setShowAiChat] = useState(false);

  return (

    <main className={styles.page}>
      <div className={styles.wrapper}>

      {/* ================= HEADER ================= */}

      <header className={styles.header}>

        <div className={styles.headerLeft}>

          <Image
            src="/logo.png"
            alt="Sellova"
            width={100}
            height={68}
            priority
          />

        </div>

        <div className={styles.headerCenter}>

          <h2>{t.header.welcome.replace("{{name}}", "Sara")}</h2>

        </div>

        <div className={styles.headerRight}>

          <button className={styles.giftButton}>
            🎁
          </button>

          <span className={styles.plan}>
            {t.header.free}
          </span>

 <Link
  href="/music/musicPricing"
  className={styles.upgradeButton}
>
  Upgrade
</Link>
        </div>


     </header>

      {/* ================= BODY ================= */}

      <div className={styles.workspace}>

        {/* ================= LEFT SIDEBAR ================= */}

        <aside className={styles.sidebar}>

          {/* Language */}

          <div className={styles.cardSection}>

            <h3>{t.language.title}</h3>

            <select
              value={language}
              onChange={(e)=>setLanguage(e.target.value)}
              className={styles.select}
            >

              <option>{t.language.options.english}</option>
              <option>{t.language.options.persian}</option>
              <option>{t.language.options.arabic}</option>
              <option>{t.language.options.turkish}</option>
              <option>{t.language.options.azerbaijani}</option>
              <option>{t.language.options.kurdish}</option>
              <option>{t.language.options.urdu}</option>
              <option>{t.language.options.armenian}</option>
              <option>{t.language.options.kazakh}</option>
              <option>{t.language.options.tajik}</option>
              <option>{t.language.options.spanish}</option>

            </select>

          </div>

          {/* Duration */}

          <div className={styles.cardSection}>

            <h3>{t.duration.title}</h3>

            <div className={styles.buttonGrid}>

              {[t.duration.sec30, t.duration.sec45, t.duration.min1].map(item => (

                <button
                  key={item}
                  onClick={() => setDuration(item)}
                  className={
                    duration===item
                    ? styles.activeButton
                    : styles.normalButton
                  }
                >
                  {item}
                </button>

              ))}

            </div>

          </div>
                    {/* Style */}

          <div className={styles.cardSection}>

            <div className={styles.sectionHeader}>

              <h3>{t.style.title}</h3>

              <button
                onClick={() => setShowAllStyles(!showAllStyles)}
                className={styles.linkButton}
              >
                {showAllStyles ? t.style.less : t.style.all}
              </button>

            </div>

            <div className={styles.buttonGrid}>

              {[
                t.style.pop,
                t.style.rock,
                t.style.lofi,

                ...(showAllStyles
                  ? [
                      t.style.jazz,
                      t.style.hipHop,
                      t.style.trap,
                      t.style.ambient,
                      t.style.classical,
                      t.style.house,
                      t.style.electronic,
                    ]
                  : [])
              ].map(item => (

                <button
                  key={item}
                  onClick={() => setSelectedStyle(item)}
                  className={
                    selectedStyle === item
                      ? styles.activeButton
                      : styles.normalButton
                  }
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* Mood */}

          <div className={styles.cardSection}>

            <div className={styles.sectionHeader}>

              <h3>{t.mood.title}</h3>

              <button
                onClick={() => setShowAllMoods(!showAllMoods)}
                className={styles.linkButton}
              >
                {showAllMoods ? t.mood.less : t.mood.all}
              </button>

            </div>

            <div className={styles.buttonGrid}>

              {[
                t.mood.happy,
                t.mood.epic,
                t.mood.sad,

                ...(showAllMoods
                  ? [
                      t.mood.dark,
                      t.mood.dreamy,
                      t.mood.romantic,
                      t.mood.hopeful,
                      t.mood.relaxing,
                      t.mood.calm,
                      t.mood.energetic,
                    ]
                  : [])
              ].map(item => (

                <button
                  key={item}
                  onClick={() => setSelectedMood(item)}
                  className={
                    selectedMood === item
                      ? styles.activeButton
                      : styles.normalButton
                  }
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

        </aside>

        {/* ================= RIGHT SIDE ================= */}

        <section className={styles.rightPanel}>

          {/* ================= TOP CARD ================= */}

          <div className={styles.topCard}>

            <div className={styles.imageBox}>

              <Image
                src="/assets/icons/music/girle.png"
                alt="Singer"
                width={170}
                height={170}
                className={styles.girlImage}
                priority
              />

            </div>

            <div className={styles.playerBox}>

              <div className={styles.waveBox}>

                {Array.from({ length: 90 }).map((_, index) => (

                  <span
                    key={index}
                    style={{
                      height: `${20 + Math.sin(index * 0.22) * 20 + 12}px`,
                      animationDelay: `${index * 0.03}s`
                    }}
                  />

                ))}

              </div>

              <div className={styles.playerControls}>

                <button className={styles.playButton}>
                  ▶
                </button>

                <span className={styles.currentTime}>
                  0:00
                </span>

              </div>

            </div>

          </div>

                    {/* ================= BOTTOM ================= */}

          <div className={styles.bottomCards}>

            {/* LEFT */}

            <div className={styles.promptCard}>

              <h3>{t.prompt.title}</h3>

              <textarea
                value={prompt}
                onChange={(e)=>setPrompt(e.target.value)}
                maxLength={500}
                className={styles.promptInput}
                placeholder={t.prompt.placeholder}
              />

              <div className={styles.promptFooter}>

                <span>

                  {prompt.length} / 500

                </span>

                <button
                  className={styles.aiButton}
                  onClick={()=>setShowAiChat(true)}
                >
                  ✨ {t.prompt.askAI}
                </button>

              </div>

            </div>

          {/* RIGHT */}

<div className={styles.singerCard}>

  <div className={styles.optionsRow}>

    {/* Singer */}
    <div className={styles.optionColumn}>

      <h3>{t.singer.title}</h3>

      <label className={styles.radioItem}>
        <input
          type="radio"
          checked={singerMode === "withSinger"}
          onChange={() => setSingerMode("withSinger")}
        />
        {t.singer.withSinger}
      </label>

      <label className={styles.radioItem}>
        <input
          type="radio"
          checked={singerMode === "musicOnly"}
          onChange={() => setSingerMode("musicOnly")}
        />
        {t.singer.musicOnly}
      </label>

    </div>

    {/* Voice */}
    <div className={styles.optionColumn}>

      <h3>{t.voice.title}</h3>

      <label className={styles.radioItem}>
        <input
          type="radio"
          checked={voiceType === "female"}
          onChange={() => setVoiceType("female")}
        />
        {t.voice.female}
      </label>

      <label className={styles.radioItem}>
        <input
          type="radio"
          checked={voiceType === "male"}
          onChange={() => setVoiceType("male")}
        />
        {t.voice.male}
      </label>

      <label className={styles.radioItem}>
        <input
          type="radio"
          checked={voiceType === "myVoice"}
          onChange={() => setVoiceType("myVoice")}
        />
        {t.voice.myVoice}
      </label>

    </div>

  </div>

  <label className={styles.uploadButton}>

    {t.voice.upload}

    <input
      type="file"
      hidden
      accept="audio/*"
    />

  </label>
</div>
</div>

{/* ================= AI MODAL ================= */}

{showAiChat && (
  <div
    className={styles.aiOverlay}
    onClick={() => setShowAiChat(false)}
  >
    <div
      className={styles.aiModal}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.aiHeader}>
        <h2>{t.ai.title}</h2>

        <button
          className={styles.closeButton}
          onClick={() => setShowAiChat(false)}
        >
          ✕
        </button>
      </div>

      <div className={styles.aiBody}>
        <p className={styles.aiMessage}>
          {t.ai.message}
        </p>

        <textarea
          className={styles.aiInput}
          placeholder={t.ai.placeholder}
        />
      </div>

      <div className={styles.aiFooter}>
        <button
          className={styles.generateButton}
          onClick={() => setShowAiChat(false)}
        >
          {t.ai.generate}
        </button>
      </div>
    </div>
  </div>
)}
</section>

</div>

<div className={styles.visualCard}>

  <div className={styles.visualHeader}>

    <button className={styles.viewAll}>
      {t.preview.viewAll}
    </button>

    <h3>{t.preview.title}</h3>

    <p className={styles.visualText}>
      {t.preview.text}
    </p>

  </div>

  <h4 className={styles.exampleTitle}>
    {t.preview.exampleTitle}
  </h4>

  <div className={styles.gallery}>

    {["a", "b", "c", "d", "e", "f"].map((item) => (

      <div
        key={item}
        className={styles.galleryItem}
      >
        <Image
          src={`/assets/icons/music/${item}.png`}
          alt={item}
          fill
        />
      </div>

    ))}

  </div>

</div>

</div>

</main>
);
}