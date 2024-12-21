import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import RentalMap from "./rental-map"
import TopCarChart from "./top-car-chart"
import RecentTransactions from "./recent-transactions"
import Image from "next/image"

export default function RentalDetailsPage() {
  return (
    <div className="container mx-auto p-4 lg:p-6 text-black overflow-hidden">
      <div className="grid lg:grid-cols-[1fr,380px] gap-6 ">
        {/* Main Content */}
        <div className="space-y-6 ">
          <div className=" bg-white rounded-xl space-y-5">
            <h1 className="text-2xl font-semibold pt-5 pl-5">Details Rental</h1>

            {/* Map Card */}
            <Card className="overflow-hidden border-none">
              <div className="h-[300px] lg:h-[400px] relative p-5">
                <RentalMap />
              </div>
            </Card>
          </div>
          {/* Car Details */}
          <Card className="p-4 bg-white rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-primary/10 rounded-lg overflow-hidden flex justify-center items-center">
                <Image
                  src="/assets/car1detail.png"
                  alt="Nissan GT-R"
                  className="h-14 w-56 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold">Nissan GT - R</h2>
                  <span className="text-muted-foreground">#9761</span>
                </div>
                <p className="text-muted-foreground">Sport Car</p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="mt-6 space-y-6">
              <RadioGroup defaultValue="pickup" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <label htmlFor="pickup" className="font-medium">Pick - Up</label>
                </div>

                <div className="grid gap-4 pl-6">
                  <div className="space-y-2">
                    <label className="text-sm">Locations</label>
                    <Select defaultValue="kota-semarang">
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kota-semarang">Kota Semarang</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm">Date</label>
                      <Select defaultValue="20-july">
                        <SelectTrigger>
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="20-july">20 July 2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Time</label>
                      <Select defaultValue="07-00">
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="07-00">07:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dropoff" id="dropoff" />
                  <label htmlFor="dropoff" className="font-medium">Drop - Off</label>
                </div>

                <div className="grid gap-4 pl-6">
                  <div className="space-y-2">
                    <label className="text-sm">Locations</label>
                    <Select defaultValue="kota-semarang">
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kota-semarang">Kota Semarang</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm">Date</label>
                      <Select defaultValue="21-july">
                        <SelectTrigger>
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="21-july">21 July 2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm">Time</label>
                      <Select defaultValue="01-00">
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="01-00">01:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </RadioGroup>

              {/* Total Price */}
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Total Rental Price</h3>
                    <p className="text-sm text-muted-foreground">Overall price and includes rental discount</p>
                  </div>
                  <div className="text-2xl font-bold">$80.00</div>
                </div>
              </Card>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 ">
          <Card className="p-4  bg-white rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Top 5 Car Rental</h2>
            <div className="relative aspect-square">
              <TopCarChart />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0D3559]" />
                  <span>Sport Car</span>
                </div>
                <span className="font-medium">17,439</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#175CD3]" />
                  <span>SUV</span>
                </div>
                <span className="font-medium">9,478</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#2E90FA]" />
                  <span>Coupe</span>
                </div>
                <span className="font-medium">18,197</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#84CAFF]" />
                  <span>Hatchback</span>
                </div>
                <span className="font-medium">12,510</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D1E9FF]" />
                  <span>MPV</span>
                </div>
                <span className="font-medium">14,406</span>
              </div>
            </div>
          </Card>

          <RecentTransactions />
        </div>
      </div>
    </div>
  )
}

