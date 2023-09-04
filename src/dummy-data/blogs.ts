import { CATEGORIES, Category } from "@/dummy-data/category";
import { Author, AUTHORS } from "@/dummy-data/author";

export type Blog = {
  id: number;
  slug: string;
  title: string;
  img_url?: string;
  desc: string;
  body: string;
  author: Author;
  categories: Category[];
  created_at: Date;
  updated_at: Date;
}

export interface BlogPreview extends Omit<Blog, "body">{}

export const DEFAULT_BLOG_IMG = "https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/62a030850a538782b1755eeb_coding%203.jpg";

export const BLOGS: Blog[] = [
  {
    id: 1,
    slug: "create-simple-to-do-list-using-react",
    title: "Create Simple To Do List using React",
    img_url: "https://media.geeksforgeeks.org/wp-content/uploads/20230606125727/gfg.png",
    desc: "Learn how to create a simple to do list app using React",
    body: "",
    author: AUTHORS[0],
    categories: [
      CATEGORIES[0], CATEGORIES[1],
    ],
    created_at: new Date(2022, 6, 1),
    updated_at: new Date(2023, 2, 1),
  },
  {
    id: 2,
    slug: "data-wrangling-using-python-numpy-and-pandas",
    title: "Data Wrangling using Python (Numpy and Pandas)",
    img_url: "https://online.york.ac.uk/wp-content/uploads/2021/07/man-in-a-suit-standing-behind-a-hologram-of-data-analytics.jpg",
    desc: "A practical data wrangling tutorial for beginners",
    body: "",
    author: AUTHORS[1],
    categories: [
      CATEGORIES[3],
    ],
    created_at: new Date(2022, 10, 1),
    updated_at: new Date(2022, 10, 1),
  },
  {
    id: 3,
    slug: "build-crud-api-using-nestjs-and-deploy-using-azure",
    title: "Build CRUD API using NestJS and Deploy using Azure",
    desc: "Learn how to create a simple to do list app using React",
    body: "",
    author: AUTHORS[2],
    categories: [
      CATEGORIES[0], CATEGORIES[2], CATEGORIES[4],
    ],
    created_at: new Date(2023, 7, 12),
    updated_at: new Date(2023, 8, 2),
  },
];