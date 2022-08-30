import * as sheduleGatewey from './sheduleGateway';
export const SHEDULE_LIST_RECIEVED = 'SHEDULE_LIST_RECIEVED';
export const TOGGLE_RECIEVED = 'TOGGLE_RECIEVED';
export const DATE_RECIEVED = 'DATE_RECIEVED';
export const TAB_RECIEVED = 'TAB_RECIEVED';
export const SEARCH_RECIEVED = 'SEARCH_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export const sheduleListRecieved = (sheduleList) => {
  const action = {
    type: SHEDULE_LIST_RECIEVED,
    payload: {
      sheduleList
    }
  };
  return action;
};
export const showSpinner = () => {
  return {
    type: SHOW_SPINNER
  };
};
export const getSheduleList = (date) => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    sheduleGatewey
      .fetchFlightsList(date)
      .then((sheduleList) => dispatch(sheduleListRecieved(sheduleList)));
  };
  return thunkAction;
};
export const onChangeToogleRecieved = () => {
  const action = {
    type: TOGGLE_RECIEVED
  };
  return action;
};
// export const dateRecieved = (date) => {
//   const action = {
//     type: DATE_RECIEVED,
//     payload: {
//       date
//     }
//   };
//   return action;
// };
// export const tabRecieved = (name) => {
//   const action = {
//     type: TAB_RECIEVED,
//     payload: {
//       name
//     }
//   };
//   return action;
// };
// export const searchRecieved = (words) => {
//   const action = {
//     type: SEARCH_RECIEVED,
//     payload: {
//       words
//     }
//   };
//   return action;
// };
