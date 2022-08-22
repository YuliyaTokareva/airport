import { createSelector } from 'reselect';
export const sheduleListSelector = (state) => state.shedulesList.shedules.body;
export const dateSelector = (state) => state.shedulesList.dateSearch;
export const tabSelector = (state) => state.shedulesList.tab;
