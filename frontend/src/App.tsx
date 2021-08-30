import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components

import { LandingPage } from './pages/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
