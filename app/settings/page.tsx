"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "../../lib/lang";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscription] = useState("Basic");
  const [language, setLanguage] = useState("English");

  const { messages } = useLang();
  const t = messages.settings;

  const languages = [
    "Afrikaans","Albanian","Amharic","Arabic","Armenian","Azerbaijani",
    "Basque","Belarusian","Bengali","Bosnian","Bulgarian","Catalan",
    "Cebuano","Chichewa","Chinese (Simplified)","Chinese (Traditional)","Corsican",
    "Croatian","Czech","Danish","Dutch","English","Esperanto",
    "Estonian","Filipino","Finnish","French","Frisian","Galician",
    "Georgian","German","Greek","Gujarati","Haitian Creole","Hausa",
    "Hawaiian","Hebrew","Hindi","Hmong","Hungarian","Icelandic",
    "Igbo","Indonesian","Irish","Italian","Japanese","Javanese",
    "Kannada","Kazakh","Khmer","Korean","Kurdish","Kyrgyz",
    "Lao","Latin","Latvian","Lithuanian","Luxembourgish","Macedonian",
    "Malagasy","Malay","Malayalam","Maltese","Maori","Marathi",
    "Mongolian","Myanmar (Burmese)","Nepali","Norwegian","Pashto","Persian",
    "Polish","Portuguese","Punjabi","Romanian","Russian","Samoan",
    "Scots Gaelic","Serbian","Sesotho","Shona","Sindhi","Sinhala",
    "Slovak","Slovenian","Somali","Spanish","Sundanese","Swahili",
    "Swedish","Tajik","Tamil","Telugu","Thai","Turkish",
    "Ukrainian","Urdu","Uzbek","Vietnamese","Welsh","Xhosa",
    "Yiddish","Yoruba","Zulu"
  ];

  const saveSettings = () => {
    alert(
      `${t.saveAlertTitle}\n` +
      `${t.saveAlertNameLabel}: ${name || "-"}\n` +
      `${t.saveAlertEmailLabel}: ${email || "-"}\n` +
      `${t.saveAlertLanguageLabel}: ${language}`
    );
  };

  const goSupport = () => {
    // میره مستقیم به صفحه Support و پایین صفحه روی باکس چت
    window.location.href = "/support#chat-section";
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <Image src="/logo.png" alt="Sellova Logo" width={250} height={150} />
      </header>

      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#4a90e2",
          fontSize: "28px",
        }}
      >
        {t.title}
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        <div style={{ flex: 1, minWidth: "250px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {t.fullNameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.fullNamePlaceholder}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {t.emailLabel}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {t.passwordLabel}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.passwordPlaceholder}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {t.subscriptionLabel}
            </label>
            <input
              type="text"
              value={subscription}
              readOnly
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                backgroundColor: "#f0f0f0",
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "250px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {t.languageLabel}
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                width: "80%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              {languages.map((lang, idx) => (
                <option key={idx} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <button
          onClick={saveSettings}
          style={{
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#4a90e2",
            color: "#fff",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {t.saveButton}
        </button>
        <button
          onClick={goSupport}
          style={{
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#f39c12",
            color: "#fff",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {t.supportButton}
        </button>
      </div>
    </div>
  );
}