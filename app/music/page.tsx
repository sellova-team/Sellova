"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useLang } from "@/lib/lang";




export default function MusicPage() {
  const router = useRouter();
  const { messages } = useLang();

  const musicStyles = [
{
name: messages.Music.classical,
icon: "/assets/icons/music/classical.png",
},
{
name: messages.Music.cinematic,
icon: "/assets/icons/music/cinematic.png",
},
{
name: messages.Music.corporate,
icon: "/assets/icons/music/corporate music.png",
},
{
name: messages.Music.electronic,
icon: "/assets/icons/music/electronic.png",
},
{
 
name: messages.Music.jazz,
icon: "/assets/icons/music/jazz.png",
},
{
name: messages.Music.rock,
icon: "/assets/icons/music/rock.png",
},
];
return (
<div className={styles.page}>
    <button
  className={styles.backBtn}
  onClick={() => router.push("/dashboard")}
>
  ←{messages.Music.backDashboard}
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
{messages.Music.title}
</h1>

<p className={styles.subtitle}>
{messages.Music.subtitle}
</p>

<div className={styles.logoGlow}>

</div>

<div className={styles.waveGlow}></div>

</div>

{/* BRAND */}

<div className={`${styles.section} ${styles.brandSection}`}>

<div className={styles.sectionHeader}>
<div className={styles.number}>1</div>

<div>
<h2>{messages.Music.brandInfo}</h2>
<span>{messages.Music.brandSubtitle}</span>
</div>
</div>

<div className={styles.brandContent}>

<div className={styles.leftSide}>

<div className={styles.row}>

<div className={styles.field}>
<label>{messages.Music.brandName}</label>
<input placeholder="Sellova" />
</div>

<div className={styles.field}>
<label>{messages.Music.businessType}</label>
<input placeholder="E-Commerce" />
</div>

<div className={styles.field}>
<label>{messages.Music.language}</label>

<select>
  <option>English</option>
  <option>Persian</option>
  <option>Turkish</option>
  <option>Arabic</option>
  <option>Urdu</option>
</select>
</div>

</div>

<div className={styles.field}>
<label>{messages.Music.descriptionLabel}</label>
<textarea
placeholder={messages.Music.description}
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
<h2>{messages.Music.style}</h2>
<span>{messages.Music.styleSubtitle}</span>
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

<button
className={styles.generateBtn}>
{ messages.Music.generate}
</button>
</div>



</div>

{/* PLAYER */}

<div className={`${styles.section} ${styles.brandSection}`}>

<div className={styles.sectionHeader}>
<div className={styles.number}>3</div>

<div>
<h2>{messages.Music.resultTitle}</h2>
<span>{messages.Music.resultSubtitle}</span>
</div>
</div>

<div className={styles.playerArea}>


<img
src="/assets/icons/music.png"
alt="cover"
className={styles.coverImage}
/>

<div className={styles.wavePlayer}>

<div className={styles.fakeWave}>
  {Array.from({ length: 60 }).map((_,i) => (
    <span
     key={i} 
     className={styles.bar} 
     style={{
      animationDelay: `${i * 0.08}s` ,
      height: `${[5,18,46,20,30,23,43,16,34.20][i % 10]}px`
     }}
  />
  ))}
 
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
{messages.Music.download}
</button>

</div>

</div>

</div>

</div>
);
}

