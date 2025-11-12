"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

// دقت کن: چون lang.tsx داخل فولدر lib است
// و فولدر locales کنار lib قرار دارد، مسیرش می‌شود ../locales
import { enMessages } from "../locales/en";
import { faMessages } from "../locales/fa";

export type Locale = "en" | "fa";

const allMessages = {
  en: enMessages,
  fa: faMessages,
};

type LangContextType = {
  locale: Locale;
  messages: typeof enMessages;
  setLocale: (locale: Locale) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en"); // پیش‌فرض: انگلیسی

  const value: LangContextType = {
    locale,
    messages: allMessages[locale],
    setLocale,
  };

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