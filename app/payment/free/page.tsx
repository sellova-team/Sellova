'use client';

import { useRouter } from 'next/navigation';

export default function FreePaymentPage() {
  const router = useRouter();

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>پلن رایگان Sellova</h1>

      <p>۳۰ کردیت</p>
      <p>رایگان</p>

      <p>
        ❌ شامل ویدیو آواتار نمی‌شود
      </p>

      <button onClick={() => router.push('/')}>
        بازگشت
      </button>
    </div>
  );
}
