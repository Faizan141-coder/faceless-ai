import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b w-full py-4 px-5 flex justify-between">
      <Link href={'/'}>
        <div className="flex items-center space-x-2">
          <Image
            src="/faceless_logo.png"
            width={35}
            height={35}
            alt="Faceless Logo"
          />
          <h1 className="text-lg">faceless.video</h1>
        </div>
      </Link>
      <div className="flex items-center space-x-8 text-lg">
        <Link href={"/pricing"}>
          <h1 className="font-bold text-[#a6a8ab] hover:underline">Pricing</h1>
        </Link>
        <Link href={"/about"}>
          <h1 className="font-bold text-[#a6a8ab] hover:underline">About</h1>
        </Link>
        <Link href={"/sign-in"}>
          <h1 className="font-bold text-[#a6a8ab] hover:underline">Sign in</h1>
        </Link>
        <Button className="bg-[#4bf05b] uppercase text-black font-semibold px-6 hover:bg-[#3fc34d]">
          Free Trial
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
