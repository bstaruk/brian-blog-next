import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';
import Wrapper from '@/components/atoms/Wrapper';

export type GlobalHeaderProps = {
  title?: string;
};

const GlobalHeader = ({ title }: GlobalHeaderProps): JSX.Element => {
  return (
    <Wrapper className="flex flex-col gap-3 mb-6" tagName="header">
      <h1 className="text--h1">{title}</h1>

      <ul className="flex items-center gap-4">
        <Text tagName="li">
          <Link href="/">Home</Link>
        </Text>

        <Text tagName="li">
          <Link href="/search">Search Posts</Link>
        </Text>
      </ul>
    </Wrapper>
  )
};

export default GlobalHeader;
