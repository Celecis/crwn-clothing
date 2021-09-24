import { createSelector } from "reselect";

// 1: INPUT SELECTOR:
const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

//2: OUTPUT SELECTOR
export const selectCollection = (collectionUrlParam) =>
  //collectionUrlParam is a string
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

// AND REMENBER: to find a property name inside an object, using a string, we need to use the []
//               and return the value of that match property name

//2: OUTPUT SELECTOR
// TRANSFORMING OBJECT INTO ARRAY
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// Object.keys
// Transforms gets object keys and adds them into an array

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

//191
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
