import Room from "@/components/Room";
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Document({ params: { id } }: SearchParamProps) {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/sign-in");

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) redirect("/");

  return (
    <main className="flex w-full flex-col items-center">
      <Room />
    </main>
  );
}
