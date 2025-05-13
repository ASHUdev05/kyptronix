import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#222', color: '#fff' }}>
      <p>&copy; {new Date().getFullYear()} BookShare. All rights reserved.</p>
      <p>Contact: support@bookshare.com</p>
    </footer>
  );
};

export default Footer;
