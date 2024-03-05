import React from "react";

export default function HomeImageBanner() {
  return (
    <div style={{ position: 'relative', padding: '0% 2% 5% 2%', overflow: 'hidden' }}>
      <img
        src="https://png.pngtree.com/background/20220714/original/pngtree-background-of-modern-high-rise-buildings-picture-image_1617227.jpg"
        alt="header image"
        style={{
          objectFit: 'cover',
          background: 'linear-gradient(180deg, #D25A8F 0%, rgba(7, 16, 29, 0) 100%)'
        }}
      />
      <div
        style={{
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          position: 'absolute',
          mixBlendMode: 'darken',
          background: 'linear-gradient(180deg, #07101D 0%, rgba(7, 16, 29, 0) 100%)'
        }}
      />
        <div
        style={{
          width: '75%',
          height: 'auto',
          left: '10%',
          top: '30%',
          textAlign: 'left',
          position: 'absolute',
          fontSize: '3vw',
          fontWeight: '800',
          color: 'white',
          zIndex: '1'
        }}
      >
        Ireland's Only App for Transition Year and Senior Cycle Teachers & Students
      </div>
      <button
        type="button"
        name="View Activities Button"
        style={{
          padding: '1.5vw 4vw',
          position: 'absolute',
          right: '10%',
          top: '50%',
          background: '#D25A8F',
          border: 'none',
          color: 'white',
          borderRadius: '120px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        <a href="./Activities" style={{ textDecoration: 'none', color: 'white' }}>
          <b>See All Activities</b>
        </a>
      </button>
    </div>
  );
}