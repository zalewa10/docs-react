"use client";

import { createDocument } from "@/lib/actions/room.actions";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

const AddDocumentsBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) {
        router.push(`/documents/${room.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button type="submit" className="bg-blue-400" onClick={addDocumentHandler}>
      <PlusIcon className="mr-2 h-4 w-4" />
      <p className="hidden md:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentsBtn;
