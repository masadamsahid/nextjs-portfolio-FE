import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full h-full bg-black text-white">
      <div className="container min-h-screen flex w-full gap-2">
        <section className="min-w-[300px]">Left Nav</section>
        <main className="flex-1">Main</main>
        <section className="min-w-[300px]">Right Section</section>
      </div>
    </div>
  );
}
