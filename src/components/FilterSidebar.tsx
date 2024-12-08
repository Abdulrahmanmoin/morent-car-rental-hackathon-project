"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface FilterSidebarProps {
  isOpen: boolean
  className?: string
}

export function FilterSidebar({ isOpen, className }: FilterSidebarProps) {
  const [price, setPrice] = React.useState([100])

  const carTypes = [
    { id: "sport", label: "Sport", count: 10 },
    { id: "suv", label: "SUV", count: 12 },
    { id: "mpv", label: "MPV", count: 16 },
    { id: "sedan", label: "Sedan", count: 20 },
    { id: "coupe", label: "Coupe", count: 14 },
    { id: "hatchback", label: "Hatchback", count: 14 },
  ]

  const capacities = [
    { id: "2person", label: "2 Person", count: 10 },
    { id: "4person", label: "4 Person", count: 14 },
    { id: "6person", label: "6 Person", count: 12 },
    { id: "8ormore", label: "8 or More", count: 16 },
  ]

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-48 bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}
    >
      <div className="space-y-8">
        {/* Type Section */}
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase text-gray-500">Type</h3>
          <div className="space-y-3">
            {carTypes.map((type) => (
              <div key={type.id} className="flex items-center">
                <Checkbox id={type.id} className="h-5 w-5 rounded border-gray-300" />
                <Label htmlFor={type.id} className="ml-3 flex flex-1 text-sm">
                  {type.label}
                  <span className="ml-auto text-gray-500">({type.count})</span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Capacity Section */}
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase text-gray-500">Capacity</h3>
          <div className="space-y-3">
            {capacities.map((capacity) => (
              <div key={capacity.id} className="flex items-center">
                <Checkbox id={capacity.id} className="h-5 w-5 rounded border-gray-300" />
                <Label htmlFor={capacity.id} className="ml-3 flex flex-1 text-sm">
                  {capacity.label}
                  <span className="ml-auto text-gray-500">({capacity.count})</span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Section */}
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase text-gray-500">Price</h3>
          <div className="space-y-4">
            <Slider
              value={price}
              onValueChange={setPrice}
              max={100}
              step={1}
              className="py-4"
            />
            <div className="text-sm">
              Max. ${price[0]}.00
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}