import { Suspense } from "react";

const SuspenseLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default SuspenseLayout;
