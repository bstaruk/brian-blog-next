import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label: string;
};

const TextInput: FC<TextInputProps> = ({
  className,
  label,
  type = 'text',
  ...props
}) => {
  return (
    <label className={classNames('flex flex-col gap-2', className)}>
      <span className="text--sm block">{label}</span>
      <input className="text--body block w-full rounded border bg-eggplant-400 text-eggshell-400 border-eggplant-200 py-2 px-4 placeholder:text-eggshell-400/50 focus:ring-transparent focus:border-eggshell-600" {...{ type }} {...props} />
    </label>
  );
};

export default TextInput;
