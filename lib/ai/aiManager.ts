// lib/ai/aiManager.ts
import { AI_MODELS, AIModelConfig } from "./aiConfig";

export type AIType = "text" | "image" | "video" | "remove_bg";

class AIManager {
  private usage: Record<string, number> = {};
  private dollarUsed = 0;

  constructor() {}

  // ------------------------------
  // پیدا کردن مدل‌های فعال بر اساس نوع
  // ------------------------------

  private getEnabledModels(type: AIType): AIModelConfig[] {
    return AI_MODELS.filter(
      (m) => m.enabled === true && m.type === type && m.remainingCredits > 0
    ).sort((a, b) => a.priority - b.priority);
  }

  // ------------------------------
  // انتخاب بهترین مدل
  // (طبق اولویت + مصرف + وضعیت شارژ)
  // ------------------------------

  private pickModel(type: AIType): AIModelConfig {
    const list = this.getEnabledModels(type);

    if (list.length === 0) {
      throw new Error(`❌ هیچ مدل فعالی برای نوع "${type}" یافت نشد.`);
    }

    const chosen = list[0]; // بهترین گزینه طبق priority

    // ثبت مصرف
    this.usage[chosen.name] = (this.usage[chosen.name] || 0) + 1;

    // کاهش کرِدیت Fake
    chosen.remainingCredits -= 1;

    // ثبت هزینه‌ دلاری (فعلاً فیک)
    this.dollarUsed += 0.02;

    return chosen;
  }

  // ------------------------------
  // خروجی برای سرویس‌های مختلف
  // ------------------------------

  getModelName(type: AIType): string {
    return this.pickModel(type).name;
  }

  // ------------------------------
  // گزارش مصرف مدل‌ها
  // ------------------------------

  getUsageReport() {
    return {
      usage: this.usage,
      dollar_used: this.dollarUsed.toFixed(2),
      models: AI_MODELS.map((m) => ({
        name: m.name,
        credits: m.remainingCredits,
        priority: m.priority,
      }))
    };
  }

  // ------------------------------
  // چک کردن بودجه
  // ------------------------------

  checkBudget(limit: number): string {
    if (this.dollarUsed >= limit) {
      return `⚠️ هشدار: بودجه در خطر تمام شدن است (مصرف: $${this.dollarUsed.toFixed(
        2
      )})`;
    }
    return "✔ بودجه در وضعیت امن است.";
  }
}

export const aiManager = new AIManager();
