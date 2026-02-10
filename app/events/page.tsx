"use client"

import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import { BookingModal } from "@/components/BookingModal"

export default function EventsPage() {
  const events = [
    {
      title: "Spring Junior Open",
      date: "May 15-17, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Main Courts",
      description: "A USTA sanctioned tournament for junior players. Singles and doubles draws available.",
      image: "/placeholder.svg?height=300&width=500"
    },
    {
      title: "Charity Pro-Am",
      date: "June 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Center Court",
      description: "Play alongside the pros and raise money for a good cause. Includes lunch and silent auction.",
      image: "/placeholder.svg?height=300&width=500"
    },
    {
      title: "Summer Camp Week 1",
      date: "July 8-12, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "All Courts",
      description: "Kick off the summer with our intensive training camp. Open to ages 6-14.",
      image: "/placeholder.svg?height=300&width=500"
    },
    {
      title: "Member Social Mixer",
      date: "July 20, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Clubhouse",
      description: "Enjoy an evening of casual tennis, food, and drinks with fellow members.",
      image: "/placeholder.svg?height=300&width=500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header forceScrolled={true} />

      <main className="flex-grow pt-24 pb-12 bg-gray-50">
        <section className="container mx-auto px-4 mb-12 text-center">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">Upcoming Events</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Mark your calendars! Join us for tournaments, social mixers, and special clinics.
            </p>
        </section>

        <section className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
                {events.map((event, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col md:flex-row">
                         <div className="w-full md:w-2/5 relative h-48 md:h-auto">
                             <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover"
                             />
                        </div>
                        <div className="p-6 flex flex-col justify-between w-full md:w-3/5">
                            <div>
                                <h2 className="text-2xl font-bold text-teal-800 mb-2">{event.title}</h2>
                                <div className="space-y-2 mb-4 text-gray-600 text-sm">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2 text-teal-500" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{event.description}</p>
                            </div>
                            <BookingModal title={`RSVP for ${event.title}`} description={`Confirm your attendance for ${event.title}.`}>
                                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white self-start">
                                    Register / RSVP
                                </Button>
                            </BookingModal>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
