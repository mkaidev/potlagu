import Header from "@/components/Header";
import { db } from "@/lib/db";

export default async function Home() {
  return (
    <>
      <Header className="bg-neutral-900" />
      Home
    </>
  );
}
