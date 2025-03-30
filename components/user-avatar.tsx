import { cva, type VariantProps } from "class-variance-authority";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import LiveBadge from "./live-badge";
import { Skeleton } from "./ui/skeleton";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "size-8",
      large: "size-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
}

const UserAvatar = ({
  username,
  imageUrl,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
  const canShowBadge = showBadge && isLive;
  return (
    <div className="relative ">
      <Avatar
        className={cn(
          {
            "ring-2 ring-rose-500 border border-background": canShowBadge,
          },
          avatarSizes({ size })
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>

      {/* {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )} */}
    </div>
  );
};

export default UserAvatar;

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkelaton = ({ size }: UserAvatarSkeletonProps) => {
  <Skeleton className={cn("rounded-full", avatarSizes({ size }))} />;
};
