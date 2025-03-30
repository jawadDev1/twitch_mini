import { isFollowingUser } from "@/services/follow-service";
import { getUserByUsername } from "@/services/user-service";
import { notFound } from "next/navigation";
import React from "react";
import Action from "./_components/actions";

interface UsernameProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UsernameProps) => {
  const { username } = params;
  const user = await getUserByUsername(username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>User: {user.username}</p>

      <p>isFollowing: {`${isFollowing}`}</p>

      <Action isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};

export default UserPage;
