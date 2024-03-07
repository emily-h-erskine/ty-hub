import React from "react";
import HomeImageBanner from "./MainBanner/HomeMainImage";
import ActivityData from "./Carousels/ActivityData";
import ResourcesData from "./Carousels/ResourcesData";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
        <HomeImageBanner />
        <h1 style={{textAlign: 'left', color: '#4E2B72', paddingLeft: '2%'}}>Top Activities</h1>
        <ActivityData />
        <h1 style={{textAlign: 'left', color: '#4E2B72', paddingLeft: '2%'}}>Top Resources</h1>
        <ResourcesData />
    </main>
  );
}
