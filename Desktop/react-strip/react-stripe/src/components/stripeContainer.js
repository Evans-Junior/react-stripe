import React from 'react';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'


const PUBLIC_KEY ="pk_test_51INxL2EhpkaDHVkjazhUCAXj3pqDhkjF48Dn0MxzlrQZJgPYNPzEyPOVrpST6v4ZNl2mJIXituH9GBQnpXNG3B2700KuDE2tOC"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function stripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}
