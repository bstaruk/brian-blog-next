import React from 'react';
import classNames from 'classnames';
import { Post } from '@/interfaces/post';
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
      <Text variant="h3" tagName="h3">
        <Link {...{ href }}>{post.title}</Link>
      </Text>

      <Text tagName="p" content={post.excerpt} />

      <Text>
        <Link {...{ href }}>Read More</Link>
      </Text>
    </article>
  );
};

export default PostPreview;
