export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  preview?: boolean;
};

export type PostSearchFields = {
  query?: string;
};
