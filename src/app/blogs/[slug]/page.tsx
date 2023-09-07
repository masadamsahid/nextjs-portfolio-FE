import MainLayout from "@/components/layouts/MainLayout";
import { BLOGS } from "@/dummy-data/blogs";

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
        <div className="p-4 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">
            MY TITLE
          </h1>
          
          <hr/>
          
          
          {/* TAILWIND TYPOGRAPHY NOT WORKING */}
          <article className="prose max-w-prose dark:prose-invert">
            <h1>Your Family</h1>
            <h2>Your Mom</h2>
            <h3>Your Dad</h3>
            <p>Your Siblings</p>
            <code>Your Kids</code>
          </article>
          
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetailPage;