import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
const Header: React.FC = () => {
    return (
        <header  className="fixed w-full z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Image src="/SSA.svg" alt="9 Clay Courts" width={120} height={40} className="h-8 w-auto" />
                  </div>
                  <nav className="hidden md:flex space-x-6">
                    {["Home", "About", "Programs", "Facilities", "Coaches", "Events", "Gallery", "Blog"].map(
                      (item) => (
                        <Link
                          key={item}
                          href={`/${item.toLowerCase()}`}
                          className="text-white text-sm font-medium hover:text-teal-300 transition-colors"
                        >
                          {item}
                        </Link>
                      ),
                    )}
                  </nav>
                  <div className="flex items-center space-x-4">
                    <Link
                      href="/contact"
                      className="hidden md:inline-flex bg-transparent border border-white text-white px-4 py-2 rounded text-sm font-medium hover:bg-teal-100 transition-colors"
                    >
                     contact
                    </Link>
                    <button className="md:hidden text-white">
                      <Menu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </header>
    );
};

export default Header;