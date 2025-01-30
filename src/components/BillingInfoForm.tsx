'use client'

import React, { useEffect, useState } from 'react'
import { Calendar } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


interface BillingInfoFormProps {
    basePrice: number; // The daily price of the car, passed from parent
    onPriceChange: (totalPrice: number) => void; // Function to update the total price
}

const areasArray = [
    { value: "bahadurabad", label: "Bahadurabad" },
    { value: "pechs", label: "PECHS" },
    { value: "gulshan_e_iqbal", label: "Gulshan-e-Iqbal" },
    { value: "korangi", label: "Korangi" },
    { value: "saddar", label: "Saddar" },
    { value: "lyari", label: "Lyari" },
    { value: "malir", label: "Malir" },
    { value: "nazimabad", label: "Nazimabad" },
    { value: "gulberg", label: "Gulberg" },
    { value: "new_karachi", label: "New Karachi" },
    { value: "north_nazimabad", label: "North Nazimabad" },
    { value: "jamshed_town", label: "Jamshed Town" },
    { value: "orangi", label: "Orangi" },
    { value: "keamari", label: "Keamari" },
    { value: "bin_qasim", label: "Bin Qasim" },
    { value: "shah_faisal", label: "Shah Faisal" },
    { value: "landhi", label: "Landhi" },
    { value: "model_colony", label: "Model Colony" },
    { value: "sohrab_goth", label: "Sohrab Goth" },
    { value: "gizri", label: "Gizri" },
    { value: "clifton", label: "Clifton" },
    { value: "defence", label: "Defence" },
    { value: "kharadar", label: "Kharadar" },
    { value: "manghopir", label: "Manghopir" },
    { value: "mominabad", label: "Mominabad" }
]

export default function BillingInfoForm({ basePrice, onPriceChange }: BillingInfoFormProps) {

    const [pickUpDate, setPickUpDate] = useState<string>('')
    const [dropOffDate, setDropOffDate] = useState<string>('')
    const [error, setError] = useState<string>('')

    useEffect(() => {



        if (pickUpDate && dropOffDate) {
            const pickUp = new Date(pickUpDate)
            const dropOff = new Date(dropOffDate)

            // Check for valid dates
            if (isNaN(pickUp.getTime()) || isNaN(dropOff.getTime())) {
                setError('Invalid date format.')
                onPriceChange(0)
                return
            }

            // Validate dates
            if (dropOff <= pickUp) {
                setError('Drop-Off date cannot be same or earlier than Pick-Up date.')
                onPriceChange(0)
                return
            }

            const rentalDays = Math.ceil((dropOff.getTime() - pickUp.getTime()) / (1000 * 60 * 60 * 24)) // Days difference
            const totalPrice = rentalDays * basePrice

            setError('')
            onPriceChange(totalPrice) // Pass total price to parent
        } else {
            // Reset total price if dates are cleared
            onPriceChange(0)
        }
    }, [pickUpDate, dropOffDate, basePrice, onPriceChange])

    return (
        <>
            {/* Rental Info */}
            <div className="rounded-lg text-black bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Rental Info</h2>
                </div>
                <p className="text-sm text-muted-foreground">Please select your rental date</p>

                <div className="mt-6 space-y-6">
                    <div>
                        <Label className="text-base">Pick-Up</Label>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your area" />
                                </SelectTrigger>
                                <SelectContent className='bg-white text-black'>
                                    {areasArray.map(area => (
                                        <SelectItem key={area.value} className="text-black" value={area.value}>
                                            {area.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your time" />
                                </SelectTrigger>
                                <SelectContent className='bg-white text-black'>
                                    <SelectItem value="9">9:00 AM</SelectItem>
                                    <SelectItem value="10">10:00 AM</SelectItem>
                                    <SelectItem value="11">11:00 AM</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="relative md:col-span-2">
                                <Input
                                    value={pickUpDate}
                                    onChange={e => setPickUpDate(e.target.value)}
                                    type="date"
                                    className="pl-12" />
                                <Calendar className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <Label className="text-base">Drop-Off</Label>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            
                            <div className="relative md:col-span-2">
                                <Input
                                    value={dropOffDate}
                                    onChange={e => setDropOffDate(e.target.value)}
                                    type="date"
                                    className="pl-12"
                                />
                                <Calendar className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
            </div>
        </>
    )
}