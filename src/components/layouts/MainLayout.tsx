import React from "react";
import LeftNavigation from "@/components/layouts/LeftNavigation";
import RightSection from "@/components/layouts/RightSection";

interface MainLayoutProps extends React.PropsWithChildren {}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full h-full bg-black text-white">
      <div className="container min-h-screen flex w-full gap-2">
        {/*Left Section*/}
        <LeftNavigation/>
        
        {/*Main Content*/}
        <main className="flex-1 min-h-[150vh] border-x-[.5px] border-gray-700/50">
          {children}
        </main>
        
        {/*Right Section*/}
        <RightSection/>
      </div>
    </div>
  );
};

export default MainLayout;