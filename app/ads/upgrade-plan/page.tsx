"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./upgrade-plan.module.css";

type PlanId =
  | "free"
  | "economic"
  | "basic"
  | "annual"
  | "music"
  | "golden"
  | "mini"
  | "pro";

const plans = [
  {
    id: "free" as const,
    icon: "🎁",
    name: "FREE",
    price: "FREE",
    units: "30 CREDITS",
    description: "Try Sellova with simple images",
    features: ["Simple images only", "Watermarked", "One-time starter credits"],
    button: "Start Free",
    tone: "free",
  },
  {
    id: "economic" as const,
    icon: "ϟ",
    name: "ECONOMIC",
    price: "$3.99",
    units: "50 CREDITS",
    description: "For occasional advertising",
    features: [
      "Images & simple videos",
      "Captions & hashtags",
      "1 free 5-sec avatar video",
    ],
    button: "Choose Economic",
    tone: "economic",
  },
  {
    id: "basic" as const,
    icon: "✦",
    badge: "MOST POPULAR",
    name: "BASIC",
    price: "$7.99",
    units: "160 CREDITS",
    description: "Best choice for active sellers",
    features: [
      "More images & videos",
      "Analysis included",
      "1 avatar video or 10-sec video",
    ],
    button: "Choose Basic",
    tone: "basic",
  },
  {
    id: "annual" as const,
    icon: "▣",
    badge: "BEST VALUE",
    name: "ANNUAL",
    price: "$29",
    units: "950 CREDITS",
    description: "Create all year and save more",
    features: [
      "Valid for 12 months",
      "Flexible use",
      "6 avatar video bonuses",
    ],
    button: "Choose Annual",
    tone: "annual",
  },
  {
    id: "music" as const,
    icon: "♬",
    name: "MUSIC",
    price: "$3.99",
    units: "3 TRACKS",
    description: "Custom music for your brand",
    features: [
      "15 seconds each",
      "Multiple styles",
      "Commercial-ready",
    ],
    button: "Choose Music",
    tone: "music",
  },
  {
    id: "golden" as const,
    icon: "♕",
    badge: "COMPLETE CAMPAIGN",
    name: "GOLDEN",
    price: "$10",
    units: "2 COMPLETE VIDEOS",
    description: "A ready-to-publish premium advertisement",
    features: [
      "10-sec cinematic",
      "3-sec slogan",
      "2-sec logo",
    ],
    button: "Go Golden",
    tone: "golden",
  },
  {
    id: "mini" as const,
    icon: "●",
    name: "AVATAR MINI",
    price: "$4.49",
    units: "4 AVATAR UNITS",
    description: "A small avatar video pack",
    features: [
      "4 × 5-sec videos",
      "Or 2 × 10-sec videos",
      "No expiration",
    ],
    button: "Choose Mini",
    tone: "mini",
  },
  {
    id: "pro" as const,
    icon: "♛",
    badge: "BEST AVATAR VALUE",
    name: "AVATAR PRO",
    price: "$11.99",
    units: "16 AVATAR UNITS",
    description: "For ongoing avatar campaigns",
    features: [
      "16 × 5-sec videos",
      "Or 8 × 10-sec videos",
      "No expiration",
    ],
    button: "Choose Pro",
    tone: "pro",
  },
];

export default function UpgradePlanPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("basic");

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/workspace" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={200}
            height={90}
            priority
            className={styles.logo}
          />
        </Link>
      </header>

      <section className={styles.hero}>
        <h1>
          Choose What <span>You Need</span>
        </h1>
      </section>

      <section className={styles.plansGrid}>
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`${styles.planCard} ${styles[plan.tone]} ${
              selectedPlan === plan.id ? styles.selectedPlan : ""
            }`}
          >
            {plan.badge && (
              <span className={styles.planBadge}>{plan.badge}</span>
            )}

            <div className={styles.cardTop}>
              <span className={styles.planIcon}>{plan.icon}</span>
              <h2>{plan.name}</h2>
              <strong>{plan.price}</strong>
              <b>{plan.units}</b>
            </div>

            <div className={styles.cardBody}>
              <p>{plan.description}</p>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.button}
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}