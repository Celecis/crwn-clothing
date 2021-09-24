import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionForPreviews } from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

// Since this component thinks selectCollections is an array, or .map won't work
// for this we can create a selector to transform an object into an array and use it here

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreviews,
});

export default connect(mapStateToProps)(CollectionsOverview);