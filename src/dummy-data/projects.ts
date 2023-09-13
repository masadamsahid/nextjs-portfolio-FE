import { Author, AUTHORS } from "@/dummy-data/author";
import { CATEGORIES, Category } from "@/dummy-data/category";
import { BODY_1, BODY_2 } from "@/dummy-data/blog-bodies";

export type Project = {
  id: number;
  author: Author;
  slug: string;
  title: string;
  body: string;
  link?: string;
  gh_link?: string;
  created_at?: Date;
  updated_at?: Date;
  categories: Category[];
}

export interface ProjectPreview extends Omit<Project, "body">{}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "rent-payment-records-checker",
    title: "Rent Payment Records' Checker",
    body: BODY_1,
    author: AUTHORS[0],
    link: "",
    gh_link: "",
    categories: [
      CATEGORIES[0], CATEGORIES[1],
    ],
    created_at: new Date(2022, 8, 34),
    updated_at: new Date(2023, 8, 11),
  },
  {
    id: 2,
    slug: "chat-app-with-socket-io",
    title: "Chat App with Socket.io",
    body: BODY_2,
    author: AUTHORS[1],
    link: "https://github.dev/shadcn-ui/taxonomy",
    gh_link: "https://github.com/sandhikagalih/project-kalian",
    categories: [
      CATEGORIES[3], CATEGORIES[2],
    ],
    created_at: new Date(2022, 8, 11),
    updated_at: new Date(2023, 8, 11),
  },
  {
    id: 4,
    slug: "mern-portfolio-page",
    title: "MERN Portfolio Page",
    body: BODY_2,
    author: AUTHORS[1],
    categories: [
      CATEGORIES[4],
    ],
    created_at: new Date(2022, 8, 10),
    updated_at: new Date(2023, 8, 11),
  },
];

