import MainLayout from "@/components/layouts/MainLayout";
import { BLOGS, DEFAULT_BLOG_IMG } from "@/dummy-data/blogs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/shadcn/ui/hover-card";
import { BsDot } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/shadcn/ui/tooltip";
import moment from "moment/moment";
import MarkdownContent from "@/components/markdown/MarkdownContent";

const BlogDetailPage = (
  { params, searchParams }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
) => {
  
  const blog = BLOGS.find((blog) => blog.slug === params.slug);
  
  return (
    <MainLayout>
      <div className="">
        <div className="p-4 flex flex-col gap-4">
          <h1 className="text-[3.5rem] leading-none font-extrabold">
            {blog?.title}
          </h1>
          
          <div className="text-xs font-semibold text-neutral-500">
            <p>
              Authored by&nbsp;
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer hover:text-neutral-300">
                  {blog?.author.name}
                </HoverCardTrigger>
                <HoverCardContent className="p-2 flex items-center gap-2 bg-black border-[.5px] border-neutral-700/30 text-white">
                  <div>
                    <Avatar>
                      <AvatarImage/>
                      <AvatarFallback className="font-bold bg-blue-500 text-yellow-300">
                        {blog?.author.name?.split(" ").map((w) => w[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div>
                    <div className="flex">
                      <h1 className="font-bold">
                        {blog?.author.name}
                      </h1>
                      <div className="text-neutral-500 flex items-center p-0">
                        <BsDot/>
                      </div>
                      <p className="text-neutral-500">
                        @{blog?.author.username}
                      </p>
                    </div>
                    <div className="text-neutral-400">
                      {blog?.author.email}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>&nbsp;
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="hover:text-neutral-300">
                    {moment(blog?.created_at).fromNow()}
                  </TooltipTrigger>
                  <TooltipContent className="bg-black border-[.5px] border-neutral-700/30 text-white font-light">
                    <p>{moment(blog?.created_at).format("ddd, DD MMM YYYY")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {blog?.updated_at.toISOString() !== blog?.created_at.toISOString() && (
                <>
                  &nbsp;| Edited&nbsp;
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="hover:text-neutral-300">
                        {moment(blog?.updated_at).fromNow()}
                      </TooltipTrigger>
                      <TooltipContent className="bg-black border-[.5px] border-neutral-700/30 text-white font-light">
                        <p>{moment(blog?.updated_at).format("ddd, DD MMM YYYY")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              )}
            </p>
          </div>
          
          <img
            className="border-[.5px] border-neutral-700 rounded-md"
            src={blog?.img_url || DEFAULT_BLOG_IMG}
            alt={blog?.title}
            title={blog?.title}
          />
          
          <div className="p-2 rounded-md text-xs text-neutral-200 italic font-light font-serif bg-white/10">
            {blog?.desc}
          </div>
          
          <article className="prose prose-invert prose-blue w-full mx-auto p-0">
            <MarkdownContent>
              {blog?.body}
            </MarkdownContent>
          </article>
          
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetailPage;