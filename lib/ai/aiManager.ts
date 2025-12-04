// lib/ai/aiManager.ts
type AIType = "text" | "image" | "video" | "remove_bg";

// قیمت تقریبی هر مدل (میتونی بعداً دقیقش کنی)
const MODEL_COST = {
  "openai-text": 0.002,
  "openai-image": 0.02,
  "gemini-text": 0.0,
  "gemini-image": 0.0,
  "kaling": 0.015,
  "pika": 0.02,
  "luma": 0.05,
  "runway": 0.03,
};

class AIManager {
  private usageCount: Record<string, number> = {};
  private dollarUsed: number = 0;

  constructor() {}

  private pick(list: string[]): string {
    const selected = list[Math.floor(Math.random() * list.length)];

    // ثبت مصرف
    this.usageCount[selected] = (this.usageCount[selected] || 0) + 1;

    // افزایش مصرف دلار
    this.dollarUsed += MODEL_COST[selected] || 0;

    return selected;
  }

  getModel(type: AIType): string {
    switch (type) {
      case "text":
        return this.pick(["openai-text", "gemini-text"]);

      case "image":
        return this.pick(["openai-image", "gemini-image"]);

      case "video":
        return this.pick(["kaling", "pika", "luma", "runway"]);

      case "remove_bg":
        return this.pick(["kaling", "openai-image"]);
    }
  }

  // گزارش مصرف مدل‌ها
  getUsageReport() {
    return {
      usage: this.usageCount,
      dollar_used: this.dollarUsed.toFixed(2)
    };
  }

  // بررسی دلار
  checkBudget(limit: number) {
    if (this.dollarUsed >= limit) {
      return `⚠️ هشدار: بودجه شما رو به اتمام است! (مصرف: $${this.dollarUsed.toFixed(2)})`;
    }
    return "همه چیز اوکی است.";
  }
}

export const aiManager = new AIManager();
