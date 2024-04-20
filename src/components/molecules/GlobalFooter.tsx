import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';
import Wrapper from '@/components/atoms/Wrapper';

const GlobalFooter = (): JSX.Element => {
  return (
    <Wrapper className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-300" tagName="footer">
      <Text>
        <Link href="https://github.com/bstaruk/brian-blog-next" target="_blank">
          View Source on GitHub
        </Link>
      </Text>
    </Wrapper>
  );
};

export default GlobalFooter;
