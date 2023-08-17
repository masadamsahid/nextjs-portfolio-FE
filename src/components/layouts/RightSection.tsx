import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { Separator } from "@/components/shadcn/ui/separator";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import { BsCodeSlash, BsDot } from "react-icons/bs";
import moment from "moment/moment";
import { Button } from "@/components/shadcn/ui/button";

type BlogPreview = {
  id: number;
  title: string;
  slug: string;
  viewCount: number;
  thumbImg?: string;
  createdAt: Date;
}

const DUMMY_POPULAR_BLOGS: BlogPreview[] = [
  {
    id: 1,
    title: "Blog 1",
    slug: "my-blog-1",
    viewCount: 91234,
    createdAt: new Date("2022-03-25T12:00:00+07:00"),
  },
  {
    id: 2,
    title: "Blog 2",
    slug: "my-blog-2",
    viewCount: 41928,
    createdAt: new Date("2022-08-24T19:00:00+07:00"),
  },
  {
    id: 3,
    title: "Blog 3",
    slug: "my-blog-3",
    viewCount: 11234,
    createdAt: new Date("2023-06-11T16:40:00+07:00"),
  },
  {
    id: 4,
    title: "Blog 4",
    slug: "my-blog-4",
    viewCount: 6758,
    createdAt: new Date("2022-01-25T12:00:00+07:00"),
  },
  {
    id: 5,
    title: "Blog 5",
    slug: "my-blog-5",
    viewCount: 2432,
    createdAt: new Date("2023-08-17T04:00:00+07:00"),
  },
];

type ProjectPreview = {
  id: number;
  title: string;
  slug: string;
  viewCount: number;
  thumbImg?: string;
  createdAt: Date;
}

const DUMMY_POPULAR_PROJECTS: ProjectPreview[] = [
  {
    id: 1,
    title: "Project 1",
    slug: "my-project-1",
    viewCount: 91234,
    createdAt: new Date("2022-03-25T12:00:00+07:00"),
  },
  {
    id: 2,
    title: "Project 2",
    slug: "my-project-2",
    viewCount: 41928,
    createdAt: new Date("2022-08-24T19:00:00+07:00"),
  },
  {
    id: 3,
    title: "Project 3",
    slug: "my-project-3",
    viewCount: 11234,
    createdAt: new Date("2023-06-11T16:40:00+07:00"),
  },
  {
    id: 4,
    title: "Project 4",
    slug: "my-project-4",
    viewCount: 6758,
    createdAt: new Date("2022-01-25T12:00:00+07:00"),
  },
  {
    id: 5,
    title: "Project 5",
    slug: "my-project-5",
    viewCount: 2432,
    createdAt: new Date("2023-08-17T04:00:00+07:00"),
  },
];

const RightSection = () => {
  return (
    <section className="min-w-[300px]">
      <div className="sticky -top-80 min-h-fit h-screen flex flex-col gap-4 p-4">
        <Card className="bg-transparent text-white border-gray-600/30">
          <CardHeader className="p-4">
            <CardTitle className="text-md">Statistics</CardTitle>
            {/*<CardDescription>Card Description</CardDescription>*/}
          </CardHeader>
          <CardContent className="p-4 pt-0 text-xs">
            <div className="flex justify-center items-center gap-4 border-gray-600/30 border p-2 rounded-md">
              <div className="flex flex-col text-center">
                <p className="text-lg">21</p>
                <p>Blogs</p>
              </div>
              <Separator className="h-8" orientation="vertical" />
              <div className="flex flex-col text-center">
                <p className="text-lg">8</p>
                <p>Projects</p>
              </div>
              <Separator className="h-8" orientation="vertical" />
              <div className="flex flex-col text-center">
                <p className="text-lg">5</p>
                <p>Services</p>
              </div>
            </div>
            <div></div>
          </CardContent>
        </Card>
        
        <Card className="bg-transparent text-white border-gray-600/30">
          <CardHeader className="p-4">
            <CardTitle className="text-md">Popular Blogs</CardTitle>
            {/*<CardDescription>Card Description</CardDescription>*/}
          </CardHeader>
          <CardContent className="p-0">
            {DUMMY_POPULAR_PROJECTS.map((blog) => (
              <Link
                href={`/blogs/${blog.slug}`}
                className="flex gap-2 px-4 py-2 hover:bg-white/10"
                key={blog.id}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-sm">{blog.title}</p>
                  <div className="flex items-center gap-1 text-xs text-neutral-600">
                    <p className="flex items-center gap-1">
                          <span className="text-sm">
                            <AiFillEye/>
                          </span>
                      {blog.viewCount}
                    </p>
                    <BsDot/>
                    <p>
                      {moment(blog.createdAt.toISOString()).fromNow()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
          <CardFooter className="p-0">
            <Link
              className="w-full hover:bg-white/10 rounded-b-md"
              href='/blogs?sortBy=popularity'
            >
              <Button variant='link' className="w-full text-blue-500 text-xs">
                See More
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="bg-transparent text-white border-gray-600/30">
          <CardHeader className="p-4">
            <CardTitle className="text-md">Popular Projects</CardTitle>
            {/*<CardDescription>Card Description</CardDescription>*/}
          </CardHeader>
          <CardContent className="p-0">
            {DUMMY_POPULAR_BLOGS.map((blog) => (
              <Link
                href={`/blogs/${blog.slug}`}
                className="flex gap-2 px-4 py-2 hover:bg-white/10"
                key={blog.id}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-sm">{blog.title}</p>
                  <div className="flex items-center gap-1 text-xs text-neutral-600">
                    <p className="flex items-center gap-1">
                          <span className="text-sm">
                            <AiFillEye/>
                          </span>
                      {blog.viewCount}
                    </p>
                    <BsDot/>
                    <p>
                      {moment(blog.createdAt.toISOString()).fromNow()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
          <CardFooter className="p-0">
            <Link
              className="w-full hover:bg-white/10 rounded-b-md"
              href='/blogs?sortBy=popularity'
            >
              <Button variant='link' className="w-full text-blue-500 text-xs">
                See More
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <div className="group flex justify-center items-center gap-2 text-xs text-neutral-600 text-center">
          <p className="text-lg group-hover:text-blue-500">
            <BsCodeSlash/>
          </p>
          <p>
            Built by <Link target='_blank' href='https://github.com/masadamsahid' className="group-hover:text-blue-500 hover:text-blue-500">@masadamsahid</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RightSection;