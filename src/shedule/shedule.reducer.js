import { SHEDULE_LIST_RECIEVED, TOGGLE_RECIEVED, DATE_RECIEVED } from './shedule.actions';

const initialState = {
  shedules: [],
  tab: 'arrival',
  dateSearch: '11-01-2022',
  datepicker: false
};

const shedulesReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHEDULE_LIST_RECIEVED:
      return {
        ...state,
        shedules: action.payload.sheduleList
      };
    case TOGGLE_RECIEVED:
      return {
        ...state,
        datepicker: !state.datepicker
      };
    case DATE_RECIEVED:
      return {
        ...state,
        dateSearch: action.payload.date
      };
    default:
      return state;
  }
};
export default shedulesReduser;
