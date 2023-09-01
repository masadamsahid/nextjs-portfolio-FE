import React from 'react';
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const BackToTop = () => {
  return (
    <div className='p-4 flex flex-col gap-2 items-center justify-center'>
      <p className="text-xs text-neutral-400">
        End of Content
      </p>
      <Link href='#'>
        <Button className="bg-blue-500 hover:bg-blue-500/60">
          <BsFillArrowUpCircleFill/>&nbsp;Back To Top
        </Button>
      </Link>
    </div>
  );
};

export default BackToTop;