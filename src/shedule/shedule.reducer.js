import { SHEDULE_LIST_RECIEVED } from './shedule.actions';
const initialState = {
  shedules: [],
  tab: 'departure',
  dateSearch: '11-01-2022'
};

const shedulesReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHEDULE_LIST_RECIEVED:
      return {
        ...state,
        shedules: action.payload.sheduleList
      };
    default:
      return state;
  }
};
export default shedulesReduser;

// const tabReduser = (state = initialState, action) => {
//   switch (action.type) {
//     case TAB_RULLES:
//       return {
//         ...state,
//         tab: action.payload.tab
//       };
//     default:
//       return state;
//   }
// };

// export default tabReduser;
