
"use client";
import styles from "./studio.module.css";
import { useRouter } from "next/navigation";
import { useLang, Locale } from "../../lib/lang";

export default function StudioPage() {
  const router = useRouter();

  const { locale, messages, setLocale } = useLang();
  const t = messages.studioPage;
 console.log("Studio locale:",
  locale);
  console.log("Studio title:",
    t.header.title
  );
 

  return (
    <div className={styles.page}>
      {/* ================= HEADER ================= */}
      <header className={styles.topBar}>
        <div className={styles.leftTop}>
          <img src="/logo.png" className={styles.logo} />
        </div>

        <div className={styles.centerTop}>
          <h1 className={styles.pageTitle}>
            {t.header.title}
          </h1>

          <p className={styles.pageSub}>
            {t.header.subtitle}
          </p>
        </div>

        <div className={styles.rightTop}>
          <p className={styles.welcome}>
            {t.header.welcome}
          </p>

          <div className={styles.planRow}>
            <span className={styles.planBox}>
              {t.header.activePlan}
            </span>

            <button
              className={styles.upgradeBtn}
              onClick={() => router.push("/pricing")}
            >
              {t.header.upgrade}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main className={styles.container}>
        {/* LEFT */}

        <div className={styles.uploadWrapper}>
          <div className={styles.uploadBox}>
            <div className={styles.uploadCenter}>
              <img
                src="/assets/icons/edit/upload.png"
                className={styles.uploadIcon}
              />

              <h3 className={styles.uploadTitle}>
                {t.upload.title}
              </h3>

              <p className={styles.uploadText}>
                {t.upload.drag}
              </p>

              <p className={styles.uploadInfo}>
                {t.upload.info}
              </p>
            </div>
          </div>

          <div className={styles.safeBox}>
            🔒 {t.upload.safe}
          </div>

          <div className={styles.steps}>
            <span className={styles.activeStep}>
              1 {t.steps.upload}
            </span>

            <span>
              2 {t.steps.customize}
            </span>

            <span>
              3 {t.steps.generate}
            </span>

            <span>
              4 {t.steps.results}
            </span>
          </div>
        </div>

        {/* RIGHT */}

        <div className={styles.right}>
          <h2 className={styles.title}>
            {t.content.title}
          </h2>

          <div className={styles.list}>
            {[
              {
                name: t.content.instagramReels,
                icon: "/assets/icons/edit/instagram.png",
                value: 10,
              },
              {
                name: t.content.youtubeShorts,
                icon: "/assets/icons/edit/youtube shorts.png",
                value: 10,
              },
              {
                name: t.content.tiktokVideos,
                icon: "/assets/icons/edit/tiktok.png",
                value: 10,
              },
              {
                name: t.content.instagramStories,
                icon: "/assets/icons/edit/story instagram.png",
                value: 20,
              },
              {
                name: t.content.facebookPosts,
                icon: "/assets/icons/edit/facebook.png",
                value: 10,
              },
              {
                name: t.content.socialPosts,
                icon: "/assets/icons/edit/social Media post.png",
                value: 5,
              },
              {
                name: t.content.videoClips,
                icon: "/assets/icons/edit/clip.png",
                value: 5,
              },
            ].map((item, i) => (
<div className={styles.itemRow} key={i}>
  <div className={styles.leftSide}>
    <img
      src={item.icon}
      className={styles.smallIcon}
    />

    <div className={styles.textBlock}>
      <span className={styles.name}>
        {item.name}
      </span>
    </div>
  </div>

  <div className={styles.timeBox}>
    <select>
      <option>{t.content.option10}</option>
      <option>{t.content.option30}</option>
      <option>{t.content.option1m}</option>
      <option>{t.content.option2m}</option>
    </select>
  </div>

  <div className={styles.rightSide}>
    <button className={styles.btn}>-</button>

    <span className={styles.count}>
      {item.value}
    </span>

    <button className={styles.btn}>+</button>
  </div>
</div>
))}
</div>

<button className={styles.generateBtn}>
  {t.content.generate}
</button>

</div>
</main>

{/* ================= BOTTOM ================= */}

<div className={styles.bottom}>
  <div className={styles.bottomHeader}>
    <div>
      <h2>{t.progress.title}</h2>

      <p>{t.progress.subtitle}</p>
    </div>

    <button className={styles.viewBtn}>
      {t.progress.viewAll}
    </button>
  </div>

  {[
    {
      name: t.content.instagramReels,
      ready: `3 / 10 ${t.progress.ready}`,
      icon: "/assets/icons/edit/instagram.png",
    },
    {
      name: t.content.youtubeShorts,
      ready: `2 / 10 ${t.progress.ready}`,
      icon: "/assets/icons/edit/youtube shorts.png",
    },
    {
      name: t.content.tiktokVideos,
      ready: `3 / 10 ${t.progress.ready}`,
      icon: "/assets/icons/edit/tiktok.png",
    },
    {
      name: t.content.instagramStories,
      ready: `5 / 20 ${t.progress.ready}`,
      icon: "/assets/icons/edit/story instagram.png",
    },
    {
      name: t.content.socialPosts,
      ready: `4 / 10 ${t.progress.ready}`,
      icon: "/assets/icons/edit/social Media post.png",
    },
  ].map((item, i) => (
    <div className={styles.row} key={i}>
      <div className={styles.left}>
        <img
          src={item.icon}
          className={styles.bottomIcon}
        />

        <div className={styles.textBlock}>
          <div className={styles.name}>
            {item.name}
          </div>

          <div className={styles.ready}>
            {item.ready}
          </div>
        </div>
      </div>

      <div className={styles.center}>
{item.name === t.content.instagramReels && (
  <>
    <img src="/assets/generated/instagram reels/1.png" className={styles.thumb} />
    <img src="/assets/generated/instagram reels/2.png" className={styles.thumb} />
    <img src="/assets/generated/instagram reels/3.png" className={styles.thumb} />
    <img src="/assets/generated/instagram reels/4.png" className={styles.thumb} />
    <img src="/assets/generated/instagram reels/5.png" className={styles.thumb} />
  </>
)}

{item.name === t.content.youtubeShorts && (
  <>
    <img src="/assets/generated/youtube shorts/1.png" className={styles.thumb} />
    <img src="/assets/generated/youtube shorts/2.png" className={styles.thumb} />
    <img src="/assets/generated/youtube shorts/3.png" className={styles.thumb} />
    <img src="/assets/generated/youtube shorts/4.png" className={styles.thumb} />
    <img src="/assets/generated/youtube shorts/5.png" className={styles.thumb} />
  </>
)}

{item.name === t.content.tiktokVideos && (
  <>
    <img src="/assets/generated/tiktok/1.png" className={styles.thumb} />
    <img src="/assets/generated/tiktok/2.png" className={styles.thumb} />
    <img src="/assets/generated/tiktok/3.png" className={styles.thumb} />
    <img src="/assets/generated/tiktok/4.png" className={styles.thumb} />
  </>
)}

{item.name === t.content.instagramStories && (
  <>
    <img src="/assets/generated/instagram stories/1.png" className={styles.thumb} />
    <img src="/assets/generated/instagram stories/2.png" className={styles.thumb} />
    <img src="/assets/generated/instagram stories/3.png" className={styles.thumb} />
    <img src="/assets/generated/instagram stories/4.png" className={styles.thumb} />
    <img src="/assets/generated/instagram stories/5.png" className={styles.thumb} />
  </>
)}

{item.name === t.content.socialPosts && (
  <>
    <img src="/assets/generated/facebook/1.png" className={styles.thumb} />
    <img src="/assets/generated/facebook/2.png" className={styles.thumb} />
    <img src="/assets/generated/facebook/3.png" className={styles.thumb} />
    <img src="/assets/generated/facebook/4.png" className={styles.thumb} />
  </>
)}

<div className={styles.generating}>
  {t.progress.generating}
</div>

<div className={styles.more}>
  {t.progress.more}
</div>
</div>

<div className={styles.arrow}>
  ›
</div>
</div>
))}
</div>
</div>
);
}
