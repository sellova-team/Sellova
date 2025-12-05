// lib/avatar/orchestrator.ts

import { identityEngine } from "./identityEngine";
import { sceneEngine, PoseType, SceneType } from "./sceneEngine";
import { loadBalancer } from "../../ai/LoadBalancer";   // ← مسیر صحیح

export type AvatarRequest = {
  userId: string;
  faceImageUrl: string;
  pose: PoseType;
  scene: SceneType;
  productImageUrl?: string; // optional
};

export type AvatarResult = {
  modelUsed: string;
  finalPrompt: string;
  imageUrl: string; // output from AI call
};

class AvatarOrchestrator {
  async generateAvatar(req: AvatarRequest): Promise<AvatarResult> {
    // --- مرحله ۱: گرفتن یا ساخت DNA
    let dna = identityEngine.getDNA(req.userId);
    if (!dna) {
      dna = identityEngine.generateDNA(req.userId, req.faceImageUrl);
    }

    // --- مرحله ۲: تعیین صحنه
    const scene = sceneEngine.generateScene(req.pose, req.scene);

    // --- مرحله ۳: انتخاب مدل مناسب
    const model = loadBalancer.pick("image");

    // --- مرحله ۴: ساخت Prompt
    const prompt = `
      High-quality portrait of the same person.
      Keep consistent identity.
      Face DNA hints: ${dna.promptHints.join(", ")}.

      Pose: ${scene.pose}.
      Camera: ${scene.cameraAngle}.
      Lighting: ${scene.lighting}.
      Background: ${scene.background}.

      Style keywords: ${scene.styleKeywords.join(", ")}.

      Skin tone: ${dna.skinTone}.
      Hair style: ${dna.hairStyle}.
      Gender: ${dna.gender}.
      Age: ${dna.age}.

      Modern advertising style, high detail, sharp focus.
      Professional photography.
    `;

    // --- مرحله ۵: تماس فیک با مدل
    const fakeOutput = {
      imageUrl: "https://placehold.co/800x800?text=Avatar+Preview",
    };

    return {
      modelUsed: model,
      finalPrompt: prompt,
      imageUrl: fakeOutput.imageUrl,
    };
  }
}

export const avatarOrchestrator = new AvatarOrchestrator();
