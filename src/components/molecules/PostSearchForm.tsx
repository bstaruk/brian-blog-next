'use client';

import { useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { postCategories } from '@/lib/api/postCategories';

type PostSearchFormProps = {
  placeholder?: string;
};

type FormInputs = {
  query: string;
  category: string;
};

const PostSearchForm = ({
  placeholder = 'Search...',
}: PostSearchFormProps): JSX.Element => {
  const searchParams = useSearchParams();
  const queryValue = searchParams.get('query')?.toString();
  const categoryValue = searchParams.get('category')?.toString();
  const pathname = usePathname();
  const { replace } = useRouter();
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>();

  useEffect(() => {
    const formValue = getValues('category');
    if (formValue !== categoryValue) {
      setValue('category', categoryValue ?? '');
    }
  }, [categoryValue, getValues, setValue]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const params = new URLSearchParams(searchParams);

    if (data.query) {
      params.set('query', data.query);
    } else {
      params.delete('query');
    }

    if (data.category) {
      params.set('category', data.category);
    } else {
      params.delete('category');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const clearFormValues = () => {
    reset({
      query: '',
      category: '',
    });

    replace(pathname);
  };

  return (
    <form
      className="flex flex-col md:flex-row md:items-end gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex-shrink flex flex-col gap-2">
        <span className="text--sm block">Search Term</span>
        <input
          className="text--body block w-full rounded border bg-zinc-700 text-stone-200 border-zinc-700 py-2 px-4 pr-10 placeholder:text-zinc-500 focus:ring-transparent focus:border-zinc-400"
          type="text"
          defaultValue={queryValue}
          {...register('query')}
          {...{ placeholder }}
        />
      </label>

      <label className="flex-shrink-0 flex flex-col gap-2">
        <span className="text--sm block">Category</span>
        <select
          className="text--body block w-full rounded border bg-zinc-700 text-stone-200 border-zinc-700 py-2 px-4 pr-10 placeholder:text-zinc-500 focus:ring-transparent focus:border-zinc-400"
          {...register('category')}
        >
          {[
            {
              label: 'All Categories',
              value: '',
            },
            ...Object.entries(postCategories).map(([key, value], catIndex) => ({
              label: value.title,
              value: key,
            })),
          ].map(({ label, value }, catIndex) => (
            <option value={value} key={catIndex}>
              {label}
            </option>
          ))}
        </select>
      </label>

      {/* submit & clear */}
      <aside className="flex-shrink-0 flex flex-col-reverse md:flex-col gap-2">
        <button
          type="button"
          className="text--sm link--default text-center focus:outline focus:outline-0 focus:text-stone-200 focus:underline"
          onClick={() => clearFormValues()}
        >
          Clear Filters
        </button>

        <button
          type="submit"
          className="text--body font-semibold text-center py-2 px-4 rounded border border-transparent focus:outline focus:outline-0 bg-red-500 text-stone-900 focus:underline hover:underline"
        >
          Search Posts
        </button>
      </aside>
    </form>
  );
};

export default PostSearchForm;
