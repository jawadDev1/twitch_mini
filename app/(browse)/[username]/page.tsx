import { isFollowingUser } from "@/services/follow-service";
import { getUserByUsername } from "@/services/user-service";
import { notFound } from "next/navigation";
import React from "react";
import Action from "./_components/actions";
import { isBlocked } from "@/services/block-service";

interface UsernameProps {
  params: Promise<{
    username: string;
  }>;
}

const UserPage = async (props: UsernameProps) => {
  const params = await props.params;
  const { username } = params;
  const user = await getUserByUsername(username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlockedByThisUser = await isBlocked(user.id);

  // if (isBlockedByThisUser) {
  //   notFound();
  // }

  return (
    <div className="flex flex-col gap-y-4">
      <p>User: {user.username}</p>

      <p>isFollowing: {`${isFollowing}`}</p>

      <Action isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};

export default UserPage;
