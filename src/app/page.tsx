import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/molecules/PostPreview';
import Page from '@/components/organisms/Page';

export default function Home() {
  const allPosts = getAllPosts({});

  return (
    <Page title="brian.staruk.net" className="flex flex-col gap-8">
      {allPosts.map((post, postIndex) => (
        <PostPreview key={postIndex} {...{ post }} />
      ))}
    </Page>
  );
}
