import React from 'react';
import './LandingPage.css';
import { Link } from "react-router-dom";

// Components

import Header from '../../components/Header/Header';
import LandingImage from "../../assets/landing_page_image_1.svg";

export default function LandingPage() {
    return (
            <div>
                <header>
                    <Header />
                </header>

                <div className="landing___main">
                    <div className="landing___main___content">
                        <h1 className="landing___main___content___title">The Best Health Service you'll find.</h1>

                        <p className="landing___main___content___description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.
                        </p>

                        <Link to="/register">
                            <button className="landing___main___content___button"><p>Get Started</p></button>
                        </Link>

                        <Link to="/contact" id="talk-to-us">Talk to us</Link>

                    </div>
                        <div className="landing___main___image">
                            <img src={LandingImage} alt="" />
                        </div>
                </div>

                <div className="used_around_the_world">
                    <h1 className="used_around_the_world___text">
                        Our products is used by teams from around the world
                    </h1>

                    <div className="used_around_the_world__images">
                        <img src="
                        https://assets.website-files.com/6085e38567384555aea9df90/60e2756704be844efefe70a5_Carded%20Black%20Logo.svg
                        " alt="" />

                        <img src="
                        https://assets.website-files.com/6085e38567384555aea9df90/60e27567d03c58ecd9f102dc_Emerald%20Black%20Logo.svg
                        " alt="" />

                        <img src="
                        https://assets.website-files.com/6085e38567384555aea9df90/60e275675067bd7021d81225_Etro%20Black%20Logo.svg
                        " alt="" />

                        <img src="
                        https://assets.website-files.com/6085e38567384555aea9df90/60e27567d03c58eddcf102db_Focusfox%20Black%20Logo.svg
                        " alt="" />

                        <img src="
                        https://assets.website-files.com/6085e38567384555aea9df90/60e275679137b9062facb23d_Optimer%20Black%20Logo.svg
                        " alt="" />
                        
                    </div>
                </div>
            </div>
    )
}
