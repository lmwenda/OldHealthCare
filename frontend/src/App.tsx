import React from 'react';
import jwt from "jsonwebtoken";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components

import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactPage from "./pages/ContactPage/ContactPage";
import SubscriptionPage from './pages/SubscriptionPage/SubscriptionPage';


function App() {

  // Getting JWT Tokens and User ID

  const token: any = localStorage.getItem("token");
  const _id: any = jwt.decode(token);

  // Expired Tokens

  React.useEffect(() => {
    if(token){
      if(_id.exp < Date.now() / 1000){
        localStorage.removeItem("token");
      }else{
        return;
      }
    }
  });

  return (
    <BrowserRouter>
      <Switch>

        {/* LANDING PAGE */}

        <Route path="/" component={LandingPage} exact />

        {/* CONTACT PAGE */}

        <Route path="/contact" component={ContactPage} exact />

         {/* PRICING PAGE */}

         <Route path="/pricing" component={SubscriptionPage} exact />

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
