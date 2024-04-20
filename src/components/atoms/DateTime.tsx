import { parseISO, format } from 'date-fns';

type Props = {
  dateTime: string;
};

const DateTime = ({ dateTime }: Props) => {
  const date = parseISO(dateTime);
  return <time {...{ dateTime }}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default DateTime;
