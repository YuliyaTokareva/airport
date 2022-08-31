import moment from 'moment';

export const getDate = new Date();
export const nowDate = moment(getDate, 'DD-MM-YYYY').format('DD-MM-YYYY');
export const esterday = moment(getDate, 'DD-MM-YYYY').add(-1, 'day').format('DD-MM-YYYY');
export const tomorrow = moment(getDate, 'DD-MM-YYYY').add(1, 'day').format('DD-MM-YYYY');

export const formaterDateToCalendar = (date) => moment(date, 'DD-MM-YYYY').format('DD/MM');
export const formaterDateToShedule = (date) => moment(date).format('H:mm');
