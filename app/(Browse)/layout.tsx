import { Suspense } from "react";

import Sidebar from "@/components/sidebar/sidebar";
import { db } from "@/lib/db";

const BrowseLayout = async ({ children }: { children: React.ReactNode }) => {
  const playlists = await db.playlist.findMany();

  return (
    <>
      <div className="flex h-full pb-[92px] pr-2">
        <Suspense>
          <Sidebar playlists={playlists} />
        </Suspense>
        <main className="flex-1 w-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900 mt-2 pb-2">
          {children}
        </main>
      </div>
      <Suspense>CustomPlay</Suspense>
    </>
  );
};

export default BrowseLayout;
