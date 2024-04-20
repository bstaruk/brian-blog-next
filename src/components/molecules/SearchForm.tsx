'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';

type SearchFormProps = {
  placeholder?: string;
};

const SearchForm = ({
  placeholder = 'Search...',
}: SearchFormProps): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebounceCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="text--body block w-full rounded border bg-eggshell-400 text-eggplant-700 border-eggplant-200 py-2 px-4 placeholder:text-eggplant-200 focus:ring-eggplant-700 focus:border-eggplant-700"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default SearchForm;
