"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const musicStyles = [
{
name: "Classical",
icon: "/assets/icons/music/classical.png",
},
{
name: "Cinematic",
icon: "/assets/icons/music/cinematic.png",
},
{
name: "Corporate",
icon: "/assets/icons/music/corporate music.png",
},
{
name: "Electronic",
icon: "/assets/icons/music/electronic.png",
},
{
name: "Jazz",
icon: "/assets/icons/music/jazz.png",
},
{
name: "Rock",
icon: "/assets/icons/music/rock.png",
},
];

export default function MusicPage() {
  const router = useRouter();
return (
<div className={styles.page}>
    <button
  className={styles.backBtn}
  onClick={() => router.push("/dashboard")}
>
  ← Back To Dashboard
</button>   
   

{/* HEADER */}

<div className={styles.header}>

<img
src="/assets/icons/music/luxury.png"
alt="crown"
className={styles.crown}
/>

<img
src="/logo1.png"
alt="Sellova"
className={styles.logo}
/>

<h1 className={styles.title}>
AI MUSIC STUDIO
</h1>

<p className={styles.subtitle}>
create unique AI music for your brand
</p>


<div className={styles.waveGlow}></div>

</div>

{/* BRAND */}

<div className={styles.section}>

<div className={styles.sectionHeader}>
<div className={styles.number}>1</div>

<div>
<h2>BRAND INFORMATION</h2>
<span>Tell us about your brand</span>
</div>
</div>

<div className={styles.brandContent}>

<div className={styles.leftSide}>

<div className={styles.row}>

<div className={styles.field}>
<label>Brand Name</label>
<input placeholder="Sellova" />
</div>

<div className={styles.field}>
<label>Business Type</label>
<input placeholder="E-Commerce" />
</div>

<div className={styles.field}>
<label>Language</label>
<input placeholder="English" />
</div>

</div>

<div className={styles.field}>
<label>Description</label>
<textarea
placeholder="Describe your brand and music style..."
/>
</div>

</div>

<div className={styles.rightSide}>
  <div className={styles.musicGlow}
  ></div>

<img
src="/assets/icons/music.png"
alt="music"
className={styles.musicIcon}
/>

</div>

</div>

</div>

{/* STYLES */}

<div className={styles.section}>

<div className={styles.sectionHeader}>
<div className={styles.number}>2</div>

<div>
<h2>CHOOSE MUSIC STYLE</h2>
<span>Select your music style</span>
</div>
</div>

<div className={styles.styleGrid}>

{musicStyles.map((style) => (
<div
key={style.name}
className={styles.styleCard}
>
<img
src={style.icon}
alt={style.name}
/>

<span>
{style.name}
</span>
</div>
))}

</div>

<button className={styles.generateBtn}>
GENERATE MUSIC
</button>

</div>

{/* PLAYER */}

<div className={styles.section}>

<div className={styles.sectionHeader}>
<div className={styles.number}>3</div>

<div>
<h2>GENERATED MUSIC</h2>
<span>Your AI music is ready</span>
</div>
</div>

<div className={styles.playerArea}>

<div className={styles.coverCard}>

<img
src="/logo1.png"
alt="cover"
/>

<h3>Sellova Music</h3>

</div>

<div className={styles.wavePlayer}>

<div className={styles.fakeWave}>
   <div className={styles.waveBars}></
   div>
</div>

<div className={styles.controls}>

<button>◀◀</button>

<button className={styles.playBtn}>
▶
</button>

<button>▶▶</button>

</div>

</div>

<div className={styles.downloadArea}>

<button className={styles.downloadBtn}>
DOWNLOAD MUSIC
</button>

</div>

</div>

</div>

</div>
);
}

