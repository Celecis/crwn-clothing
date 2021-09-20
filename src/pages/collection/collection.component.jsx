import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  // we can have access to collectionId dinamically trough props passed by mapStateToProps
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

//
const mapStateToProps = (state, ownProps) => ({
  // We are using mapStateToProps 2nd optional param named ownProps
  // Those props are the props of the component. In this case: CollectionPage
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  // collectionId is a string
  //
  // We need to pass in state - Because our selectCollection() is a function that returns a function
  // We pass the function that comes out of selectCollection() - the state - so that we can USE IT AFTER WE GET IT'S
  // RESULT (o resultado do state vai ser sempre diferente, dependendo do nome da página, ou seja, o resultado
  // do collection vai ser diferente consoante o nome da página que foi clicada na página principal)
  // This selector needs a part of the state depending on the URL parameter!
});

export default connect(mapStateToProps)(CollectionPage);
