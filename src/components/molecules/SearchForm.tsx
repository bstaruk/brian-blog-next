'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';
import { PostCategories } from '@/interfaces/post';

type SearchFormProps = {
  postCategories?: PostCategories;
  placeholder?: string;
};

const SearchForm = ({
  postCategories = {},
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

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className="flex gap-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
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
          id="search"
        />
      </div>

      <div>
        <label htmlFor="category" className="sr-only">
          Category
        </label>

        <select
          className="text--body block w-full rounded border bg-eggshell-400 text-eggplant-700 border-eggplant-200 py-2 pl-4 pr-10 placeholder:text-eggplant-200 focus:ring-eggplant-700 focus:border-eggplant-700"
          id="category"
          onChange={(e) => {
            handleCategory(e.target.value);
          }}
          defaultValue={searchParams.get('category')?.toString()}
        >
          <option value="">Category</option>
          {Object.entries(postCategories).map(([key, value], catIndex) => (
            <option value={key} key={catIndex}>
              {value.title}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchForm;
