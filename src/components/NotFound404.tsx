import Image from "next/image";

const NotFound404 = () => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center min-h-screen justify-center">
      <h1 className="text-4xl font-bold">
        Sorry
      </h1>
      <Image
        src="/404-Error.png" alt="Not Found - 404 Error"
        width={400}
        height={400}
      />
      <h1 className="text-2xl font-semibold">Not Found</h1>
    </div>
  );
};

export default NotFound404;