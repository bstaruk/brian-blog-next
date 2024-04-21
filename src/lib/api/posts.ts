import { Post, PostCategories, PostSearchFields } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export const postCategories: PostCategories = {
  dev: {
    description: 'Notes about code.',
    title: 'Dev Notes',
  },
  general: {
    description: 'Notes about things.',
    title: 'General Notes',
  },
};

export const getAllPostCategories = (): PostCategories => postCategories;

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
};

export const getAllPosts = ({ query }: PostSearchFields): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // filter by query
    .filter((post) => {
      if (
        query &&
        !post.title.toLowerCase().includes(query.toLowerCase()) &&
        !post.excerpt.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
