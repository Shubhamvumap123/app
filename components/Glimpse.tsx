import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Key, Menu } from "lucide-react"
const Glimpse = () => {
    return (
       <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">A Glimpse of Excellence</h2>
            <div className="w-20 h-1 bg-teal-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Historic tennis player"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Aerial view of tennis courts"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-right mt-4">
            <Link href="/gallery" className="inline-flex items-center text-teal-900 font-medium hover:text-teal-700">
              View Gallery <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Glimpse;