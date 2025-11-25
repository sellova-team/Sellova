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
  /* ⭐ لپ‌تاپ / دسکتاپ – ۴ تا مستطیل بزرگ، زرد زیر دو تای وسط */
  .plans-page {
    min-height: 100vh;
    padding: 40px 24px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(900px 600px at 10% 0%, #1b2a5a 0%, #0b1224 45%, #060b17 100%);
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

  .plan-card {
    border-radius: 20px;
    padding: 26px 20px;
    min-height: 260px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    box-shadow: 0 18px 40px rgba(0,0,0,0.35);
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

  /* کارت زرد پایین – زیر دو تا وسطی قرار می‌گیره */
  .free-credit {
    margin-top: 6px;
    padding: 14px 20px;
    border-radius: 18px;
    background: #facc15;
    color: #1f2937;
    display: flex;
    align-items: center;
    justify-content: center;
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

  /* 📱 موبایل و تبلت – مستطیل‌ها باریک‌تر و متن ریزتر */
  @media (max-width: 768px) {

  /* کل صفحه بیاد بالا */
  .plans-page {
    padding-top: 4px !important;
  }

  /* لوگو کوچک و بالاتر */
  .plans-logo-wrap {
    margin-top: -8px !important;
    margin-bottom: 2px !important;
    display: flex;
    justify-content: center;
  }

  .plans-logo-img {
    width: 100px !important;
    height: auto !important;
  }

  /* کارت‌ها جمع‌وجور و باریک‌تر */
  .plans-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px !important;
    margin-top: -28px !important; /* کارت‌ها بالاتر */
  }

  .plan-card {
    padding: 12px 10px !important;
    border-radius: 10px !important;
    min-height: 180px !important; /* کوتاه‌تر */
  }

  /* متن‌ها کوچک‌تر */
  .plan-title {
    font-size: 16px !important;
    margin-bottom: 4px !important;
  }

  .plan-credits {
    font-size: 13px !important;
    margin-bottom: 4px !important;
  }

  .plan-price {
    font-size: 14px !important;
    margin-bottom: 4px !important;
  }

  .plan-desc {
    font-size: 12px !important;
  }

  .plan-btn {
    font-size: 13px !important;
    padding: 8px 0 !important;
  }

  /* کارت زرد پایین */
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

  @media (max-width: 768px) {
  .plans-logo-wrap {
    margin-top: -10px !important; /* لوگو میره بالای بالای صفحه */
    margin-bottom: 4px !important;
  }

  .plans-logo-img {
    width: 120px !important; /* مثل صفحه عکس و ویدیو */
    height: auto !important;
  }
}
`}</style>
    </div>
  );
}