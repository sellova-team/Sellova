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
      price: '۸۹۰٬۰۰۰ تومان',
      description: '',
      route: '/payment/monthly',
      color: '#4a90e2',
    },
    {
      title: 'VIP ماهانه',
      credits: '۶۰۰ کردیت', // ✅ از ۵۰۰ به ۶۰۰
      price: '۱٬۲۸۰٬۰۰۰ تومان',
      description: '',
      route: '/payment/vip-monthly',
      color: '#e74c3c',
    },
    {
      title: 'پلن سالانه',
      credits: '۳٬۳۰۰ کردیت',
      price: '۵٬۸۰۰٬۰۰۰ تومان',
      description: 'تخفیف ۴۰٪ به مدت محدود',
      route: '/payment/yearly',
      color: '#27ae60',
    },
  ];

  const freeCreditPlan = {
    title: 'کردیت آزاد',
    credits: '۲۰ کردیت',
    price: '۱۵۰٬۰۰۰ تومان',
    route: '/payment/flexible',
    color: '#f39c12',
  };

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
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.5)';
            }}
          >
            <h3
              className="plan-title"
              style={{
                fontSize: '26px',
                fontWeight: '700',
                marginBottom: '15px',
              }}
            >
              {plan.title}
            </h3>
            <p className="plan-credits" style={{ fontSize: '20px', marginBottom: '10px' }}>
              {plan.credits}
            </p>
            <p
              className="plan-price"
              style={{
                fontSize: '22px',
                fontWeight: 'bold',
                marginBottom: '15px',
              }}
            >
              {plan.price}
            </p>
            {plan.description && (
              <p
                className="plan-desc"
                style={{
                  fontSize: '16px',
                  color: '#f0f0f0',
                  marginBottom: '15px',
                }}
              >
                {plan.description}
              </p>
            )}

            <button
              onClick={() => handleSelect(plan.route)}
              className="plan-btn"
              style={{
                marginTop: '20px',
                padding: '15px 0',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: '#fff',
                color: plan.color,
                fontSize: '18px',
                fontWeight: '600',
                width: '60%',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
              }}
            >
              انتخاب
            </button>
          </div>
        ))}
      </div>

      {/* کارت کردیت آزاد */}
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
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)';
        }}
      >
        <div
          className="free-credit-text"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '15px',
          }}
        >
          <p
            style={{
              fontSize: '25px',
              fontWeight: '700',
              margin: '1px 0',
            }}
          >
            {freeCreditPlan.title}
          </p>
          <p style={{ fontSize: '20px', margin: '1px 0' }}>
            {freeCreditPlan.credits}
          </p>
          <p style={{ fontSize: '20px', margin: '1px 0' }}>
            {freeCreditPlan.price}
          </p>
        </div>

        <button
          className="free-credit-btn"
          onClick={() => handleSelect(freeCreditPlan.route)}
          style={{
            padding: '12px 24px',
            borderRadius: '16px',
            border: 'none',
            backgroundColor: '#fff',
            color: '#f39c12',
            fontSize: '20px',
            fontWeight: '700',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f0f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fff';
          }}
        >
          انتخاب
        </button>
      </div>

  <style jsx>{`
  /* -------- صفحه ارتقا پلن – دسکتاپ / لپ تاپ -------- */
  .plans-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 16px;
  }

  /* لوگو در دسکتاپ */
  .plans-logo-wrap {
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
  }

  .plans-logo-img {
    width: 220px;
    height: auto;
  }

  /* چهار تا مستطیل کنار هم */
  .plans-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 1fr)); /* دقیقا ۴ ستون */
    gap: 24px;
    width: 100%;
    max-width: 1200px;
    align-items: stretch;
    justify-items: center;
  }

  .plan-card {
    width: 100%;
    border-radius: 18px;
    padding: 22px 18px;
    text-align: center;
    box-sizing: border-box;
  }

  .plan-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .plan-credits {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .plan-price {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .plan-desc {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .plan-btn {
    font-size: 18px;
    padding: 10px 0;
  }

  /* مستطیل زرد – زیر دو تای وسط (وسط کلی گرید) */
  .free-credit {
    margin-top: 28px;
    width: min(440px, 100%);
    margin-left: auto;
    margin-right: auto; /* میاد دقیقا وسط، زیر چهار تا کارت */
    border-radius: 16px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .free-credit-text p {
    margin: 2px 0;
    font-size: 16px;
  }

  .free-credit-btn {
    font-size: 16px;
    padding: 8px 20px;
    border-radius: 999px;
  }

  /* -------- فقط موبایل / تبلت (همه‌چیز ریزتر و بالاتر) -------- */
  @media (max-width: 768px) {
    .plans-page {
      padding: 14px 10px 24px;
    }

    .plans-logo-wrap {
      margin-top: 0;
      margin-bottom: 6px;
    }

    .plans-logo-img {
      width: 150px; /* 👈 لوگوی کوچیک بالای صفحه */
      height: auto;
    }

    /* دو ستون باریک، نزدیک لوگو */
    .plans-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      margin-top: -10px; /* کمی می‌کشه بالا */
    }

    .plan-card {
      padding: 16px 10px;
      min-height: 210px;
    }

    /* متن‌ها یک–دو سایز کوچیک‌تر */
    .plan-title {
      font-size: 18px;
      margin-bottom: 6px;
    }

    .plan-credits {
      font-size: 14px;
      margin-bottom: 4px;
    }

    .plan-price {
      font-size: 16px;
      margin-bottom: 6px;
    }

    .plan-desc {
      font-size: 13px;
      margin-bottom: 6px;
    }

    .plan-btn {
      font-size: 14px;
      padding: 8px 0;
    }

    /* کارت زرد پایین در موبایل */
    .free-credit {
      width: 92%;
      margin-top: 14px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 6px;
    }

    .free-credit-text p {
      font-size: 14px;
    }

    .free-credit-btn {
      font-size: 14px;
      padding: 8px 18px;
    }
  }
`}</style>
    </div>
  );
}
  