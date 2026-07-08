import { blogs } from "@prisma/client/wasm";

export type Blog = blogs;

export type BlogUpdateData = {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
};