export type Category = {
  id: number;
  name: string;
  desc: string;
  created_at: Date;
  updated_at: Date;
}

export interface CategoryPreview extends Omit<Category, "desc" | "created_at" | "updated_at"> {}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "software-engineering",
    desc: "Lorem yipsum",
    created_at: new Date(2023, 6, 1),
    updated_at: new Date(2023, 8, 1),
  },
  {
    id: 2,
    name: "front-end",
    desc: "Lorem yipsum",
    created_at: new Date(2023, 7, 1),
    updated_at: new Date(2023, 7, 1),
  },
  {
    id: 3,
    name: "back-end",
    desc: "Lorem yipsum",
    created_at: new Date(2023, 7, 11),
    updated_at: new Date(2023, 7, 13),
  },
  {
    id: 4,
    name: "data-science",
    desc: "Lorem yipsum",
    created_at: new Date(2023, 7, 21),
    updated_at: new Date(2023, 8, 2),
  },
  {
    id: 5,
    name: "devops",
    desc: "Lorem yipsum",
    created_at: new Date(2023, 7, 25),
    updated_at: new Date(2023, 7, 25),
  },
];
