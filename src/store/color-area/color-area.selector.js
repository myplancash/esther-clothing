import { createSelector } from 'reselect';

export const selectColorReducer = state => state.color;

export const selectColorArea = createSelector(
  [selectColorReducer],
  (color) => color.colorArea
);
