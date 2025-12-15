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
      description: 'تست برای شروع شامل فیلم نمی‌شود',
      route: '/payment/free',
      color: '#6c757d',
    },
    {
      title: 'پلن ماهانه',
      credits: '۴۰۰ کردیت',
      price: '۸۷۰,۰۰۰ تومان',
      description: '',
      route: '/payment/monthly',
      color: '#4a90e2',
    },
    {
      title: 'VIP ماهانه',
      credits: '۵۵۰ کردیت',
      price: '۱٬۲۳۰٬۰۰۰ تومان',
      description: '',
      route: '/payment/vip-monthly',
      color: '#e74c3c',
    },
    {
      title: 'پلن سالانه',
      credits: '۴٬۵۰۰ کردیت',
      originalPrice: '۱۲٬۵۰۰٬۰۰۰ تومان',
      price: '۶٬۵۰۰٬۰۰۰ تومان',
      description: 'تخفیف ۴۸٪ به مدت محدود',
      route: '/payment/yearly',
      color: '#27ae60',
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

            {plan.description && (
              <p className="plan-desc">{plan.description}</p>
            )}

            <button className="plan-btn">انتخاب</button>
          </div>
        ))}
      </div>

      {/* ===== ۳ پنجره زرد کنار هم ===== */}
      <div className="free-plans-row">
        <div className="free-credit">
          <div className="free-credit-text">
            <p>پلن آزاد</p>
            <p>۳۵ کردیت</p>
            <p>۱۷۰٬۰۰۰ تومان</p>
          </div>
          <button
            className="free-credit-btn"
            onClick={() => handleSelect('/payment/flexible')}
          >
            انتخاب
          </button>
        </div>

        <div className="free-credit">
          <div className="free-credit-text">
            <p>ویدیو آواتار ۵ ثانیه‌ای</p>
            <p>بدون کردیت</p>
            <p>۲۹۰٬۰۰۰ تومان</p>
          </div>
          <button className="free-credit-btn">انتخاب</button>
        </div>

        <div className="free-credit">
          <div className="free-credit-text">
            <p>ویدیو آواتار ۱۰ ثانیه‌ای</p>
            <p>بدون کردیت</p>
            <p>۳۹۰٬۰۰۰ تومان</p>
          </div>
          <button className="free-credit-btn">انتخاب</button>
        </div>
      </div>

      <style jsx>{`
        * {
          font-family: Vazirmatn, IRANSans, Tahoma, Arial, sans-serif;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(220px, 1fr));
          gap: 26px;
          width: 100%;
          max-width: 1200px;
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

        /* ===== زردها کنار هم ===== */
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

        /* موبایل – استایل اصلی حفظ شده */
        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .free-plans-row {
            overflow-x: auto;
          }
            @media (max-width: 768px) {
  .free-plans-row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .free-plans-row .free-credit {
    width: auto !important;
    min-width: 260px;
  }
}

        }
      `}</style>
    </div>
  );
}
