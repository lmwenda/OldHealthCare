/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ReactTypes } from '../../global-types';

// Components

import Spinner from "../../components/Spinner/Spinner";
import { RegisterHeader } from './Header/RegisterHeader';

// Styles

import './RegisterPage.css';

// Actions

import { register } from '../../redux/actions';

export default function RegisterPage() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [ email, setEmail ] = React.useState<string>("");
    const [ username, setUsername ] = React.useState<string>("");
    const [ password, setPassword ] = React.useState<string>("");
    const [ loading, setLoading ] = React.useState<boolean>(false);

    const submitForm = async(e: ReactTypes.RFE): Promise<any> => {
        e.preventDefault();

        // Set Loading to true while you do all the Register API Logic
        setLoading(true);

        // Register the User Credientials

        register(username, email, password, dispatch)
            .then(() => history.push("/login"));
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // Set Loading to False since you have finished all the Register API Logic

        setLoading(false);
    }

    return (
        <div className="registerPage" style={{ backgroundColor: '#e7f5ff' }}>
            <header>
                <RegisterHeader />
            </header>


            <section className="registerPage___body">
                <div className="register-container">

                    <div className="register-container___header">
                        <h2>Get HealthCare!</h2>
                        <p>Open an account and get your HealthCare in minutes.</p>
                    </div>

                    {
                        loading ? <Spinner /> : null
                    }

                    <br />
                
                    <form className="register-container___form" style={{ color: "#000" }} 
                    onSubmit={submitForm}>
                
                        <input className="input" type="email" placeholder="Email:" onChange={
                            (e: ReactTypes.RCE) => setEmail(e.target.value)
                        } />

                        <input className="input" type="text" placeholder="Username:" onChange={
                            (e: ReactTypes.RCE) => setUsername(e.target.value)
                        } />
                        
                        <input className="input" type="password" placeholder="Password:" onChange={
                            (e: ReactTypes.RCE) => setPassword(e.target.value)
                        } />

                        <button className="register_button" onClick={submitForm}>Get Started</button>

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
