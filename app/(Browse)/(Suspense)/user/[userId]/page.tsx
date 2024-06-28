import { MdVerified } from "react-icons/md";

import Header from "@/components/Header";
import { db } from "@/lib/db";

const UserPage = async ({
  params,
}: {
  params: {
    userId: string;
  };
}) => {
  const user = await db.user.findUnique({
    where: {
      userId: params.userId,
    },
  });

  return (
    <>
      <div
        className="relative bg-fixed h-[360px]"
        style={
          user?.Banner
            ? { backgroundImage: `url(${user.Banner})` }
            : { background: "linear-gradient(to bottom,#555555, transparent )" }
        }
      >
        <div className="absolute z-30 ml-6 space-y-2 bottom-16">
          <p className="flex items-center gap-2">
            <MdVerified className="size-8 text-blue-500" />
            <span className="text-sm font-semibold">Terverifikasi</span>
          </p>
          <h1 className="text-6xl font-extrabold lg:text-8xl md:text-7xl">
            {user?.name}
          </h1>
        </div>
        {/* edgestoreButtons */}
      </div>
      <Header className="bg-transparent -mt-[360px]" />
      <div className="mt-[296px]">AuthorAudio</div>
    </>
  );
};

export default UserPage;
