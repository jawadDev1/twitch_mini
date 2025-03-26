"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/user-sidebar";
import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const matches = useMediaQuery("max-width:1024px");
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return (
    <div
      className={cn("flex-1", {
        "ml-[70px]": collapsed,
        "ml-[70px] lg:ml-60": !collapsed,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
