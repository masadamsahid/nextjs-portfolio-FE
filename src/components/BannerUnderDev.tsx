"use client";

import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

const BannerUnderDev = () => {
  const [show, setShow] = useState(true);
  return show && (
    <div className="p-2 flex justify-center items-center bg-gradient-to-tl from-green-400 via-teal-400 to-sky-500 text-xs text-center w-full relative">
      <div className="">
        This site is not completed yet and currently under development.
      </div>
      <button className="absolute right-10 text-base bg-transparent text-white ml-auto">
        <MdOutlineClose/>
      </button>
    </div>
  );
};

export default BannerUnderDev;