import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { LangProvider } from "../lib/lang";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Sellova",
  description: "Sellova AI advertising platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LangProvider>
          <div className="app-shell">
            {children}
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
