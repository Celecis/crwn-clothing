const ShopActionTypes = {
  FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE",
};

export default ShopActionTypes;

// FETCH_COLLECTIONS_START: tells redux that we are starting to fetch the data
// FETCH_COLLECTIONS_SUCCESS: when the fetch comes back with a successfull API CALL
// FETCH_COLLECTIONS_FAILURE: when the fetch to the API CALL fails and we wan't to handle it
