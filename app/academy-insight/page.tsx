"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLang } from "../../lib/lang";

type Slide = {
  id: string;
  title: string;
  body: React.ReactNode;
  tips?: React.ReactNode;
};

const LOGO_SRC = "/logo.png";

function useKeyArrows(next: () => void, prev: () => void) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev]);
}

export default function AcademyInsightPage() {
  const { messages } = useLang();
  const t =
    (messages as any).academyInsight || {
      title: "Sellova Academy — Insight",
      quickTipsTitle: "Quick Tips",
      meta: "This page is educational and uses no credits.",
      locale: "en",
    };

  const slides = useMemo(
    () => (t.locale === "fa" ? slidesFA() : slidesEN()),
    [t.locale]
  );

  const [idx, setIdx] = useState(0);
  const count = slides.length;

  const next = useCallback(() => setIdx((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + count) % count),
    [count]
  );
  const cur = slides[idx];

  useKeyArrows(next, prev);

  return (
    <main className="pg">
      <header className="hdr">
        <img
          src={LOGO_SRC}
          alt="Sellova"
          width={300}
          height={150}
          className="logo"
        />
      </header>

      <h1 className="title">{t.title}</h1>

      <section className="grid">
        <article className="card">
          <div className="slideHead">
            <div className="chip">#{idx + 1}</div>
            <h2 className="h">{cur.title}</h2>
          </div>

          <div className="content">{cur.body}</div>

          {cur.tips && (
            <>
              <div className="divider" />
              <div className="tips">
                <div className="tipsTitle">{t.quickTipsTitle}</div>
                {cur.tips}
              </div>
            </>
          )}

          <div className="navRow">
            <button className="btn ghost" onClick={prev}>
              ◀ Prev
            </button>
            <div className="dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === idx ? "on" : ""}`}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
            <button className="btn primary" onClick={next}>
              Next ▶
            </button>
          </div>

          <p className="meta">{t.meta}</p>
        </article>
      </section>

      <style jsx>{`
        .pg {
          min-height: 100vh;
          padding: 16px 16px 48px;
          background:
            radial-gradient(
              900px 520px at 18% -8%,
              rgba(35, 68, 140, 0.22),
              rgba(9, 19, 38, 1) 55%
            ),
            linear-gradient(180deg, #0b1326 0%, #0a1124 70%);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Roboto,
            Arial;
        }
        .hdr {
          margin: 8px 0;
        }
        .logo {
          display: block;
          height: auto;
        }
        .title {
          margin: 0;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        .grid {
          width: min(1080px, 95vw);
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          transform: translateY(-8px);
        }

        .card {
          background: #fff;
          color: #111;
          border: 1px solid #111;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
        }

        .slideHead {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 10px;
          align-items: center;
          margin-bottom: 8px;
        }
        .chip {
          background: #0b57d0;
          color: #fff;
          border: 1px solid #0a3ea1;
          font-weight: 800;
          font-size: 13px;
          padding: 6px 10px;
          border-radius: 999px;
        }
        .h {
          margin: 0;
          font-size: 20px;
          font-weight: 900;
          color: #0b1e3d;
        }

        .content p {
          margin: 8px 0;
          line-height: 1.7;
        }
        .content ul {
          margin: 6px 0 8px 18px;
        }
        .content li {
          margin: 4px 0;
        }

        .divider {
          height: 1px;
          background: #111;
          opacity: 0.15;
          margin: 12px 0;
        }

        .tipsTitle {
          font-weight: 900;
          font-size: 13px;
          margin-bottom: 6px;
          color: #0b1e3d;
        }
        .tips ul {
          margin-left: 18px;
        }

        .navRow {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 12px;
          margin-top: 10px;
        }

        .btn {
          height: 44px;
          border-radius: 12px;
          padding: 0 16px;
          font-weight: 800;
          cursor: pointer;
          border: 1px solid #111;
          background: #fff;
          color: #111;
        }
        .btn:active {
          transform: translateY(1px);
        }

        .primary {
          background: #1483ff;
          color: #fff;
          border-color: #0b57d0;
        }
        .ghost {
          background: #fff;
          color: #0b57d0;
          border-color: #0b57d0;
        }

        .dots {
          display: flex;
          gap: 8px;
          justify-content: center;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #ffd166;
          opacity: 0.4;
          cursor: pointer;
        }
        .dot.on {
          opacity: 1;
          transform: scale(1.12);
        }

        .meta {
          margin-top: 8px;
          font-size: 12px;
          color: #333;
          text-align: center;
        }

        /* ---------- 📱 نسخه موبایل: همه چیز کوچیک‌تر و مرتب ---------- */
        @media (max-width: 640px) {
          .pg {
            padding: 20px 10px 32px;
          }
          .logo {
            width: 170px;
          }
          .title {
            font-size: 20px;
          }
          .grid {
            width: 100%;
            transform: translateY(0);
          }
          .card {
            padding: 14px 12px;
            border-radius: 12px;
          }
          .chip {
            font-size: 11px;
            padding: 4px 8px;
          }
          .h {
            font-size: 16px;
          }
          .content p {
            font-size: 13px;
            line-height: 1.55;
          }
          .content ul {
            margin-left: 16px;
          }
          .content li {
            font-size: 13px;
          }
          .tipsTitle {
            font-size: 12px;
          }
          .btn {
            height: 38px;
            padding: 0 10px;
            font-size: 13px;
            border-radius: 10px;
          }
          .navRow {
            gap: 8px;
          }
          .dot {
            width: 8px;
            height: 8px;
          }
          .meta {
            font-size: 11px;
          }
        }
      `}</style>
    </main>
  );
}

/* ---------------- Slides (EN) ---------------- */

function slidesEN(): Slide[] {
  return [
    {
      id: "hook",
      title: "What makes a promo image sell?",
      body: (
        <>
          <p>
            Good ads are simple: clear product, clean background, natural lighting, and one strong
            message.
          </p>
          <ul>
            <li>Show the item clearly (big enough for mobile).</li>
            <li>
              Use backgrounds that match the mood (studio, stone, wood, fabric, nature, leather).
            </li>
            <li>Keep soft, realistic shadows.</li>
            <li>One strong message + one CTA.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>1:1 for posts, 9:16 for stories/reels.</li>
          <li>Put brand color on buttons/badges, not full overlays.</li>
        </ul>
      ),
    },
    {
      id: "composition",
      title: "Composition & framing",
      body: (
        <>
          <p>Center or grid-align the product. Leave breathing space; avoid cutting key parts.</p>
          <ul>
            <li>
              Use <b>contain</b> fit if unsure.
            </li>
            <li>Keep one focal point.</li>
            <li>Make text readable on phones.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>Place small badges near corners, not over key details.</li>
          <li>CTA works best near the lower text area.</li>
        </ul>
      ),
    },
    {
      id: "backgrounds",
      title: "Helpful backgrounds",
      body: (
        <>
          <p>Pick a background that tells a story. Subtle textures and soft depth look premium.</p>
          <ul>
            <li>Studio: clean & modern.</li>
            <li>Stone/Wood: solid & premium.</li>
            <li>Leather/Fabric: luxury & softness.</li>
            <li>Nature: freshness & air.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>Avoid noisy patterns.</li>
          <li>Match brightness to your product color.</li>
        </ul>
      ),
    },
    {
      id: "light",
      title: "Lighting & shadows",
      body: (
        <>
          <p>Natural light sells. One main light + soft fill feels real.</p>
          <ul>
            <li>Soft base shadow anchors the product.</li>
            <li>Subtle reflections help with glass/metal.</li>
            <li>Warm = lifestyle, neutral = studio.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>High contrast fits sports/bold brands.</li>
          <li>Soft light fits beauty/luxury.</li>
        </ul>
      ),
    },
    {
      id: "text",
      title: "Text, price & CTA",
      body: (
        <>
          <p>One headline + 2–3 bullets + one CTA. Keep copy short and benefit-focused.</p>
          <ul>
            <li>Headline explains value fast.</li>
            <li>Bullets: short & scannable.</li>
            <li>CTA: “Buy now”, “Get yours”, or “Shop today”.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>Save long specs for the product page.</li>
          <li>Use strong contrast (no mid-gray on mid-gray).</li>
        </ul>
      ),
    },
    {
      id: "categories",
      title: "Category playbooks (what works best)",
      body: (
        <>
          <p>Different products shine with different looks. Use these quick playbooks:</p>
          <ul>
            <li>
              <b>Perfume / Beauty:</b> soft gradients, glass reflections, warm glow,
              fabric/leather backgrounds.
            </li>
            <li>
              <b>Fashion:</b> studio sweep, minimal shadows, neutral backgrounds; keep logo/price
              small.
            </li>
            <li>
              <b>Jewelry:</b> dark premium backgrounds, specular highlights, macro feel, tiny
              elegant text.
            </li>
            <li>
              <b>Home / Decor:</b> bright daylight, airy space, wood/stone textures, friendly
              headline.
            </li>
            <li>
              <b>Electronics:</b> clean lines, cool tones, rim light, reflections; bold but minimal
              text.
            </li>
            <li>
              <b>Shoes / Sport:</b> punchy contrast, motion shadows, angled product, energetic CTA.
            </li>
            <li>
              <b>Food:</b> warm light, fresh colors, shallow depth, clean props; avoid heavy text
              on image.
            </li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>If unsure, start with studio + soft shadow + one CTA. Then iterate.</li>
          <li>Match color accents to brand or product details (cap, strap, label).</li>
        </ul>
      ),
    },
    {
      id: "mistakes",
      title: "Common seller mistakes (and quick fixes)",
      body: (
        <>
          <ul>
            <li>
              <b>Too much text on image.</b> Fix: one headline + 2 bullets + one CTA.
            </li>
            <li>
              <b>Busy backgrounds.</b> Fix: studio, wood, stone, fabric—keep it calm.
            </li>
            <li>
              <b>Tiny product.</b> Fix: make it big enough to read on mobile.
            </li>
            <li>
              <b>No clear focal point.</b> Fix: one hero angle, no clutter.
            </li>
            <li>
              <b>Harsh fake shadows.</b> Fix: soft, blurred base shadow under product.
            </li>
            <li>
              <b>Low contrast text.</b> Fix: light on dark, or dark on light. Avoid mid-gray.
            </li>
            <li>
              <b>Random fonts/colors.</b> Fix: one font family, 1–2 brand colors.
            </li>
            <li>
              <b>Wrong aspect ratio.</b> Fix: 1:1 posts, 9:16 stories/reels, 16:9 YouTube.
            </li>
            <li>
              <b>Ignoring platform rules.</b> Fix: keep a clean no-text version if needed.
            </li>
            <li>
              <b>Overuse of effects.</b> Fix: subtle glow/reflection is enough.
            </li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>Export multiple crops for each platform from the same master design.</li>
          <li>Test variations—small changes in headline/CTA can raise CTR a lot.</li>
        </ul>
      ),
    },
    {
      id: "platforms",
      title: "Platform rules (Amazon basics)",
      body: (
        <>
          <p>
            Social ads allow creative text and stylish scenes. Amazon main images are stricter:
            usually white background and no extra graphics/text.
          </p>
          <ul>
            <li>Instagram/TikTok: creative layouts allowed.</li>
            <li>YouTube: 16:9 bold thumbnails.</li>
            <li>Amazon main: pure white, product only, no badges.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>Keep a clean, text-free version ready.</li>
          <li>Use styled slides for ads, clean versions for listings.</li>
        </ul>
      ),
    },
  ];
}

