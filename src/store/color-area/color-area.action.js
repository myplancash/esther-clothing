import { COLOR_ACTION_TYPES } from "./color-area.types";
import { createAction } from "../../utils/reducer/reducer.utils";

/* const addColor = (actualColor, colorToAdd) => {
  const existingColor = actualColor.id === colorToAdd.id;

  if(existingColor) {
    return actualColor.id === colorToAdd.id
      ? { actualColor, name: colorToAdd.name }
      : actualColor
  }
  return [ ...actualColor, {...colorToAdd, name: '#DB7093' }];
}

export const addColorToArea = (actualColor, colorToAdd) => {
  const newColor = addColor(actualColor, colorToAdd)
  createAction(COLOR_ACTION_TYPES.SET_COLOR_AREA, newColor);
}
 */

export const setColorArea = (colorString) =>
  createAction(COLOR_ACTION_TYPES.SET_COLOR_AREA, colorString)