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
      credits: '۳۵۰ کردیت',
      price: '۸۹۰٬۰۰۰ تومان',
      description: '🎁 هدیه: ۱ ویدیو ۱۰ ثانیه‌ای یا ۳ ویدیو ۵ ثانیه‌ای با آواتار',
      route: '/payment/monthly',
      color: '#4a90e2',
    },
    {
      title: 'VIP ماهانه',
      credits: '۵۰۰ کردیت',
      price: '۱٬۳۰۰٬۰۰۰ تومان',
      description: '🎁 هدیه: ۲ ویدیو ۱۰ ثانیه‌ای یا ۴ ویدیو ۵ ثانیه‌ای با آواتار',
      route: '/payment/vip-monthly',
      color: '#e74c3c',
    },
    {
      title: 'پلن سالانه',
      credits: '۴٬۵۰۰ کردیت',
      originalPrice: '۱۲٬۵۰۰٬۰۰۰ تومان',
      price: '۶٬۵۰۰٬۰۰۰ تومان',
      description: '🎁 هدیه: ۶ ویدیو ۱۰ ثانیه‌ای + ۱۰ ویدیو ۵ ثانیه‌ای با آواتار',
      route: '/payment/yearly',
      color: '#27ae60',
    },
  ];

  const freeCreditPlan = {
    title: 'پلن آزاد',
    credits: '۳۵ کردیت',
    price: '۱۷۰٬۰۰۰ تومان',
    route: '/payment/flexible',
    color: '#f39c12',
  };

  const avatarFreePlans = [
    {
      title: 'ویدیو آواتار ۵ ثانیه‌ای',
      credits: 'بدون کردیت',
      price: '۲۹۰٬۰۰۰ تومان',
      route: '/payment/avatar-5s',
    },
    {
      title: 'ویدیو آواتار ۱۰ ثانیه‌ای',
      credits: 'بدون کردیت',
      price: '۳۹۰٬۰۰۰ تومان',
      route: '/payment/avatar-10s',
    },
  ];

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

      {/* کارت‌های اصلی */}
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
              e.currentTarget.style.boxShadow =
                '0 25px 60px rgba(0,0,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 15px 50px rgba(0,0,0,0.5)';
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

            <button
              onClick={() =>
                handleFakeBuy(
                  plan.credits.includes('۳۵۰')
                    ? 350
                    : plan.credits.includes('۵۰۰')
                    ? 500
                    : plan.credits.includes('۴٬۵۰۰')
                    ? 4500
                    : 30
                )
              }
              className="plan-btn"
            >
              انتخاب
            </button>
          </div>
        ))}
      </div>

      {/* پلن آزاد – ۳۵ کردیت */}
      <div
        className="free-credit"
        style={{
          backgroundColor: freeCreditPlan.color,
          color: '#fff',
          borderRadius: '20px',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60px',
          marginTop: '40px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s',
          textAlign: 'center',
        }}
        onClick={() => handleSelect(freeCreditPlan.route)}
      >
        <div className="free-credit-text" style={{ marginRight: '15px' }}>
          <p style={{ fontSize: '25px', fontWeight: '700' }}>
            {freeCreditPlan.title}
          </p>
          <p>{freeCreditPlan.credits}</p>
          <p>{freeCreditPlan.price}</p>
        </div>

        <button className="free-credit-btn">انتخاب</button>
      </div>

      {/* کارت‌های ویدیو آواتار آزاد */}
      {avatarFreePlans.map((plan, idx) => (
        <div
          key={idx}
          className="free-credit"
          style={{
            backgroundColor: '#f39c12',
            color: '#fff',
            borderRadius: '20px',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60px',
            marginTop: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            cursor: 'pointer',
            transition: 'transform 0.3s, box-shadow 0.3s',
            textAlign: 'center',
          }}
        >
          <div className="free-credit-text" style={{ marginRight: '15px' }}>
            <p style={{ fontSize: '25px', fontWeight: '700' }}>
              {plan.title}
            </p>
            <p>{plan.credits}</p>
            <p>{plan.price}</p>
          </div>

          <button
            className="free-credit-btn"
            onClick={() => handleSelect(plan.route)}
          >
            انتخاب
          </button>
        </div>
      ))}

      <style jsx>{`
        * {
          font-family: IRANSans, Vazirmatn, system-ui,
            -apple-system, BlinkMacSystemFont;
        }

        /* ⭐ لپ‌تاپ / دسکتاپ */
        .plans-page {
          min-height: 100vh;
          padding: 40px 24px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: radial-gradient(
            900px 600px at 10% 0%,
            #1b2a5a 0%,
            #0b1224 45%,
            #060b17 100%
          );
        }

        .plans-logo-wrap {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .plans-logo-img {
          width: 210px;
          height: auto;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(220px, 1fr));
          gap: 26px;
          width: 100%;
          max-width: 1200px;
          margin-bottom: 22px;
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
          line-height: 1.5;
        }

        .plan-btn {
          margin-top: 6px;
          padding: 10px 0;
          font-size: 18px;
          font-weight: 800;
          border-radius: 999px;
          border: none;
          cursor: pointer;
        }

        .free-credit {
          margin-top: 6px;
          padding: 14px 20px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
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

        /* 📱 موبایل – بدون تغییر */
        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}