const SuspenseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      Sidebar
      {children}
      CustomPlay
    </>
  );
};

export default SuspenseLayout;
