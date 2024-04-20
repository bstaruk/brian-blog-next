import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/molecules/PostPreview';
import Wrapper from '@/components/atoms/Wrapper';

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <Wrapper className="flex flex-col gap-5" tagName="main">
      {allPosts.map((post, postIndex) => (
        <PostPreview key={postIndex} {...{ post }} />
      ))}
    </Wrapper>
  );
}
