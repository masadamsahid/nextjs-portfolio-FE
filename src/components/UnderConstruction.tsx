import Image from "next/image";

const UnderConstruction = () => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center min-h-screen justify-center">
      <h1 className="text-4xl font-bold">
        Sorry
      </h1>
      <Image
        src="/under-construction.png" alt="Under Construction"
        width={400}
        height={400}
      />
      <h1 className="text-2xl font-semibold">This page is under construction</h1>
    </div>
  );
};

export default UnderConstruction;