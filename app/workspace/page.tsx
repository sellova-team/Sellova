import styles from "./workspace.module.css";

export default function WorkspacePage() {
  return (
    <div className={styles.container}>
      {/* LEFT SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Sellova</div>

        <nav className={styles.nav}>
          <a className={styles.active}>Workspace</a>
          <a>History</a>
          <a>Templates</a>
          <a>AI Tools</a>
          <a>My Projects</a>
          <a>Brand Kits</a>
          <a>Integrations</a>
          <a>Settings</a>
        </nav>

        <div className={styles.bottomBox}>
          <div className={styles.plan}>Golden Plan</div>
          <button className={styles.upgrade}>Upgrade Plan</button>
        </div>
      </aside>

      {/* MAIN */}
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Welcome to Sellova ✨</h1>
          <h2>Choose Your AI Workspace</h2>
          <p>Powerful AI tools for your business, brand and content.</p>
        </div>

        <div className={styles.cards}>

          {/* SELLLOVA ADS */}
          <div className={styles.card}>
            <img
              src="/assets/icons/work/ads.png"
              className={styles.icon}
              alt=""
            />
            <h3>Sellova Ads</h3>
            <p>AI Advertising Suite</p>

            <div className={styles.features}>
              <span>AI Product Image</span>
              <span>AI Product Video</span>
              <span>AI Avatar Image</span>
              <span>AI Avatar Video</span>
            </div>

            <button className={styles.btnPurple}>
              Enter Sellova Ads →
            </button>
          </div>

          {/* BRANDING */}
          <div className={styles.card}>
            <img
              src="/assets/icons/work/brand-personal.png"
              className={styles.icon}
              alt=""
            />
            <h3>Sellova Branding</h3>
            <p>AI Personal Branding Suite</p>

            <div className={styles.features}>
              <span>Brand Strategy</span>
              <span>Content Ideas</span>
              <span>Post Generator</span>
              <span>Growth Insights</span>
            </div>

            <button className={styles.btnBlue}>
              Enter Sellova Branding →
            </button>
          </div>

          {/* STUDIO */}
          <div className={styles.card}>
            <img
              src="/assets/icons/work/edit-video.png"
              className={styles.icon}
              alt=""
            />
            <h3>Sellova Studio</h3>
            <p>AI Content Studio</p>

            <div className={styles.features}>
              <span>Long to Shorts</span>
              <span>Auto Captions</span>
              <span>Podcast Clips</span>
              <span>Thumbnails</span>
            </div>

            <button className={styles.btnOrange}>
              Enter Sellova Studio →
            </button>
          </div>

        </div>

        {/* bottom icons row */}
        <div className={styles.iconRow}>
          <img src="/assets/icons/work/avatar.png" />
          <img src="/assets/icons/work/brand.png" />
          <img src="/assets/icons/work/edit.png" />
          <img src="/assets/icons/work/rocket.png" />
          <img src="/assets/icons/work/sellova-ads.png" />
        </div>
      </main>
    </div>
  );
}
