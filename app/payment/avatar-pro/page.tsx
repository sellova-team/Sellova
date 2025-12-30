'use client';

import { useRouter } from 'next/navigation';

export default function AvatarProPaymentPage() {
  const router = useRouter();

  const handlePay = () => {
    alert('پرداخت Avatar Video Pro');
  };

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>Avatar Video Pro</h1>

      <p>۱۶ واحد آواتار</p>
      <p>قیمت: ۳٬۲۰۰٬۰۰۰ تومان</p>

      <p>
        • هر ویدیو ۵ ثانیه‌ای = ۱ واحد <br />
        • هر ویدیو ۱۰ ثانیه‌ای = ۲ واحد
      </p>

      <button onClick={handlePay}>
        پرداخت
      </button>
    </div>
  );
}
