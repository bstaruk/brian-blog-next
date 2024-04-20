import React from 'react';
import classNames from 'classnames';

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  tagName?: React.ElementType;
  variant?: 'page';
};

const variantClasses = {
  page: 'wrapper--page',
};

const Wrapper = ({
  children,
  className,
  tagName: TagName = 'div',
  variant = 'page',
}: WrapperProps): JSX.Element => {
  return (
    <TagName className={classNames(variantClasses[variant], className)}>
      {children}
    </TagName>
  );
};

export default Wrapper;
