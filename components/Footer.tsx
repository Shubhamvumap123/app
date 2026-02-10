"use client"

import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-teal-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <Image
                    src="/sa-logo-white.svg"
                    alt="Southern Academy"
                    width={150}
                    height={50}
                    className="h-10 w-auto"
                  />
                  {/* Fallback text if logo fails or is transparent */}
                  <span className="font-bold text-xl tracking-tight">Southern Academy</span>
              </div>

              <p className="text-teal-100 text-sm mb-6 leading-relaxed">
                Southern Academy is dedicated to developing tennis players of all levels in a supportive and
                professional environment. Join us to elevate your game.
              </p>

              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-teal-300 hover:text-white transition-colors p-2 rounded-full hover:bg-teal-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About", "Programs", "Facilities", "Coaches"].map((item) => (
                  <li key={item}>
                    <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-teal-100 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
              <ul className="space-y-3 text-teal-100">
                <li className="flex flex-col">
                    <span className="font-semibold text-teal-300 text-sm">Address</span>
                    <span>123 Court Avenue, Tennis Valley, CA 90210</span>
                </li>
                <li className="flex flex-col">
                    <span className="font-semibold text-teal-300 text-sm">Phone</span>
                    <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex flex-col">
                    <span className="font-semibold text-teal-300 text-sm">Email</span>
                    <span>info@southernacademy.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
              <p className="text-teal-100 text-sm mb-4">
                Subscribe to our newsletter for the latest updates, tips, and events.
              </p>
              <form className="flex flex-col gap-2" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
                <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-teal-900 border-teal-800 text-white placeholder:text-teal-400 focus-visible:ring-teal-500"
                />
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                    Subscribe <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-teal-900 flex flex-col md:flex-row justify-between items-center text-sm text-teal-300">
            <p>
              © {new Date().getFullYear()} Southern Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
