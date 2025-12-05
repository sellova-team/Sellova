// lib/ai/advisor.ts

import { analyticsEngine } from "./analytics";
import { budgetEngine } from "./budget";
import { monitorEngine } from "./monitor";

export type AdviceItem = {
  category: "users" | "models" | "system";
  severity: "normal" | "warning" | "critical";
  message: string;
  action?: string;
};

export class AdvisorEngine {
  constructor() {}

  getAdvice(): AdviceItem[] {
    const analytics = analyticsEngine.getReport();
    const budget = budgetEngine.getBudgetReport();
    const system = monitorEngine.getSystemHealth();

    const results: AdviceItem[] = [];

    // Users
    if (analytics.total > 50 && analytics.video > analytics.image) {
      results.push({
        category: "users",
        severity: "normal",
        message: "Video generation usage is increasing.",
        action: "Allocate more GPU/credits to video AIs."
      });
    }

    if (analytics.avatar > 20) {
      results.push({
        category: "users",
        severity: "normal",
        message: "Avatar Studio usage is rising.",
        action: "Increase avatar model capacity or add a backup AI."
      });
    }

    // Models
    for (const model of budget) {
      if (model.remaining <= model.thresholdCritical) {
        results.push({
          category: "models",
          severity: "critical",
          message: `Model "${model.name}" is almost out of credits.`,
          action: "Recharge immediately."
        });
      } else if (model.remaining <= model.thresholdWarning) {
        results.push({
          category: "models",
          severity: "warning",
          message: `Model "${model.name}" credits getting low.`,
          action: "Recharge soon."
        });
      }
    }

    // System
    if (system.status !== "OK") {
      results.push({
        category: "system",
        severity: "critical",
        message: "System health degraded.",
        action: "Check server/API health."
      });
    }

    if (system.latency > 1500) {
      results.push({
        category: "system",
        severity: "warning",
        message: "High latency detected.",
        action: "Reduce load or upgrade server."
      });
    }

    if (system.errorRate > 5) {
      results.push({
        category: "system",
        severity: "warning",
        message: "Error rate increasing.",
        action: "Check AI provider responses."
      });
    }

    if (results.length === 0) {
      results.push({
        category: "system",
        severity: "normal",
        message: "Everything stable.",
        action: "No action needed."
      });
    }

    return results;
  }
}

export const advisorEngine = new AdvisorEngine();
