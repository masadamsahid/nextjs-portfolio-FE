import React from "react";
import LeftNavigation from "@/components/layouts/LeftNavigation";
import RightSection from "@/components/layouts/RightSection";
import BannerUnderDev from "@/components/BannerUnderDev";

interface MainLayoutProps extends React.PropsWithChildren {}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-black text-white">
      <BannerUnderDev/>
      <div className="flex-1 w-full gap-2 overflow-auto">
        <div className="container flex">
          {/*Left Section*/}
          <LeftNavigation/>
          
          {/*Main Content*/}
          <main className="max-w-prose min-h-[150vh] border-x-[.5px] border-gray-700/50">
            {children}
          </main>
          
          {/*Right Section*/}
          <RightSection/>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;