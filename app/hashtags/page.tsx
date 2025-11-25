"use client";

import Image from "next/image";
import { useLang } from "../../lib/lang";

export default function HashtagsPage() {
  const { messages } = useLang();
  const t = messages.hashtags; // متن‌های این صفحه

  return (
    <div className="page">
      {/* لوگو */}
      <div className="logo">
        <Image src="/logo.png" alt="Sellova Logo" width={300} height={200} />
      </div>

      {/* عنوان */}
      <h1 className="title">{t.title}</h1>

      <div className="container">
        {/* سمت چپ: آپلود + اطلاعات محصول */}
        <div className="card left">
          <div className="preview">
            <span>{t.previewLabel}</span>
          </div>
          <button className="btnUpload">{t.uploadButton}</button>

          <div className="field fieldProduct">
            <label htmlFor="product" className="label">
              {t.productLabel}
            </label>
            <input
              id="product"
              className="input"
              type="text"
              placeholder={t.productPlaceholder}
            />
          </div>

          <div className="field">
            <label htmlFor="platform" className="label">
              {t.platformLabel}
            </label>
            <select id="platform" className="input">
              <option>{t.platformInstagram}</option>
              <option>{t.platformFacebook}</option>
              <option>{t.platformTiktok}</option>
              <option>{t.platformTwitter}</option>
              <option>{t.platformYoutube}</option>
              <option>{t.platformAmazon}</option>
            </select>
          </div>
        </div>

        {/* سمت راست: هشتگ + کپشن */}
        <div className="card right">
          <div className="field">
            <label className="label">{t.suggestedHashtagsLabel}</label>
            <div className="box">{t.noHashtagsText}</div>
            <button className="btn">{t.suggestHashtagsButton}</button>
          </div>

          <div className="field">
            <label className="label">{t.captionLabel}</label>
            <textarea
              className="textarea"
              placeholder={t.captionPlaceholder}
            />
            <button className="btn">{t.suggestCaptionButton}</button>
          </div>

          <button className="btnPrimary">{t.generateAllButton}</button>
        </div>
      </div>

     <style jsx>{`
  .page {
    min-height: 100vh;
    background: #0a1a3f;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .logo {
    margin-bottom: 10px;
  }

  .title {
    color: white;
    font-size: 26px;
    margin-bottom: 30px;
    text-align: center;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1000px;
  }

  .card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    flex: 1;
    min-width: 300px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .preview {
    border: 1px dashed #999;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #666;
  }

  .btnUpload {
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .label {
    font-size: 18px;
    font-weight: 500;
  }

  .input {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  /* کادر product کمی کوتاه‌تر */
  .fieldProduct .input {
    width: calc(100% - 6px);
  }

  .textarea {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 10px;
    font-size: 16px;
    min-height: 160px;
    resize: vertical;
  }

  .box {
    border: 1px dashed #bbb;
    padding: 10px;
    font-size: 14px;
    color: #666;
    min-height: 40px;
  }

  .btn,
  .btnPrimary {
    background: #007bff;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
  }

  .btnPrimary {
    margin-top: 10px;
    padding: 10px;
    font-weight: bold;
  }

  /* ===== فقط موبایل (همه‌چی خیلی بالاتر و جمع‌وجور) ===== */
  @media (max-width: 768px) {
    .page {
      padding: 6px 10px 20px; /* صفحه بیاد بالاتر */
    }

    .logo {
      width: 100px; /* هم‌قد بقیه صفحات */
      height: auto;
      margin-top: -8px; /* بچسبه به بالای صفحه */
      margin-bottom: 2px; /* فاصله خیلی کم تا تایتل */
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .title {
      font-size: 18px; /* کوچیک مثل بقیه */
      margin-top: -4px; /* نزدیک‌تر به لوگو */
      margin-bottom: 14px; /* به فرم نزدیک‌تر */
    }

    .container {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .card {
      width: 100%;
      max-width: 95%;
      padding: 14px;
      border-radius: 10px;
      gap: 10px;
    }

    .preview {
      height: 90px;
      font-size: 14px;
    }

    .label {
      font-size: 14px;
    }

    .input {
      font-size: 13px;
      padding: 7px 8px;
    }

    .textarea {
      font-size: 13px;
      min-height: 120px;
      padding: 8px 9px;
    }

    .btnUpload,
    .btn,
    .btnPrimary {
      font-size: 13px;
      padding: 8px 10px;
    }
  }
`}</style>
    </div>
  );
}
