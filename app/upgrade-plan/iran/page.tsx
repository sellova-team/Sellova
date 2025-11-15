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
      color: '#6c757d'
    },
    {
      title: 'پلن ماهانه',
      credits: '۴۰۰ کردیت',
      price: '۸۹۰٬۰۰۰ تومان',
      description: '',
      route: '/payment/monthly',
      color: '#4a90e2'
    },
    {
      title: 'VIP ماهانه',
      credits: '۰۰۵ کردیت',
      price: '۱٬۲۸۰٬۰۰۰ تومان',
      description: '',
      route: '/payment/vip-monthly',
      color: '#e74c3c'
    },
    {
      title: 'پلن سالانه',
      credits: '۳٬۳۰۰ کردیت',
      price: '۵٬۸۰۰٬۰۰۰ تومان',
      description: 'تخفیف ۴۰٪ به مدت محدود',
      route: '/payment/yearly',
      color: '#27ae60'
    },
  ];

  const freeCreditPlan = {
    title: 'کردیت آزاد',
    credits: '۲۰ کردیت',
    price: '۱۵۰٬۰۰۰ تومان',
    route: '/payment/flexible',
    color: '#f39c12' // زرد
  };

  const handleSelect = (route) => {
    router.push(route);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1a2f, #00172f)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      {/* لوگو */}
      <div style={{ marginBottom: '50px' }}>
        <Image src="/logo.png" alt="Sellova Logo" width={300} height={190} />
      </div>

      {/* کارت‌های اصلی */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        width: '100%',
        maxWidth: '1400px'
      }}>
        {plans.map((plan, idx) => (
          <div key={idx} style={{
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
            textAlign: 'center'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.5)';
          }}
          >
            <h3 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '15px' }}>{plan.title}</h3>
            <p style={{ fontSize: '20px', marginBottom: '10px' }}>{plan.credits}</p>
            <p style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>{plan.price}</p>
            {plan.description && <p style={{ fontSize: '16px', color: '#f0f0f0', marginBottom: '15px' }}>{plan.description}</p>}

            <button
              onClick={() => handleSelect(plan.route)}
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
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#f0f0f0';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#fff';
              }}
            >
              انتخاب
            </button>
          </div>
        ))}
      </div>

      {/* کارت کردیت آزاد افقی کوچک و وسط‌چین */}
      <div style={{
        backgroundColor: freeCreditPlan.color,
        color: '#fff',
        borderRadius: '20px',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'center', // متن و دکمه وسط کارت
        alignItems: 'center', // وسط عمودی
        width: '25%',
        minHeight: '60px',
        marginTop: '40px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        textAlign: 'center'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)';
      }}
      >
        {/* متن‌ها */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '15px' }}>
          <p style={{ fontSize: '25px', fontWeight: '700', margin: '1px 0' }}>کردیت آزاد</p>
          <p style={{ fontSize: '20px', margin: '1px 0' }}>۲۰ کردیت</p>
          <p style={{ fontSize: '20px', margin: '1px 0' }}>۱۵۰٬۰۰۰ تومان</p>
        </div>

        {/* دکمه */}
        <button
          onClick={() => handleSelect(freeCreditPlan.route)}
          style={{
            padding: '12px 24px',
            borderRadius: '16px',
            border: 'none',
            backgroundColor: '#fff',
            color: '#f39c12',
            fontSize: '20px',
            fontWeight: '700',
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#f0f0f0';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#fff';
          }}
        >
          انتخاب
        </button>
      </div>
    </div>
  );
}