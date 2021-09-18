import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

// THIS IS USING A SELECTOR
// we are passing our whole reducer state to selectCartItems() selector that will reference selectCart
// selectCart then passes the state and gets the cart obj from it
// which will then be passed into selectCartItems, which will then pass
// the cartItems from the cart obj TO the selectCartItemsCount selector
// which will finnally reduce over and gives us our final cart items count
// that wil then be apointed to itemCount inside mapStateToProps
// that we can then use it (mapStateToProps) to pass itemCount as a prop
// to our CartIcon component

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
