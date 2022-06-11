// import { createSelector } from 'reselect';

export const selectCurrentUser = (state) => state.user.currentUser;

/* export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
) */