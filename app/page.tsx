"use client";

import { fetchVideoUrl } from "@/actions/agent-executor";
import FontSelector from "@/components/font-selector";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VideoBackgrounds from "@/components/video-backgrounds";
import VoiceSelector from "@/components/voice-selector";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";

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

interface SelectedVoices {
  Matthew: boolean;
  Joanna: boolean;
  Salli: boolean;
  Onyx: boolean;
  Echo: boolean;
  Nova: boolean;
}

interface Voice {
  name: string;
  gender: string;
  id: string;
  type: string;
  audioFile: string;
}

const images: Image[] = [
  // {
  //   id: 1,
  //   src: "/bg/ai-image.jpg",
  //   alt: "Photo by Drew Beamer",
  //   title: "AI Generated ✨",
  // },
  {
    id: 2,
    src: "/bg/minecraft_parkour.jpeg",
    alt: "Photo by Drew Beamer",
    title: "Minecraft Parkour",
    category: "Minecraft",
  },
  // {
  //   id: 3,
  //   src: "/bg/minecraft_night.jpeg",
  //   alt: "Photo by Drew Beamer",
  //   title: "Minecraft Night",
  //   category: "Minecraft",
  // },
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
  // {
  //   id: 6,
  //   src: "/bg/satisfying.jpeg",
  //   alt: "Photo by Drew Beamer",
  //   title: "Satisfying",
  // },
  // {
  //   id: 7,
  //   src: "/bg/spooky.jpeg",
  //   alt: "Photo by Drew Beamer",
  //   title: "Spooky (Woods)",
  // },
  // {
  //   id: 8,
  //   src: "/bg/luxury.jpg",
  //   alt: "Photo by Drew Beamer",
  //   title: "Luxury",
  // },
  // {
  //   id: 9,
  //   src: "/bg/ominous.jpeg",
  //   alt: "Photo by Drew Beamer",
  //   title: "Ominous (Space)",
  // },
  // {
  //   id: 10,
  //   src: "/bg/peaceful.jpeg",
  //   alt: "Photo by Drew Beamer",
  //   title: "Peaceful",
  // },
  // {
  //   id: 11,
  //   src: "/bg/scary.jpeg",
  //   alt: "Photo by Drew Beamer",
  //   title: "Scary (Skulls)",
  // },
  // {
  //   id: 12,
  //   src: "/bg/nature.jpeg",
  //   alt: "Photo by Drew Beamer",
  //   title: "Nature",
  // },
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

const terms = [
  { id: 1, label: "MONTSERRAT (Default)" },
  { id: 2, label: "THE BOLD FONT" },
  { id: 3, label: "DEUTSCH" },
  { id: 4, label: "ADDISON" },
  { id: 5, label: "LEMON" },
  { id: 6, label: "HOLTWOOD ONE" },
  { id: 7, label: "HOLTWOOD ONE" },
  { id: 8, label: "HOLTWOOD ONE" },
  { id: 9, label: "HOLTWOOD ONE" },
  { id: 10, label: "HOLTWOOD ONE" },
  { id: 11, label: "HOLTWOOD ONE" },
  { id: 12, label: "HOLTWOOD ONE" },
];

const voices: Voice[] = [
  {
    name: "Matthew",
    gender: "Male",
    type: "standard",
    id: "pNInz6obpgDQGcFmaJgB",
    audioFile: "/voice/male_vocie_1.mp3",
  },
  {
    name: "Joanna",
    gender: "Female",
    type: "standard",
    id: "Xb7hH8MSUJpSbSDYk0k2",
    audioFile: "/voice/female_vocie_1.mp3",
  },
  {
    name: "Salli",
    gender: "Female",
    type: "standard",
    id: "MF3mGyEYCl7XYWbV9V6O",
    audioFile: "/voice/female_vocie_2.mp3",
  },
];

const premiumVoices: Voice[] = [
  {
    name: "Onyx",
    gender: "Male",
    type: "premium",
    id: "VR6AewLTigWG4xSOukaG",
    audioFile: "/voice/male_vocie_2.mp3",
  },
  {
    name: "Echo",
    gender: "Male",
    type: "premium",
    id: "pqHfZKP75CvOlQylNhV4",
    audioFile: "/voice/male_vocie_3.mp3",
  },
  {
    name: "Nova",
    gender: "Female",
    type: "premium",
    id: "LcfcDJNUP1GQjkzn1xUU",
    audioFile: "/voice/female_vocie_3.mp3",
  },
];

const getRandomUrl = (category: keyof VideoUrls): string => {
  const urls = videoUrls[category];
  const randomIndex = Math.floor(Math.random() * urls.length);
  return urls[randomIndex];
};

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#23a05b");
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
  const [writingStyle, setWritingStyle] = useState<string | null>(null);
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleVoice = (voice: keyof SelectedVoices) => {
    setSelectedVoices((prev) => ({
      ...prev,
      [voice]: !prev[voice],
    }));
    console.log("Selected Voice: ", selectedVoices);
  };

  // Function to handle keyword input change
  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputKeywords = event.target.value
      .split(",")
      .map((keyword) => keyword.trim());
    setKeywords(inputKeywords);
  };

  const handleBackgroundClick = (category?: keyof VideoUrls): void => {
    console.log("Card clicked:", category); // Check if this logs to the console
    if (category) {
      const videoUrl = getRandomUrl(category);
      setVideoUrl(videoUrl);
      console.log("Selected Video URL:", videoUrl); // Optional: For debugging
    }
  };

  const handleColorChange = (event: any) => {
    setSelectedColor(event.target.value);
  };

  const getSelectedVoiceId = (): string | undefined => {
    const selectedVoice = voices
      .concat(premiumVoices)
      .find((voice) => selectedVoices[voice.name as keyof SelectedVoices]);
    return selectedVoice ? selectedVoice.id : undefined;
  };

  const handleCreateSeries = async () => {
    setIsLoading(true);
    const voiceId = getSelectedVoiceId();

    console.log("Writing Style: ", writingStyle);
    console.log("Selected Keywords: ", keywords);
    console.log("Before try");
    try {
      console.log("after try and before fetch");

      const data = await fetchVideoUrl({
        video_link: videoUrl,
        internet_enable: true,
        keywords,
        writing_style: writingStyle || "",
        font_style: "Arial",
        voiceId: voiceId || "",
        prompt: "",
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

  return (
    <div className="pb-20">
      {/* Select Story Type */}
      {/* <StorySelector /> */}
      <div className="flex flex-col pt-36 items-center justify-center">
        <h1 className="text-5xl">Select a Story Type</h1>
        <h2 className="mt-6 text-neutral-400 text-sm">
          You decide how you want your stories created.
        </h2>
        <h2 className="text-neutral-400 text-sm">
          Let <span className="text-white">AI</span> create them, get
          <span className="text-white"> Current News</span>, pull from a
          <span className="text-white"> Subreddit</span>, or
          <span className="text-white"> enter them yourself</span>.
        </h2>
      </div>
      <div className="flex items-center justify-center my-5 space-x-5">
        <Select onValueChange={(value) => setWritingStyle(value)}>
          <SelectTrigger className="w-[180px] outline-[#4bf05b]">
            <SelectValue placeholder="Select Style" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Motivational">Motivational Stories</SelectItem>
              <SelectItem value="Fun_Facts">Fun Facts</SelectItem>
              <SelectItem value="Scary_Stories">Scary Stories</SelectItem>
              <SelectItem value="Relationship_Drama">
                Relationship Drama
              </SelectItem>
              <SelectItem value="Success_Grindset">Success Grindset</SelectItem>
              <SelectItem value="Bedtime_Stories">Bedtime Stories</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>or</div>
        <div className="relative flex items-center overflow-hidden">
          <Image
            src="/search-web.png"
            width={20}
            height={20}
            alt="Search"
            className="absolute left-3"
          />
          <Input
            placeholder="Enter Keywords"
            type="text"
            onChange={handleKeywordChange}
            className="input-field pl-10 text-white focus:border-[#4bf05b] focus:outline-none"
          />
        </div>

      </div>
      <div>
        <h1 className="flex items-center justify-center font-bold text-sm">
          or{" "}
          <span className="ml-2 font-normal hover:underline hover:cursor-pointer">
            enter each story manually
          </span>
        </h1>
      </div>

      {/* Video Backgrounds */}
      {/* <VideoBackgrounds /> */}
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

      {/* Fonts */}
      {/* <FontSelector /> */}
      <div className="flex flex-col pt-36 items-center justify-center">
        <h1 className="text-5xl">Select your Fonts</h1>
        <h2 className="mt-6 text-neutral-400 text-sm">
          You can select multiple fonts to be used in your Series.
        </h2>
        <h2 className="text-neutral-400 text-sm">
          Selected fonts will be chosen at random per video.
        </h2>

        <div className="mt-4">
          <input
            type="color"
            id="color-picker"
            value={selectedColor}
            onChange={handleColorChange}
            className="mr-2"
          />
          <label
            htmlFor="color-picker"
            className="font-bold leading-none text-xl"
          >
            Color
          </label>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-5 mt-10 items-center justify-center">
            {terms.map((term) => (
              <div key={term.id} className="flex items-center space-x-2">
                <Checkbox id={`terms-${term.id}`} />
                <label
                  htmlFor={`terms-${term.id}`}
                  className="text-sm font-extrabold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  style={{ color: selectedColor }}
                >
                  {term.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Series */}
      {/* <VoiceSelector /> */}
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
            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              {/* <button className="mr-4 text-white text-2xl">▶</button> */}
              <ReactAudioPlayer
                src={"/voice/male_voice_1.mp3"} // Replace with your dynamic video URL
                controls
                className="pr-4 w-32"
              />
              <span className="flex-1">
                {"Matthew"} ({"Male"})
              </span>
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedVoices["Matthew" as keyof SelectedVoices]}
                onChange={() => toggleVoice("Matthew" as keyof SelectedVoices)}
              />
              <span>Use Voice</span>
            </div>

            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              {/* <button className="mr-4 text-white text-2xl">▶</button> */}
              <ReactAudioPlayer
                src={"/voice/female_voice_1.mp3"} // Replace with your dynamic video URL
                controls
                className="pr-4 w-32"
              />
              <span className="flex-1">
                {"Joanna"} ({"Female"})
              </span>
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedVoices["Joanna" as keyof SelectedVoices]}
                onChange={() => toggleVoice("Joanna" as keyof SelectedVoices)}
              />
              <span>Use Voice</span>
            </div>

            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              {/* <button className="mr-4 text-white text-2xl">▶</button> */}
              <ReactAudioPlayer
                src={"/voice/female_voice_2.mp3"} // Replace with your dynamic video URL
                controls
                className="w-32 pr-4"
              />
              <span className="flex-1">
                {"Salli"} ({"Female"})
              </span>
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedVoices["Salli" as keyof SelectedVoices]}
                onChange={() => toggleVoice("Salli" as keyof SelectedVoices)}
              />
              <span>Use Voice</span>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <h3 className="text-xl font-bold italic my-7 text-green-500">
                Premium AI Voices
              </h3>
            </div>
            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              <ReactAudioPlayer
                src={"/voice/male_voice_2.mp3"} // Replace with your dynamic video URL
                controls
                className="pr-4 w-32"
              />
              <span className="flex-1 text-green-500">
                {"Onyx"} ({"Male"})
              </span>
              <span className="text-green-500 text-sm italic ml-0">
                available after starting
              </span>
            </div>

            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              <ReactAudioPlayer
                src={"/voice/male_voice_3.mp3"} // Replace with your dynamic video URL
                controls
                className="pr-4 w-32"
              />
              <span className="flex-1 text-green-500">
                {"Echo"} ({"Male"})
              </span>
              <span className="text-green-500 text-sm italic ml-0">
                available after starting
              </span>
            </div>

            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              <ReactAudioPlayer
                src={"/voice/female_voice_3.mp3"} // Replace with your dynamic video URL
                controls
                className="pr-4 w-32"
              />
              <span className="flex-1 text-green-500">
                {"Nova"} ({"Female"})
              </span>
              <span className="text-green-500 text-sm italic ml-2">
                available after starting
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Button onClick={handleCreateSeries} disabled={isLoading}>
            {isLoading ? "Generating..." : "Create Series"}
          </Button>
        </div>
      </div>
    </div>
  );
}
