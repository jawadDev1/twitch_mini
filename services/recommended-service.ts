import { db } from "@/db";
import { getSelf } from "./auth-service";
import { User } from "@prisma/client";

export const getRecommended = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch (error) {
    userId = null;
  }

  let users: User[] = [];

  if (userId) {
    users = await db.user.findMany({
      orderBy: {
        createAt: "desc",
      },
      where: {
        AND: [
          {
            NOT: {
              id: userId,
            },
          },
          {
            NOT: {
              followedBy: {
                some: {
                  followerId: userId,
                },
              },
            },
          },
        ],
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createAt: "desc",
      },
    });
  }

  return users;
};
