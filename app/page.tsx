"use client";

import { AccordionDemo } from "@/components/accord-demo";
import { CarouselImages } from "@/components/caraosul-custom";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import ReactPlayer from "react-player";

interface VideoUrls {
  [key: string]: string[];
}

const videoUrls: VideoUrls = {
  Minecraft: ["/video/Faceless_2.mp4", "/video/Faceless_3.mp4"],
  "GTA 5": ["/video/Faceless_4.mp4", "/video/Faceless_5.mp4"],
  "Subway Surfers": [
    "/video/Faceless_6.mp4",
    "/video/Faceless_7.mp4",
    "/video/Faceless_8.mp4",
  ],
};

export default function Home() {
  const videoItems = Object.values(videoUrls)
    .flat()
    .map((url) => ({ video: url }));

  return (
    <div>
      <div className="flex flex-col pt-36 items-center justify-center">
        <h1 className="text-5xl font-bold">
          Create ViraVid Accounts in{" "}
          <span className="text-[#6742d9]">one click</span>
        </h1>
        <h2 className="mt-6 font-bold text-xl">
          Use AI to automatically create and post custom videos daily
        </h2>
      </div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={videoItems}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-col pt-16 items-center justify-center">
        <h2 className="mt-6 text-neutral-500 text-lg">
          Creating a faceless channel used to be hard—writing scripts daily,
          learning to edit, posting on a schedule…
          <span className="text-[#6742d9] font-semibold">
            {" "}
            our AI handles everything for you.
          </span>
        </h2>
        <h2 className="mt-6 font-bold text-xl">
          Create a faceless channel completely on autopilot
        </h2>
        <Button className="bg-[#6742d9] mt-6 uppercase font-semibold px-6 hover:bg-[#6b7dda]">
          start for free
        </Button>
      </div>
      <div className="flex flex-col py-20 items-center justify-center">
        <h1 className="text-5xl font-bold">
          We Get <span className="text-[#6742d9]">Views</span>
        </h1>
        <h2 className="mt-6 text-neutral-500 text-lg">
          Check out these results from some of our autopilot faceless creators
        </h2>
        <CarouselImages />
      </div>
      <div className="flex flex-col py-20 items-center justify-center">
        <h1 className="text-5xl font-bold">
          <span className="text-[#6742d9]">Easy</span>,{" "}
          <span className="text-[#6742d9]">Automated</span>, and{" "}
          <span className="text-[#6742d9]">Unique</span> stories every time
        </h1>
        <div className="p-10">
          <ReactPlayer
            url="/video/Faceless.mp4"
            playing={true}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <Link href={'/create'}>
          <Button className="bg-[#6742d9] mt-6 uppercase font-semibold px-6 hover:bg-[#6b7dda]">
            create video
          </Button>
        </Link>
      </div>
      <div className="flex flex-col pb-20 items-center justify-center">
        <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
        <div className="p-10 w-full px-96">
          <AccordionDemo />
        </div>
      </div>
    </div>
  );
}
