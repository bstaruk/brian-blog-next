import React from 'react';
import classNames from 'classnames';
import NextLink from 'next/link';

type LinkProps = {
  children?: React.ReactNode;
  className?: string;
  content?: string;
  href: string;
  tabIndex?: number;
  target?: string;
  variant?: 'default';
};

const variantClasses = {
  default: 'link--default',
};

const Link = ({
  children,
  className,
  content,
  href,
  tabIndex,
  target,
  variant = 'default',
}: LinkProps): JSX.Element | null => {
  if (!children && !content) return null;

  return (
    <NextLink
      className={classNames(variantClasses[variant], className)}
      {...{ href, tabIndex, target }}
    >
      {content ?? children}
    </NextLink>
  );
};

export default Link;
