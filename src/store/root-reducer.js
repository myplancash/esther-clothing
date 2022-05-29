import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { colorReducer } from './color-area/color-area.reducer';
import { pickerColorReducer } from './picker-color/picker-color.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  color: colorReducer,
  picker: pickerColorReducer
})
