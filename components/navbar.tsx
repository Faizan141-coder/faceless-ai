"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full px-5 flex justify-between bg-white transition-colors duration-300 ${
        scrolled ? "border-b border-[#6742d9]" : "border-b border-white"
      }`}
    >
      <Link href={"/"}>
        <div className="flex items-center">
          <Image src="/icon.png" width={70} height={70} alt="Faceless Logo" />
          <h1 className="text-lg hover:text-[#6742d9] font-bold transition-colors duration-200">
            Vira Vid
          </h1>
        </div>
      </Link>
      <div className="flex items-center space-x-8 text-lg">
        <Link href={"/pricing"}>
          <h1 className="font-bold hover:underline">Pricing</h1>
        </Link>
        <Link href={"/about"}>
          <h1 className="font-bold hover:underline">About</h1>
        </Link>
        <SignedOut>
          <div className="font-bold">
            <SignInButton />
          </div>
        </SignedOut>
        <Button className="uppercase font-semibold px-6">Free Trial</Button>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
