import moment from 'moment';
export const formaterDateToCalendar = (date) => {
  return moment(date, 'DD-MM-YYYY').format('DD/MM');
};
