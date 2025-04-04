import { getSelf } from "@/services/auth-service";
import { geStreamByUserId } from "@/services/stream-service";
import React from "react";
import ToggleCard from "./_components/toggle-card";
import { notFound } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const ChatPage = async () => {
  const self = await getSelf();
  const stream = await geStreamByUserId(self.id);

  if (!stream) {
    notFound();
  }

  return (
    <div className="p-6">
      <div className=" mb-4">
        <h1 className="text-2xl font-bold">Chat Settings</h1>
      </div>
      <div className="space-y-4">
        <ToggleCard
          field={"isChatEnabled"}
          label="Enable chat"
          value={stream.isChatEnabled}
        />
         <ToggleCard
          field={"isChatDelayed"}
          label="Delayed chat"
          value={stream.isChatDelayed}
        />
        <ToggleCard
          field={"isChatFollowersOnly"}
          label="Must be following to chat"
          value={stream.isChatFollowersOnly}
        />
       
      </div>
    </div>
  );
};

export default ChatPage;


export const ToggleCardSkelaton = () => {
    return (
        <Skeleton className="rounded-xl p-10 w-full" />
    )
}