import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const images = [
  { id: 1, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "AI Generated ✨" },
  { id: 2, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "Minecraft Parkour" },
  { id: 3, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "Minecraft Night" },
  { id: 4, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "AI Generated ✨" },
  { id: 5, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "AI Generated ✨" },
  { id: 6, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "AI Generated ✨" },
  { id: 7, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "AI Generated ✨" },
  { id: 8, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "AI Generated ✨" },
  { id: 9, src: "/ai-image.jpg", alt: "Photo by Drew Beamer", title: "AI Generated ✨" },
];

export default function Home() {
  return (
    <div>
      {/* Select Story Type */}
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
        <Select>
          <SelectTrigger className="w-[180px] outline-[#4bf05b]">
            <SelectValue placeholder="AI Stories" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
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
            placeholder="Search the Web"
            type="text"
            className="input-field pl-10 text-white focus:border-[#4bf05b] focus:outline-none"
          />
        </div>
        <div>or</div>
        <div className="relative flex items-center overflow-hidden">
          <Image
            src="/reddit.png"
            width={20}
            height={20}
            alt="Reddit"
            className="absolute left-3"
          />
          <span className="absolute left-10 text-white">/r/</span>
          <Input
            placeholder="subreddit"
            type="text"
            className="input-field pl-14 text-white focus:border-[#4bf05b] focus:outline-none"
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
    </div>
  );
}
