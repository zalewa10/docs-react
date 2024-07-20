import AddDocumentsBtn from "@/components/AddDocumentsBtn";
import Header from "@/components/Header";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");
  const document = [];
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification list
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      <div>
        {document.length > 0 ? (
          <div></div>
        ) : (
          <div className="document-list-empty">
            <Image
              src="/assets/icons/doc.svg"
              className="mx-auto"
              width={40}
              height={40}
              alt="Empty document"
            />

            <AddDocumentsBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
