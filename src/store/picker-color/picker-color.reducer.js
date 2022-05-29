import { PICKER_COLOR_TYPES } from './picker-color.types';

const PICKER_INITIAL_STATE = {
  isPickerOpen: false,
  color: '#34568B'
}

export const pickerColorReducer = (state=PICKER_INITIAL_STATE, action={}) => {
  const { type, payload } = action;
  switch (type) {
    case PICKER_COLOR_TYPES.SET_PICKER_COLOR:
      return {
        ...state,
        color: payload
      }
    case PICKER_COLOR_TYPES.SET_IS_PICKER_OPEN:
      return {
        ...state,
        isPickerOpen: payload
      }
    default:
      return state;
  }
}