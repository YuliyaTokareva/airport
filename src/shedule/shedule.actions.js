import fetchFlightsList from './sheduleGateway';

export const SHEDULE_LIST_RECIEVED = 'SHEDULE_LIST_RECIEVED';
export const TOGGLE_RECIEVED = 'TOGGLE_RECIEVED';
export const DATE_RECIEVED = 'DATE_RECIEVED';
export const TAB_RECIEVED = 'TAB_RECIEVED';
export const SEARCH_RECIEVED = 'SEARCH_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export const showSpinner = () => ({
  type: SHOW_SPINNER
});
export const onChangeToogleRecieved = () => {
  const action = {
    type: TOGGLE_RECIEVED
  };
  return action;
};
export const sheduleListRecieved = (sheduleList) => {
  const action = {
    type: SHEDULE_LIST_RECIEVED,
    payload: {
      sheduleList
    }
  };
  return action;
};
export const getSheduleList = (date) => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    fetchFlightsList(date).then((sheduleList) => dispatch(sheduleListRecieved(sheduleList)));
  };
  return thunkAction;
};
