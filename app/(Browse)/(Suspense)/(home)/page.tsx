import Header from "@/components/Header";
import { db } from "@/lib/db";

export default async function Home() {
  return (
    <>
      <Header className="bg-neutral-900" />
      <div className="ml-2 space-y-4">
        {/* playlist */}
        <h1 className="mt-4 text-xl font-bold md:text-2xl text-primary">
          Playlist Spotlagu
        </h1>
      </div>
    </>
  );
}
