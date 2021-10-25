import { createSelector } from "reselect";

// 1: INPUT SELECTOR:
const selectDirectory = (state) => state.directory;

// 2: OUTPUT SELECTOR:
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
