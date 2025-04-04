"use server";
import { blockUser, unBlock } from "@/services/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  try {
    const blockedUser = await blockUser(id);

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }

    return blockedUser;
  } catch (error) {
    console.log("Error in onblock =====> ", error);
  }
};

export const onUnBlock = async (id: string) => {
  const unBlockedUser = await unBlock(id);

  if (unBlockedUser) {
    revalidatePath(`/${unBlockedUser.blocked.username}`);
  }

  return unBlockedUser;
};
