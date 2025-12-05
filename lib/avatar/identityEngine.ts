// lib/avatar/identityEngine.ts

export type DNA = {
  gender: string;
  age: number;
  skinTone: string;
  hairStyle: string;
  promptHints: string[];
};

class IdentityEngine {
  private store: Map<string, DNA> = new Map();

  generateDNA(userId: string, faceImageUrl: string): DNA {
    // 🔮 در آینده اینجا مدل چهره وصل می‌شود (OpenAI Vision / FaceNet / custom)

    const dna: DNA = {
      gender: "female",
      age: 25,
      skinTone: "light",
      hairStyle: "long",
      promptHints: [
        "symmetric face",
        "sharp jawline",
        "natural skin"
      ],
    };

    this.store.set(userId, dna);
    return dna;
  }

  getDNA(userId: string): DNA | null {
    return this.store.get(userId) ?? null;
  }
}

export const identityEngine = new IdentityEngine();
