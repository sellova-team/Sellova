export class AnalyticsEngine {
  private counters = {
    total: 0,
    image: 0,
    video: 0,
    avatar: 0,
    text: 0,
  };

  track(type: string) {
    this.counters.total++;
    if (this.counters[type] !== undefined) {
      this.counters[type]++;
    }
  }

  // ✨ تابعی که Advisor می‌خواهد
  getReport() {
    return this.counters;
  }
}

export const analyticsEngine = new AnalyticsEngine();
