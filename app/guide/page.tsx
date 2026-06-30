"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./guide.module.css";

export default function GuidePage() {
  const router = useRouter();

  return (
    <div className={styles.page}>

      <div className={styles.logoWrap}>
        <Image
          src="/logo1.png"
          alt="Sellova"
          width={280}
          height={150}
          priority
        />
        <p className={styles.logoSub}>
          AI POWERED ADVERTISING
        </p>
      </div>

      <button
        className={styles.backBtn}
        onClick={() => router.push("/dashboard")}
      >
        ← Back To Dashboard
      </button>

      <div className={styles.cubeWrap}>
        <img
          src="/assets/icons/guide axe/cube.png"
          alt="cube"
          className={styles.cube}
        />
      </div>

      <div className={styles.guideWrap}>
        <img
          src="/assets/icons/guide axe/guide.png"
          alt="Guide"
          className={styles.guideImage}
        />
      </div>

    </div>
  );
}
