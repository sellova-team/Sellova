'use client';

import { useRouter } from 'next/navigation';

export default function Avatar10sPaymentPage() {
  const router = useRouter();

  const handlePay = () => {
    alert('پرداخت ویدیو آواتار ۱۰ ثانیه‌ای');
  };

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>ویدیو آواتار آزاد ۱۰ ثانیه‌ای</h1>

      <p>بدون مصرف کردیت</p>
      <p>قیمت: ۳۹۰٬۰۰۰ تومان</p>

      <button onClick={handlePay}>
        پرداخت
      </button>
    </div>
  );
}
