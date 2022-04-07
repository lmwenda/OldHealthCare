import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import './Header.css';
import { Link } from 'react-router-dom'
import PhoneHeader from './PhoneHeader/PhoneHeader';
import { useSelector } from 'react-redux';
import { State } from '../../utils/types';

function Header() {
    // User

    const user = useSelector((state: State) => state.userAuth);

    // Media Constants

    const mql: MediaQueryList = window.matchMedia('(max-width: 600px)');
    const phoneView: boolean = mql.matches;

    if(!phoneView){
        return (
            <nav>
    
                <Link to="/" className="main" style={{ color: '#303030', textDecoration: 'none' }}>
                    <i><LocalHospitalIcon /></i>
                    <h1>HealthCare</h1>
    
                    <div className="menu">
                        <Link id="first" to="/sessions">
                            Sessions
                        </Link>
    
                        <Link  id="link" to="/pricing">
                            Pricing
                        </Link>
    
                        <Link  id="link" to="/contact">
                            Contact
                        </Link>
                    </div>
                </Link>

                {
                    user.isLoggedIn ? (
                        <div className="start-menu">
                            <Link id="getting-started" style={{fontSize: '1vw'}} to={
                                `/account/settings/${localStorage.getItem("token")}`
                            }>
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
    } else {
        return <PhoneHeader />
    }
}

export default Header;
