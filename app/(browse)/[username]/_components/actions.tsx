"use client";

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
        .catch((_) => toast.error("Something went wrong"));
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

  return (
    <Button disabled={isPending} onClick={onClick} variant={"primary"}>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default Action;
