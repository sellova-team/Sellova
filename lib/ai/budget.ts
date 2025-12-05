// lib/ai/budget.ts

export type ModelBudget = {
  name: string;
  remaining: number;
  thresholdWarning: number;
  thresholdCritical: number;
};

export class BudgetEngine {
  constructor() {}

  getBudgetReport(): ModelBudget[] {
    return [
      {
        name: "openai-image",
        remaining: 85,
        thresholdWarning: 40,
        thresholdCritical: 15,
      },
      {
        name: "gemini-video",
        remaining: 22,
        thresholdWarning: 30,
        thresholdCritical: 10,
      },
      {
        name: "stability-image",
        remaining: 12,
        thresholdWarning: 25,
        thresholdCritical: 10,
      },
    ];
  }
}

export const budgetEngine = new BudgetEngine();
