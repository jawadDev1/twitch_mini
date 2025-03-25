import { Button } from "@/components/ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-3 ">
      ONLY AUTHENTICATED USERS CAN SEE THIS!!!!!!
    </div>
  );
}
