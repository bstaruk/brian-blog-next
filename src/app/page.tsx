import { getAllPosts } from '@/lib/api/posts';
import Link from '@/components/atoms/Link';
import PostPreview from '@/components/molecules/PostPreview';
import Text from '@/components/atoms/Text';
import Wrapper from '@/components/atoms/Wrapper';

export default function Home() {
  const allPosts = getAllPosts({});

  return (
    <Wrapper className="flex flex-col gap-10" tagName="main">
      <Text>
        <Link href="/search">Search Posts</Link>
      </Text>

      {allPosts.map((post, postIndex) => (
        <PostPreview key={postIndex} {...{ post }} />
      ))}
    </Wrapper>
  );
}
