"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { enMessages } from "../locales/en";
import { faMessages } from "../locales/fa";
import { trMessages } from "../locales/tr";

export type Locale =
  | "en"
  | "fa"
  | "tr"
  | "ur"
  | "ar"
  | "az"
  | "ar-eg"
  | "uz"
  | "kk";

const allMessages = {
  en: enMessages,
  fa: faMessages,
  tr: trMessages,

  // fallback languages
  ur: enMessages,
  ar: enMessages,
  az: enMessages,
  "ar-eg": enMessages,
  uz: enMessages,
  kk: enMessages,
};

type LangContextType = {
  locale: Locale;
  messages: typeof enMessages;
  setLocale: (locale: Locale) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // 🧠 load saved language
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved) {
      setLocaleState(saved);
    }
  }, []);

  // 🧠 change language
  const setLocale = (newLocale: Locale) => {
    console.log("SET LOCALE:", newLocale);
    setLocaleState(newLocale);
  };

  // 🧠 save language
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const fallbackLocale: Locale = "en";

  const value: LangContextType = {
    locale,
    messages: allMessages[locale] || allMessages[fallbackLocale],
    setLocale,
  };

  console.log("LangProvider locale:", locale);

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used inside LangProvider");
  }
  return ctx;
}