/* ---------------- Slides (FA) ---------------- */

function slidesFA(): Slide[] {
  return [
    {
      id: "hook-fa",
      title: "چه چیزی باعث می‌شود یک عکس تبلیغاتی بفروشد؟",
      body: (
        <>
          <p>
            تبلیغ خوب ساده است: محصول واضح، پس‌زمینه تمیز، نور طبیعی و فقط یک پیام قوی.
          </p>
          <ul>
            <li>محصول را درشت و واضح نشان بده (مخصوصاً برای موبایل).</li>
            <li>
              از پس‌زمینه‌هایی استفاده کن که حال‌وهوا را منتقل می‌کنند (استودیو، سنگ، چوب،
              پارچه، طبیعت، چرم).
            </li>
            <li>سایه‌ها را نرم و طبیعی نگه دار.</li>
            <li>فقط یک پیام اصلی + یک کال‌توی‌اکشن (CTA).</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>نسبت ۱:۱ برای پست‌ها، ۹:۱۶ برای استوری و ریل.</li>
          <li>رنگ برند را روی دکمه‌ها و بج‌ها بگذار، نه روی کل تصویر.</li>
        </ul>
      ),
    },
    {
      id: "composition-fa",
      title: "کادر بندی و ترکیب‌بندی",
      body: (
        <>
          <p>
            محصول را یا وسط کادر بگذار یا روی گرید تنظیم کن. کمی فضای خالی بده؛ اجزای مهم را قطع
            نکن.
          </p>
          <ul>
            <li>
              اگر مطمئن نیستی از حالت <b>contain</b> استفاده کن.
            </li>
            <li>فقط یک نقطهٔ اصلی توجه داشته باش.</li>
            <li>متن باید روی موبایل خوانا باشد.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>بج‌های کوچک را نزدیک گوشه‌ها بگذار، نه روی جزئیات مهم محصول.</li>
          <li>CTA معمولاً پایین بخش متن بهترین عملکرد را دارد.</li>
        </ul>
      ),
    },
    {
      id: "backgrounds-fa",
      title: "پس‌زمینه‌های مؤثر",
      body: (
        <>
          <p>
            پس‌زمینه‌ای انتخاب کن که داستان بگوید. تکسچر ظریف و عمق نرم، ظاهر کار را حرفه‌ای و
            پرمیوم می‌کند.
          </p>
          <ul>
            <li>استودیو: تمیز و مدرن.</li>
            <li>سنگ/چوب: محکم و لاکچری.</li>
            <li>چرم/پارچه: لوکس و نرم.</li>
            <li>طبیعت: حس تازگی و هوا.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>از طرح‌های شلوغ و شطرنجی دوری کن.</li>
          <li>روشنی پس‌زمینه را با رنگ محصول هماهنگ کن.</li>
        </ul>
      ),
    },
    {
      id: "light-fa",
      title: "نور و سایه",
      body: (
        <>
          <p>نور طبیعی همیشه فروشنده است. یک منبع نور اصلی + یک نور نرم کمکی حس واقعی می‌دهد.</p>
          <ul>
            <li>یک سایهٔ نرم زیر محصول، آن را روی زمین می‌نشاند.</li>
            <li>بازتاب‌های ظریف برای شیشه و فلز فوق‌العاده‌اند.</li>
            <li>نور گرم = سبک لایف‌استایل، نور خنثی = استودیو.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>کنتراست بالا برای برندهای اسپرت و جسور مناسب است.</li>
          <li>نور نرم برای محصولات بیوتی و لوکس بهتر جواب می‌دهد.</li>
        </ul>
      ),
    },
    {
      id: "text-fa",
      title: "متن، قیمت و CTA",
      body: (
        <>
          <p>
            یک تیتر، ۲–۳ بولت کوتاه و یک CTA کافی است. متن را کوتاه و بر پایهٔ «مزیت برای
            مشتری» بنویس.
          </p>
          <ul>
            <li>تیتر باید سریع ارزش محصول را توضیح بدهد.</li>
            <li>بولت‌ها کوتاه و قابل اسکن باشند.</li>
            <li>CTA: «همین حالا بخر»، «همین امروز سفارش بده»، «الان خرید کن» و…</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>مشخصات طولانی را برای صفحهٔ محصول نگه دار.</li>
          <li>کنتراست قوی استفاده کن (نه خاکستری روی خاکستری).</li>
        </ul>
      ),
    },
    {
      id: "categories-fa",
      title: "پلی‌بک دسته‌بندی‌ها (چه چیزی بهتر جواب می‌دهد؟)",
      body: (
        <>
          <p>هر نوع محصول با یک سبک تصویر بهتر می‌درخشد. چند مثال سریع:</p>
          <ul>
            <li>
              <b>عطر / بیوتی:</b> گرادیانت نرم، بازتاب شیشه، نور گرم، پس‌زمینهٔ پارچه/چرم.
            </li>
            <li>
              <b>فشن:</b> بک‌گراند استودیویی تمیز، سایهٔ کم، رنگ‌های خنثی؛ لوگو/قیمت کوچک.
            </li>
            <li>
              <b>طلا و جواهر:</b> پس‌زمینهٔ تیرهٔ پرمیوم، هایلایت قوی، حس ماکرو، متن ظریف و
              کوچک.
            </li>
            <li>
              <b>خانه و دکور:</b> نور روز روشن، فضای هوادار، تکسچر چوب/سنگ، تیتر دوستانه.
            </li>
            <li>
              <b>الکترونیک:</b> خطوط تمیز، تن‌های سرد، نور حاشیه‌ای، کمی بازتاب؛ متن بولد ولی
              مینیمال.
            </li>
            <li>
              <b>کفش / اسپرت:</b> کنتراست قوی، سایه‌های دینامیک، زاویهٔ جسورانه، CTA پرانرژی.
            </li>
            <li>
              <b>غذا:</b> نور گرم، رنگ‌های تازه، عمق میدان کم، ظرف و پس‌زمینهٔ تمیز؛ متن زیاد
              روی عکس نگذار.
            </li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>اگر مطمئن نیستی، با استودیو + سایهٔ نرم + یک CTA شروع کن و تست کن.</li>
          <li>رنگ‌های تأکیدی را با جزئیات محصول هماهنگ کن (درپوش، بند، لیبل و…).</li>
        </ul>
      ),
    },
    {
      id: "mistakes-fa",
      title: "اشتباهات رایج فروشنده‌ها (و راه‌حل سریع)",
      body: (
        <>
          <ul>
            <li>
              <b>متن خیلی زیاد روی تصویر.</b> راه‌حل: یک تیتر + ۲ بولت + یک CTA.
            </li>
            <li>
              <b>پس‌زمینهٔ شلوغ.</b> راه‌حل: استودیو، چوب، سنگ، پارچه — تمیز و ساده.
            </li>
            <li>
              <b>محصول خیلی ریز.</b> راه‌حل: روی موبایل باید واضح دیده شود.
            </li>
            <li>
              <b>فوکوس نامشخص.</b> راه‌حل: یک زاویهٔ اصلی، بدون شلوغی اضافی.
            </li>
            <li>
              <b>سایه‌های خیلی مصنوعی.</b> راه‌حل: سایهٔ نرم و بلور زیر محصول.
            </li>
            <li>
              <b>کنتراست کم بین متن و بک‌گراند.</b> راه‌حل: روشن روی تیره یا تیره روی روشن.
            </li>
            <li>
              <b>فونت‌ها/رنگ‌های تصادفی.</b> راه‌حل: یک خانواده فونت، ۱–۲ رنگ برند.
            </li>
            <li>
              <b>نسبت تصویر اشتباه.</b> راه‌حل: ۱:۱ پست، ۹:۱۶ استوری/ریل، ۱۶:۹ یوتیوب.
            </li>
            <li>
              <b>بی‌توجهی به قوانین پلتفرم.</b> راه‌حل: همیشه یک نسخهٔ بدون متن نگه دار.</li>
            <li>
              <b>افکت‌های بیش از حد.</b> راه‌حل: درخشش و بازتاب خیلی ملایم کافی است.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>از یک طرح اصلی، چند کراپ مخصوص هر پلتفرم خروجی بگیر.</li>
          <li>تیتر و CTA های مختلف را تست کن؛ تفاوت کوچک می‌تواند CTR را بالا ببرد.</li>
        </ul>
      ),
    },
    {
      id: "platforms-fa",
      title: "قوانین پلتفرم‌ها (اصول پایه آمازون)",
      body: (
        <>
          <p>
            در شبکه‌های اجتماعی آزادی خلاقیت بیشتری داری؛ متن و گرافیک روی عکس مجاز است. اما در
            تصویر اصلی آمازون، قوانین سخت‌تر است: پس‌زمینه کاملاً سفید و بدون گرافیک/نوشته
            اضافی.
          </p>
          <ul>
            <li>اینستاگرام / تیک‌تاک: چیدمان خلاق و متن‌دار معمولاً قابل قبول است.</li>
            <li>یوتیوب: تامبنیل ۱۶:۹ بولد و توجه‌گیر.</li>
            <li>تصویر اصلی آمازون: پس‌زمینه سفید خالص، فقط محصول، بدون بج و استیکر.</li>
          </ul>
        </>
      ),
      tips: (
        <ul>
          <li>همیشه یک نسخهٔ تمیز و بدون متن از محصول آماده داشته باش.</li>
          <li>اسلایدهای استایل‌دار را برای تبلیغات استفاده کن، نسخهٔ تمیز را برای صفحه محصول.</li>
        </ul>
      ),
    },
  ];
}
