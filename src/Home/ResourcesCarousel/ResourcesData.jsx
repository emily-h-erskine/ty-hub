import React from 'react';
import ImageInfoCard from './ImageInfoCard.jsx'; 

export default function ResourcesData() {

    const containerStyle = {
        display: 'flex',
        gap: '2%',
      };

  return (
    <div style={containerStyle}>
      <ImageInfoCard
        imageUrl="https://tyhub.ie/wp-content/uploads/2023/11/rnli-logo.png"
        title="RNLI Secondary School Education Resources"
        description=""
        buttonText="Read More"
        buttonHref="/Resources"
      />
      <ImageInfoCard
        imageUrl="https://tyhub.ie/wp-content/uploads/2023/11/ncca-logo-1.jpeg"
        title="NCCA TY Guidelines"
        description=""
        buttonText="Read More"
        buttonHref="/Resources"
      />
      <ImageInfoCard
        imageUrl="https://ecwexford.ie/images/PDST-Logo-300x129.jpg"
        title="PDST CPD"
        description=""
        buttonText="Read More"
        buttonHref="/Resources"
      />
      <ImageInfoCard
        imageUrl="https://tyhub.ie/wp-content/uploads/2023/11/NCSA-LOGO.gif"
        title="NCSE – National Council for Special Education - Teacher Resources"
        description=""
        buttonText="Read More"
        buttonHref="/Resources"
      />
    </div>
  );
}

