import React from "react";
import BannerImage from "./BannerImage.png";

export default function HomeImageBanner() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          width: '100%',
          height: '1%',
          left: 0,
          top: 0,
          position: 'absolute',
          mixBlendMode: 'luminosity',
          background: 'linear-gradient(180deg, #07101D 0%, rgba(7, 16, 29, 0))'
        }}
      />
      <img
        src={BannerImage}
        alt="header image"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '450px',
        }}
      />
      <div
        style={{
          width: '60%',
          height: 'auto',
          left: '5%',
          top: '60%',
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
          padding: '0.2vw 3vw',
          position: 'absolute',
          right: '10%',
          top: '65%',
          background: '#D25A8F',
          border: 'none',
          color: 'white',
          borderRadius: '120px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        <a href="./Activities" style={{ textDecoration: 'none', color: 'white' }}>
          <h3><b>See All Activities</b></h3>
        </a>
      </button>
    </div>
  );
}