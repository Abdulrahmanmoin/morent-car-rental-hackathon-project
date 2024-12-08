"use client"

import * as React from "react"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FilterSidebar } from "@/components/FilterSidebar"

export function SideBar({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="relative flex min-h-screen text-black">
      <FilterSidebar isOpen={isSidebarOpen} />
      
      <div className="flex-1">
        <div className="sticky top-0 z-40 flex h-16 items-center border-b bg-white px-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <main className="flex-1">{children}</main>
      </div>
      
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}