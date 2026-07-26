"use client";

import styles from "./workspace.module.css";
import Link from "next/link";
import { useState } from "react";
import { useLang, Locale } from "../../lib/lang";
import { useRouter } from "next/navigation";

export default function WorkspacePage() {
  const router = useRouter();
  const { locale, messages, setLocale } = useLang();
  const [openLang, setOpenLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  console.log("LANG:,locale");
  console.log("WORKSPACE TITLE:", messages.workspace.title)

  const t = messages.workspace;

  return (
    <div className={styles.container}>
<div className={styles.topBar}>

  <div className={styles.logoBox}>
    <img 
      src="/logo.png" 
      className={styles.logoImg}
    />
  </div>

</div>

     
      <main className={styles.main}>

        <div className={styles.wrapper}>

          <div className={styles.languageBox}>

            <button
              className={styles.languageBtn}
              onClick={() => setOpenLang(!openLang)}
            >
              🌐 {locale.toUpperCase()} ▼
            </button>

            {openLang && (

              <div className={styles.languageMenu}>

                <div
                  className={styles.languageItem}
                  onClick={() => {
                    setLocale("en" as Locale);
                    setOpenLang(false);
                  }}
                >
                  <span className={styles.countryCode}>US</span>
                  <span>English</span>
                </div>

                <div
                  className={styles.languageItem}
                  onClick={() => {
                    setLocale("fa" as Locale);
                    setOpenLang(false);
                  }}
                >
                  <span className={styles.countryCode}>IR</span>
                  <span>فارسی</span>
                </div>

                <div
                  className={styles.languageItem}
                  onClick={() => {
                    setLocale("tr" as Locale);
                    setOpenLang(false);
                  }}
                >
                  <span className={styles.countryCode}>TR</span>
                  <span>Türkçe</span>
                </div>

                <div className={styles.languageItem}>
                  <span className={styles.countryCode}>SA</span>
                  <span>العربية</span>
                </div>

                <div className={styles.languageItem}>
                  <span className={styles.countryCode}>PK</span>
                  <span>اردو</span>
                </div>

                <div className={styles.languageItem}>
                  <span className={styles.countryCode}>AM</span>
                  <span>Հայերեն</span>
                </div>

                <div className={styles.languageItem}>
                  <span className={styles.countryCode}>RU</span>
                  <span>Русский</span>
                </div>

                <div className={styles.languageItem}>
                  <span className={styles.countryCode}>DE</span>
                  <span>Deutsch</span>
                </div>

                <div className={styles.languageItem}>
                  <span className={styles.countryCode}>FR</span>
                  <span>Français</span>
                </div>

                <div className={styles.languageItem}>
                  <span className={styles.countryCode}>ES</span>
                  <span>Español</span>
                </div>

              </div>

            )}

<div className={styles.menuBox}>

  <button
    className={styles.menuButton}
    onClick={() => setOpenMenu(!openMenu)}
  >
    ☰
  </button>


  {openMenu && (

    <div className={styles.menuDropdown}>

      <a href="/dashboard">
        Sellova Ads
      </a>

      <a href="/branding">
        Sellova Branding
      </a>

      <a href="/studio/studio">
        Sellova Studio
      </a>

      <a href="/music">
        Sellova Music
      </a>


     <a
     onClick={() => {
      router.push("/settings");
      setOpenMenu(false);
     }}
     style={{ cursor: "pointer" }}
     >
      {t.menu.settings}
     </a>


      <a href="/about">
        About Us
      </a>


    </div>

  )}

</div>


    </div>

<div className={styles.header}>
  <h1>{t.header.welcome}</h1>
  <h2>{t.header.title}</h2>
  <p>{t.header.subtitle}</p>
</div>

<div className={styles.cards}>

  {/* ADS */}

<div
  className={styles.card}
  onClick={() => router.push("/ads/dashboard")}
  style={{ cursor: "pointer" }}
>
    <img
      src="/assets/icons/work/sellova-ads.png"
      className={styles.adsImage}
    />

    <div className={styles.cardContent}>


      <h3>{t.ads.title}</h3>

      <div className={styles.cardMainText}>
        {t.ads.adstitle}
      </div>

      <p className={styles.subTitle}>
        {t.ads.subtitle}
      </p>

      <div className={styles.features}>

  <div className={styles.feature}>
    <img src="/assets/icons/work/ads.png" />
    <span>{t.ads.feature1}</span>
  </div>

  <div className={styles.feature}>
    <img src="/assets/icons/work/edit.png" />
    <span>{t.ads.feature2}</span>
  </div>

  <div className={styles.feature}>
    <img src="/assets/icons/work/avatar.png" />
    <span>{t.ads.feature3}</span>
  </div>

  <div className={styles.feature}>
    <img src="/assets/icons/work/rocket.png" />
    <span>{t.ads.feature4}</span>
  </div>

  <div className={styles.feature}>
    <img src="/assets/icons/work/ads.png" />
    <span>{t.ads.feature5}</span>
  </div>

  <div className={styles.feature}>
    <img src="/assets/icons/work/edit.png" />
    <span>{t.ads.feature6}</span>
  </div>

  <div className={styles.feature}>
    <img src="/assets/icons/work/avatar.png" />
    <span>{t.ads.feature7}</span>
  </div>

  <div className={styles.feature}>
    <img src="/assets/icons/work/rocket.png" />
    <span>{t.ads.feature8}</span>
  </div>

</div>


      <button
        className={styles.btnPurple}
       onClick={() => window.location.href = "/ads/dashboard"}      >
        {t.ads.button}
      </button>

    </div>

  </div>

  {/* BRANDING */}

  <div className={styles.card}>

    <img
      src="/assets/icons/work/brand-personal.png"
      className={styles.brandImage}
    />

    <div className={styles.cardContent}>

      <h3>{t.branding.title}</h3>

      <div className={styles.cardMainText}>
        {t.branding.brandingtitle}
      </div>

      <p className={styles.subTitle}>
        {t.branding.subtitle}
      </p>

<div className={styles.features}>

        <div className={styles.feature}>
          <img src="/assets/icons/work/brand.png" />
          <span>{t.branding.feature1}</span>
        </div>

        <div className={styles.feature}>
          <img src="/assets/icons/work/edit.png" />
          <span>{t.branding.feature2}</span>
        </div>

        <div className={styles.feature}>
          <img src="/assets/icons/work/rocket.png" />
          <span>{t.branding.feature3}</span>
        </div>

        <div className={styles.feature}>
          <img src="/assets/icons/work/avatar.png" />
          <span>{t.branding.feature4}</span>
        </div>
        
        <div className={styles.feature}>
  <img src="/assets/icons/work/brand.png" />
  <span>{t.branding.feature5}</span>
</div>

<div className={styles.feature}>
  <img src="/assets/icons/work/edit.png" />
  <span>{t.branding.feature6}</span>
</div>

<div className={styles.feature}>
  <img src="/assets/icons/work/rocket.png" />
  <span>{t.branding.feature7}</span>
</div>

<div className={styles.feature}>
  <img src="/assets/icons/work/avatar.png" />
  <span>{t.branding.feature8}</span>
</div>

      </div>

      <button
        className={styles.btnBlue}
        onClick={() => window.location.href = "/branding"}
      >
        {t.branding.button}
      </button>

    </div>

  </div>

  {/* STUDIO */}

  <div className={styles.card}>

    <img
      src="/assets/icons/work/edit-video.png"
      className={styles.studioImage}
    />

    <div className={styles.cardContent}>

      <h3>{t.studio.title}</h3>
      
       <div className={styles.cardMainText}>
        {t.studio.studiotitle}
      </div>

      <p className={styles.subTitle}>
        {t.studio.subtitle}
      </p>

      <div className={styles.features}>

        <div className={styles.feature}>
          <img src="/assets/icons/work/edit.png" />
          <span>{t.studio.feature1}</span>
        </div>

        <div className={styles.feature}>
          <img src="/assets/icons/work/avatar.png" />
          <span>{t.studio.feature2}</span>
        </div>

        <div className={styles.feature}>
          <img src="/assets/icons/work/rocket.png" />
          <span>{t.studio.feature3}</span>
        </div>

        <div className={styles.feature}>
          <img src="/assets/icons/work/ads.png" />
          <span>{t.studio.feature4}</span>
        </div>
       
       <div className={styles.feature}>
  <img src="/assets/icons/work/edit.png" />
  <span>{t.studio.feature5}</span>
</div>

<div className={styles.feature}>
  <img src="/assets/icons/work/avatar.png" />
  <span>{t.studio.feature6}</span>
</div>

<div className={styles.feature}>
  <img src="/assets/icons/work/rocket.png" />
  <span>{t.studio.feature7}</span>
</div>

<div className={styles.feature}>
  <img src="/assets/icons/work/ads.png" />
  <span>{t.studio.feature8}</span>
</div>

      </div>

      <button
        className={styles.btnOrange}
        onClick={() => router.push("/studio/studio")}
      >
        {t.studio.button}
      </button>

    </div>

  </div>


{/* MUSIC */}

<div className={`${styles.card} ${styles.musicCard}`}>

  <img
    src="/assets/icons/music/1.png"
    className={styles.musicImage}
  />

  <div className={styles.cardContent}>

    <h3>{t.music.title}</h3>

    <div className={styles.cardMainText}>
      {t.music.musictitle}
    </div>

    <p className={styles.subTitle}>
      {t.music.subtitle}
    </p>

    <div className={styles.features}>

      <div className={styles.feature}>
        <img src="/assets/icons/work/edit.png" />
        <span>{t.music.feature1}</span>
      </div>

      <div className={styles.feature}>
        <img src="/assets/icons/work/avatar.png" />
        <span>{t.music.feature2}</span>
      </div>

      <div className={styles.feature}>
        <img src="/assets/icons/work/rocket.png" />
        <span>{t.music.feature3}</span>
      </div>

      <div className={styles.feature}>
        <img src="/assets/icons/work/ads.png" />
        <span>{t.music.feature4}</span>
      </div>

      <div className={styles.feature}>
        <img src="/assets/icons/work/edit.png" />
        <span>{t.music.feature5}</span>
      </div>

      <div className={styles.feature}>
        <img src="/assets/icons/work/avatar.png" />
        <span>{t.music.feature6}</span>
      </div>

      <div className={styles.feature}>
        <img src="/assets/icons/work/rocket.png" />
        <span>{t.music.feature7}</span>
      </div>

      <div className={styles.feature}>
        <img src="/assets/icons/work/ads.png" />
        <span>{t.music.feature8}</span>
      </div>

    </div>

    <button
      className={styles.btnMusic}
      onClick={() => router.push("/music")}
    >
      {t.music.button}
    </button>

  </div>

</div>
</div>
</div>

<div className={styles.infoSection}>

  <div className={styles.infoCard}>
    <h3>{t.ads.title}</h3>
    <h4>{t.info.adsTitle}</h4>
    <p>{t.info.adsText}</p>
  </div>

  <div className={styles.infoCard}>
    <h3>{t.branding.title}</h3>
    <h4>{t.info.brandingTitle}</h4>
    <p>{t.info.brandingText}</p>
  </div>

  <div className={styles.infoCard}>
    <h3>{t.studio.title}</h3>
    <h4>{t.info.studioTitle}</h4>
    <p>{t.info.studioText}</p>
  </div>

</div>

 </main>
    </div>

  
  );
}
