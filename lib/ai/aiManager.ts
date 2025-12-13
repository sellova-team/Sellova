// lib/ai/aiManager.ts

class AIManager {
  getModel(type: "text" | "image" | "video" | "remove_bg") {
    switch (type) {
      case "text":
        return "openai-text";

      case "image":
        return "openai-image";

      case "video":
        return "kaling";

      case "remove_bg":
        return "remove-bg";

      default:
        return "openai-text";
    }
  }
}

export const aiManager = new AIManager();
