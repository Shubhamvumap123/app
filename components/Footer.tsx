import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Key, Menu } from "lucide-react"
const Footer = () => {
    return (
        <footer className="bg-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logo-white.svg"
                alt="Southern Slam Academy"
                width={150}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-teal-100 text-sm">
                Southern Slam Academy is dedicated to developing tennis players of all levels in a supportive and
                professional environment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Programs", "Facilities", "Coaches"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-teal-100 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-teal-100">
                <li>123 Court Avenue</li>
                <li>Tennis Valley, CA 90210</li>
                <li>+1 (555) 123-4567</li>
                <li>info@southernslam.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                  <Link
                    key={social}
                    href={`https://${social}.com`}
                    className="text-teal-100 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center">
                      <span className="sr-only">{social}</span>
                      {/* Social icons would go here */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-teal-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-teal-100">
              © {new Date().getFullYear()} Southern Slam Academy. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-teal-100 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-teal-100 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;