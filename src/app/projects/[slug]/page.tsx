import { FC } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { PROJECTS } from "@/dummy-data/projects";
import MarkdownContent from "@/components/markdown/MarkdownContent";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import NotFound404 from "@/components/NotFound404";
import { Badge } from "@/components/shadcn/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/shadcn/ui/dropdown-menu";
import { BiCopy } from "react-icons/bi";
import CopyLinkDropdownMenuItem from "@/components/CopyLinkDropdownMenuItem";

type UrlParams = {
  slug: string;
}

type SearchParams = { [key: string]: string | string[] | undefined };

type UrlAndQueryParams = {
  params: UrlParams;
  searchParams?: SearchParams;
}

const ProjectDetailPage : FC<UrlAndQueryParams> = ({params, searchParams}) => {
  
  const project = PROJECTS.find((project) => project.slug === params.slug);
  
  return (
    <MainLayout>
      <div className="">
        <div className="p-4 flex flex-col gap-4 relative">
          {!project
            ? (
              <NotFound404/>
            ) : (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger className="dark absolute top-2 right-2 p-2">
                    <BsThreeDots/>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="dark bg-black border-[.5px] border-neutral-700/30" align='end'>
                    <CopyLinkDropdownMenuItem/>
                    <DropdownMenuSeparator className="bg-neutral-700/30" />
                    {project?.link && (
                      <Link href={project?.link} target="_blank">
                        <DropdownMenuItem className="flex gap-2 items-center hover:cursor-pointer">
                          <FiExternalLink/> Demo/View
                        </DropdownMenuItem>
                      </Link>
                    )}
                    {project?.gh_link && (
                      <Link href={project?.gh_link} target="_blank">
                        <DropdownMenuItem className="flex gap-2 items-center hover:cursor-pointer">
                          <SiGithub/> Github
                        </DropdownMenuItem>
                      </Link>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <h1 className="text-[3.5rem] leading-none font-extrabold">
                  {project?.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 items-center">
                  {project.categories.map((c) => (
                    <Link key={c.id} href={`/projects?category=${c.id}`}>
                      <Badge className="rounded-sm bg-blue-500/60 hover:bg-blue-500/40">
                        {c.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
                
                <hr/>
                
                <article className="mt-4 prose prose-invert prose-blue w-full mx-auto p-0">
                  <MarkdownContent>
                    {project.body}
                  </MarkdownContent>
                </article>
              </>
            )
          }
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetailPage;