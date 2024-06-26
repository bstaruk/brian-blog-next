import { FC, InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';

type TextFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
};

const TextField: FC<TextFieldProps> = ({
  className,
  label,
  options,
  ...props
}) => {
  return (
    <label className={classNames('flex flex-col gap-2', className)}>
      <span className="text--sm block">{label}</span>
      <select
          className="text--body block w-full rounded border bg-zinc-700 text-stone-200 border-zinc-700 py-2 px-4 pr-10 placeholder:text-zinc-500 focus:ring-transparent focus:border-zinc-400"
          {...props}
        >
          {options.map(({ label, value}, catIndex) => (
            <option value={value} key={catIndex}>
              {label}
            </option>
          ))}
        </select>
    </label>
  );
};

export default TextField;
