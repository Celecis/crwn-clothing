/*import React from "react";
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

export default connect(mapStateToProps)(CollectionPage);*/

//AFTER 213
/*import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  /*useEffect(() => {
    return () => {};
  });

  //
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

// we can actually return a function from our useEffect function
// the return function is what it is called a cleanup function
// A CLEANUP FUNCTION: it is what useEffect calls when the Component unmounts
// replicated/mimics the lifecycle method: componentWillUnmount()
// useEffect can ONLY return back this cleanup function

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);*/

//
//AFTER 225
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  //
  //
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

/*const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

SAME AS:
const collection = useSelector(selectCollection(collectionID));
*/

export default CollectionPage;
