import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
const About = () => {
    return (
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-teal-900 mb-4">About Us</h2>
              <p className="text-gray-700 mb-6">
                Located in the most scenic area of the country, our 9 world-class clay courts are at your location and
                available. Find your ideal tennis academy experience at Southern Slam Tennis Academy, where passion and
                excellence meet.
              </p>
              <p className="text-gray-700 mb-8">
                Our state-of-the-art facilities and professional coaching staff are dedicated to helping players of all
                levels improve their game.
              </p>
              <Link href="/about" className="inline-flex items-center text-teal-900 font-medium hover:text-teal-700">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Aerial view of tennis facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition-colors">
                    <svg className="w-8 h-8 text-teal-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-100 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;