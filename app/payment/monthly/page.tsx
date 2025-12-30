'use client';

import { useRouter } from 'next/navigation';

export default function MonthlyPaymentPage() {
  const router = useRouter();

  const handlePay = () => {
    // فعلاً فقط تست
    alert('پرداخت پلن ماهانه (Basic)');
    
    // بعداً اینجا می‌ره به درگاه
  };

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>پرداخت پلن ماهانه</h1>

      <p>۳۵۰ کردیت</p>
      <p>قیمت: ۸۹۰٬۰۰۰ تومان</p>

      <p>
        ❌ ویدیو آواتار با کردیت فعال نیست <br />
        🎁 هدیه: ۱ ویدیو ۱۰ ثانیه‌ای یا ۳ ویدیو ۵ ثانیه‌ای
      </p>

      <button onClick={handlePay}>
        پرداخت
      </button>
    </div>
  );
}
