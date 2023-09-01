import { Button } from "@/components/shadcn/ui/button";
import {
  SiApollographql,
  SiBootstrap, SiC,
  SiChakraui, SiCplusplus,
  SiCss3, SiExpress, SiGraphql,
  SiHtml5, SiJavascript, SiKoa, SiMongodb, SiMysql, SiNestjs,
  SiNextdotjs,
  SiNodedotjs, SiNumpy, SiPandas, SiPostgresql, SiPrisma, SiPython,
  SiReact,
  SiRedux, SiScikitlearn, SiSequelize,
  SiTailwindcss, SiTensorflow, SiTypescript
} from "react-icons/si";
import { AiFillApi, AiFillDatabase } from "react-icons/ai";
import { FaJava } from "react-icons/fa6";
import { GiPieChart } from "react-icons/gi";
import { RiBarChart2Fill } from "react-icons/ri";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";

const TECH_STACKS = [
  {
    id: 1,
    title: "Programming Languages",
    desc: "",
    techs: [
      {
        id: 1,
        icon: <SiJavascript/>,
        title: "JavaScript",
      },
      {
        id: 2,
        icon: <SiTypescript/>,
        title: "TypeScript",
      },
      {
        id: 3,
        icon: <SiPython/>,
        title: "Python",
      },
      {
        id: 4,
        icon: <FaJava/>,
        title: "Java",
      },
      {
        id: 5,
        icon: <SiC/>,
        title: "C",
      },
      {
        id: 6,
        icon: <SiCplusplus/>,
        title: "C++",
      },
    ],
  },
  {
    id: 2,
    title: "Front End",
    desc: "",
    techs: [
      {
        id: 1,
        icon: <SiHtml5/>,
        title: "HTML",
      },
      {
        id: 2,
        icon: <SiCss3/>,
        title: "CSS",
      },
      {
        id: 3,
        icon: <SiTailwindcss/>,
        title: "TailwindCSS",
      },
      {
        id: 4,
        icon: <SiBootstrap/>,
        title: "Bootstrap",
      },
      {
        id: 5,
        icon: <SiReact/>,
        title: "ReactJs",
      },
      {
        id: 6,
        icon: <SiNextdotjs/>,
        title: "NextJs",
      },
      {
        id: 7,
        icon: <SiChakraui/>,
        title: "Chakra",
      },
      {
        id: 8,
        icon: <SiRedux/>,
        title: "Redux",
      },
    ],
  },
  {
    id: 3,
    title: "Back End",
    desc: "",
    techs: [
      {
        id: 1,
        icon: <AiFillApi/>,
        title: "REST API",
      },
      {
        id: 2,
        icon: <SiGraphql/>,
        title: "GraphQL",
      },
      {
        id: 3,
        icon: <SiNodedotjs/>,
        title: "Node.js",
      },
      {
        id: 4,
        icon: <SiExpress/>,
        title: "Express",
      },
      {
        id: 5,
        icon: <SiNestjs/>,
        title: "NestJs",
      },
      {
        id: 6,
        icon: <SiKoa/>,
        title: "Koa",
      },
      {
        id: 7,
        icon: <SiApollographql/>,
        title: "ApolloServer",
      },
      {
        id: 8,
        icon: <SiSequelize/>,
        title: "Sequelize",
      },
      {
        id: 9,
        icon: <AiFillDatabase/>,
        title: "TypeORM",
      },
      {
        id: 10,
        icon: <SiPrisma/>,
        title: "Prisma",
      },
      {
        id: 11,
        icon: <SiMysql/>,
        title: "MySQL",
      },
      {
        id: 12,
        icon: <SiPostgresql/>,
        title: "PostgreSQL",
      },
      {
        id: 13,
        icon: <SiMongodb/>,
        title: "MongoDB",
      },
    ],
  },
  {
    id: 4,
    title: "Data Science & AI",
    desc: "",
    techs: [
      {
        id: 1,
        icon: <SiNumpy/>,
        title: "NumPy",
      },
      {
        id: 2,
        icon: <SiPandas/>,
        title: "Pandas",
      },
      {
        id: 3,
        icon: <GiPieChart/>,
        title: "Matplotlib",
      },
      {
        id: 4,
        icon: <RiBarChart2Fill/>,
        title: "Seaborn",
      },
      {
        id: 5,
        icon: <SiScikitlearn/>,
        title: "SciKit-Learn",
      },
      {
        id: 6,
        icon: <SiTensorflow/>,
        title: "Tensor Flow",
      },
    ],
  },
];

const MyTechStack = () => {
  return (
    <div className="flex flex-col" id="#">
      {TECH_STACKS.map((ts) => (
        <div className="p-4 flex flex-col gap-2 border-b-[.5px] border-neutral-700/30">
          <h1 className="font-bold text-xl font-mono">{ts.title}</h1>
          <div className="flex gap-2 flex-wrap">
            {ts.techs.map((t) => (
              <Button key={t.id} className="hover:bg-blue-600">
                {t.icon}&nbsp;{t.title}
              </Button>
            ))}
          </div>
        </div>
      ))}
      <BackToTop/>
    </div>
  );
};

export default MyTechStack;