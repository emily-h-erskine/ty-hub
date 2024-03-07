import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      closeMobileMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', backgroundColor: '#D25A8F'}}>
      <div style={{ textAlign: 'left' }}>
        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1 style={{ width: isMobile ? '80%' : '40%', padding: '5% 0 0 15%' }}>TYHub</h1>
        </a>
      </div>
      <div style={{ textAlign: 'right', padding: isMobile ? '15% 0 0 0' : '15% 0 0 0' }}>
        {isMobile ? (
          <div style={{ cursor: 'pointer', color: 'white', padding: ' 0 10% 0 10%' }} onClick={handleMobileToggle}>
            ☰
            {showMobileMenu && (
              <div style={{ backgroundColor: '#D25A8F', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1000 }}>
                <ul style={{ listStyleType: 'none', padding: '5%' }}>
                  <li style={{padding:'2%'}}><a href="./Resources" style={{ textDecoration: 'none', color: 'white' }}>RESOURCES</a></li>
                  <li style={{padding:'2%'}}><a href="./Podcast" style={{ textDecoration: 'none', color: 'white' }}>PODCAST</a></li>
                  <li style={{padding:'2%'}}><a href="./Ezine" style={{ textDecoration: 'none', color: 'white' }}>EZINE</a></li>
                  <li style={{padding:'2%'}}><a href="./Contact" style={{ textDecoration: 'none', color: 'white' }}>CONTACT US</a></li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center', padding: '0 0 5% 0'}}>
            <a href="./Resources" style={{ textDecoration: 'none', color: 'white' }}>RESOURCES</a>
            <a href="./Podcast" style={{ textDecoration: 'none', color: 'white' }}>PODCAST</a>
            <a href="./Ezine" style={{ textDecoration: 'none', color: 'white' }}>EZINE</a>
            <a href="./Contact" style={{ textDecoration: 'none', color: 'white' }}>CONTACT US</a>
          </div>
        )}
      </div>
    </div>
  );
};