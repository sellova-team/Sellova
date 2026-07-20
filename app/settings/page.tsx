"use client";

import styles from "./settings.module.css";
import { useLang } from "../../lib/lang";

export default function SettingsPage() {
  const { messages } = useLang();
  const t = messages.settings;

  return (
    <div className={styles.page}>

      <div className={styles.header}>

        <h1>{t.title}</h1>

        <p>{t.subtitle}</p>

      </div>

      <div className={styles.container}>

        {/* ================= LEFT ================= */}

        <div className={styles.supportCard}>

          <h2>{t.support}</h2>

          <p className={styles.supportText}>
            {t.supportText}
          </p>

          <div className={styles.emailBox}>
            <span>📧</span>
            <span>support@sellova.ai</span>
          </div>

          <p className={styles.supportNote}>
            {t.supportNote}
          </p>

        </div>

        {/* ================= RIGHT ================= */}

        <div className={styles.accountCard}>

          <h2>{t.account}</h2>

          <div className={styles.formGroup}>

            <label>{t.fullName}</label>

            <input
              type="text"
              placeholder={t.fullName}
            />

          </div>

          <div className={styles.formGroup}>

            <label>{t.email}</label>

            <input
              type="email"
              placeholder="example@email.com"
            />

          </div>

          <div className={styles.formGroup}>

            <label>{t.password}</label>

            <input
              type="password"
              placeholder="********"
            />

          </div>

          <div className={styles.formGroup}>

            <label>{t.confirmPassword}</label>

            <input
              type="password"
              placeholder="********"
            />

          </div>

          <button className={styles.saveButton}>
            {t.save}
          </button>

        </div>

      </div>

    </div>
  );
}
