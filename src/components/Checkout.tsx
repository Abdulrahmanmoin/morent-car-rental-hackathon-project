'use client'
import { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import convertToSubCurrency from '@/lib/ConvertToSubCurrency'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'

const CheckoutPage = ({ amount }: { amount: number }) => {

    let URL = '';
        console.log(window.location.host)

        const myhost = window.location.host

        if (myhost === 'localhost:3000') {
            URL = 'http://localhost:3000'
        }
        else {
            URL = 'https://morent-car-rental-ar.vercel.app';
        }

    const stripe = useStripe()
    const elements = useElements()

    const [errorMessage, setError] = useState<string>()
    const [clientSecret, setClientSecret] = useState('')
    const [loading, setLoading] = useState(false)


    // as the payment method changes it is necessary to generate a new client secret.
    useEffect(() => {

        console.log(amount);

        fetch('/api/payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) })
        })

            .then(res => res.json())
            .then((data) => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                } else {
                    console.error('Failed to fetch clientSecret:', data);
                }
            })
            .catch((error) => console.error('Error fetching clientSecret:', error));
    }, [amount])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (!clientSecret) {
            setError('Client secret is missing');
            setLoading(false);
            return;
        }

        // Error handling
        if (!stripe || !elements) {
            setError('Stripe has not loaded yet.')
            setLoading(false)
            return
        }

        const { error: submitErrors } = await elements.submit()
        if (submitErrors) {
            setError(submitErrors.message)
            setLoading(false)
            return
        }

            const { error } = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: `${URL}/payment-success?amount=${amount}`
                }
            })

        if (error) {
            setError(error.message)
        }
        else {
            setError('')
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='p-8 space-y-8 '>
                {/* Billing Info - Step 1 */}
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Billing Info</h2>
                        <span className="text-sm text-muted-foreground">Step 1 of 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Please enter your billing info</p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" className="mt-1.5" required={true} />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Phone number" className="mt-1.5" required={true} />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" placeholder="Address" className="mt-1.5" required={true} />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="town">Town / City</Label>
                            <Input id="town" placeholder="Town or city" className="mt-1.5" required={true} />
                        </div>
                    </div>
                </div>

                {/* Payment Method - Step 2 */}
                <div className="rounded-lg bg-white p-6 shadow-sm ">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Payment Method</h2>
                        <span className="text-sm text-muted-foreground">Step 2 of 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Please enter your payment method</p>
                    {clientSecret && <PaymentElement />}
                    {/* <button
                        className='w-full bg-blue-600 text-white rounded-lg py-2 mt-5'
                    >Pay Now</button> */}
                </div>

                {/* Confirmation - Step 3 */}
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Confirmation</h2>
                        <span className="text-sm text-muted-foreground">Step 3 of 3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">We are getting to the end. Just few clicks and your rental is ready!</p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="marketing" />
                            <Label htmlFor="marketing" className="text-sm">
                                I agree with sending an Marketing and newsletter emails. No spam, promised!
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" required={true} />
                            <Label htmlFor="terms" className="text-sm">
                                I agree with our terms and conditions and privacy policy.
                            </Label>
                        </div>
                    </div>

                    <Button type="submit" className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Rent Now
                    </Button>

                    <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                        </svg>
                        <span>All your data are safe</span>
                    </div>
                </div>
            </form>

            <div className='p-8 pt-0'>
                {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                {loading && <p className='text-black'>{loading}</p>}
            </div>
        </>
    )
}

export default CheckoutPage