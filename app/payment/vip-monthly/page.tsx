'use client';

import { useRouter } from 'next/navigation';

export default function VipPaymentPage() {
  const router = useRouter();

  const handlePay = () => {
    alert('پرداخت پلن VIP ماهانه');
  };

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>پرداخت پلن VIP ماهانه</h1>

      <p>۵۰۰ کردیت</p>
      <p>قیمت: ۱٬۳۰۰٬۰۰۰ تومان</p>

      <p>
        ❌ ویدیو آواتار با کردیت فعال نیست <br />
        🎁 هدیه: ۲ ویدیو ۱۰ ثانیه‌ای یا ۴ ویدیو ۵ ثانیه‌ای
      </p>

      <button onClick={handlePay}>
        پرداخت
      </button>
    </div>
  );
}
