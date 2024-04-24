'use client';

import React, { useEffect } from 'react';
import classNames from 'classnames';
import hljs from 'highlight.js';

type RichTextProps = {
  children?: React.ReactNode;
  className?: string;
  content?: string;
  tagName?: React.ElementType;
};

const RichText = ({
  children,
  className,
  content,
  tagName: TagName = 'div',
}: RichTextProps): JSX.Element | null => {
  useEffect(() => {
    if (!!content) {
      hljs.highlightAll();
    }
  }, [content]);

  if (!children && !content) return null;

  return (
    <TagName
      className={classNames('rich-text', className)}
      dangerouslySetInnerHTML={{ __html: children ?? content }}
    />
  );
};

export default RichText;
