"use client";

import { useSidebar } from "@/store/user-sidebar";
import { User } from "@prisma/client";
import React from "react";
import UserItem, { UserItemSkelaton } from "./user-item";

interface RecommendedProps {
  data: User[];
}

const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data?.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}

      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default Recommended;

export const RecommendedSkelaton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkelaton key={i} />
      ))}
    </ul>
  );
};
