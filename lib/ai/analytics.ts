// lib/ai/analytics.ts

type UserActionType = "text" | "image" | "video" | "remove_bg";

class AnalyticsEngine {
  private userActions: Record<UserActionType, number> = {
    text: 0,
    image: 0,
    video: 0,
    remove_bg: 0,
  };

  // ثبت رفتار کاربر
  track(type: UserActionType) {
    this.userActions[type] += 1;
  }

  // گزارش درصدی رفتار کاربران
  getUserReport() {
    const total =
      this.userActions.text +
      this.userActions.image +
      this.userActions.video +
      this.userActions.remove_bg;

    if (total === 0) return { message: "هنوز داده‌ای نیست" };

    return {
      total_requests: total,
      usage_percent: {
        text: ((this.userActions.text / total) * 100).toFixed(1) + "%",
        image: ((this.userActions.image / total) * 100).toFixed(1) + "%",
        video: ((this.userActions.video / total) * 100).toFixed(1) + "%",
        remove_bg:
          ((this.userActions.remove_bg / total) * 100).toFixed(1) + "%",
      },
    };
  }
}

export const analyticsEngine = new AnalyticsEngine();
