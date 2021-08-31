import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';

// Components

import { LandingPage } from './pages/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/blog" render={() => (<div><Header /><h1>Blog Posts</h1></div>)} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
