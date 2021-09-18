import { createSelector } from "reselect";

// 1: INPUT SELECTOR:
const selectUser = (state) => state.user;

// 2: OUTPUT SELECTOR:
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
