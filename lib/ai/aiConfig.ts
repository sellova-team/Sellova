export type AIModelName =
  | "kaling"
  | "pika"
  | "runway"
  | "luma"
  | "openai-image"
  | "openai-video";

export type AIModelConfig = {
  name: AIModelName;
  displayName: string;
  enabled: boolean; // فعال/غیرفعال بودن
  maxDailyRequests: number; // محدودیت روزانه
  priority: number; // اولویت انتخاب (کمتر = مهم‌تر)
  remainingCredits: number; // کرِدیت باقی‌مانده برای مدل
};

// ------------------------------
// لیست مدل‌ها
// (فعلاً همه Fake هستند تا زمان خرید پلن)
// ------------------------------

export const AI_MODELS: AIModelConfig[] = [
  {
    name: "kaling",
    displayName: "Kaling AI",
    enabled: true,
    maxDailyRequests: 200,
    priority: 1,
    remainingCredits: 99999 // فعلاً بی‌نهایت
  },
  {
    name: "pika",
    displayName: "Pika Labs",
    enabled: true,
    maxDailyRequests: 200,
    priority: 2,
    remainingCredits: 99999
  },
  {
    name: "runway",
    displayName: "Runway ML",
    enabled: true,
    maxDailyRequests: 200,
    priority: 3,
    remainingCredits: 99999
  },
  {
    name: "luma",
    displayName: "Luma Dream Machine",
    enabled: true,
    maxDailyRequests: 200,
    priority: 4,
    remainingCredits: 99999
  },
  {
    name: "openai-image",
    displayName: "OpenAI (Image)",
    enabled: true,
    maxDailyRequests: 200,
    priority: 5,
    remainingCredits: 99999
  },
  {
    name: "openai-video",
    displayName: "OpenAI (Video)",
    enabled: true,
    maxDailyRequests: 200,
    priority: 6,
    remainingCredits: 99999
  }
];
