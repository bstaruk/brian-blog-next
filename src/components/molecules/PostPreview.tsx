import React from 'react';
import classNames from 'classnames';
import { Post } from '@/interfaces/post';
import DateTime from '@/components/atoms/DateTime';
import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';

type PostPreviewProps = {
  className?: string;
  post: Post;
};

const PostPreview = ({ className, post }: PostPreviewProps): JSX.Element => {
  const href = `/posts/${post.slug}`;

  return (
    <article className={classNames('flex flex-col gap-2', className)}>
      <Text variant="h3" tagName="h3" content={post.title} />

      <Text className="italic text-gray-500" tagName="div" variant="sm">
        <DateTime dateTime={post.date} />
      </Text>

      <Text tagName="p" content={post.excerpt} />

      <Text>
        <Link {...{ href }}>Read More</Link>
      </Text>
    </article>
  );
};

export default PostPreview;
