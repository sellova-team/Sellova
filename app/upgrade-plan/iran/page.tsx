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

  const freeCreditPlan = {
    title: 'کردیت آزاد',
    credits: '۳۵ کردیت',
    price: '۱۶۵٬۰۰۰ تومان',
    route: '/payment/flexible',
    color: '#f39c12',
  };

  const handleSelect = (route: string) => {
    router.push(route);
  };

  const user = { uid: 'test-user-123' };

  async function handleFakeBuy(credits: number) {
    await fetch('/api/fake-purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        uid: user.uid,
        credits,
      }),
    });
    alert('خرید انجام شد');
  }

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
      <div className="plans-logo-wrap">
        <Image
          src="/logo.png"
          alt="Sellova Logo"
          width={300}
          height={190}
          className="plans-logo-img"
        />
      </div>

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
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.5)';
            }}
          >
            <h3 className="plan-title" style={{ fontSize: '26px', fontWeight: 700, marginBottom: 15 }}>
              {plan.title}
            </h3>
            <p className="plan-credits" style={{ fontSize: 20, marginBottom: 10 }}>
              {plan.credits}
            </p>
            <p className="plan-price" style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
              {plan.price}
            </p>

            {plan.originalPrice && (
              <p style={{ textDecoration: 'line-through', opacity: 0.8, fontSize: 16, marginTop: -10 }}>
                {plan.originalPrice}
              </p>
            )}

            {plan.description && (
              <p className="plan-desc" style={{ fontSize: 16, color: '#f0f0f0', marginBottom: 15 }}>
                {plan.description}
              </p>
            )}

            <button
              onClick={() =>
                handleFakeBuy(
                  plan.credits.includes('۴۰۰')
                    ? 400
                    : plan.credits.includes('۵۵۰')
                    ? 550
                    : plan.credits.includes('۴٬۵۰۰')
                    ? 4500
                    : 30
                )
              }
              className="plan-btn"
              style={{
                marginTop: 20,
                padding: '15px 0',
                borderRadius: 12,
                border: 'none',
                backgroundColor: '#fff',
                color: plan.color,
                fontSize: 18,
                fontWeight: 600,
                width: '60%',
              }}
            >
              انتخاب
            </button>
          </div>
        ))}
      </div>

      {/* ===== ۳ کارت زرد کنار هم ===== */}
      <div className="free-plans-row">
        <div className="free-credit">
          <div className="free-credit-text">
            <p>کردیت آزاد</p>
            <p>۳۵ کردیت</p>
            <p>۱۶۵٬۰۰۰ تومان</p>
          </div>
          <button className="free-credit-btn" onClick={() => handleSelect('/payment/flexible')}>
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
          font-family: Vazirmatn, IRANSans, 'Segoe UI', Tahoma, Arial, sans-serif;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(220px, 1fr));
          gap: 26px;
          width: 100%;
          max-width: 1200px;
          margin-bottom: 22px;
        }

        .free-plans-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 40px;
          flex-wrap: wrap;
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

        /* موبایل دست نخورده */
        @media (max-width: 768px) {
          .plans-page {
            padding-top: 4px !important;
          }
          .plans-logo-wrap {
            margin-top: -8px !important;
            margin-bottom: 2px !important;
          }
          .plans-logo-img {
            width: 80px !important;
          }
          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px !important;
            margin-top: -28px !important;
          }
          .plan-card {
            padding: 12px 10px !important;
            border-radius: 10px !important;
            min-height: 180px !important;
          }
          .plan-title {
            font-size: 16px !important;
          }
          .plan-credits {
            font-size: 13px !important;
          }
          .plan-price {
            font-size: 14px !important;
          }
          .plan-desc {
            font-size: 12px !important;
          }
          .plan-btn {
            font-size: 13px !important;
            padding: 8px 0 !important;
          }
          .free-credit {
            width: 90% !important;
            margin-top: 10px !important;
            padding: 10px !important;
          }
          .free-credit-text p {
            font-size: 14px !important;
          }
          .free-credit-btn {
            font-size: 14px !important;
            padding: 8px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
