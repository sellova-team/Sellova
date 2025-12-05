// lib/avatar/sceneEngine.ts

export type PoseType =
  | "standing-model"
  | "standing-relaxed"
  | "hands-on-hips"
  | "looking-side"
  | "fashion-look";

export type SceneType =
  | "instagram-luxury"
  | "amazon-lifestyle"
  | "tiktok-modern"
  | "clean-studio"
  | "outdoor";

export type SceneBlueprint = {
  pose: PoseType;
  cameraAngle: string;
  lighting: string;
  background: string;
  styleKeywords: string[];
};

class SceneEngine {
  generateScene(pose: PoseType, scene: SceneType): SceneBlueprint {
    let cameraAngle = "eye-level";
    let lighting = "soft studio light";
    let background = "clean studio background";
    let styleKeywords: string[] = [];

    // صحنه‌ها
    switch (scene) {
      case "instagram-luxury":
        background = "luxury aesthetic background, soft blur, warm tones";
        lighting = "soft cinematic light";
        styleKeywords = ["luxury", "soft", "aesthetic", "bokeh"];
        break;

      case "amazon-lifestyle":
        background = "realistic home lifestyle set, amazon style";
        lighting = "balanced daylight";
        styleKeywords = ["realistic", "neutral", "amazon style"];
        break;

      case "tiktok-modern":
        background = "modern minimal background with neon accents";
        lighting = "cool tone light";
        styleKeywords = ["modern", "viral", "minimal", "creator style"];
        break;

      case "clean-studio":
        background = "white studio seamless background";
        lighting = "professional softbox lighting";
        styleKeywords = ["studio", "clean", "product focus"];
        break;

      case "outdoor":
        background = "outdoor luxury location, natural light";
        lighting = "sunset golden hour light";
        styleKeywords = ["outdoor", "natural", "golden hour"];
        break;
    }

    // ژست‌ها
    switch (pose) {
      case "standing-model":
        cameraAngle = "3/4 angle, fashion photography";
        styleKeywords.push("model pose", "confident");
        break;
      case "standing-relaxed":
        cameraAngle = "eye-level, natural posture";
        styleKeywords.push("relaxed", "natural");
        break;
      case "hands-on-hips":
        cameraAngle = "low angle, empowering posture";
        styleKeywords.push("strong", "pose #23");
        break;
      case "looking-side":
        cameraAngle = "side-angle, soft profile";
        styleKeywords.push("profile look", "artistic");
        break;
      case "fashion-look":
        cameraAngle = "editorial angle, magazine style";
        styleKeywords.push("editorial", "high-fashion");
        break;
    }

    return {
      pose,
      cameraAngle,
      lighting,
      background,
      styleKeywords,
    };
  }
}

export const sceneEngine = new SceneEngine();
