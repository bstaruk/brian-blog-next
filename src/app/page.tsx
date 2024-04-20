import { Metadata } from 'next';
import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';
import Page from '@/components/organisms/Page';

export default function Home() {
  return (
    <Page title="brian.staruk.net" className="flex flex-col gap-4">
      <Text>Personal website and dev blog of a web developer from Boston.</Text>
      <Text>
        This is an open source project so if the idea of a Jamstack-friendly
        static blog interests you, be sure to{' '}
        <Link href="https://github.com/bstaruk/brian-blog-next" target="_blank">
          check it out on GitHub
        </Link>{' '}
        (and leave a star while you&rsquo;re there)!
      </Text>
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
