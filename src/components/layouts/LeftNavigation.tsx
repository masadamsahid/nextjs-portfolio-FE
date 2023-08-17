import { BsBriefcase, BsBriefcaseFill, BsThreeDots, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import { IoCall } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { IconType } from "react-icons";
import { HiAcademicCap, HiNewspaper, HiOutlineAcademicCap, HiOutlineNewspaper } from "react-icons/hi2";
import { PiCodeFill, PiCodeLight } from "react-icons/pi";
import { FaRegUser, FaUser } from "react-icons/fa";


type Navbar = {
  title: string;
  url: string;
  icon: IconType;
  activeIcon: IconType;
}

const NAVS: Navbar[] = [
  {
    title: "Blogs",
    url: "/blogs",
    icon: HiOutlineNewspaper,
    activeIcon: HiNewspaper,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: PiCodeLight,
    activeIcon: PiCodeFill,
  },
  {
    title: "Educations",
    url: "/educations",
    icon: HiOutlineAcademicCap,
    activeIcon: HiAcademicCap,
  },
  {
    title: "Employments",
    url: "/employments",
    icon: BsBriefcase,
    activeIcon: BsBriefcaseFill,
  },
  {
    title: "About",
    url: "/about",
    icon: FaRegUser,
    activeIcon: FaUser,
  },
];


const LeftNavigation = () => {
  return (
    <section className="min-w-[300px]">
      <div className="sticky top-0 h-screen flex flex-col gap-2">
        <Link href="/" className="text-xl font-bold flex justify-start items-center gap-2 p-4 cursor-pointer">
          <div className="text-3xl">
            <BsTwitter/>
          </div>
          TweetFolio
        </Link>
        <div className="flex flex-col gap-4 w-full p-4">
          {NAVS.map((nav, i) => (
            <Link className="w-fit rounded-full" href={nav.url} key={nav.title}>
              <Button className="rounded-full flex justify-start gap-2 w-fit bg-transparent text-lg font-light p-6 hover:bg-white/10">
                <div>
                  <nav.icon/>
                </div>
                {nav.title}
              </Button>
            </Link>
          ))}
          <Button className="rounded-full flex justify-center items-center gap-2 w-full bg-blue-500 text-lg text-center p-6 hover:bg-white/10">
            <div>
              <IoCall/>
            </div>
            Contact
          </Button>
        </div>
        <div className="p-4 mt-auto">
          <div className="flex justify-start gap-2 p-3 rounded-full hover:bg-white/20 cursor-pointer">
            <Avatar title="Maulana Adam Sahid's image" className="">
              <AvatarImage
                src="https://media.licdn.com/dms/image/C5603AQE2-ox_80I8Yg/profile-displayphoto-shrink_800_800/0/1619930750668?e=1697673600&v=beta&t=T_BH_KTeVT1arlM-hDFOVF9I49Vn4XDZwMCeTsTalwQ"
                alt="Maulana Adam Sahid's image"
              />
              <AvatarFallback className="text-xs bg-blue-500 font-bold">
                MAS
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="text-sm">Maulana Adam Sahid</div>
              <div className="text-xs">@masadamsahid</div>
            </div>
            <div className="flex justify-center items-center ml-auto my-auto">
              <BsThreeDots/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftNavigation;