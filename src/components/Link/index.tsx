import React from 'react';
import classNames from 'classnames';

type LinkProps = {
  children?: React.ReactNode;
  className?: string;
  content?: string;
  href: string;
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
  target,
  variant = 'default',
}: LinkProps): JSX.Element | null => {
  if (!children && !content) return null;

  return (
    <a className={classNames(variantClasses[variant], className)} {...{ href, target }}>
      {content ?? children}
    </a>
  );
};

export default Link;
