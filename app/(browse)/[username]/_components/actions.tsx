"use client";

import { onBlock, onUnBlock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { toast } from "sonner";

interface ActionProps {
  isFollowing: boolean;
  userId: string;
}



const Action = ({ isFollowing, userId }: ActionProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data?.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`Unfollowed Successfully`))
        .catch((_) => toast.error("Something went wrong"));
    });
  };

  const onClick = isFollowing ? handleUnFollow : handleFollow;

  const handleBlock = () => {
    startTransition(() => {
      onUnBlock(userId)
        .then((data) =>
          toast.success(`Blocked the user ${data?.blocked.username}`)
        )
        .catch((error) => toast.error("Something went wrong"));
    });
  };

  

  return (
    <>
      <Button disabled={isPending} onClick={onClick} variant={"primary"}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>

      <Button onClick={handleBlock} disabled={isPending}>
        Block
      </Button>
    </>
  );
};

export default Action;
