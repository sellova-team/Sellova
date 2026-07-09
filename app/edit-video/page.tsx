"use client";

import styles from "./edit-video.module.css";
import { useRouter } from "next/navigation";
import { useLang, Locale } from "../../lib/lang";
import { useState } from "react";

export default function EditVideoPage() {
  const router = useRouter();
  const { locale, messages, setLocale } = useLang();
  const [ vocalType, setVocalType] = useState("instrumental");
  const [voiceGender, setVoiceGender] = useState("female")

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
      ← Back
    </button>

  </div>

  <div className={styles.rightHeader}>

    <button className={styles.upgradeBtn}
    onClick={() => router.push("/upgrade-plan")}
      >
      👑 Upgrade Plan
    </button>

    <div className={styles.planBox}>

    <span className={styles.planLabel}>
        Active Plan
    </span>

    <span className={styles.planName}>
        Starter
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
    AI Cover & Music Studio
  </h2>

  <p className={styles.leftDesc}>
    Create the perfect cover and soundtrack for your video.
  </p>

  {/* 🔴 TOP ROW */}
  <div className={styles.topRow}>

    {/* PREVIEW */}
    <div className={styles.preview}>
      <img
        src="/assets/icons/edit/1/4.jpg"
        alt="preview"
        className={styles.previewImage}
      />
    </div>

    {/* VIDEO INFO + EVERYTHING */}
    <div className={styles.videoInfo}>

      {/* video header card */}
      <div className={styles.videoCard}>

        <img
          src="/assets/icons/edit/1/1.jpg"
          alt="thumb"
          className={styles.videoThumb}
        />

        <div className={styles.videoDetails}>
          <h3>Reel 03</h3>
          <p>00:45 • 1080×1920 • 9:16 • 45.2 MB</p>
        </div>

        <button className={styles.changeVideo}>
          Change Video
        </button>

      </div>

      {/* 🟠 THIS IS THE NEW BOX (درست وسط گذاشتم) */}
      <div className={styles.selectorBox}>

        <h3>Select Cover Type</h3>

        <div className={styles.selectorButtons}>
          <button className={styles.aiBtn}>
            AI Generated
          </button>

          <button className={styles.manualBtn}>
            Upload Your Own
          </button>
        </div>



      </div>

      {/* COVER GRID */}
      <div className={styles.coverGrid}>

        <img src="/assets/icons/edit/1/1.jpg" className={styles.coverImage} />
        <img src="/assets/icons/edit/1/2.jpg" className={styles.coverImage} />
        <img src="/assets/icons/edit/1/3.jpg" className={styles.coverImage} />

        <div className={styles.uploadBox}>
          <p>Upload</p>
        </div>

        <div className={styles.moreBox}>
          <p>More</p>
        </div>

      </div>

    </div>
  </div>

</section>

<section className={styles.right}>

  <h2 className={styles.musicTitle}>
    🎵 Create Your Music
  </h2>

  <p className={styles.musicDesc}>
    Generate a custom soundtrack that fits your video.
  </p>


 <div className={styles.vocalTabs}>
  <button
    className={`${styles.vocalTab} ${
      vocalType === "instrumental" ? styles.activeTab : ""
    }`}
    onClick={() => setVocalType("instrumental")}
  >
    🎼 Instrumental
    <span>No Vocals</span>
  </button>

  <button
    className={`${styles.vocalTab} ${
      vocalType === "vocals" ? styles.activeTab : ""
    }`}
    onClick={() => setVocalType("vocals")}
  >
    🎤 With Vocals
    <span>AI Singing</span>
  </button>
</div>


  <div className={styles.musicNotice}>
    ⓘ Your music is 100% original and royalty-free.
    <br/>
    Safe to use on any platform.
  </div>


  <div className={styles.musicRow}>

    <div>
      <label>Mode</label>

      <select>
        <option>Energetic</option>
        <option>Calm</option>
        <option>Cinematic</option>
        <option>Happy</option>
        <option>Relaxing</option>
        <option>Epic</option>
        <option>Dark</option>
        <option>Inspirational</option>
        <option>Romantic</option>
        <option>Suspense</option>
        <option>Dreamy</option>
      </select>
    </div>


    <div>
      <label>Music Style</label>

      <select>
        <option>Cinematic</option>
        <option>Pop</option>
        <option>Rock</option>
        <option>Electronic</option>
        <option>Hip Hop</option>
        <option>Lo-Fi</option>
        <option>Acoutic</option>
        <option>Corporate</option>
        <option>Jazz</option>
        <option>Orchestra</option>
        <option>Classical</option>
      </select>
    </div>

  </div>

<div className={styles.lyricsHeader}>

    <label className={styles.musicLabel}>
        Lyrics
    </label>

    <label className={styles.aiHelpCheck}>

<input type="checkbox" />

<span>Let AI help you</span>

</label>

</div>

  
  
<textarea
    placeholder="Write your lyrics here..."
/>

 <div className={styles.languageRow}>

  <div className={styles.languageSelect}>

    <label className={styles.musicLabel}>
      Language
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

      <label className={styles.musicLabel}>Singer</label>

      <div className={styles.genderButtons}>

        <button
          type="button"
          className={voiceGender==="female" ? styles.genderActive : ""}
          onClick={() => setVoiceGender("female")}
        >
      👩 Female
        </button>

        <button
          type="button"
          className={voiceGender==="male" ? styles.genderActive : ""}
          onClick={() => setVoiceGender("male")}
        >
         👨 Male
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

<input
type="checkbox"
/>

<span>Add music to selected clips</span>

</label>

<button className={styles.downloadMusic}>

⬇ Download Music

</button>

</div>



</section>


        
      </main>

    <div className={styles.customizeBox}>

  {/* HEADER */}
  <div className={styles.customizeHeader}>
    <h3>Customize Your Cover (Optional)</h3>
    <p>Add text, titles, and design elements to make your cover stand out.</p>

    <div className={styles.customizeHeader}>
  <h3>Customize Your Cover (Optional)</h3>
  <p>Add text, titles, and design elements to make your cover stand out.</p>

  {/* 👇 اینو اضافه کن */}
  <div className={styles.headerHint}>
    <span>🎬 AI-powered cover editor</span>
    <span>•</span>
    <span>✨ 3 styles available</span>
    <span>•</span>
    <span>🎨 12 color themes</span>
  </div>
</div>

  </div>

  {/* BODY GRID */}
  <div className={styles.customizeGrid}>

    {/* LEFT */}
    <div className={styles.panel}>
      <div className={styles.panelTitle}>Text on Cover</div>

      <input defaultValue="BUILDING" />
      <input defaultValue="YOUR BRAND" />
      <input defaultValue="IN THE DIGITAL ERA" />

      <button className={styles.addBtn}>+ Add New Line</button>
    </div>

    {/* MIDDLE */}
    <div className={styles.panel}>
      <div className={styles.panelTitle}>Text Style</div>

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

<span style={{background:"#ffffff"}} />
<span style={{background:"#d1d5db"}} />
<span style={{background:"#6b7280"}} />
<span style={{background:"#111111"}} />

<span style={{background:"#ff0000"}} />
<span style={{background:"#ff5a5f"}} />

<span style={{background:"#ff7a18"}} />
<span style={{background:"#ffb000"}} />

<span style={{background:"#facc15"}} />

<span style={{background:"#22c55e"}} />
<span style={{background:"#00e676"}} />

<span style={{background:"#00e5ff"}} />
<span style={{background:"#3b82f6"}} />

<span style={{background:"#8b5cf6"}} />
<span style={{background:"#ec4899"}} />

<span style={{background:"#8b4513"}} />
<span style={{background:"#c08457"}} />

<span style={{background:"conic-gradient(red,orange,yellow,green,cyan,blue,purple,red)"}} />

</div>

    </div>

    {/* RIGHT */}
    <div className={styles.panel}>
      <div className={styles.panelTitle}>Layout & Position</div>

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

      <label>Horizontal</label>
      <input type="range" min="0" max="100" />

      <label>Vertical</label>
      <input type="range" min="0" max="100" />

    </div>

  </div>

</div>

      <footer className={styles.footer}>
      </footer>
<div className={styles.planStatus}>

    <div className={styles.planLeft}>

        <div className={styles.planName}>Starter</div>

        <div className={styles.planItem}>
    <small>VIDEO</small>
    <strong>1h 25m / 3h</strong>
</div>

<div className={styles.planItem}>
    <small>CLIPS</small>
    <strong>12 / 30</strong>
</div>

<div className={styles.planItem}>
    <small>COVERS</small>
    <strong>8 / 20</strong>
</div>

<div className={styles.planItem}>
    <small>MUSIC</small>
    <strong>1 / 3</strong>
</div>

    </div>

    <div className={styles.actionButtons}>

        <button className={styles.downloadBtn}>Download</button>

        <button className={styles.generateBtn}>Generate Clips</button>

    </div>

</div>

 </div>
    </div>
  );
}
