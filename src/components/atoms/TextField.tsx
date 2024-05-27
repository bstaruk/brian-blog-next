import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label: string;
};

const TextField: FC<TextFieldProps> = ({
  className,
  label,
  type = 'text',
  ...props
}) => {
  return (
    <label className={classNames('flex flex-col gap-2', className)}>
      <span className="text--sm block">{label}</span>
      <input className="text--body block w-full rounded border bg-zinc-700 text-stone-200 border-zinc-700 py-2 px-4 pr-10 placeholder:text-zinc-500 focus:ring-transparent focus:border-zinc-400" {...{ type }} {...props} />
    </label>
  );
};

export default TextField;
