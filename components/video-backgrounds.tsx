import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "AI Generated ✨",
  },
  {
    id: 2,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "Minecraft Parkour",
  },
  {
    id: 3,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "Minecraft Night",
  },
  {
    id: 4,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "AI Generated ✨",
  },
  {
    id: 5,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "AI Generated ✨",
  },
  {
    id: 6,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "AI Generated ✨",
  },
  {
    id: 7,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "AI Generated ✨",
  },
  {
    id: 8,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "AI Generated ✨",
  },
  {
    id: 9,
    src: "/ai-image.jpg",
    alt: "Photo by Drew Beamer",
    title: "AI Generated ✨",
  },
];

const VideoBackgrounds = () => {
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
            <div key={image.id} className="text-center w-[350px] h-[220px]">
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
