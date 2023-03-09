import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51Mjcs1JPKEXrETT5Fms6h3vtFUjM8agOmja3ZaZGAazV0yIjnIEBwFSlJT0PfxJJN2meeZSadkZKowjKuhTESlHO00WKjwDP0o";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
