import { COLOR_ACTION_TYPES } from './color-area.types';

export const COLOR_DEFAULT_STATE = {
  colorArea: ''
}

export const colorReducer = (state = COLOR_DEFAULT_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case COLOR_ACTION_TYPES.SET_COLOR_AREA:
      return {
        ...state,
        colorArea: payload
      }
    default:
      return state
  }
}