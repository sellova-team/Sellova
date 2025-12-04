// lib/ai/budget.ts

import { sendAlertEmail } from "../email";

class BudgetEngine {
  private modelBudget: Record<string, number> = {
    "openai-text": 20,
    "openai-image": 25,
    "gemini-text": 999,
    "gemini-image": 999,
    "kaling": 15,
    "pika": 20,
    "luma": 30,
    "runway": 25,
  };

  use(model: string, cost: number) {
    if (!this.modelBudget[model]) return;

    this.modelBudget[model] -= cost;

    if (this.modelBudget[model] < 3) {
      sendAlertEmail(
        `⚠️ هشدار: شارژ مدل ${model} رو به اتمام است!`,
        `تنها ${this.modelBudget[model]} دلار باقی مانده است.`
      );
    }
  }

  getBudgetReport() {
    return this.modelBudget;
  }
}

export const budgetEngine = new BudgetEngine();
