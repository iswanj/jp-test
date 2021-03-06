import React from 'react';
import App from './containers/App';
import { HomeContainer } from './containers/Home';
import { ProductContainer } from './containers/Product';

import { Router, IndexRedirect, Route } from 'react-router';

export default (
<Router>
  <Route path="/" component={App}>
    <IndexRedirect to="/home" />
    <Route path="home" component={HomeContainer} />
    <Route path="product/:id" component={ProductContainer} />
  </Route>
</Router>
);
