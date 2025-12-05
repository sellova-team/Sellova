// lib/ai/loadBalancer.ts

type ModelCategory = "image" | "video" | "text" | "remove_bg";

const MODEL_GROUPS: Record<ModelCategory, string[]> = {
  image: ["flux", "openai-image", "gemini-image", "stability", "clipdrop"],
  video: ["pika", "luma", "runway", "kling"],
  text: ["openai-text", "gemini-text"],
  remove_bg: ["clipdrop", "stability"],
};

class LoadBalancer {
  pick(category: ModelCategory): string {
    const list = MODEL_GROUPS[category];

    if (!list || list.length === 0) {
      console.warn("⚠️ LoadBalancer: Category not found:", category);
      return "openai-text";
    }

    return list[Math.floor(Math.random() * list.length)];
  }
}

export const loadBalancer = new LoadBalancer();
