"use client"

import { Search } from "@/components/ui/search"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
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
                />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 relative">
            <Image
                src={"/assets/notification.png"}
                alt="Profile"
                height={10000}
                width={10000} 
                className="h-6 w-6"
                />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
            <Image
                src={"/assets/setting-2.png"}
                alt="Profile"
                height={10000}
                width={10000} 
                className="h-6 w-6"
                />
            </button>
            <button className="ml-2">
              <Image
                src={"/assets/userAdminImg.png"}
                alt="Profile"
                height={10000}
                width={10000}
                className="h-10 w-10 rounded-full object-cover"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button className="p-2">
            <Image
                src={"/assets/userAdminImg.png"}
                alt="Profile"
                height={1000}
                width={1000}
                className="h-10 w-10 rounded-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* Mobile Search - Below Header */}
        <div className="md:hidden py-3">
          <Search />
        </div>
      </div>
    </nav>
  )
}