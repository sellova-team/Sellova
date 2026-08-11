"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import styles from "./settings.module.css";

export default function SettingsPage() {
  const { messages } = useLang();
  const t = messages.AccountSettings;

  const [fullName, setFullName] = useState(
    "Shabnam Moghaddam"
  );

  const [email, setEmail] = useState(
    "shabnam@example.com"
  );

  const [brandName, setBrandName] = useState("Sellova");

  const [brandSlogan, setBrandSlogan] = useState(
    "AI Advertising Suite"
  );

  const [language, setLanguage] = useState("english");
  const [theme, setTheme] = useState("dark");

  const [showPasswordForm, setShowPasswordForm] =
    useState(false);

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  return (
    <main className={styles.page}>
      {/* HEADER */}

      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="Sellova"
          width={182}
          height={68}
          className={styles.logo}
          priority
        />

        <Link
          href="/ads/dashboard"
          className={styles.backLink}
        >
          <span>←</span>

          {t.header.backToWorkspace}
        </Link>
      </header>

      <section className={styles.content}>
        {/* HERO */}

        <div className={styles.hero}>
          <div className={styles.heroText}>
            <span>{t.header.title}</span>
          </div>

          <div className={styles.gearArt}>
            <Image
              src="/assets/icons/ADS/setting/axe.png"
              alt="Settings gear"
              fill
              priority
            />
          </div>
        </div>

        {/* ACCOUNT SETTINGS */}

        <section className={styles.accountCard}>
          <div className={styles.cardTitle}>
            <span>♙</span>

            <div>
              <h2>{t.account.title}</h2>

              <p>{t.account.subtitle}</p>
            </div>
          </div>

          <div className={styles.fields}>
            <label>
              <span>{t.account.fullName}</span>

              <input
                value={fullName}
                onChange={(event) =>
                  setFullName(event.target.value)
                }
              />
            </label>

            <label>
              <span>{t.account.emailAddress}</span>

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </label>

            <label>
              <span>{t.account.brandName}</span>

              <input
                value={brandName}
                onChange={(event) =>
                  setBrandName(event.target.value)
                }
              />
            </label>

            <label>
              <span>{t.account.brandSlogan}</span>

              <input
                value={brandSlogan}
                onChange={(event) =>
                  setBrandSlogan(event.target.value)
                }
              />
            </label>

            <label>
              <span>{t.account.language}</span>

              <select
                value={language}
                onChange={(event) =>
                  setLanguage(event.target.value)
                }
              >
                <option value="english">
                  {t.account.english}
                </option>

                <option value="persian">
                  {t.account.persian}
                </option>

                <option value="turkish">
                  {t.account.turkish}
                </option>

                <option value="french">
                  {t.account.french}
                </option>
              </select>
            </label>

            <label>
              <span>{t.account.theme}</span>

              <select
                value={theme}
                onChange={(event) =>
                  setTheme(event.target.value)
                }
              >
                <option value="dark">
                  {t.account.darkMode}
                </option>

                <option value="light">
                  {t.account.lightMode}
                </option>
              </select>
            </label>

            <div className={styles.planField}>
              <span>{t.plan.currentPlan}</span>

              <div>
                <strong>{t.plan.freePlan}</strong>

                <small>
                  {t.plan.creditsAvailable}
                </small>

                <Link href="/ads/upgrade-plan">
                  {t.plan.upgradePlan} →
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <button
              type="button"
              className={styles.passwordButton}
              onClick={() =>
                setShowPasswordForm(!showPasswordForm)
              }
            >
              <span>⌁</span>

              <div>
                <strong>{t.security.title}</strong>

                <small>
                  {t.security.changePassword}
                </small>
              </div>

              <b>→</b>
            </button>

            <button
              type="button"
              className={styles.saveButton}
            >
              {t.actions.saveChanges}
            </button>
          </div>

          {showPasswordForm && (
            <div className={styles.passwordForm}>
              <h3>{t.security.changePassword}</h3>

              <label>
                <span>Current password</span>

                <input
                  type="password"
                  value={currentPassword}
                  onChange={(event) =>
                    setCurrentPassword(event.target.value)
                  }
                />
              </label>

              <label>
                <span>New password</span>

                <input
                  type="password"
                  value={newPassword}
                  onChange={(event) =>
                    setNewPassword(event.target.value)
                  }
                />
              </label>

              <label>
                <span>Confirm new password</span>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                />
              </label>

              <button type="button">
                Save new password
              </button>
            </div>
          )}
        </section>

        {/* HELP & SUPPORT */}

        <section className={styles.helpCard}>
          <span className={styles.helpIcon}>?</span>

          <div>
            <strong>{t.support.title}</strong>

            <p>{t.support.text}</p>
          </div>

          <Link href="mailto:sellova.sit@gmail.com">
           sellova.sit@gmail.com

            <span>→</span>
          </Link>
        </section>
      </section>

      {/* FOOTER */}

      <footer className={styles.footer}>
        <span>{t.footer.rights}</span>

        <nav>
          <Link href="/privacy">
            {t.footer.privacyPolicy}
          </Link>

          <Link href="/terms">
            {t.footer.termsOfService}
          </Link>

          <Link href="mailto:sellova.sit@gmail.com">
            {t.support.contactSupport}
          </Link>
        </nav>
      </footer>
    </main>
  );
}