import { Metadata } from 'next';
import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/molecules/PostPreview';
import Page from '@/components/organisms/Page';

export default function Posts() {
  const allPosts = getAllPosts({});

  return (
    <Page title="Posts" className="flex flex-col gap-8">
      {allPosts.map((post, postIndex) => (
        <PostPreview key={postIndex} {...{ post }} />
      ))}
    </Page>
  );
}

export function generateMetadata(): Metadata {
  const title = `Posts | brian.staruk.net`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}
