import Image from "next/image";
import React from "react";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <div className={cn("flex flex-col gap-2", font.className)}>
      <div className="p-1 flex shrink-0 overflow-hidden items-center justify-center bg-white rounded-full">
        <Image
          src={"/images/spooky.svg"}
          alt="logo"
          width={70}
          height={70}
          className=" size-24 shrink-0"
        />
      </div>

      <h2 className={"text-xl  font-semibold"}>Twitch Mini</h2>

      <p className={"text-lg text-muted-foreground text-center "}>
        Let&apos;s Play
      </p>
    </div>
  );
};

export default Logo;
