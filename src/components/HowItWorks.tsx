import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section style={{ padding: '3rem 2rem', backgroundColor: '#e8f0fe' }}>
      <h2>How It Works</h2>
      <ul>
        <li>📚 List your book with MRP.</li>
        <li>💸 A borrower deposits the full MRP as a security.</li>
        <li>✅ Upon return, only 2% is charged.</li>
        <li>⚖️ 1% goes to you as a reward, 1% is platform fee.</li>
      </ul>
    </section>
  );
};

export default HowItWorks;
