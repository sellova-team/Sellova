'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function IranPlansPage() {
  const router = useRouter();

  const plans = [
    {
      title: 'پلن رایگان',
      credits: '۳۰ کردیت',
      price: 'رایگان',
      description: 'تست اولیه – شامل ویدیو آواتار نمی‌شود',
      route: '/payment/free',
      color: '#6c757d',
    },
    {
      title: 'پلن ماهانه',
      credits: '۳۵۰ کردیت',
      price: '۸۹۰٬۰۰۰ تومان',
      description: `❌ ویدیو آواتار با کردیت فعال نیست
🎁 فقط هدیه (یکی از این دو):
• ۱ ویدیو آواتار ۱۰ ثانیه‌ای
• یا ۳ ویدیو آواتار ۵ ثانیه‌ای`,
      route: '/payment/monthly',
      color: '#4a90e2',
    },
    {
      title: 'VIP ماهانه',
      credits: '۵۰۰ کردیت',
      price: '۱٬۳۰۰٬۰۰۰ تومان',
      description: `❌ ویدیو آواتار با کردیت فعال نیست
🎁 فقط هدیه (یکی از این دو):
• ۲ ویدیو آواتار ۱۰ ثانیه‌ای
• یا ۴ ویدیو آواتار ۵ ثانیه‌ای`,
      route: '/payment/vip-monthly',
      color: '#e74c3c',
    },
    {
      title: 'پلن سالانه',
      credits: '۴٬۵۰۰ کردیت',
      originalPrice: '۱۲٬۵۰۰٬۰۰۰ تومان',
      price: '۶٬۵۰۰٬۰۰۰ تومان',
      description: `❌ ویدیو آواتار با کردیت فعال نیست
🎁 هدیه انتخابی (فقط یکی):
• ۶ ویدیو آواتار ۱۰ ثانیه‌ای
• یا ۱۰ ویدیو آواتار ۵ ثانیه‌ای`,
      route: '/payment/yearly',
      color: '#27ae60',
    },
    {
      title: 'Avatar Video Pro',
      credits: '۱۶ واحد آواتار',
      price: '۳٬۲۰۰٬۰۰۰ تومان',
      description: `🎥 پلن اختصاصی ویدیو آواتار
• هر ویدیو ۵ ثانیه‌ای = ۱ واحد
• هر ویدیو ۱۰ ثانیه‌ای = ۲ واحد

مثال استفاده:
• ۸ ویدیو ۱۰ ثانیه‌ای
• یا ۱۶ ویدیو ۵ ثانیه‌ای
• یا ترکیبی دلخواه`,
      route: '/payment/avatar-pro',
      color: '#f59e0b',
    },
  ];

  const handleSelect = (route: string) => {
    router.push(route);
  };

  return (
    <div
      className="plans-page"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a1a2f, #00172f)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px',
      }}
    >
      {/* لوگو */}
      <div className="plans-logo-wrap">
        <Image
          src="/logo.png"
          alt="Sellova Logo"
          width={300}
          height={190}
          className="plans-logo-img"
        />
      </div>

      {/* پلن‌های اصلی */}
      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="plan-card"
            style={{
              backgroundColor: plan.color,
              color: '#fff',
              borderRadius: '20px',
              padding: '35px 25px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '320px',
              boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
              textAlign: 'center',
              whiteSpace: 'pre-line',
            }}
          >
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-credits">{plan.credits}</p>
            <p className="plan-price">{plan.price}</p>

            {plan.originalPrice && (
              <p style={{ textDecoration: 'line-through', opacity: 0.8 }}>
                {plan.originalPrice}
              </p>
            )}

            <p className="plan-desc">{plan.description}</p>

            <button
              className="plan-btn"
              onClick={() => handleSelect(plan.route)}
            >
              انتخاب
            </button>
          </div>
        ))}
      </div>

      {/* پلن‌های آزاد */}
      <div className="free-plans-row">
        {/* پلن کردیت آزاد */}
        <div className="free-credit">
          <div className="free-credit-text">
            <p>پلن کردیت آزاد</p>
            <p>۳۵ کردیت</p>
            <p>۱۷۰٬۰۰۰ تومان</p>
            <p style={{ fontSize: '14px', fontWeight: 600 }}>
              ❌ شامل ویدیو آواتار نمی‌شود
            </p>
          </div>
          <button
            className="free-credit-btn"
            onClick={() => handleSelect('/payment/flexible')}
          >
            انتخاب
          </button>
        </div>

        {/* ویدیو آواتار آزاد ۵ ثانیه‌ای */}
        <div className="free-credit">
          <div className="free-credit-text">
            <p>ویدیو آواتار آزاد ۵ ثانیه‌ای</p>
            <p>۱ ویدیو آواتار</p>
            <p>بدون مصرف کردیت</p>
            <p>۲۹۰٬۰۰۰ تومان</p>
          </div>
          <button className="free-credit-btn">
            انتخاب
          </button>
        </div>

        {/* ویدیو آواتار آزاد ۱۰ ثانیه‌ای */}
        <div className="free-credit">
          <div className="free-credit-text">
            <p>ویدیو آواتار آزاد ۱۰ ثانیه‌ای</p>
            <p>۱ ویدیو آواتار</p>
            <p>بدون مصرف کردیت</p>
            <p>۳۹۰٬۰۰۰ تومان</p>
          </div>
          <button className="free-credit-btn">
            انتخاب
          </button>
        </div>
      </div>

      <style jsx>{`
        * {
          font-family: Vazirmatn, IRANSans, Tahoma, Arial, sans-serif;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(220px, 1fr));
          gap: 26px;
          width: 100%;
          max-width: 1400px;
          margin-bottom: 40px;
        }

        .plan-title {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .plan-credits {
          font-size: 18px;
          margin-bottom: 6px;
        }

        .plan-price {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .plan-desc {
          font-size: 15px;
          margin-bottom: 12px;
          line-height: 1.6;
        }

        .plan-btn {
          margin-top: 10px;
          padding: 10px 0;
          width: 60%;
          border-radius: 999px;
          border: none;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
        }

        .free-plans-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 20px;
          flex-wrap: nowrap;
        }

        .free-credit {
          background: #facc15;
          color: #1f2937;
          border-radius: 18px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 14px 30px rgba(0,0,0,0.35);
          min-width: 260px;
        }

        .free-credit-text p {
          margin: 2px 0;
          font-size: 17px;
          font-weight: 700;
        }

        .free-credit-btn {
          padding: 10px 20px;
          border-radius: 999px;
          border: none;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .free-plans-row {
            overflow-x: auto;
          }

          .free-credit {
            min-width: 260px;
          }
        }
      `}</style>
    </div>
  );
}
