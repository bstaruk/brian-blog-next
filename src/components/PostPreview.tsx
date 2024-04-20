import React from 'react';
import classNames from 'classnames';
import { Post } from '@/interfaces/post';
import RichText from '@/components/RichText';
import Text from '@/components/Text';

type PostPreviewProps = {
  className?: string;
  post: Post;
};

const PostPreview = ({ className, post }: PostPreviewProps): JSX.Element => {
  return (
    <article {...{ className }}>
      <Text variant="h2" tagName="h2" content={post.title} />
      <RichText content={post.excerpt} />
    </article>
  );
};

export default PostPreview;
