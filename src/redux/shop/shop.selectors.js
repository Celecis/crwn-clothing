import { createSelector } from "reselect";

// 1: INPUT SELECTOR:
const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

//2: OUTPUT SELECTOR
export const selectCollection = (collectionUrlParam) =>
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

//
//
// AFTER 189
// we also need to create a selector to pull in isFetching property
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

//AFTER 191
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

//!! truthy of falsy value
// our selector will see if our collections is loaded
// if there is no collections, then it is false
// so we need to invert that in our shop.component.jsx
// so that the spinner renders while the API is being fetched
