"use client";
import { useSidebar } from "@/store/user-sidebar";
import { Follow, User } from "@prisma/client";
import React from "react";
import UserItem, { UserItemSkelaton } from "./user-item";

interface FollowingProps {
  data: (Follow & { following: User })[];
}

const Following = ({ data }: FollowingProps) => {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) {
    return null;
  }

  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}

      <ul className="space-y-2 px-2">
        {data.map(({ following }) => (
          <UserItem
            key={following.id}
            username={following.username}
            imageUrl={following.imageUrl}
            isLive={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default Following;

export const FollowingSkelaton = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(3)].map((_, i) => (
        <UserItemSkelaton key={i} />
      ))}
    </ul>
  );
};
