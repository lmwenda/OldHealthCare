import React from 'react';
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";

function PhoneMenu() {

    const token: any = localStorage.getItem("token");
    const _id: any = jwt.decode(token);

    return (
        <nav className="phoneMenu">
            <Link id="first" to="/">
                Home
            </Link>

            <Link id="link" to="/blog">
                Blog
            </Link>

            <Link  id="link" to="/pricing">
                Pricing
            </Link>

            <Link  id="link" to="/contact">
                Contact
            </Link>
            
            {
                token ? (
                    <div>
                        <Link id="getting-started" to={`/my/sessions`}>
                            My Sessions
                        </Link>

                        <Link id="getting-started" to={`/account/${_id}`}>
                            Account Settings
                        </Link>
                    </div>
                ) : (
                    <div className="start-menu">
                        <Link id="getting-started" to="/register">
                            Get Started
                        </Link>
        
                        <Link id="pricing" to="/pricing">
                            <button>
                                <p>Become a Member</p>
                            </button>
                        </Link>
                    </div>
                )
            }
        </nav>
    )
}

export default PhoneMenu;
