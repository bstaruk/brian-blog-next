import { Metadata } from 'next';
import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';
import Page from '@/components/organisms/Page';

export default function Contact() {
  return (
    <Page title="Contact Me" className="flex flex-col gap-4">
      <Text>Here are some links that you can use to get in touch with me:</Text>
      <ul className="flex flex-col gap-1 list-disc pl-6">
        <Text tagName="li">
          Email:{' '}
          <Link href="mailto:brian@staruk.net" target="_blank">
            brian@staruk.net
          </Link>
        </Text>
        <Text tagName="li">
          GitHub:{' '}
          <Link href="https://github.com/bstaruk" target="_blank">
            github.com/bstaruk
          </Link>
        </Text>
        <Text tagName="li">
          LinkedIn:{' '}
          <Link href="https://www.linkedin.com/in/brian-staruk" target="_blank">
            linkedin.com/in/brian-staruk
          </Link>
        </Text>
      </ul>
    </Page>
  );
}

export function generateMetadata(): Metadata {
  const title = `Contact | brian.staruk.net`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}
