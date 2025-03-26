"use client";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/user-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  const pathname = usePathname();

  const { collapsed } = useSidebar((state) => state);

  const href = `/${username}`;
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant={"ghost"}
      className={cn("w-full h-12 justify-start", {
        "justify-center": collapsed,
        "bg-accent": isActive,
      })}
    >
      <Link href={href}>
        <div
          className={cn("flex items-center w-full gap-x-4", {
            "justify-center": collapsed,
          })}
        >
          <UserAvatar
            imageUrl={imageUrl}
            username={username}
            isLive={isLive}
            showBadge={true}
          />
        </div>
      </Link>
    </Button>
  );
};

export default UserItem;
