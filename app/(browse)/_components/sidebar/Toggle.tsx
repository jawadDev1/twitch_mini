"use client";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/user-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import React from "react";
import { Skeleton } from '@/components/ui/skeleton'

const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} className="h-auto p-2" variant={"ghost"}>
              <ArrowRightFromLine className="size-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 pb-2 flex items-center w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onCollapse}
              className="h-auto ml-auto p-2"
              variant={"ghost"}
            >
              <ArrowLeftFromLine className="h-4 w-4 " />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toggle;


export const ToggleSkelaton = () => {
  return (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="size-6" />

    </div>
  )
}