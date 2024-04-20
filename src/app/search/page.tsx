import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/molecules/PostPreview';
import SearchForm from '@/components/molecules/SearchForm';
import Wrapper from '@/components/atoms/Wrapper';

export default async function Search({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query;
  const allPosts = getAllPosts({ query });

  return (
    <Wrapper className="flex flex-col gap-10" tagName="main">
      <SearchForm />
      {allPosts.map((post, postIndex) => (
        <PostPreview key={postIndex} {...{ post }} />
      ))}
    </Wrapper>
  );
}
