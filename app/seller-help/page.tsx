"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

export default function SellerHelpPage() {
  const { messages } = useLang();

  return (
    <main className="page">
      <div className="card">
        <h1>🤝 {messages.sellerHelp.title}</h1>

        <p className="subtitle">
          {messages.sellerHelp.subtitle}
        </p>

        <div className="infoBox">
          <h2>{messages.sellerHelp.infoTitle}</h2>

          <ul>
            <li>✓ {messages.sellerHelp.benefit1}</li>
            <li>✓ {messages.sellerHelp.benefit2}</li>
            <li>✓ {messages.sellerHelp.benefit3}</li>
            <li>✓ {messages.sellerHelp.benefit4}</li>
            <li>✓ {messages.sellerHelp.benefit5}</li>
          </ul>
        </div>

<div className="buttons">
  <Link href="/guide-center" className="btn">
    📘 {messages.sellerHelp.sellovaGuide}
  </Link>

  <Link href="/academy-insight" className="btn">
    🎓 {messages.sellerHelp.academyInsight}
  </Link>

  <Link href="/advisory-consultation" className="btn">
    📊 {messages.sellerHelp.advisoryAnalysis}
  </Link>
</div>
     
       <div className="buttons">
  <Link href="/guide-center">
    <div className="btn">
      📘 {messages.sellerHelp.sellovaGuide}
    </div>
  </Link>

  <Link href="/academy-insight">
    <div className="btn">
      🎓 {messages.sellerHelp.academyInsight}
    </div>
  </Link>

  <Link href="/advisory-consultation">
    <div className="btn">
      📊 {messages.sellerHelp.advisoryAnalysis}
    </div>
  </Link>
</div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #0b1e3d;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .card {
          width: 100%;
          max-width: 700px;
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        h1 {
          color: #0b1e3d;
          text-align: center;
          margin-bottom: 10px;
          font-size: 34px;
        }

        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 35px;
          font-size: 18px;
        }

        .infoBox {
          background: #f7f9fc;
          padding: 25px;
          border-radius: 18px;
          margin-bottom: 35px;
        }

        .infoBox h2 {
          color: #0b1e3d;
          margin-bottom: 20px;
        }

        ul {
          padding-left: 20px;
          margin: 0;
        }

        li {
          margin-bottom: 14px;
          color: #444;
          font-size: 16px;
          line-height: 1.6;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 25px;
        }

  .btn {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #1483ff;
  border-radius: 14px;
  background: white;
  color: #1483ff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

.btn:hover {
  background: #1483ff;
  color: white;
}


        @media (max-width: 768px) {
          .card {
            padding: 25px;
          }

          h1 {
            font-size: 26px;
          }

          .subtitle {
            font-size: 15px;
          }

          li {
            font-size: 14px;
          }

          .btn {
            width: 100%;
            box-sizing: border-box;
            text-align: center;
            font-size: 14px;
            padding: 14px;
          }
        }
      `}</style>
    </main>
  );
}
