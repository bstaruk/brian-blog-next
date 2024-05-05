'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';
import { postCategories } from '@/lib/api/postCategories';
import SelectField from '@/components/atoms/SelectField';
import TextField from '@/components/atoms/TextField';

type PostSearchFormProps = {
  placeholder?: string;
};

const PostSearchForm = ({
  placeholder = 'Search...',
}: PostSearchFormProps): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onQueryChange = useDebounceCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const onCategoryChange = (category: string) => {
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
      className="flex flex-col md:flex-row md:items-end gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField
        placeholder={placeholder}
        onChange={(e) => {
          onQueryChange(e.target.value);
        }}
        defaultValue={queryValue}
        key={queryValue}
        id="search"
        label="Search Term"
      />

      <SelectField
        id="category"
        onChange={(e) => {
          onCategoryChange(e.target.value);
        }}
        defaultValue={categoryValue}
        key={categoryValue}
        label="Category"
        options={[
          {
            label: 'All Categories',
            value: '',
          },
          ...Object.entries(postCategories).map(
            ([key, value], catIndex) => ({
              label: value.title,
              value: key,
            }),
          )
        ]}
      />

      <button
        type="button"
        onClick={handleClearFilters}
        className="text--body link--default text-left py-2 px-4 rounded border border-transparent focus:outline focus:outline-none focus:outline-transparent focus:border-eggshell-700"
      >
        Clear Filters
      </button>
    </form>
  );
};

export default PostSearchForm;
