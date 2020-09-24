import { subHours, format } from 'date-fns';

export function formatDate(dtPacote) {
  const [dt, hrs] = dtPacote.split(' ');
  const dateObj = new Date(`${dt} ${hrs}`);
  const timezonedDate = subHours(dateObj, 3);
  const formattedDate = format(
    timezonedDate,
    "dd 'de' MM 'de' yyyy 'às' HH:mm:ss"
  );

  return formattedDate;
}
