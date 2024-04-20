import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import mdToHtml from '@/lib/mdToHtml';
import Link from '@/components/atoms/Link';
import RichText from '@/components/atoms/RichText';
import Text from '@/components/atoms/Text';
import Wrapper from '@/components/atoms/Wrapper';

export default async function PostDetails({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await mdToHtml(post.content || '');

  return (
    <Wrapper className="flex flex-col gap-6" tagName="main">
      <Text>
        <Link href="/">Back to Homepage</Link>
      </Text>
      <RichText {...{ content }} />
    </Wrapper>
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
