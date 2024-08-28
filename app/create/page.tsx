"use client";

import { fetchVideoUrl } from "@/actions/agent-executor";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

type LoadingState = {
  text: string;
};

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

const loadingStates: LoadingState[] = [
  { text: "Enhancing video quality" },
  { text: "Adding subtitles" },
  { text: "Getting a good script" },
  { text: "Humanising the video" },
  { text: "Making the ai undetectable" },
  { text: "Adding Voice" },
];

const terms = [
  { id: 1, label: "Arial" },
  { id: 2, label: "Times New Roman" },
  { id: 3, label: "Helvetica" },
  { id: 4, label: "Courier" },
  { id: 5, label: "Verdana" },
  { id: 6, label: "Georgia" },
  { id: 7, label: "Palatino" },
  { id: 8, label: "Garamond" },
  { id: 9, label: "Calibri" },
  { id: 10, label: "Tahoma" },
  { id: 11, label: "Trebuchet MS" },
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

export default function Create() {
  const audioPlayerRef1 = useRef<ReactAudioPlayer | null>(null);
  const audioPlayerRef2 = useRef<ReactAudioPlayer | null>(null);
  const audioPlayerRef3 = useRef<ReactAudioPlayer | null>(null);
  const audioPlayerRef4 = useRef<ReactAudioPlayer | null>(null);
  const audioPlayerRef5 = useRef<ReactAudioPlayer | null>(null);
  const audioPlayerRef6 = useRef<ReactAudioPlayer | null>(null);

  const [selectedColor, setSelectedColor] = useState("#6742d9");
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
  const [loadingIndex, setLoadingIndex] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
  const [isPlaying5, setIsPlaying5] = useState(false);
  const [isPlaying6, setIsPlaying6] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState<
    string | number
  >();

  const [writingStyle, setWritingStyle] = useState<string | null>(null);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingIndex((prevIndex) => (prevIndex + 1) % loadingStates.length);
      }, 5000); // Change the text every 5 seconds
    }
    return () => clearInterval(interval); // Cleanup the interval on component unmount or when isLoading changes
  }, [isLoading]);

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
    setPrompt("");
  };

  const handleBackgroundClick = (category?: keyof VideoUrls): void => {
    console.log("Card clicked:", category); // Check if this logs to the console
    if (category) {
      const videoUrl = getRandomUrl(category);
      setVideoUrl(videoUrl);
      setSelectedBackground(category);
      console.log("Selected Video URL:", videoUrl); // Optional: For debugging
    }
  };

  const handleColorChange = (event: any) => {
    setSelectedColor(event.target.value);
  };

  const handlePromptChange = (e: any) => {
    setPrompt(e.target.value);
    setKeywords([""]);
  };

  const handlePlayPause1 = () => {
    if (audioPlayerRef1.current) {
      const audioElement = audioPlayerRef1.current.audioEl.current;
      if (audioElement) {
        if (isPlaying1) {
          audioElement.pause();
        } else {
          audioElement.play();
        }
        setIsPlaying1(!isPlaying1);
      }
    }
  };

  const handlePlayPause2 = () => {
    if (audioPlayerRef2.current) {
      const audioElement = audioPlayerRef2.current.audioEl.current;
      if (audioElement) {
        if (isPlaying2) {
          audioElement.pause();
        } else {
          audioElement.play();
        }
        setIsPlaying2(!isPlaying2);
      }
    }
  };

  const handlePlayPause3 = () => {
    if (audioPlayerRef3.current) {
      const audioElement = audioPlayerRef3.current.audioEl.current;
      if (audioElement) {
        if (isPlaying3) {
          audioElement.pause();
        } else {
          audioElement.play();
        }
        setIsPlaying3(!isPlaying3);
      }
    }
  };

  const handlePlayPause4 = () => {
    if (audioPlayerRef4.current) {
      const audioElement = audioPlayerRef4.current.audioEl.current;
      if (audioElement) {
        if (isPlaying4) {
          audioElement.pause();
        } else {
          audioElement.play();
        }
        setIsPlaying4(!isPlaying4);
      }
    }
  };

  const handlePlayPause5 = () => {
    if (audioPlayerRef5.current) {
      const audioElement = audioPlayerRef5.current.audioEl.current;
      if (audioElement) {
        if (isPlaying5) {
          audioElement.pause();
        } else {
          audioElement.play();
        }
        setIsPlaying5(!isPlaying5);
      }
    }
  };

  const handlePlayPause6 = () => {
    if (audioPlayerRef6.current) {
      const audioElement = audioPlayerRef6.current.audioEl.current;
      if (audioElement) {
        if (isPlaying6) {
          audioElement.pause();
        } else {
          audioElement.play();
        }
        setIsPlaying6(!isPlaying6);
      }
    }
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
    console.log("Prompt: ", prompt);
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
        prompt: prompt || "",
      }); // Call the server action to get the video URL

      console.log("after fetch");

      setVideoUrl(data);
      console.log("after set video");

      setTimeout(() => setIsLoading(false), 45000);

      console.log("URL: ", data);
    } catch (error) {
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className="pb-20">
      {/* Select Story Type */}
      <div className="flex flex-col pt-36 items-center justify-center">
        <h1 className="text-5xl">Select a Story Type</h1>
        <h2 className="mt-6 text-neutral-400 text-sm">
          You decide how you want your stories created.
        </h2>
        <h2 className="text-neutral-400 text-sm">
          Let <span className="text-[#6742d9] font-semibold">AI</span> create
          them, get
          <span className="text-[#6742d9] font-semibold"> Current News</span>,
          pull from a
          <span className="text-[#6742d9] font-semibold"> Subreddit</span>, or
          <span className="text-[#6742d9] font-semibold">
            {" "}
            enter them yourself
          </span>
          .
        </h2>
      </div>
      <div className="flex items-center justify-center my-5 space-x-5">
        <Select onValueChange={(value) => setWritingStyle(value)}>
          <SelectTrigger className="w-[180px] outline-[#6742d9]">
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
          <Globe
            fill="white"
            size={30}
            className="absolute left-2 text-black"
            strokeWidth={1.3}
          />
          <Input
            placeholder="Enter Keywords"
            type="text"
            value={keywords || ""}
            onChange={handleKeywordChange}
            className="input-field pl-10 focus:border-[#6742d9] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex items-center justify-center font-bold text-sm">
          or{" "}
          <span className="ml-2 font-normal hover:underline hover:cursor-pointer">
            enter a prompt
          </span>
        </h1>
        <Input
          placeholder="Enter Custom Prompt"
          type="text"
          value={prompt || ""}
          onChange={handlePromptChange}
          className="input-field mt-5 w-96 focus:border-[#6742d9] focus:outline-none"
        />
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
              className="text-center w-[350px] h-[220px] cursor-pointer"
              onClick={() => handleBackgroundClick(image.category)}
            >
              <h1 className="font-bold py-2">{image.title}</h1>
              <AspectRatio className="w-[350px] h-[220px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`rounded-md object-cover
                  ${
                    selectedBackground === image.category
                      ? "border-4 border-[#6742d9]"
                      : "border border-transparent"
                  }`}
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
              <button
                onClick={handlePlayPause1}
                className="p-3 mr-3 border border-white rounded-full"
              >
                {isPlaying1 ? <Pause fill="white" /> : <Play fill="white" />}
              </button>
              <ReactAudioPlayer
                src={"/voice/male_voice_1.mp3"} // Replace with your dynamic video URL
                controls={false}
                ref={audioPlayerRef1}
                onEnded={() => setIsPlaying1(false)}
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
              <button
                onClick={handlePlayPause2}
                className="p-3 mr-3 border border-white rounded-full"
              >
                {isPlaying2 ? <Pause fill="white" /> : <Play fill="white" />}
              </button>
              <ReactAudioPlayer
                src={"/voice/female_voice_1.mp3"} // Replace with your dynamic video URL
                controls={false}
                ref={audioPlayerRef2}
                onEnded={() => setIsPlaying2(false)}
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
              <button
                onClick={handlePlayPause3}
                className="p-3 mr-3 border border-white rounded-full"
              >
                {isPlaying3 ? <Pause fill="white" /> : <Play fill="white" />}
              </button>
              <ReactAudioPlayer
                src={"/voice/female_voice_2.mp3"} // Replace with your dynamic video URL
                controls={false}
                ref={audioPlayerRef3}
                onEnded={() => setIsPlaying3(false)}
                className="pr-4 w-32"
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
              <h3 className="text-xl font-bold italic my-7 text-[#6742d9]">
                Premium AI Voices
              </h3>
            </div>
            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              <button
                onClick={handlePlayPause4}
                className="p-3 mr-3 border border-white rounded-full"
              >
                {isPlaying4 ? <Pause fill="white" /> : <Play fill="white" />}
              </button>
              <ReactAudioPlayer
                src={"/voice/male_voice_2.mp3"} // Replace with your dynamic video URL
                controls={false}
                ref={audioPlayerRef4}
                onEnded={() => setIsPlaying4(false)}
                className="pr-4 w-32"
              />
              <span className="flex-1 text-[#6742d9]">
                {"Onyx"} ({"Male"})
              </span>
              <span className="text-[#6742d9] text-sm italic ml-0">
                available after starting
              </span>
            </div>

            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              <button
                onClick={handlePlayPause5}
                className="p-3 mr-3 border border-white rounded-full"
              >
                {isPlaying5 ? <Pause fill="white" /> : <Play fill="white" />}
              </button>
              <ReactAudioPlayer
                src={"/voice/male_voice_3.mp3"} // Replace with your dynamic video URL
                controls={false}
                ref={audioPlayerRef5}
                onEnded={() => setIsPlaying5(false)}
                className="pr-4 w-32"
              />
              <span className="flex-1 text-[#6742d9]">
                {"Echo"} ({"Male"})
              </span>
              <span className="text-[#6742d9] text-sm italic ml-0">
                available after starting
              </span>
            </div>

            <div className="flex items-center p-3 border border-gray-700 rounded-lg w-full">
              <button
                onClick={handlePlayPause6}
                className="p-3 mr-3 border border-white rounded-full"
              >
                {isPlaying6 ? <Pause fill="white" /> : <Play fill="white" />}
              </button>
              <ReactAudioPlayer
                src={"/voice/female_voice_3.mp3"} // Replace with your dynamic video URL
                controls={false}
                ref={audioPlayerRef6}
                onEnded={() => setIsPlaying6(false)}
                className="pr-4 w-32"
              />
              <span className="flex-1 text-[#6742d9]">
                {"Nova"} ({"Female"})
              </span>
              <span className="text-[#6742d9] text-sm italic ml-2">
                available after starting
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <LoadingButton onClick={handleCreateSeries} loading={isLoading}>
            {isLoading ? loadingStates[loadingIndex].text : "Create Series"}
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}
