import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import { Button } from "@/components/shadcn/ui/button";
import { Github, Instagram, Linkedin, LucideIcon } from "lucide-react";
import Link from "next/link";
import { BsBriefcase, BsEnvelopeAt, BsFillPatchCheckFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { HiLocationMarker } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { useRouter } from "next/router";
import { FaCakeCandles } from "react-icons/fa6";
import MyServices from "@/components/MyServices";
import MyAchievements from "@/components/MyAchievements";
import MyTechStack from "@/components/MyTechStack";
import MyCertificates from "@/components/MyCertificates";

type Socmeds = {
  title: string;
  url: string;
  icon: LucideIcon;
}

const SOCMEDS: Socmeds[] = [
  {
    title: "Github",
    url: 'https://github.com/masadamsahid',
    icon: Github,
  },
  {
    title: "LinkedIn",
    url: 'https://www.linkedin.com/in/masadamsahid',
    icon: Linkedin,
  },
  {
    title: "Instagram",
    url: 'https://instagram.com/masadamsahid',
    icon: Instagram,
  },
];

type MetaBio = {
  title: string;
  value: string;
  icon: IconType;
}

const META_BIOS: MetaBio[] = [
  {
    title: 'Field of Work',
    value: 'Software & Data',
    icon: BsBriefcase,
  },
  {
    title: 'Location',
    value: 'Sleman, Indonesia',
    icon: HiLocationMarker,
  },
  {
    title: 'EMail',
    value: 'masadamsahid@gmail.com',
    icon: BsEnvelopeAt,
  },
  {
    title: 'BoD',
    value: 'Joined for 25 years',
    icon: FaCakeCandles,
  },
];

type ProfileTab = {
  name: string;
  displayName: string;
  content: JSX.Element;
}

const TABS: ProfileTab[] = [
  {
    displayName: "Services",
    name: "services",
    content: <MyServices/>,
  },
  {
    displayName: "Achievements",
    name: "achievements",
    content: <MyAchievements/>,
  },
  // {
  //   displayName: "Skills",
  //   name: "skills",
  // },
  {
    displayName: "Tech Stack",
    name: "tech-stacks",
    content: <MyTechStack/>,
  },
  {
    displayName: "Certificates",
    name: "certificates",
    content: <MyCertificates/>,
  },
];

const ProfilePage = (
  { params, searchParams }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
) => {
  const firstTab = TABS[0].name;
  const qActiveTab = searchParams?.activeTab as string;
  const isActiveTabIncluded = TABS.map(e => e.name).includes(qActiveTab);
  const activeTab = isActiveTabIncluded ? qActiveTab : firstTab;
  
  console.log({ firstTab, qActiveTab, isActiveTabIncluded, activeTab });
  
  const ActiveContent = TABS.find((tab) => tab.name === activeTab)?.content;
  
  return (
    <MainLayout>
      
      {/*TRIED TYPOGRAPHY HERE BUT STILL NOT WORKING*/}
      <article className="p-4 prose max-w-prose">
        <h1>Your Family</h1>
        <h2>Your Mom</h2>
        <h3>Your Dad</h3>
        <p>Your Siblings</p>
        <code>Your Kids</code>
      </article>
      
      <div className="flex flex-col">
        {/*Pre Header*/}
        <div className="p-2">
          <h1 className="text-lg font-extrabold">
            Maulana Adam Sahid
          </h1>
          <p className="text-xs text-neutral-500">
            Software Engineer | Self-Proclaimed Data Enthusiast 👀
          </p>
        </div>
        
        {/*Header*/}
        <div className="flex flex-col">
          <Image
            className="w-full"
            src="/banner-white.png"
            alt="banner"
            width={900}
            height={300}
          />
          <div className="p-4 flex flex-col gap-4 relative">
            <Avatar
              title="Maulana Adam Sahid's image"
              className="w-24 lg:w-32 h-24 lg:h-32 absolute -top-16 outline-4 outline-black outline"
            >
              <AvatarImage
                src="https://media.licdn.com/dms/image/C5603AQE2-ox_80I8Yg/profile-displayphoto-shrink_800_800/0/1619930750668?e=1697673600&v=beta&t=T_BH_KTeVT1arlM-hDFOVF9I49Vn4XDZwMCeTsTalwQ"
                alt="Maulana Adam Sahid's image"
              />
              <AvatarFallback className="text-2xl lg:text-3xl bg-blue-500 font-bold">
                MAS
              </AvatarFallback>
            </Avatar>
            <div className="flex justify-end items-center gap-2">
              {SOCMEDS.map((socmed) => (
                <Link key={socmed.title} href={socmed.url} target='_blank'>
                  <Button title={socmed.title} className="rounded-full w-auto h-full px-2 py-2" variant='outline'>
                    <socmed.icon size={16}/>
                  </Button>
                </Link>
              ))}
              <Button className="bg-white hover:bg-white/90 text-black rounded-full">
                Contacts
              </Button>
            </div>
            
            <div className="flex flex-col gap-0">
              <div className="flex gap-2 items-center text-blue-500">
                <h1 className="font-extrabold text-white">
                  Maulana Adam Sahid
                </h1>
                <BsFillPatchCheckFill/>
              </div>
              <p className="text-neutral-500">@masadamsahid</p>
            </div>
            
            {/*bio*/}
            <div className="text-sm text-gray-300">
              A fresh graduate software engineer specializing in web development with React.js (frontend) and Node.js (backend). Eagers to learn new technologies and collaborate in contributing to exciting projects. I am motivated to grow as a professional and reliable software engineer. Lately got interested in the data science and machine learning field and does some personal projects on them as a hobbyist.
            </div>
            
            <div className="flex flex-wrap gap-4">
              {META_BIOS.map((item) => (
                <div
                  className="flex items-center text-xs text-neutral-500 gap-1"
                  key={item.title}
                >
                  <item.icon/>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/*Tabs*/}
        <div className="flex items-center cursor-pointer">
          {TABS.map((tab) => (
            <Link
              href={`/about?activeTab=${tab.name}`}
              className="hover:bg-white/10 flex-1 transition duration-200"
              key={tab.name}
            >
              <div className="flex flex-col items-center">
                <div className="w-fit relative">
                  <p className="py-4">
                    {tab.displayName}
                  </p>
                  {tab.name === activeTab && <div className="absolute bottom-0 w-full h-1 rounded-full bg-blue-500"></div>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/*Content*/}
        <div className="w-full h-fit mt-0.5 border-y-[.5px] border-gray-700/50">
          {ActiveContent}
        </div>
        
      </div>
    </MainLayout>
  );
};

export default ProfilePage;