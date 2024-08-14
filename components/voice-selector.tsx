"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "./ui/button";
import { fetchVideoUrl } from "@/actions/agent-executor";

interface SelectedVoices {
  Matthew: boolean;
  Joanna: boolean;
  Salli: boolean;
  Onyx: boolean;
  Echo: boolean;
  Nova: boolean;
}

const VoiceSelector = () => {
  const [selectedVoices, setSelectedVoices] = useState<SelectedVoices>({
    Matthew: false,
    Joanna: false,
    Salli: false,
    Onyx: false,
    Echo: false,
    Nova: false,
  });
  const [videoUrl, setVideoUrl] = useState("/video/minecraft.mp4"); // Initial video URL
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return true;
  }

  const toggleVoice = (voice: keyof SelectedVoices) => {
    setSelectedVoices((prev) => ({
      ...prev,
      [voice]: !prev[voice],
    }));
  };

  const video_url = "";
  const internet_enable = true;
  const keywords = [""];
  const writing_style = "";
  const font_style = "";
  const voiceId = "";
  const prompt = "";

  const handleCreateSeries = async () => {
    setIsLoading(true);
    console.log("Before try");
    try {
      console.log("after try and before fetch");

      const data = await fetchVideoUrl({
        video_link: video_url,
        internet_enable,
        keywords,
        writing_style,
        font_style,
        voiceId,
        prompt,
      }); // Call the server action to get the video URL

      console.log("after fetch");

      setVideoUrl(data);
      console.log("after set video");

      console.log("URL: ", data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const voices = [
    { name: "Matthew", gender: "Male", type: "standard" },
    { name: "Joanna", gender: "Female", type: "standard" },
    { name: "Salli", gender: "Female", type: "standard" },
  ];

  const premiumVoices = [
    { name: "Onyx", gender: "Male", type: "premium" },
    { name: "Echo", gender: "Male", type: "premium" },
    { name: "Nova", gender: "Female", type: "premium" },
  ];

  return (
    <div className="flex flex-col items-center pt-28">
      <h1 className="text-5xl">Preview Your Series</h1>
      <h2 className="mt-6 text-neutral-400 text-sm">
        You can select multiple voices to be used in your Series.
      </h2>
      <h2 className="text-neutral-400 text-sm">
        Selected voices will be chosen at random per video.
      </h2>

      <div className="flex mt-10">
        {/* Video Player */}
        <div className="rounded-lg overflow-hidden">
          <ReactPlayer
            url={videoUrl} // Replace with your dynamic video URL
            controls
            loop
            width="320px"
            height="570px"
          />
        </div>

        {/* Voice Selection */}
        <div className="w-1/2 flex flex-col items-start ml-10">
          {/* Voice Selection JSX */}
          {voices.map((voice) => (
            <div
              key={voice.name}
              className="flex items-center p-3 pl-3 border border-gray-700 rounded-lg w-full"
            >
              <button className="mr-4 text-white text-2xl">▶</button>
              <span className="flex-1">
                {voice.name} ({voice.gender})
              </span>
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedVoices[voice.name as keyof SelectedVoices]}
                onChange={() => toggleVoice(voice.name as keyof SelectedVoices)}
              />
              <span>Use Voice</span>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="text-xl font-bold italic my-7 text-green-500">
              Premium AI Voices
            </h3>
          </div>
          {premiumVoices.map((voice) => (
            <div
              key={voice.name}
              className="flex items-center p-3 pl-3 border border-gray-700 rounded-lg w-full"
            >
              <button className="mr-4 text-2xl">▶</button>
              <span className="flex-1 text-green-500">
                {voice.name} ({voice.gender})
              </span>
              <span className="text-green-500 text-sm italic ml-10">
                available after starting
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Button onClick={handleCreateSeries} disabled={isLoading}>
          {isLoading ? "Generating..." : "Create Series"}
        </Button>
      </div>
    </div>
  );
};

export default VoiceSelector;
