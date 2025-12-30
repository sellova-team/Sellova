'use client';

import { useRouter } from 'next/navigation';

export default function YearlyPaymentPage() {
  const router = useRouter();

  const handlePay = () => {
    alert('پرداخت پلن سالانه');
  };

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>پرداخت پلن سالانه Sellova</h1>

      <p>۴٬۵۰۰ کردیت</p>
      <p>قیمت: ۶٬۵۰۰٬۰۰۰ تومان</p>

      <p>
        ❌ ویدیو آواتار با کردیت فعال نیست <br />
        🎁 انتخاب یکی از این دو:
        <br />• ۶ ویدیو آواتار ۱۰ ثانیه‌ای
        <br />• ۱۰ ویدیو آواتار ۵ ثانیه‌ای
      </p>

      <button onClick={handlePay}>
        پرداخت
      </button>
    </div>
  );
}
