"use client";

import { useState } from "react";
import { useLang } from "../../lib/lang";

export default function SellovaGuidePage() {
  const { messages } = useLang();
  const slides = messages.sellovaGuide.slides;

  const [idx, setIdx] = useState(0);
  const n = slides.length;
  const next = () => setIdx((i) => (i + 1) % n);
  const prev = () => setIdx((i) => (i - 1 + n) % n);
  const slide = slides[idx];

  return (
    <main className="pg">
      <header className="hdr">
        <img src="/logo.png" alt="Sellova" className="logo" />
        <p className="slogan">Sellova — The Creative Team Behind Your Brand</p>
      </header>

      <section className="slide">
        <h1 className="title">{slide.title}</h1>
        <h2 className="subtitle">{slide.subtitle}</h2>
        <p className="text">{slide.text}</p>

        <div className="controls">
          <button className="btn" onClick={prev}>◀ Prev</button>
          <span className="count">
            {idx + 1} / {n}
          </span>
          <button className="btn primary" onClick={next}>Next ▶</button>
        </div>
      </section>

      <style jsx>{`
        .pg {
          min-height: 100vh;
          background:
            radial-gradient(
              900px 520px at 18% -8%,
              rgba(35, 68, 140, 0.22),
              rgba(9, 19, 38, 1) 55%
            ),
            linear-gradient(180deg, #0b1326 0%, #0a1124 70%);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          font-family: "Inter", system-ui, sans-serif;
          padding: 40px 16px 80px;
          text-align: center;
        }
        .hdr {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo {
          width: 220px;
          height: auto;
          filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.4));
        }
        .slogan {
          font-size: 14px;
          margin-top: 8px;
          color: #dbe7ff;
          opacity: 0.9;
          font-weight: 600;
        }
        .slide {
          max-width: 720px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 36px 26px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .title {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 8px;
          color: #fff;
        }
        .subtitle {
          font-size: 18px;
          color: #ffd166;
          margin-bottom: 18px;
          font-weight: 600;
        }
        .text {
          font-size: 16px;
          line-height: 1.7;
          color: #eaf0ff;
          margin-bottom: 24px;
        }
        .controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
        }
        .btn {
          background: #fff;
          color: #0a1124;
          border: none;
          font-weight: 700;
          border-radius: 10px;
          padding: 10px 20px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn:hover {
          transform: scale(1.05);
          background: #eaf0ff;
        }
        .btn.primary {
          background: #1483ff;
          color: #fff;
        }
        .count {
          font-size: 13px;
          color: #d0d8ff;
        }
      `}</style>
    </main>
  );
}