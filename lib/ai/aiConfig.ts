// lib/ai/aiConfig.ts

// ------------------------------
// نوع‌های مدل
// ------------------------------

export type AIModelName =
  | "kaling"
  | "pika"
  | "runway"
  | "luma"
  | "openai-image"
  | "openai-video"
  | "gemini-image"
  | "gemini-video"
  | "stability"
  | "clipdrop-bg";

// ------------------------------
// تعریف ساختار مدل
// ------------------------------

export type AIModelConfig = {
  name: AIModelName;
  displayName: string;
  enabled: boolean; // فعال / غیرفعال
  maxDailyRequests: number; // سقف روزانه
  priority: number; // عدد کمتر = مهم‌تر
  remainingCredits: number; // کرِدیت باقی‌مانده
  type: "image" | "video" | "text" | "remove-bg"; // نوع عملکرد
};

// ------------------------------
// لیست مدل‌های موجود (فعلاً فیک)
// بعداً به API واقعی وصل می‌کنیم
// ------------------------------

export const AI_MODELS: AIModelConfig[] = [
  {
    name: "kaling",
    displayName: "Kaling AI",
    enabled: true,
    maxDailyRequests: 200,
    priority: 1,
    remainingCredits: 99999,
    type: "video"
  },
  {
    name: "pika",
    displayName: "Pika Labs",
    enabled: true,
    maxDailyRequests: 200,
    priority: 2,
    remainingCredits: 99999,
    type: "video"
  },
  {
    name: "runway",
    displayName: "Runway ML",
    enabled: true,
    maxDailyRequests: 200,
    priority: 3,
    remainingCredits: 99999,
    type: "video"
  },
  {
    name: "luma",
    displayName: "Luma Dream Machine",
    enabled: true,
    maxDailyRequests: 200,
    priority: 4,
    remainingCredits: 99999,
    type: "video"
  },
  {
    name: "openai-image",
    displayName: "OpenAI (Images)",
    enabled: true,
    maxDailyRequests: 200,
    priority: 5,
    remainingCredits: 99999,
    type: "image"
  },
  {
    name: "openai-video",
    displayName: "OpenAI (Videos)",
    enabled: true,
    maxDailyRequests: 200,
    priority: 6,
    remainingCredits: 99999,
    type: "video"
  },
  {
    name: "gemini-image",
    displayName: "Gemini (Image)",
    enabled: true,
    maxDailyRequests: 200,
    priority: 7,
    remainingCredits: 99999,
    type: "image"
  },
  {
    name: "gemini-video",
    displayName: "Gemini (Video)",
    enabled: true,
    maxDailyRequests: 200,
    priority: 8,
    remainingCredits: 99999,
    type: "video"
  },
  {
    name: "stability",
    displayName: "Stability AI",
    enabled: true,
    maxDailyRequests: 200,
    priority: 9,
    remainingCredits: 99999,
    type: "image"
  },
  {
    name: "clipdrop-bg",
    displayName: "ClipDrop Background Remover",
    enabled: true,
    maxDailyRequests: 500,
    priority: 1,
    remainingCredits: 99999,
    type: "remove-bg"
  }
];
