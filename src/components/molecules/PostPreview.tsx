import React from 'react';
import { Post } from '@/interfaces/post';
import Link from '@/components/atoms/Link';
import RichText from '@/components/atoms/RichText';
import Text from '@/components/atoms/Text';

type PostPreviewProps = {
  className?: string;
  post: Post;
};

const PostPreview = ({ className, post }: PostPreviewProps): JSX.Element => {
  return (
    <article {...{ className }}>
      <Text variant="h2" tagName="h2" content={post.title} />
      <RichText content={post.excerpt} />
      <Link href={`/posts/${post.slug}`}>
        Read More
      </Link>
    </article>
  );
};

export default PostPreview;
