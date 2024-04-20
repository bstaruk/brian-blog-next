export type Post = {
  categories: string[];
  content: string;
  date: string;
  excerpt: string;
  preview?: boolean;
  slug: string;
  title: string;
};

export type PostCategories = {
  [key: string]: {
    description: string;
    title: string;
  };
};


export type PostSearchFields = {
  query?: string;
};
