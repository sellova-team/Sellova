'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CountrySelectPage() {
  const user = { uid: 'test-user-123' };
  const router = useRouter();
  const [country, setCountry] = useState('IR'); // پیش‌فرض ایران

  const countries = [
    { label: 'Iran', value: 'IR' },
    { label: 'United States', value: 'US' },
    { label: 'Europe', value: 'EU' },
    { label: 'Armenia', value: 'AM' },
    { label: 'Azerbaijan', value: 'AZ' },
    { label: 'Cyprus', value: 'CY' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Tajikistan', value: 'TJ' },
    { label: 'Other countries', value: 'OTHER' },
  ];

  const handleContinue = () => {
  if (country === 'IR') {
    router.push('/upgrade-plan/iran'); // مسیر درست
  } else {
    router.push('/upgrade/international'); // مسیر بین‌المللی همین بمونه
  }
}

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a1a2f',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* لوگو */}
      <div style={{ marginBottom: '40px' }}>
        <Image src="/logo.png" alt="Sellova Logo" width={250} height={180} />
      </div>

      {/* کارت انتخاب کشور */}
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        padding: '30px',
        borderRadius: '20px',
        minWidth: '280px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>Select Your Country</h2>
        <p style={{ color: '#ccc', fontSize: '14px', marginBottom: '20px' }}>Choose your country to see the right upgrade options</p>

        <select
          value={country}
          onChange={e => setCountry(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #444',
            backgroundColor: '#1a2a4f',
            color: '#fff',
            fontSize: '16px',
            marginBottom: '25px'
          }}
        >
          {countries.map((c, idx) => (
            <option key={idx} value={c.value}>{c.label}</option>
          ))}
        </select>

        <button
          onClick={handleContinue}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: '#4a90e2',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );

  async function handleBuy() {
  await fetch('/api/fake-purchase', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      uid: user.uid,
      credits: 400,
    }),
  });

  alert('خرید انجام شد');
}

}