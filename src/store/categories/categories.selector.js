import { createSelector } from 'reselect';

export const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categories) => categories.categoriesMap
)