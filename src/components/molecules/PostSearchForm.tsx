'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';
import { postCategories } from '@/lib/api/postCategories';

type PostSearchFormProps = {
  placeholder?: string;
};

const PostSearchForm = ({
  placeholder = 'Search...',
}: PostSearchFormProps): JSX.Element => {
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

  const handleClearFilters = () => {
    replace(pathname);
  };

  const queryValue = searchParams.get('query')?.toString();
  const categoryValue = searchParams.get('category')?.toString();

  return (
    <form
      className="flex flex-col md:flex-row gap-4"
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
          defaultValue={queryValue}
          key={queryValue}
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
          defaultValue={categoryValue}
          key={categoryValue}
        >
          <option value="">All Categories</option>
          {Object.entries(postCategories).map(([key, value], catIndex) => (
            <option value={key} key={catIndex}>
              {value.title}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={handleClearFilters}
        className="text--body link--default py-2 px-4 rounded border border-transparent focus:outline focus:outline-1 focus:outline-eggplant-700 focus:border-eggplant-700"
      >
        Clear Filters
      </button>
    </form>
  );
};

export default PostSearchForm;
