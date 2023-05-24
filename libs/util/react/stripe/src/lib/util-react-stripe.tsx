import styles from './util-react-stripe.module.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51N7A41CQLSpfZJAagmEHuLucDm9dWHEGg973aktohMdSQu1m5RMeXeRC71qyiK2ANDyR5f9TofPKcDE6ZhRmNYcW00ZFhMLsTn');

export const STRIPE_TEST_SECRET = "sk_test_51N7A41CQLSpfZJAayJadP4w3aNyYgN1LaBGxhOpjIfyH9Pvg4Q4rCDdXkQ9SkOvQdd7o2tnKXdcNBm9OxbeU4wwO00InfhADRF";

/* eslint-disable-next-line */
export interface UtilReactStripeProps { }

export function UtilReactStripe(props: UtilReactStripeProps) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: STRIPE_TEST_SECRET,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default UtilReactStripe;
