import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const Glimpse = () => {
    return (
       <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-teal-900 mb-6 tracking-tight">A Glimpse of Excellence</h2>
            <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                Experience the atmosphere and energy that makes Southern Slam Academy unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Historic tennis player"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Championship Courts</span>
              </div>
            </div>
            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 group">
               <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Aerial view of tennis courts"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Aerial View</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/gallery" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-teal-900 bg-white border-2 border-teal-900 rounded-full hover:bg-teal-900 hover:text-white transition-all duration-300 group">
              View Full Gallery
              <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Glimpse;
