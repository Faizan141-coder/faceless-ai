import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="border-b w-full py-4 px-5 flex justify-between">
      <div className="flex items-center space-x-2">
        <Image
          src="/faceless_logo.png"
          width={35}
          height={35}
          alt="Faceless Logo"
        />
        <h1 className="text-lg">faceless.video</h1>
      </div>
      <div className="flex items-center space-x-8 text-lg">
        <h1 className="font-bold text-[#a6a8ab] hover:underline">Pricing</h1>
        <h1 className="font-bold text-[#a6a8ab] hover:underline">About</h1>
        <h1 className="font-bold text-[#a6a8ab] hover:underline">Sign in</h1>
        <Button className="bg-[#4bf05b] uppercase text-black font-semibold px-6 hover:bg-[#3fc34d]">
          Free Trial
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
