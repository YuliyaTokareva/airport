import * as sheduleGatewey from './sheduleGateway';
export const SHEDULE_LIST_RECIEVED = 'SHEDULE_LIST_RECIEVED';

export const sheduleListRecieved = (sheduleList) => {
  const action = {
    type: SHEDULE_LIST_RECIEVED,
    payload: {
      sheduleList
    }
  };
  return action;
};
export const getSheduleList = (date, tab) => {
  const thunkAction = function (disparch) {
    sheduleGatewey
      .fetchFlightsList(date)
      .then((sheduleList) => disparch(sheduleListRecieved(sheduleList)));
  };
  return thunkAction;
};
