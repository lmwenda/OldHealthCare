import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';

/// Styles

import './SubscriptionCard.css';

function SubscriptionCard(){
    const mql: MediaQueryList = window.matchMedia('(max-width: 600px)');
    const phoneView: boolean = mql.matches;
    if(!phoneView){
        return(
            <div style={{marginLeft: '100px', color: '#000'}} className="container">
                <div className="card">

                    <h3 style={{color: '#303030', fontSize: '40px'}} id="title">Free</h3>

                    <div>
                        <h1 style={{display: 'flex', color: '#303030', paddingLeft: '5vw'}}>
                            <p style={
                                {
                                    color: '#303030', 
                                    fontSize: '30px',
                                    paddingLeft: '10px', 
                                    paddingRight: '10px'
                                }
                            }>
                                £0.00
                            </p>
                            /Month
                        </h1>
                    </div>

                    <div className="card___content">
                        <p><CheckIcon id="tick" /> View Tournaments </p>
                        <p><CheckIcon id="tick" /> Training Sessions </p>
                    </div>

                    <Link id="free-pricing" to="/register">
                        <button>
                            <p>Choose Plan</p>
                        </button>
                    </Link>

                </div>

                <div className="card">
                    
                    <div className="higherlighter">
                        <h3 style={{color: '#303030', fontSize: '40px'}} id="title">Premium</h3>
                    </div>

                    <div>
                        <h1 style={{display: 'flex', color: '#303030', paddingLeft: '5vw'}}>
                            <p style={
                                {
                                    color: '#303030', 
                                    fontSize: '30px',
                                    paddingLeft: '10px', 
                                    paddingRight: '10px'
                                }
                            }>
                                £9.99
                            </p>
                            /Month
                        </h1>
                    </div>

                    <div className="card___content">
                        <p><CheckIcon id="tick" /> Create, Update, Delete and View Tournaments </p>
                        <p><CheckIcon id="tick" /> Training Sessions </p>
                        <p><CheckIcon id="tick" /> Collaborative Training Sessions </p>
                        <p><CheckIcon id="tick" /> Mobile Application </p>
                        <p><CheckIcon id="tick" /> HealthCare Blogs </p>
                    </div>

                    <Link id="pricing" to="/premium">
                        <button>
                            <p>Choose Plan</p>
                        </button>
                    </Link>

                </div>
            </div>
        );
    } else{
        return(
            <div className="phone-container">
                <div className="card">
                    <hr id="liner" />
                    <h3>Free</h3>

                    <button id="phone-plan-button">Choose Plan</button>
                </div>

                <div className="card">
                    <hr id="liner" />
                    <h3>Premium</h3>
                    <button id="phone-plan-button">Choose Plan</button>
                </div>
            </div>
        );
    }
}

export default SubscriptionCard;