import React from 'react';
import './LandingPage.css';

// Components

import Header from '../../components/Header/Header'

export function LandingPage() {
    return (
        <div>
            <header>
                <Header />
            </header>

            <div className="main">
                <h1>The Best Health Service you'll find.</h1>
                <p>HealthCare helps improve people's health by providing the perfect services</p>
            </div>
        </div>
    )
}
