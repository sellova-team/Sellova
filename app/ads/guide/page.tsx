"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLang } from "../../../lib/lang";
import styles from "./guide.module.css";

export default function GuidePage() {
  const router = useRouter();

  const { messages } = useLang();
  const t = messages.guidePage;

  return (
    <div className={styles.page}>

      <div className={styles.logoWrap}>

        <p className={styles.logoSub}>
          {t.logoSub}
        </p>

      </div>

      <div className={styles.cubeWrap}>
        <img
          src="/assets/icons/guide axe/cube.png"
          alt="cube"
          className={styles.cube}
        />
      </div>

      <div className={styles.textBox}>

        <h1>
          {t.heroTitle1}
          <br />
          {t.heroTitle2}
        </h1>

        <p>
          {t.heroDescription}
        </p>

        <ul className={styles.rules}>
          <li>✅ {t.rules.whiteBackground}</li>
          <li>✅ {t.rules.centeredProduct}</li>
          <li>✅ {t.rules.highResolution}</li>
          <li>❌ {t.rules.noHands}</li>
          <li>❌ {t.rules.noWatermarks}</li>
          <li>❌ {t.rules.noBlurry}</li>
        </ul>

      </div>

      <div className={styles.guideWrap}>
        <img
          src="/assets/icons/guide axe/guide.png"
          alt="Guide"
          className={styles.guideImage}
        />
      </div>

      <div className={styles.tipBox}>

        <div className={styles.tipIcon}>💡</div>

        <div>

          <h3>{t.tip.title}</h3>

          <p>
            {t.tip.description}
          </p>

        </div>

        <div className={styles.bottomCards}>

          <div className={styles.infoCard}>

            <h3>{t.uploadGuide.title}</h3>

            <p>
              {t.uploadGuide.description}
            </p>

            <div className={styles.cardItem}>

              <h4>{t.uploadGuide.requirementTitle}</h4>

              <p>
                {t.uploadGuide.requirementDescription}
              </p>

            </div>

          </div>

          <div className={styles.infoCard}>

            <h3>{t.categories.title}</h3>

            <p>
              {t.categories.description}
            </p>

            <div className={styles.cardItem}>

              <h4>{t.categories.qualityTitle}</h4>

              <p>
                {t.categories.qualityDescription}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}