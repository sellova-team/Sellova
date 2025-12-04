import { AI_MODELS } from "./aiConfig";
import { sendEmail } from "../email";

export type AIType = "image" | "video" | "remove_bg";

class AIManager {
  private usage: Record<string, number> = {};
  private lastReportDate: string = "";

  constructor() {}

  // انتخاب مدل با کمترین مصرف
  pickModel(type: AIType): string {
    const models = AI_MODELS.filter((m) => m.enabled);

    // مرتب‌سازی بر اساس priority
    const sorted = models.sort((a, b) => a.priority - b.priority);

    // کمترین مصرف
    let best = sorted[0].name;
    let minUse = this.usage[best] || 0;

    for (const model of sorted) {
      const use = this.usage[model.name] || 0;
      if (use < minUse) {
        best = model.name;
        minUse = use;
      }
    }

    this.usage[best] = (this.usage[best] || 0) + 1;

    return best;
  }

  // ثبت مصرف مدل‌ها
  recordUsage(model: string) {
    this.usage[model] = (this.usage[model] || 0) + 1;
  }

  // گزارش هفتگی
  async weeklyReport() {
    const today = new Date().toISOString().split("T")[0];

    if (this.lastReportDate === today) return;
    this.lastReportDate = today;

    const html = `
      <h2>Sellova AI - Weekly Report</h2>
      <p>درخواست‌های این هفته:</p>
      <ul>
        ${Object.entries(this.usage)
          .map(([m, count]) => `<li>${m}: ${count} درخواست</li>`)
          .join("")}
      </ul>

      <h3>پیشنهادهای مدیریتی هوشمند:</h3>
      <p>
        ${
          this.usage["kaling"] > 200
            ? "🔥 مدل Kaling فشار زیادی دارد. بهتره پلنش ارتقا پیدا کند."
            : "👌 همه مدل‌ها در وضعیت پایدار هستند."
        }
      </p>

      <p>Sellova AI Manager</p>
    `;

    await sendEmail(
      process.env.ADMIN_TARGET_EMAIL!,
      "Weekly Sellova AI Report",
      html
    );
  }

  // هشدار زمانی که مدل رو به پایان است
  async alertLowCredits(modelName: string, credits: number) {
    if (credits > 20) return;

    await sendEmail(
      process.env.ADMIN_TARGET_EMAIL!,
      `⚠️ Sellova Alert: ${modelName} low credits`,
      `<p>مدل <b>${modelName}</b> فقط ${credits} کردیت باقی مانده دارد.</p>`
    );
  }
}

export const aiManager = new AIManager();
