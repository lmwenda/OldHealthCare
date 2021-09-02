/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { Link } from "react-router-dom";
import { ReactTypes } from '../../global-types';

// Components

import Spinner from "../../components/Spinner/Spinner";
import { LoginHeader } from './Header/LoginHeader';

// Styles

import './LoginPage.css';

export default function LoginPage() {

    const [ email, setEmail ] = React.useState<string>("");
    const [ username, setUsername ] = React.useState<string>("");
    const [ password, setPassword ] = React.useState<string>("");
    const [ loading, setLoading ] = React.useState<boolean>(false);

    const Login = async(e: ReactTypes.RFE): Promise<void> => {
        e.preventDefault();

        // Set Loading to true while you do all the login API Logic
        setLoading(true);

        // login the User Credientials

        await new Promise((resolve) => setTimeout(resolve, 5000));

        // Set Loading to False since you have finished all the login API Logic
        setLoading(false);
    }

    return (
        <div className="loginPage" style={{ backgroundColor: '#e7f5ff' }}>
            <header>
                <LoginHeader />
            </header>


            <section className="loginPage___body">
                <div className="login-container">

                    <div className="login-container___header">
                        <h2>Login to HealthCare!</h2>
                        <p>Login to HealthCare and receive all your perks in seconds!</p>
                    </div>

                    {
                        loading ? <Spinner /> : null
                    }

                    <br />
                
                    <form className="login-container___form" style={{ color: "#000" }} 
                    onSubmit={Login}>
                
                        <input className="input" type="email" placeholder="Email:" onChange={
                            (e: ReactTypes.RCE) => setEmail(e.target.value)
                        } />
                        
                        <input className="input" type="password" placeholder="Password:" onChange={
                            (e: ReactTypes.RCE) => setPassword(e.target.value)
                        } />

                        <button className="login_button">Login to HealthCare</button>

                        <p>
                            By clicking the button above, you agree to our 
                            <Link id="blue-link" to="/terms-and-conditions"> Terms & Conditions</Link> and 
                            <Link id="blue-link" to="privacy-policy"> Privacy Policy</Link>.
                        </p>

                    </form>
                </div>
            </section>
        </div>
    )
}
