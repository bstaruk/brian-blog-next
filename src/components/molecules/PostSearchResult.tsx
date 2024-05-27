'use client';

import classNames from 'classnames';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Post } from '@/interfaces/post';
import { postCategories } from '@/lib/api/postCategories';
import DateTime from '@/components/atoms/DateTime';
import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';

type PostSearchResultProps = {
  className?: string;
  post: Post;
};

const PostSearchResult = ({
  className,
  post,
}: PostSearchResultProps): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const href = `/posts/${post.slug}`;

  const onCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <article className={classNames('flex flex-col', className)}>
      <Text className="mb-1" variant="h3" tagName="h3">
        <Link {...{ href }}>{post.title}</Link>
      </Text>

      <Text
        className="text-stone-400 mb-2"
        tagName="div"
        variant="sm"
      >
        <DateTime dateTime={post.date} />
      </Text>

      <Text tagName="p" content={post.excerpt} />

      {!!post.categories?.length && (
        <ul className="flex items-center flex-wrap gap-1 mt-1.5">
          <Text tagName="li" variant="sm" className="text-stone-400">
            Tags:
          </Text>

          {post.categories.map((cat, catIndex) => (
            <Text tagName="li" variant="sm" key={catIndex}>
              <button
                type="button"
                onClick={() => onCategoryClick(cat)}
                className="link--default p-1 rounded border border-transparent focus:outline focus:outline-0 focus:border-stone-400"
              >
                {postCategories[cat].title}
              </button>
              {catIndex < post.categories.length - 1 && ', '}
            </Text>
          ))}
        </ul>
      )}
    </article>
  );
};

export default PostSearchResult;
