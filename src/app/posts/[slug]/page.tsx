import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { mdToHtml } from '@/lib/utils';
import RichText from '@/components/atoms/RichText';
import Page from '@/components/organisms/Page';

export default async function PostDetails({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await mdToHtml(post.content || '');

  return (
    <Page title={post.title} className="flex flex-col gap-8">
      <RichText {...{ content }} />
    </Page>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | brian.staruk.net`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts({});

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
