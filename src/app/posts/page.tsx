import { Metadata } from 'next';
import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/molecules/PostPreview';
import SearchForm from '@/components/molecules/SearchForm';
import Page from '@/components/organisms/Page';

export default async function Posts({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query;
  const allPosts = getAllPosts({ query });

  return (
    <Page title="Posts" className="flex flex-col gap-8">
      <SearchForm />

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
