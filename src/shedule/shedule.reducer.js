import {
  SHEDULE_LIST_RECIEVED,
  TOGGLE_RECIEVED,
  DATE_RECIEVED,
  TAB_RECIEVED,
  SEARCH_RECIEVED,
  SHOW_SPINNER
} from './shedule.actions';

const initialState = {
  shedules: [],
  datepicker: false,
  isFetching: false
};

const shedulesReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHEDULE_LIST_RECIEVED:
      return {
        ...state,
        shedules: action.payload.sheduleList,
        isFetching: false
      };
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true
      };
    }
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
    case TAB_RECIEVED:
      return {
        ...state,
        tab: action.payload.name
      };
    case SEARCH_RECIEVED:
      return {
        ...state,
        wordsSearch: action.payload.words
      };
    default:
      return state;
  }
};
export default shedulesReduser;
