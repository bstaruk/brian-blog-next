import { Metadata } from 'next';
import { getAllPosts } from '@/lib/api';
import Text from '@/components/atoms/Text';
import Page from '@/components/organisms/Page';

export default function Home() {
  const allPosts = getAllPosts({});

  return (
    <Page title="brian.staruk.net" className="flex flex-col gap-8">
      <Text>Hello World</Text>
    </Page>
  );
}

export function generateMetadata(): Metadata {
  const title = `Home | brian.staruk.net`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}
