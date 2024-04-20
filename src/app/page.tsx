import { getAllPosts } from '@/lib/api';
import PostPreview from '@/components/PostPreview';

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <main className="p-24 flex flex-col gap-5">
      {allPosts.map((post, postIndex) => (
        <PostPreview key={postIndex} {...{ post }} />
      ))}
    </main>
  );
}
