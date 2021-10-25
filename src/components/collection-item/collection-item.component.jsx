import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-styles.styles";

const CollectionItem = ({ item, addItem }) => {
  // SINCE WE ARE NOW PASSING IN THE WHOLE ITEM ITSELF
  // WE NOW need to destructor that item to get the values we need from it
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
//NOW, WHEN WE CLICK THE BUTTON, that item will be added to our Cart
//WHICH was set in our cart.actions and in our cart.reducer

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

//(item) will be added to addItem function as it's property

//OUR ACTUAL COLLECTION will be updated using mapDispatchToProps

export default connect(null, mapDispatchToProps)(CollectionItem);
