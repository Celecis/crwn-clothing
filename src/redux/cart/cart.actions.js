import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

// addItem() gets an item, and generates a new action, passing the item as the payload
// WHICH OUR cart.reducer will listen to that type ADD_ITEM
// so that whenever the action comes in, we will return the new state of our overall cart.reducer
// - hidden & cartItems[] - expect our cartItems[], will be a new array where we spread in THE EXISTING CART ITEM
// and we append the new item that we get as the payload, at the end of the array

// THE PAYLOAD will be the item that was added to the cartItems array
// when clicking the "ADD TO CART" button on the shop page
