import { PICKER_COLOR_TYPES } from './picker-color.types';
import { createAction } from "../../utils/reducer/reducer.utils";


export const setPickerColor = (color) =>
  createAction(PICKER_COLOR_TYPES.SET_PICKER_COLOR, color)

export const setIsPickerOpen = (boolean) =>
  createAction(PICKER_COLOR_TYPES.SET_IS_PICKER_OPEN, boolean )
