import { formaterDateToFilter } from '../utils/dateUtils';

export const getFilteredShedule = (shedule, toSortTimeShedule, searchQuery, textQuery) => {
  return shedule
    .slice()
    .filter((date) => formaterDateToFilter(date[toSortTimeShedule]) === searchQuery)
    .sort((a, b) => {
      return new Date(a[toSortTimeShedule]) - new Date(b[toSortTimeShedule]);
    })
    .filter((board) =>
      board.codeShareData[0].codeShare.toLowerCase().includes(textQuery.toLowerCase())
    );
};
