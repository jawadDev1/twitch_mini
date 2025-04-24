import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { ToggleCardSkelaton } from "./page";

const ChatLoading = () => {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-10 w-[200px]" />
      <div className="space-y-4">
        <ToggleCardSkelaton />
      </div>
    </div>
  );
};

export default ChatLoading;
