import LeftNavigation from "@/components/LeftNavigation";
import RightSection from "@/components/RightSection";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full h-full bg-black text-white">
      <div className="container min-h-screen flex w-full gap-2">
        {/*Left Section*/}
        <LeftNavigation/>
        
        {/*Main Content*/}
        <main className="flex-1 min-h-[200vh]">Main</main>
        
        {/*Right Section*/}
        <RightSection/>
      </div>
    </div>
  );
}
