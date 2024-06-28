const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-full pb-[92px] pr-2">
        <main className="flex-1 w-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900 mt-2 pb-2">
          Sidebar
          {children}
          CustomPlay
        </main>
      </div>
    </>
  );
};

export default BrowseLayout;
