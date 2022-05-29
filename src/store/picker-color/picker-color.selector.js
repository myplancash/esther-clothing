import { createSelector } from 'reselect';

const selectPickerReducer = state => state.picker;

export const selectPickerColor = createSelector(
  [selectPickerReducer],
  (picker) => picker.color
);

export const selectIsPickerOpen = createSelector(
  [selectPickerReducer],
  (picker) => picker.isPickerOpen
);