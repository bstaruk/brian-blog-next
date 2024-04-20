import React from 'react';
import classNames from 'classnames';

type TextProps = {
  children?: React.ReactNode;
  className?: string;
  content?: string;
  tagName?: React.ElementType;
  variant?: 'sm' | 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};

const variantClasses = {
  sm: 'text--sm',
  body: 'text--body',
  h1: 'text--h1',
  h2: 'text--h2',
  h3: 'text--h3',
  h4: 'text--h4',
  h5: 'text--h5',
};

const Text = ({
  children,
  className,
  content,
  tagName: TagName = 'div',
  variant = 'body',
}: TextProps): JSX.Element | null => {
  if (!children && !content) return null;

  return (
    <TagName className={classNames(variantClasses[variant], className)}>
      {content ?? children}
    </TagName>
  );
};

export default Text;
