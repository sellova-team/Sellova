import Image from "next/image";
import styles from "./pricing.module.css";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className={styles.page}>

      {/* ================= HEADER ================= */}

      <header className={styles.header}>

        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={225}
            height={180}
          />
        </div>


        <div className={styles.buttons}>
         
       <Link href="/studio">
  <button className={styles.start}>
    Start Free
  </button>
</Link>
        </div>

      </header>

      {/* ================= TITLE ================= */}

      <section className={styles.hero}>

        <div className={styles.badge}>
          ⚡ Simple Pricing. Powerful Results.
        </div>

        <h1>
          Choose the Plan
          <br />
          That Fits <span>You Best</span>
        </h1>

      </section>

      {/* ================= CARDS ================= */}

      <section className={styles.cards}>

        {/* FREE */}

        <div className={styles.card}>

          <h3>FREE</h3>

          <p>Try Sellova and experience the power of AI.</p>
          <div className={styles.priceBox}>
 <div className={styles.features}>
  <div className={styles.feature}>✓ 10 Min Upload</div>
  <div className={styles.feature}>✓ 3 Shorts</div>

  <div className={styles.feature}>✓ Standard AI</div>
  <div className={styles.feature}>✓ Watermark</div>

  <div className={styles.feature}>✓ 720p Export</div>
  <div className={styles.feature}>✓ Free Trial</div>
</div>

            <div>

              <h2>$0</h2>

              <span>Free Trial</span>

            </div>

          </div>

          <Link href="/studio">
  <button className={styles.startBtn}>
    Start Free →
  </button>
</Link>

        </div>

        {/* STARTER */}

        <div className={styles.cardActive}>

          <div className={styles.popular}>
            MOST POPULAR
          </div>

          <h3>STARTER</h3>

         <p className={styles.planDescription}>
  Perfect for creators growing their content.
</p>


<div className={styles.features}>
  <div className={styles.feature}>✓ 3 Hours Upload</div>
  <div className={styles.feature}>✓ 30 Shorts</div>

  <div className={styles.feature}>✓ 20 Images</div>
  <div className={styles.feature}>✓ 20 Covers</div>

  <div className={styles.feature}>✓ 10 Music</div>
  <div className={styles.feature}>✓ 1080p Export</div>

  <div className={styles.feature}>✓ No Watermark</div>
  <div className={styles.feature}>✓ Priority</div>
</div>


          <div className={styles.priceBox}>


           
            <div>

              <h2>$5.99</h2>

              <span>per month</span>

            </div>

          </div>

          <button>Get Started</button>

        </div>

        {/* VIP */}

        <div className={styles.card}>

          <h3>VIP</h3>

          <p>
            Maximum power for serious creators.
          </p>

      <div className={styles.features}>
  <div className={styles.feature}>✓ 5 Hours Upload</div>
  <div className={styles.feature}>✓ 70 Shorts</div>

  <div className={styles.feature}>✓ 60 Images</div>
  <div className={styles.feature}>✓ 60 Covers</div>

  <div className={styles.feature}>✓ 30 Music</div>
  <div className={styles.feature}>✓ 4K Export</div>

  <div className={styles.feature}>✓ No Watermark</div>
  <div className={styles.feature}>✓ Premium AI</div>
</div>
          <div className={styles.priceBox}>

          

            <div>

              <h2>$12.99</h2>

              <span>per month</span>

            </div>

          </div>

          <button>Go VIP</button>

        </div>

       
      </section>

      <p>
          All plans include AI-powered tools to turn your long videos
          
          into viral Shorts, Reels, TikToks and Stories.
        </p>

    </main>
  );
}
