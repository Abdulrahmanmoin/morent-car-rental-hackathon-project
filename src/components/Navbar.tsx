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
import { SignInButton, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs";

export function Navbar() {

  const { isSignedIn } = useUser();

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

              <div className="text-white">

                {!isSignedIn &&
                  (<div className="bg-blue-500 rounded-md p-2 px-3 font-semibold">
                    <SignInButton mode="modal" />
                  </div>)
                }

              </div>

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
                    <Link href="/admin-dashboard" className="text-black">Visit Admin Dashboard</Link>
                  </DropdownMenuLabel>
                  {/* <DropdownMenuSeparator className="bg-gray-300" /> */}

                </DropdownMenuContent>
              </DropdownMenu>

              <UserButton />

            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-x-4">

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
                    <Link href="/admin-dashboard" className="text-black">Visit Admin Dashboard</Link>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator className="bg-gray-300" />

                  <DropdownMenuLabel>
                    <Link href="/" className="text-black">Home</Link>
                  </DropdownMenuLabel>

                </DropdownMenuContent>
              </DropdownMenu>

              {isSignedIn ?
                <UserButton />
                :
                (<div className="bg-blue-500 rounded-md p-2 px-3 font-semibold">
                  <SignInButton />
                </div>)
              }

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