"use client";

import React, { useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

interface VideoUrls {
  [key: string]: string[];
}

interface Image {
  id: number;
  src: string;
  alt: string;
  title: string;
  category?: keyof VideoUrls; // Optional category for images with video backgrounds
}

const images: Image[] = [
  {
    id: 1,
    src: "/bg/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "AI Generated ✨",
  },
  {
    id: 2,
    src: "/bg/minecraft_parkour.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Minecraft Parkour",
    category: "Minecraft",
  },
  {
    id: 3,
    src: "/bg/minecraft_night.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Minecraft Night",
    category: "Minecraft",
  },
  {
    id: 4,
    src: "/bg/gta5.jpeg",
    alt: "Photo by Drew Beamer",
    title: "GTA5 Mega Ramp",
    category: "GTA 5",
  },
  {
    id: 5,
    src: "/bg/subway.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Subway Surfer",
    category: "Subway Surfers",
  },
  {
    id: 6,
    src: "/bg/satisfying.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Satisfying",
  },
  {
    id: 7,
    src: "/bg/spooky.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Spooky (Woods)",
  },
  {
    id: 8,
    src: "/bg/luxury.jpg",
    alt: "Photo by Drew Beamer",
    title: "Luxury",
  },
  {
    id: 9,
    src: "/bg/ominous.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Ominous (Space)",
  },
  {
    id: 10,
    src: "/bg/peaceful.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Peaceful",
  },
  {
    id: 11,
    src: "/bg/scary.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Scary (Skulls)",
  },
  {
    id: 12,
    src: "/bg/nature.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Nature",
  },
];

const videoUrls: VideoUrls = {
  Minecraft: [
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055976/4_edited_gzk1qa.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055973/5_edited_wlzrjd.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055967/1_edited_yg7khf.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055956/2_edited_nrb9dj.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055954/3_edited_y7jpm0.mp4",
  ],
  "GTA 5": [
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055970/6_edited_ndff0o.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055844/3_edited_isuvgl.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055836/5_edited_epwwva.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055833/4_edited_fokfhe.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055791/2_edited_vbyalp.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723055790/1_edited_tnu9ny.mp4",
  ],
  "Subway Surfers": [
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723057025/1_ksfkx7.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723057069/2_n1fbvx.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723057081/3_vzwngw.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723057080/4_h5p2yf.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723057066/5_d1r0u3.mp4",
    "https://res.cloudinary.com/dahjaauna/video/upload/v1723057079/6_uizzgu.mp4",
  ],
};

const getRandomUrl = (category: keyof VideoUrls): string => {
  const urls = videoUrls[category];
  const randomIndex = Math.floor(Math.random() * urls.length);
  return urls[randomIndex];
};

const VideoBackgrounds: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleBackgroundClick = (category?: keyof VideoUrls): void => {
    console.log("Card clicked:", category); // Check if this logs to the console
    if (category) {
      const videoUrl = getRandomUrl(category);
      setSelectedVideo(videoUrl);
      console.log("Selected Video URL:", videoUrl); // Optional: For debugging
    }
  };

  return (
    <>
      <div className="flex flex-col pt-36 items-center justify-center">
        <h1 className="text-5xl">Video Backgrounds</h1>
        <h2 className="mt-6 text-neutral-400 text-sm">
          Select one or more video backgrounds
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 mt-5 gap-y-12 gap-20 items-center justify-center">
          {images.map((image) => (
            <div
              key={image.id}
              className="text-center w-[350px] h-[220px]"
              onClick={() => handleBackgroundClick(image.category)}
            >
              <h1 className="font-bold py-2">{image.title}</h1>
              <AspectRatio className="w-[350px] h-[220px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoBackgrounds;
