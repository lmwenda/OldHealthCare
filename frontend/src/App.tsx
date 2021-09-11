import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';

// Components

import LandingPage from './pages/LandingPage/LandingPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactPage from "./pages/ContactPage/ContactPage";
import PricingPage from './pages/PricingPage/PricingPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>

        {/* LANDING PAGE */}

        <Route path="/" component={LandingPage} exact />

        {/* CONTACT PAGE */}

        <Route path="/contact" component={ContactPage} exact />

         {/* PRICING PAGE */}

         <Route path="/pricing" component={PricingPage} exact />

        {/* LOGIN PAGE */}

        <Route path="/login" component={LoginPage} exact />

        {/* REGISTER PAGE */}

        <Route path="/register" component={RegisterPage} exact />

        {/* BLOG PAGE */}

        <Route path="/blog" render={() => (<div><Header /><h1>Blog Posts</h1></div>)} exact />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
