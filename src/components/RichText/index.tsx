import React from 'react';
import classNames from 'classnames';

type RichTextProps = {
  children?: React.ReactNode;
  className?: string;
  content?: string;
  size?: 'body';
  tagName?: React.ElementType;
};

const RichText = ({
  children,
  className,
  content,
  tagName: TagName = 'div',
}: RichTextProps): JSX.Element | null => {
  if (!children && !content) return null;

  return (
    <TagName
      className={classNames('rich-text', className)}
      dangerouslySetInnerHTML={{ __html: children ?? content }}
    />
  );
};

export default RichText;
