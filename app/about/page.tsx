import { Button } from "@/components/ui/button";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-8">
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold mb-8 -mt-14">ABOUT FACELESS.VIDEO</h1>
        <p className="mb-4 text-sm">
          Faceless.video was created out of necessity. We wanted to manage our
          own Faceless channels, but when starting, found that it wasn&apos;t as
          easy as we&apos;d thought.
        </p>
        <p className="mb-4 text-sm">
          Even though we didn&apos;t have to be in the videos, it still required{" "}
          <span className="font-bold italic">
            finding stories every day, finding video clips, learning how to edit
            videos, exporting, and uploading
          </span>{" "}
          - which could take upwards of{" "}
          <span className="font-bold">3 hours per video to complete</span>.
        </p>
        <p className="mb-4 text-sm">
          Then we had the idea - what if we could make a tool that automates
          Faceless channels for us. It would{" "}
          <span className="font-bold text-green-500">
            find stories, create videos, then post it to our channels every day
          </span>
          .
        </p>
        <p className="mb-4 text-sm">
          Faceless.video started out as a tool just for us, but became a service
          for others. We wanted to share the power of owning Faceless channels,
          making it as easy as clicking a button.
        </p>
        <p className="mb-4 text-green-500 font-bold text-sm">
          Faceless.video serves as your content creation team, working 24/7 to
          create and post videos for you daily.
        </p>
        <p className="mb-4 text-sm">
          Growing a channel and monetizing an audience has never been easier. We
          hope you enjoy Faceless.video as much as we enjoyed making it.
        </p>
        <div className="flex flex-col items-center justify-center mt-7">
          <Button className="bg-[#4bf05b] uppercase text-black font-semibold px-6 hover:bg-[#3fc34d]">
            TRY IT OUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
