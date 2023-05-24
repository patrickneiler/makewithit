'use client';
import React, { useEffect } from "react";

export const StripeBuyButton = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return React.createElement("stripe-buy-button", {
        "buy-button-id": 'buy_btn_1N9CE4CQLSpfZJAa4RKirUTY',
        "publishable-key": 'pk_live_51N7A41CQLSpfZJAarsY7KmFWpSia3TKscoA7bioxLWNALaf9kXStCGNUs15Y0X4FKAIELooqWZ7NS4nzhaeYy3yY00m2pC8SnX',
    });
};

export default StripeBuyButton;