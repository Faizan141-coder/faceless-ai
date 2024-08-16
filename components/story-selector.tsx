import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import { Input } from "./ui/input";

const StorySelector = () => {
  return (
    <>
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
          <SelectTrigger className="w-[180px] outline-[#6742d9]">
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
            className="input-field pl-10 text-white focus:border-[#6742d9] focus:outline-none"
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
            className="input-field pl-14 text-white focus:border-[#6742d9] focus:outline-none"
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
    </>
  );
};

export default StorySelector;
