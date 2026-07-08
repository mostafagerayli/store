export type Blog = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  slug: string;
  category: string;
  created_at: string;
  updated_at: string;
};

export type BlogUpdateData = {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
};