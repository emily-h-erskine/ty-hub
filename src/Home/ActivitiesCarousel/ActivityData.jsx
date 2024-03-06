import React from 'react';
import ImageInfoCard from './ImageInfoCard';

export default function ActivityData() {

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
        buttonHref="/Activities"
      />
      <ImageInfoCard
        imageUrl="path/to/image2.jpg"
        title="Card Title 2"
        description="Description for card 2."
        buttonText="Go somewhere else"
        buttonHref="/Activities"
      />
      <ImageInfoCard
        imageUrl="path/to/image1.jpg"
        title="Card Title 1"
        description="Description for card 1."
        buttonText="Go somewhere"
        buttonHref="/Activities"
      />
      <ImageInfoCard
        imageUrl="path/to/image2.jpg"
        title="Card Title 2"
        description="Description for card 2."
        buttonText="Go somewhere else"
        buttonHref="/Activities"
      />
    </div>
  );
}

