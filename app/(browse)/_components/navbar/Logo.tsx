import Image from "next/image";
import React from "react";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 lg:mr-0  shrink-0 lg:flex-shrink">
          <Image
            src={"/images/spooky.svg"}
            alt="Logo"
            height="32"
            width={"32"}
          />
        </div>

        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">GameHub</p>
          <p className="text-xs text-muted-foreground">Let&apos;s Play</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
