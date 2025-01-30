"use client"

import convertToSubCurrency from '@/lib/ConvertToSubCurrency';
import CheckoutPage from '@/components/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {

    const [amount, setAmount] = useState<number | null>(null);

    useEffect(() => {
        // Retrieve the amount from sessionStorage
        const storedAmount = sessionStorage.getItem("amount");
        if (storedAmount) {
            setAmount(parseFloat(storedAmount));
            console.log(amount);
            
        } else {
            console.error("Amount not found. Redirecting to booking page.");
            // Redirect user back to booking page if no amount is found
        }
    }, []);

    return (
        <div>
            {amount! > 0 &&
                <Elements
                    stripe={stripePromise}
                    options={{
                        mode: 'payment',
                        amount: convertToSubCurrency(amount!),
                        currency: 'usd'
                    }}
                >
                    <CheckoutPage amount={amount!} />
                </Elements>
            }
        </div>
    )
}

export default StripePayment