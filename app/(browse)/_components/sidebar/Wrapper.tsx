"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/user-sidebar";

import { ToggleSkelaton } from "./Toggle";
import { RecommendedSkelaton } from "./recommended";
import { useIsClient } from "usehooks-ts";

interface WraperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WraperProps) => {
  const isClient = useIsClient();

  const { collapsed } = useSidebar((set) => set);


  if(!isClient) return (
    <aside className={"fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50"}>
        <ToggleSkelaton />
        <RecommendedSkelaton />
    </aside>
  )

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        { "w-[70px]": collapsed }
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
