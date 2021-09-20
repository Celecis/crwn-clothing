import React from "react";
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
  /* NÃO ESQUECER, ROUTE MOSTRA O COMPONENTE ONDE O EXACT PATH FOR IGUAL AO URL */

  // {match.path}/:collectionId
  // collectionId becomes a property of "param" - WE ARE THE ONES THAT NAME IT after the :
  // this will be acessible inside "param" that is a property inside our match obj
  // os nomes das propriedades {collectionId} e {url} aparentam ser o nome que estiver no link do brownser
  // é preciso ir buscar o correcto nome/url de cada página de items da loja
);

export default ShopPage;
