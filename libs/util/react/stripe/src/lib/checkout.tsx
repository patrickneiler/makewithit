'use client';
import * as styles from './util-react-stripe.module.css';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = () => process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
) : undefined;
export function CheckoutForm() {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);

    return (
        <form action="/api/checkout_sessions" method="POST">
            <section className={styles.default['section']}>
                <button className={styles.default['button']} type="submit" role="link">
                    Checkout
                </button>
            </section>
        </form>
    );
}
export default CheckoutForm;