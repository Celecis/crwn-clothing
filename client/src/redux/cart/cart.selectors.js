import { createSelector } from "reselect";

// 1: INPUT SELECTOR:
const selectCart = (state) => state.cart;

// 2: OUTPUT SELECTOR:
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// 2: OUTPUT SELECTOR:
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

// THERE ARE 2 TYPES OF SELECTORS:
// 1: INPUT SELECTOR: doesn't use createSelector from reselect
// 2: OUTPUT SELECTOR: uses INPUT SELECTORs and createSelector from reselect
// for good practice, SELECTORS should always start with the keyword "select"

// 1: INPUT SELECTOR:
// it is a function that gets the whole state and returns a slice of it
// only layer deep usually

// 2: OUTPUT SELECTOR:
// it a function that uses our createSelector() call
// it takes up 2 arguments:
// 1st: is a collection - an array - of INPUT SELECTORs
// 2nd: is a function, that will return the value we want out of the selector
// what we are going to use in it's parameters is actually each output of the input selectors in the array
// by the order they were written
// (in this case, our selectCart output is our cart obj, it is that cart obj that we need to put as a parameter)

//
// selectCart passes the state and gets the cart obj from it
// which will then be passed into selectCartItems, which will then pass
// the cartItems from the cart obj TO the selectCartItemsCount selector
// which will finnally reduce over and gives us our final cart items count
// that wil then be apointed to itemCount inside mapStateToProps
// that we can then use it (mapStateToProps) to pass itemCount as a prop
// to our CartIcon component

// 2: OUTPUT SELECTOR:
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// 2: OUTPUT SELECTOR:
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
