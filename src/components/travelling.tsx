'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Travel = () => {
  const travelPhotos: PhotoItem[] = [
    {
      src: '/travelling1.jpg',
      alt: 'River View',
      caption: 'A calm river winding through towering mountain ranges.',
    },
    {
      src: '/travelling2.jpg',
      alt: 'Hot Air Balloon in the Mountains',
      caption: ' A vibrant hot air balloon floating above mountain peaks, offering a breathtaking ride.',
    },
    {
      src: '/travelling3.jpg',
      alt: 'Mountain Trekking Adventure',
      caption: 'A scenic trekking trail leading through rugged mountains and natural beauty.',
    },
    {
      src: '/travelling4.jpg',
      alt: 'Boat Ride in Mountain River',
      caption: 'A peaceful boat floating gently on a river surrounded by mountain landscapes.',
    },
    {
      src: '/travelling5.jpg',
      alt: 'Serene River with Boat and Mountains',
      caption: 'A calm river scene with a boat drifting alongside picturesque mountain views.',
    }
  ];

  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Travel Adventures
        </h2>
        <p className="mt-4 text-muted-foreground">
          Traveling is one of my biggest passions. From ancient ruins to modern cities,
          every destination brings a new story, a fresh perspective, and unforgettable memories.
          Here are some of my favorite snapshots from around the world.
        </p>
      </div>
      <Photos photos={travelPhotos} />
    </div>
  );
};

export default Travel;
