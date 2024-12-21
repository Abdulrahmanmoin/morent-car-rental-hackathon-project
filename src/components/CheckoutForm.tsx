'use client'

import { Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function CheckoutForm() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Billing Info - Step 1 */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Billing Info</h2>
          <span className="text-sm text-muted-foreground">Step 1 of 4</span>
        </div>
        <p className="text-sm text-muted-foreground">Please enter your billing info</p>
        
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Phone number" className="mt-1.5" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Address" className="mt-1.5" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="town">Town / City</Label>
            <Input id="town" placeholder="Town or city" className="mt-1.5" />
          </div>
        </div>
      </div>

      {/* Rental Info - Step 2 */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Rental Info</h2>
          <span className="text-sm text-muted-foreground">Step 2 of 4</span>
        </div>
        <p className="text-sm text-muted-foreground">Please select your rental date</p>

        <div className="mt-6 space-y-6">
          <div>
            <Label className="text-base">Pick-Up</Label>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem className="text-black" value="ny">New York</SelectItem>
                  <SelectItem className="text-black" value="la">Los Angeles</SelectItem>
                  <SelectItem className="text-black" value="ch">Chicago</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">9:00 AM</SelectItem>
                  <SelectItem value="10">10:00 AM</SelectItem>
                  <SelectItem value="11">11:00 AM</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative md:col-span-2">
                <Input type="date" className="pl-12" />
                <Calendar className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div>
            <Label className="text-base">Drop-Off</Label>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="la">Los Angeles</SelectItem>
                  <SelectItem value="ch">Chicago</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">9:00 AM</SelectItem>
                  <SelectItem value="10">10:00 AM</SelectItem>
                  <SelectItem value="11">11:00 AM</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative md:col-span-2">
                <Input type="date" className="pl-12" />
                <Calendar className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method - Step 3 */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <span className="text-sm text-muted-foreground">Step 3 of 4</span>
        </div>
        <p className="text-sm text-muted-foreground">Please enter your payment method</p>

        <RadioGroup defaultValue="credit-card" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card">Credit Card</Label>
            </div>
            <div className="rounded-lg border p-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="Card number" className="mt-1.5" />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <Label htmlFor="card-holder">Card Holder</Label>
                    <Input id="card-holder" placeholder="Card holder" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="expiration">Expiration Date</Label>
                  <Input id="expiration" placeholder="MM/YY" className="mt-1.5" />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bitcoin" id="bitcoin" />
              <Label htmlFor="bitcoin">Easy paisa</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Confirmation - Step 4 */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirmation</h2>
          <span className="text-sm text-muted-foreground">Step 4 of 4</span>
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
            <Checkbox id="terms" />
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
  )
}

