import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

import { compose } from "redux";
// compose: let's us pass these in by just calling the function

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

//"isLoading": we need this name to be the exact name the WithSpinner is expecting as a prop

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
