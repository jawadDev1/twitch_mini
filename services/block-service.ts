import { db } from "@/db";
import { getSelf } from "./auth-service";
import { throwError } from "@/lib/utils";

export const isBlocked = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throwError("User not found");
  }

  if (otherUser?.id === self.id) {
    return false;
  }

  const existingBlock = await db.block.findFirst({
    where: {
      blockerId: otherUser?.id,
      blockedId: self.id,
    },
  });

  return !!existingBlock;
};

export const blockUser = async (id: string) => {
  const self = await getSelf();

  if (self.id == id) {
    throwError("Cannot block yourself");
  }

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: otherUser?.id,
      },
    },
  });

  if (existingBlock) {
    throw new Error("Alread blokced");
  }

  const block = await db.block.create({
    data: {
      blockerId: self.id,
      blockedId: otherUser.id,
    },
    include: {
      blocked: true,
    },
  });

  return block;
};

export const unBlock = async (id: string) => {
  const self = await getSelf();

  if (id === self.id) {
    throw new Error("Can not block yourself");
  }

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: otherUser?.id,
      },
    },
  });

  if (!existingBlock) {
    throw new Error("Can not unblock");
  }

  const unBlock = await db.block.delete({
    where: {
      id: existingBlock.id,
    },
    include: {
      blocked: true,
    },
  });

  return unBlock;
};
