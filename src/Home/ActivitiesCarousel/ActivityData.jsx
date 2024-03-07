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
        imageUrl="https://tyhub.ie/wp-content/uploads/2021/03/1-Small.png"
        title="Museums"
        description="School tours & virtual tours for students in Ireland and abroad"
        buttonText="Read More"
        buttonHref="/Activities"
      />
      <ImageInfoCard
        imageUrl="https://tyhub.ie/wp-content/uploads/2021/03/2-Small.png"
        title="Historic Buildings"
        description="Locations around Ireland under the OPW are generally open from April - October. School Tours & Virtual Tours available for locations in Ireland & abroad"
        buttonText="Read More"
        buttonHref="/Activities"
      />
      <ImageInfoCard
        imageUrl="https://tyhub.ie/wp-content/uploads/2021/03/3-Small.png"
        title="Outdoor Activities"
        description="Outdoor school tours & activities that involve such activities as Driving courses, Water Sports, Walks, Team Building, Ziplining and much more"
        buttonText="Read More"
        buttonHref="/Activities"
      />
      <ImageInfoCard
        imageUrl="https://tyhub.ie/wp-content/uploads/2021/03/4-Small.png"
        title="Indoor Activities"
        description="Indoor school tours & activities that involve such activities as Escape Rooms, Indoor Sports, Team Building, Karting and much more"
        buttonText="Read More"
        buttonHref="/Activities"
      />
    </div>
  );
}

