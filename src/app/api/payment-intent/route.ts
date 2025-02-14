import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
    try {
        const { amount } = await request.json();

        if (!amount || isNaN(amount) || amount < 0) {
            return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
            // automatic_payment_methods: ['card_present'], 
        })

        return NextResponse.json({ clientSecret: paymentIntent.client_secret })

    }
    catch (err: unknown) {
        console.error("Error in route.ts:", err);
        if (err instanceof Error) {
            return NextResponse.json({
                status: 500,
                body: { error: err.message }
            });
        }
        return NextResponse.json({
            status: 500,
            body: { error: "An unknown error occurred" }
        });
    }

}