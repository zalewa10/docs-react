"use server";

import { nanoid } from "nanoid";
import { liveblocks } from "../liveblocks";
import { RoomAccesses } from "@liveblocks/node";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

declare type createDocumentParams = {
  userId: string;
  email: string;
};

export const createDocument = async ({
  userId,
  email,
}: createDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      title: "Untitled",
      email,
    };

    const usersAccesses: RoomAccesses = {
      [email]: ["room:write"],
    };

    const room = await liveblocks.createRoom(roomId, {
      metadata,
      defaultAccesses: ["room:write"],
      usersAccesses,
    });

    revalidatePath("/");
    return parseStringify(room);
  } catch (error) {
    console.error(error);
  }
};

export const getDocument = async ({
  roomId,
  userId,
}: {
  roomId: string;
  userId: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);

    // const hasAccess = Object.keys(room.usersAccesses).includes(userId);

    // if (!hasAccess) {
    //   throw new Error("You do not have access to this document");
    // }

    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened while getting a room: ${error}`);
  }
};
