"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { BookingModal } from "@/components/BookingModal"

interface HeaderProps {
    forceScrolled?: boolean;
}

// Optimization: Hoisting static array outside the component scope
// prevents it from being re-allocated on every render cycle.
const navItems = ["Home", "About", "Programs", "Facilities", "Coaches", "Events", "Gallery", "Blog"]

const Header: React.FC<HeaderProps> = ({ forceScrolled = false }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false;

    // ⚡ Bolt Performance Optimization: Throttled scroll listener
    // What: Added requestAnimationFrame throttling and { passive: true } to the scroll event listener.
    // Why: High-frequency events like 'scroll' trigger layout recalculations and can drop frames on the main thread.
    // Passive listeners allow browser scrolling without waiting for JS execution.
    // Impact: ~60FPS stable scrolling, significantly reduced main thread blocking time.
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const effectiveScrolled = forceScrolled || isScrolled;

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        effectiveScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
                 <Image
                    src="/ssa-logo.svg"
                    alt="SSA Logo"
                    width={133}
                    height={40}
                    className="h-10 w-auto"
                 />
            </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-teal-500",
                effectiveScrolled ? "text-gray-700" : "text-white/90"
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <BookingModal>
            <Button
                variant={effectiveScrolled ? "default" : "secondary"}
                className={cn(
                    "hidden md:inline-flex font-semibold",
                    effectiveScrolled ? "bg-teal-600 hover:bg-teal-700 text-white" : "bg-white text-teal-900 hover:bg-teal-50"
                )}
            >
                Book Court
            </Button>
          </BookingModal>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={cn("h-6 w-6", effectiveScrolled ? "text-gray-900" : "text-white")} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-lg font-medium text-gray-900 hover:text-teal-600 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <BookingModal>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4">
                        Book Court
                    </Button>
                </BookingModal>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
