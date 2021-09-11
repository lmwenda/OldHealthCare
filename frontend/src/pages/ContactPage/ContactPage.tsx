import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';

import './ContactPage.css';

export default function ContactPage() {
    return (
        <div className="contactPage">
            <header>
                <Header />
            </header>

            <div className="contactPage___contact-container">
                <div className="contactPage___contact-container___form">
                    <h1>Need More Info on HealthCare?</h1>
                    <p>Sed at velit lacinia, gravida lorem vitae, egestas mi. Maecenas eu maximus.</p>

                    <form>
                        <label>Your Name</label>
                        <input type="text" placeholder="Enter your name" />    

                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />

                        <label>Your Message</label>
                        <textarea placeholder="Enter your message:" />

                        <button>Send Message</button>
                    </form>
                </div>

                <div className="contactPage___contact-container___info">
                    <h1>Customer Service</h1>
                    <p>
                        Sed at velit lacinia, gravida lorem vitae, egestas mi. Maecenas eu maximus. 
                        Sed at velit lacinia, gravida lorem vitae, egestas mi. Maecenas eu maximus.
                    </p>
                    
                    <br />

                    <p>Sed at velit lacinia, gravida lorem vitae, egestas mi. Maecenas eu maximus.</p>

                    <Link to="/" className="link">
                        Visit our Discord for Help!
                    </Link>

                    <Link to="/register" className="link">
                        Haven't joined HealthCare yet? Join us!
                    </Link>
                </div>
            </div>
        </div>
    )
}
