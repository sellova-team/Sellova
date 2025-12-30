'use client';

import { useRouter } from 'next/navigation';

export default function FlexiblePaymentPage() {
  const router = useRouter();

  const handlePay = () => {
    alert('پرداخت پلن کردیت آزاد');
  };

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>پلن کردیت آزاد</h1>

      <p>۳۵ کردیت</p>
      <p>قیمت: ۱۷۰٬۰۰۰ تومان</p>

      <p>
        ❌ شامل ویدیو آواتار نمی‌شود
      </p>

      <button onClick={handlePay}>
        پرداخت
      </button>
    </div>
  );
}
