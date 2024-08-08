import React from 'react';

function Header({ step }) {
  const progress = step * 33.3; // Adjust the progress percentage based on the step
  return (
    <header>
      <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
      <div style={{ width: '100%', backgroundColor: '#ddd' }}>
        <div style={{ width: `${progress}%`, height: '10px', backgroundColor: 'blue' }}></div>
      </div>
    </header>
  );
}

export default Header;
