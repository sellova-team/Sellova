"use client";

import styles from "./edit-video.module.css";
import { useRouter } from "next/navigation";
import { useLang, Locale } from "../../lib/lang";

export default function EditVideoPage() {
  const router = useRouter();
  const { locale, messages, setLocale } = useLang();

  return (
    <div className={styles.page}>

      <header className={styles.header}>
      </header>

      <main className={styles.main}>

        <section className={styles.left}>
        </section>

        <section className={styles.right}>
        </section>

      </main>

      <footer className={styles.footer}>
      </footer>

    </div>
  );
}
