import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
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
      <div className="flex my-5">
        <Select>
          <SelectTrigger className="w-[180px] outline-[#4bf05b]">
            <SelectValue placeholder="Select a fruit" />
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
      </div>
      <div>
        <h1 className="font-bold">
          or{" "}
          <span className="ml-2 font-normal hover:underline hover:cursor-pointer">
            enter each story manually
          </span>
        </h1>
      </div>
    </div>
  );
}
