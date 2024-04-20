import classNames from 'classnames';
import GlobalFooter from '@/components/molecules/GlobalFooter';
import GlobalHeader from '@/components/molecules/GlobalHeader';
import Wrapper from '@/components/atoms/Wrapper';

type PageProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

const Page = ({ children, className, title }: PageProps): JSX.Element => {
  return (
    <>
      <GlobalHeader {...{ title }} />
      <Wrapper className={classNames('', className)} tagName="main">
        {children}
      </Wrapper>
      <GlobalFooter />
    </>
  );
};

export default Page;
