import { Metadata } from 'next';
import { getAllPosts } from '@/lib/api';
import PostSearchResult from '@/components/molecules/PostSearchResult';
import PostSearchForm from '@/components/molecules/PostSearchForm';
import Page from '@/components/organisms/Page';
import Text from '@/components/atoms/Text';

export default async function Posts({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    query?: string;
  };
}) {
  const category = searchParams?.category;
  const query = searchParams?.query;
  const allPosts = getAllPosts({ category, query });

  return (
    <Page title="Brian's Dev Blog" className="flex flex-col gap-8">
      <PostSearchForm />

      {!allPosts?.length && (
        <Text>No results found for &ldquo;{query}&rdquo;</Text>
      )}

      {allPosts.map((post, postIndex) => (
        <PostSearchResult key={postIndex} {...{ post }} />
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
