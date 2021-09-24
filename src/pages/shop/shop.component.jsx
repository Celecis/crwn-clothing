/*import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  // Since ShopPage is being nested in our Route - inside our App.js - it automatically passes 3 objs
  // to our component as props: match, location and history
  // THE MATCH OBJECT has as properties: path, url, params and isExact (boolean value)
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
  /* NÃO ESQUECER, ROUTE MOSTRA O COMPONENTE ONDE O EXACT PATH FOR IGUAL AO URL */ /*

  // {match.path}/:collectionId
  // collectionId becomes a property of "param" - WE ARE THE ONES THAT NAME IT after the :
  // this will be acessible inside "param" that is a property inside our match obj
  // os nomes das propriedades {collectionId} e {url} aparentam ser o nome que estiver no link do brownser
  // é preciso ir buscar o correcto nome/url de cada página de items da loja
);

export default ShopPage;*/

/*import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    //188: Promise Pattern
    //https://firebase.google.com/docs/firestore/use-rest-api

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);*/

import React from "react";
import { Route } from "react-router-dom";
//192 import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
//192 import { selectIsCollectionFetching, selectIsCollectionsLoaded,} from "../../redux/shop/shop.selectors";

//192 import WithSpinner from "../../components/with-spinner/with-spinner.component";
//192
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
//192 import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
//    import CollectionPage from "../collection/collection.component";

//192 const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//    const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
          /*192: render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}*/
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          /*192 render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isColletionsLoaded}
              {...props}
            />
          )}*/
        />
      </div>
    );
  }
}

/*192 const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isColletionsLoaded: selectIsCollectionsLoaded,
});*/

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
