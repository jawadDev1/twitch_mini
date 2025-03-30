import { db } from "@/db";
import { getSelf } from "./auth-service";
import { throwError } from "../lib/utils";

export const getFollowedUsers = async () => {
  try {
    const self = await getSelf();

    const followedUsers = await db.follow.findMany({
      where: {
        followerId: self.id,
      },
      include: {
        following: true,
        follower: true,
      },
    });

    return followedUsers;
  } catch (error) {
    return [];
  }
};

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();

    const OtherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!OtherUser) {
      throw new Error("User not found");
    }

    if (self.id == OtherUser.id) return true;

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: OtherUser.id,
      },
    });

    return !!existingFollow;
  } catch (error) {
    return false;
  }
};

export const followUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  if (otherUser.id === self.id) {
    throw new Error("Cannot follow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (existingFollow) {
    throw new Error("Already Following");
  }

  const follow = await db.follow.create({
    data: {
      followerId: self.id,
      followingId: otherUser.id,
    },
    include: {
      following: true,
      follower: true,
    },
  });

  return follow;
};

export const unfollowUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throwError("User does not exist");
  }

  if (otherUser?.id == self.id) {
    throwError("Cannot unfollow yourselft");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser?.id,
    },
  });

  if (!existingFollow) throwError("Not Following");

  const follow = await db.follow.delete({
    where: {
      id: existingFollow?.id,
    },
    include: {
      following: true,
    },
  });

  return follow;
};
