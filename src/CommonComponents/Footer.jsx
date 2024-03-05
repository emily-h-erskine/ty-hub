import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

export const Footer = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '5% 10% 0% 5%', backgroundColor: '#D25A8F', color: 'white', alignItems: 'end' }}>
    <div style={{ textAlign: 'left', padding: '5%' }}>
      <h5>Follow Us</h5>
      <SocialMediaLinks />
    </div>
    <div style={{ textAlign: 'right', fontSize: '10px', textDecoration: 'none', padding: '5%'}}>
        <a href="https://emily-h-erskine.github.io/portfolio" style={{ textDecoration: 'none', color: 'white' }}>
          Copyright © 2024 Emily-Huong Erskine
        </a>
    </div>
  </div>
);
