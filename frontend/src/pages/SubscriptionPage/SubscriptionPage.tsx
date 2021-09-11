import React from "react";
import "./SubscriptionPage.css";

// Components

import Header from "../../components/Header/Header";
import SubscriptionCard from "../../components/Subscriptions/SubscriptionCard";

function SubscriptionPage(){
    return(
        <div>
            <header>
                <Header />
            </header>

            <br />

            <section id="wrapper">
                <SubscriptionCard />
            </section>
        </div>
    );
}

export default SubscriptionPage;