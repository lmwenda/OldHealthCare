import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import './Header.css';
import { Link } from 'react-router-dom'
import PhoneHeader from './PhoneHeader/PhoneHeader';

function Header() {
    const mql: MediaQueryList = window.matchMedia('(max-width: 600px)');
    const phoneView: boolean = mql.matches;

    if(!phoneView){
        return (
            <nav>
    
                <Link to="/" className="main" style={{ color: '#303030', textDecoration: 'none' }}>
                    <i><LocalHospitalIcon /></i>
                    <h1>HealthCare</h1>
    
                    <div className="menu">
                        <Link id="first" to="/blog">
                            Blog
                        </Link>
    
                        <Link  id="link" to="/pricing">
                            Pricing
                        </Link>
    
                        <Link  id="link" to="/contact">
                            Contact
                        </Link>
                    </div>
                </Link>
    
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
            </nav>
        )
    } else {
        return <PhoneHeader />
    }
}

export default Header;
