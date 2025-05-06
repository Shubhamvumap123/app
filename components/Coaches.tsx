import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Key, Menu } from "lucide-react"
const Coaches = () => {
    return (
      <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-teal-900 mb-4">Meet our professionals</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Our team of experienced coaches is dedicated to helping you improve your game and reach your full
                    potential.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: "Craig Peel", title: "Director", image: "/placeholder.svg?height=300&width=300" },
                    { name: "Stephen Powell", title: "Head Coach", image: "/placeholder.svg?height=300&width=300" },
                    { name: "Matthew Paulson", title: "Performance Coach", image: "/placeholder.svg?height=300&width=300" },
                  ].map((coach, index) => (
                    <div key={index} className="text-center">
                      <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg mb-4 mx-auto max-w-xs">
                        <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
                      </div>
                      <h3 className="text-xl font-bold text-teal-900">{coach.name}</h3>
                      <p className="text-gray-600">{coach.title}</p>
                    </div>
                  ))}
                </div>
      
                <div className="text-center mt-12">
                  <Link href="/coaches" className="inline-flex items-center text-teal-900 font-medium hover:text-teal-700">
                    View All Coaches <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </section>
    );
};

export default Coaches;