"use client"

import { Search } from "@/components/ui/search"
import Link from "next/link"
import Image from "next/image"
import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  return (
    <header className="sticky top-0 z-[51]">
      <nav className="w-full border-b border-gray-100 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">MORENT</span>
            </Link>

            {/* Desktop Search */}
            <div className="hidden md:block flex-1 px-8">
              <Search />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                {/* <Heart className="h-6 w-6" /> */}
                <Image
                  src={"/assets/heart.png"}
                  alt="Profile"
                  height={10000}
                  width={10000}
                  className="h-6 w-6"
                  loading="lazy"
                />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                <Image
                  src={"/assets/notification.png"}
                  alt="Profile"
                  height={10000}
                  width={10000}
                  className="h-6 w-6"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <Image
                      src={"/assets/setting-2.png"}
                      alt="Profile"
                      height={10000}
                      width={10000}
                      className="h-6 w-6"
                      loading="lazy"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white z-[101]">
                  <DropdownMenuLabel>
                    <Link href="/category" className="text-black">Visit by Category</Link>
                  </DropdownMenuLabel>
                  {/* <DropdownMenuSeparator /> */}

                </DropdownMenuContent>
              </DropdownMenu>


              
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="ml-2">
                      <Image
                        src={"/assets/userAdminImg.png"}
                        alt="Profile"
                        height={10000}
                        width={10000}
                        className="h-10 w-10 rounded-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white z-[101]">
                    <DropdownMenuLabel>
                      <Link href="/admin-dashboard" className="text-black">Visit Admin Dashboard</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-300" />
                    <DropdownMenuLabel>
                    <Link href="/me" className="text-black">Visit User Dashboard</Link>
                  </DropdownMenuLabel>

                  </DropdownMenuContent>
                </DropdownMenu>
             

            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-2">
                    <Image
                      src={"/assets/userAdminImg.png"}
                      alt="Profile"
                      height={1000}
                      width={1000}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white z-[101]">
                  <DropdownMenuLabel>
                    <Link href="/admin-dashboard" className="text-black">Visit Admin Dashboard</Link>
                  </DropdownMenuLabel>
                  
                  <DropdownMenuSeparator className="bg-gray-300" />

                  <DropdownMenuLabel>
                    <Link href="/me" className="text-black">Visit User Dashboard</Link>
                  </DropdownMenuLabel>

                  <DropdownMenuLabel>
                    <Link href="/" className="text-black">Home</Link>
                  </DropdownMenuLabel>

                  <DropdownMenuLabel>
                    <Link href="/category" className="text-black">Visit by Category</Link>
                  </DropdownMenuLabel>

                </DropdownMenuContent>
              </DropdownMenu>



            </div>
          </div>

          {/* Mobile Search - Below Header */}
          <div className="md:hidden py-3">
            <Search />
          </div>
        </div>
      </nav>
    </header>
  )
}