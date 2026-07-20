"use client";

import { useLang } from "../../lib/lang";
import Image from "next/image";
import { useState } from "react";

export default function GoldenPlan() {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [musicCount, setMusicCount] = useState("1");
  const [language, setLanguage] = useState("English");
  const [platform, setPlatform] = useState("Instagram");
  const { locale,messages } = useLang();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07111f",
        color: "white",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <Image
            src="/logo.png"
            alt="Sellova"
            width={180}
            height={180}
          />

          <h1
            style={{
              fontSize: "38px",
              fontWeight: 800,
            }}
          >
           {messages.goldenPlan.title}
          </h1>

          <p>
            {messages.goldenPlan.subtitle}
          </p>
        </div>

        <div
          style={{
            background: "#111c2f",
            padding: 25,
            borderRadius: 15,
            marginBottom: 20,
          }}
        >
          <h3>{messages.goldenPlan.uploadProduct} </h3>

          <input type="file" />

          <br />
          <br />

          <input
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
            }}
          />
        </div>

        <div
          style={{
            background: "#111c2f",
            padding: 25,
            borderRadius: 15,
            marginBottom: 20,
          }}
        >
          <h3>{messages.goldenPlan.uploadLogo}</h3>

          <input type="file" />

          <br />
          <br />

          <input
            placeholder="Brand Name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
            }}
          />
        </div>

        <div
          style={{
            background: "#111c2f",
            padding: 25,
            borderRadius: 15,
            marginBottom: 20,
          }}
        >
          <h3>{messages.goldenPlan.musicLanguage}</h3>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
            }}
          >
            <option>English</option>
            <option>Turkish</option>
            <option>Arabic</option>
            <option>Persian</option>
            <option>Urdu</option>
            <option>Armenian</option>
          </select>

          <br />
          <br />

          <h3>
            {messages.goldenPlan.musicLanguage}
          </h3>

          <select
            value={musicCount}
            onChange={(e) => setMusicCount(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
            }}
          >
            <option value="1">
              1 Music Video - 300 Credits
            </option>

            <option value="2">
              2 Music Videos - 600 Credits
            </option>
          </select>
        </div>

        <div
          style={{
            background: "#111c2f",
            padding: 25,
            borderRadius: 15,
            marginBottom: 20,
          }}
        >
          <h3>{messages.goldenPlan.outputSize}</h3>

          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
            }}
          >
            <option>Instagram Post</option>
            <option>Instagram Story</option>
            <option>TikTok</option>
            <option>YouTube</option>
            <option>Facebook</option>
          </select>
        </div>

        <div
          style={{
            background: "#111c2f",
            padding: 25,
            borderRadius: 15,
            marginBottom: 20,
          }}
        >
          <h3>{messages.goldenPlan.specialInstructions}</h3>

          <textarea
            placeholder="Describe your dream cinematic commercial..."
            rows={6}
            style={{
              width: "100%",
              padding: 15,
            }}
          />
        </div>

        <div
          style={{
            background: "#111c2f",
            padding: 25,
            borderRadius: 15,
            textAlign: "center",
          }}
        >
          <h3>{messages.goldenPlan.generatedVideo}</h3>

          <div
            style={{
              height: 350,
              border: "2px dashed #555",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            {messages.goldenPlan.preview}
          </div>

          <button
            style={{
              background: "#f4b400",
              color: "#000",
              padding: "15px 30px",
              borderRadius: 10,
              fontWeight: 700,
              border: "none",
            }}
          >
            {messages.goldenPlan.generateButton}
          </button>
        </div>
      </div>
    </div>
  );
}

