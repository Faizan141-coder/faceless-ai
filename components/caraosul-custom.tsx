import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Image {
  src: string;
}

const images: Image[] = [
  {
    src: "/carosul/8.jpeg",
  },
  {
    src: "/carosul/9.jpeg",
  },
  {
    src: "/carosul/10.jpeg",
  },
  {
    src: "/carosul/11.jpeg",
  },
  {
    src: "/carosul/12.jpeg",
  },
  {
    src: "/carosul/13.jpeg",
  },
  {
    src: "/carosul/18.jpeg",
  },
  {
    src: "/carosul/19.jpeg",
  },
];

export function CarouselImages() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/4 w-full"
          >
            <div className="p-1 mt-5">
              <Card>
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={image.src}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
