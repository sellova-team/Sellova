'use client';

import { useRouter } from 'next/navigation';

export default function Avatar5sPaymentPage() {
  const router = useRouter();

  const handlePay = () => {
    alert('پرداخت ویدیو آواتار ۵ ثانیه‌ای');
  };

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>ویدیو آواتار آزاد ۵ ثانیه‌ای</h1>

      <p>بدون مصرف کردیت</p>
      <p>قیمت: ۲۹۰٬۰۰۰ تومان</p>

      <button onClick={handlePay}>
        پرداخت
      </button>
    </div>
  );
}
