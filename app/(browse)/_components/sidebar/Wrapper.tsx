"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/user-sidebar";
import React from "react";

interface WraperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WraperProps) => {
  const { collapsed } = useSidebar((set) => set);

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35]",
        { "w-[70px]": collapsed }
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
