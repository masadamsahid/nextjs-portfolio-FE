import MainLayout from "@/components/layouts/MainLayout";
import UnderConstruction from "@/components/UnderConstruction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { BsDot, BsThreeDots } from "react-icons/bs";
import moment from "moment/moment";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/shadcn/ui/card";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { RiBarChartFill, RiChat1Line } from "react-icons/ri";
import { BLOGS, DEFAULT_BLOG_IMG } from "@/dummy-data/blogs";


const BlogsPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        
        <div className="flex flex-col">
          
          {/*BLOG PREVIEW CARD*/}
          {BLOGS.map((blog) => (
            <div key={blog.id} className="p-4 flex gap-2 border-b-[.5px] border-neutral-700/30">
              <div className="">
                <Avatar className="w-10 h-10 bg-blue-600">
                  <AvatarImage/>
                  <AvatarFallback className="bg-blue-600 font-bold">
                    {blog.author.name?.split(" ").map((w) => w[0]).join("").toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              
              <div className="flex flex-col gap-4 relative">
                <div className="flex gap-1 items-center">
                  <h2 className="font-semibold text-sm">
                    {blog.author.name}
                  </h2>
                  <p className="flex items-center text-xs text-neutral-500">
                    @{blog.author.username} <BsDot/> {moment(blog.created_at.toISOString()).fromNow()}
                  </p>
                </div>
                
                <Link href={`/${blog.slug}`} className="group">
                  <Card className="bg-transparent rounded-lg border-[.5px] border-neutral-700/70 overflow-hidden text-white">
                    <CardHeader className="p-0 border-b-[.5px] border-neutral-700/30">
                      <img src={blog.img_url || DEFAULT_BLOG_IMG} alt={blog.title} title={blog.title}/>
                    </CardHeader>
                    <CardContent className="p-3 group-hover:bg-white/5">
                      <h1 className="text-md font-semibold">
                        {blog.title}
                      </h1>
                      <p className="text-xs font-light text-neutral-500">
                        {blog.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                
                <div className="flex justify-between items-center">
                  <Link href="#" className="flex gap-1 items-center text-xs text-neutral-500 group hover:text-blue-500">
                    <div className="text-base font-light p-2 rounded-full group-hover:text-blue-500 group-hover:bg-blue-500/10">
                      <RiChat1Line/>
                    </div>
                    20k
                  </Link>
                  
                  <Link href="#" className="flex gap-1 items-center text-xs text-neutral-500 group hover:text-green-700">
                    <div className="text-base font-light p-2 rounded-full group-hover:text-green-700 group-hover:bg-green-700/10">
                      <AiOutlineShareAlt/>
                    </div>
                    20k
                  </Link>
                  
                  <Link href="#" className="flex gap-1 items-center text-xs text-neutral-500 group hover:text-pink-600">
                    <div className="text-base font-light p-2 rounded-full group-hover:text-pink-600 group-hover:bg-pink-600/10">
                      <AiOutlineHeart/>
                    </div>
                    20k
                  </Link>
                  
                  <Link href="#" className="flex gap-1 items-center text-xs text-neutral-500 group hover:text-blue-500">
                    <div className="text-base font-light p-2 rounded-full group-hover:text-blue-500 group-hover:bg-blue-500/10">
                      <RiBarChartFill/>
                    </div>
                    200k
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </MainLayout>
  );
};

export default BlogsPage;