import SearchForm from '@/components/molecules/SearchForm';
import Text from '@/components/atoms/Text';
import Wrapper from '@/components/atoms/Wrapper';

export default function Home() {
  return (
    <Wrapper className="flex flex-col gap-10" tagName="main">
      <SearchForm />
      <Text content="Hello World" />
    </Wrapper>
  );
}
