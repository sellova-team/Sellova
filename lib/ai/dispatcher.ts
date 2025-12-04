// lib/ai/dispatcher.ts
import { aiManager } from "./aiManager";
import { analyticsEngine} from "./analytics";

type RequestPayload = {
  type: "text" | "image" | "video" | "remove_bg";
  prompt?: string;
  imageBase64?: string;
};

class AIDispatcher {
  constructor() {}

  async process(payload: RequestPayload) {
    // مرحله 1: انتخاب مدل مناسب
    analyticsEngine.track(payload.type);
    const model = aiManager.getModel(payload.type);
    console.log("🔧 مدل انتخاب‌شده:", model);

    // مرحله 2: ارسال درخواست به مدل
    const result = await this.callModel(model, payload);

    // مرحله 3: برگرداندن نتیجه
    return {
      model,
      result,
    };
  }

  private async callModel(model: string, payload: RequestPayload) {
    // فعلاً فقط شبیه‌سازی می‌کنیم
    // بعداً API واقعی OpenAI, Gemini, Pika, Runway, Luma, Kaling رو اضافه می‌کنیم

    switch (model) {
      case "openai-text":
        return `📘 متن تولید شد: ${payload.prompt}`;

      case "gemini-text":
        return `🔮 Gemini متن ساخت: ${payload.prompt}`;

      case "openai-image":
        return `🖼️ تصویر ساخته شد (OpenAI) برای: ${payload.prompt}`;

      case "gemini-image":
        return `🖼️ تصویر ساخته شد (Gemini) برای: ${payload.prompt}`;

      case "kaling":
      case "pika":
      case "luma":
      case "runway":
        return `🎥 ویدیو ساخته شد (${model}) برای: ${payload.prompt}`;

      default:
        return "❌ مدل ناشناس";
    }
  }
}

export const aiDispatcher = new AIDispatcher();