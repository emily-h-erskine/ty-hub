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
        imageUrl="path/to/image1.jpg"
        title="Card Title 1"
        description="Description for card 1."
        buttonText="Go somewhere"
        buttonHref="/Resources"
      />
      <ImageInfoCard
        imageUrl="path/to/image2.jpg"
        title="Card Title 2"
        description="Description for card 2."
        buttonText="Go somewhere else"
        buttonHref="/Resources"
      />
      <ImageInfoCard
        imageUrl="path/to/image1.jpg"
        title="Card Title 1"
        description="Description for card 1."
        buttonText="Go somewhere"
        buttonHref="/Resources"
      />
      <ImageInfoCard
        imageUrl="path/to/image2.jpg"
        title="Card Title 2"
        description="Description for card 2."
        buttonText="Go somewhere else"
        buttonHref="/Resources"
      />
    </div>
  );
}

