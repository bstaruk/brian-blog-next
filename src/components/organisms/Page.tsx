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
      <Wrapper tagName="main" {...{ className }}>
        {children}
      </Wrapper>
    </>
  );
};

export default Page;
