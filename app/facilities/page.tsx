"use client"

import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Clay Courts",
      description: "Our 9 championship-standard clay courts are meticulously maintained to ensure the best playing surface. The soft surface reduces impact on joints and allows for longer rallies.",
      features: ["Floodlights", "Ball Machines", "Sitting Area"],
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Hard Courts",
      description: "Experience the speed and consistency of our 4 Plexicushion hard courts. Perfect for players who prefer a faster game and true bounces.",
      features: ["Standard Dimensions", "Anti-glare surface", "Spectator Seating"],
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Fitness Center",
      description: "A fully equipped gym with cardio machines, free weights, and resistance training equipment designed specifically for tennis players' conditioning.",
      features: ["Personal Trainers", "Yoga Studio", "Recovery Zone"],
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Clubhouse",
      description: "Relax and socialize in our modern clubhouse. Enjoy a meal at the cafe, watch matches on big screens, or shop at the pro shop.",
      features: ["Pro Shop", "Cafe & Bar", "Locker Rooms"],
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Swimming Pool",
      description: "Cool off after a match in our Olympic-sized swimming pool. Also available for aquatic fitness classes and leisure swimming.",
      features: ["Heated", "Lap Lanes", "Kids Area"],
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Accommodation",
      description: "On-site accommodation for visiting players and camp participants. Comfortable rooms with all necessary amenities.",
      features: ["Wi-Fi", "Study Areas", "Laundry"],
      image: "/placeholder.svg?height=400&width=600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header forceScrolled={true} />

      <main className="flex-grow pt-24 pb-12 bg-white">
        <section className="container mx-auto px-4 mb-12 text-center">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">World-Class Facilities</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Train and compete in an environment designed for excellence.
            </p>
        </section>

        <section className="container mx-auto px-4">
            <div className="space-y-16">
                {facilities.map((facility, index) => (
                    <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-lg">
                             <Image
                                src={facility.image || "/placeholder.svg"}
                                alt={facility.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                             />
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-3xl font-bold text-teal-800">{facility.title}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">{facility.description}</p>
                            <ul className="grid grid-cols-2 gap-2 mt-4">
                                {facility.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-teal-700">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="bg-teal-50 py-16 mt-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-teal-900 mb-4">Ready to experience our facilities?</h2>
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                    Book a Tour
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
