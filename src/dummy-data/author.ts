export type Author = {
  id: number;
  username: string;
  email: string;
  name?: string;
  about?: string;
  created_at: Date;
  updated_at: Date;
}

export interface AuthorPreview extends Omit<Author, "about" | "email" | "created_at" | "updated_at" >{}

export const AUTHORS: Author[] = [
  {
    id: 1,
    username: "usersatu",
    email: "user1@mail.com",
    name: "User Satu",
    about: "Lorem Ipsum",
    created_at: new Date(2022, 5, 1),
    updated_at: new Date(2022, 5, 1),
  },
  {
    id: 2,
    username: "userdua",
    email: "user2@mail.com",
    name: "User Dua",
    about: "Lorem Ipsum",
    created_at: new Date(2023, 6, 1),
    updated_at: new Date(2023, 8, 1),
  },
  {
    id: 3,
    username: "usertiga",
    email: "user3@mail.com",
    name: "User Tiga",
    about: "Lorem Ipsum",
    created_at: new Date(2023, 8, 1),
    updated_at: new Date(2023, 8, 1),
  },
];