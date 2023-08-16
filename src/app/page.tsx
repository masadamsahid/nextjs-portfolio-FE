import LeftNavigation from "@/components/LeftNavigation";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full h-full bg-black text-white">
      <div className="container min-h-screen flex w-full gap-2">
        {/*Left Section*/}
        <LeftNavigation/>
        
        <main className="flex-1 min-h-[200vh]">Main</main>
        <section className="min-w-[300px]">Right Section</section>
      </div>
    </div>
  );
}
