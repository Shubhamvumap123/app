"use client"

import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/BookingModal"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Junior Academy",
      description: "Comprehensive training for young players aged 5-18. Focus on fundamentals, strategy, and match play.",
      level: "Beginner to Advanced",
      schedule: "Mon-Fri, 4:00 PM - 6:00 PM",
      price: "$200/month",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "Adult Clinics",
      description: "Evening sessions for adults looking to learn or improve. Social and competitive options available.",
      level: "All Levels",
      schedule: "Tue & Thu, 7:00 PM - 8:30 PM",
      price: "$150/month",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "High Performance",
      description: "Intensive program for tournament players. Includes fitness training, video analysis, and tournament travel support.",
      level: "Advanced",
      schedule: "Mon-Fri, 2:00 PM - 5:00 PM",
      price: "$400/month",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      title: "Private Lessons",
      description: "One-on-one coaching tailored to your specific needs. The fastest way to improve your technique.",
      level: "All Levels",
      schedule: "Flexible",
      price: "$80/hour",
      image: "/placeholder.svg?height=300&width=400"
    },
     {
      title: "Summer Camps",
      description: "Weekly camps during school breaks. Fun, games, and intensive skill development for kids.",
      level: "Ages 6-14",
      schedule: "Mon-Fri, 9:00 AM - 3:00 PM",
      price: "$300/week",
      image: "/placeholder.svg?height=300&width=400"
    },
     {
      title: "Cardio Tennis",
      description: "High-energy fitness activity that combines the best features of the sport of tennis with cardiovascular exercise.",
      level: "All Levels",
      schedule: "Sat, 9:00 AM - 10:00 AM",
      price: "$20/session",
      image: "/placeholder.svg?height=300&width=400"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header forceScrolled={true} />

      <main className="flex-grow pt-24 pb-12 bg-gray-50">
        <section className="container mx-auto px-4 mb-12 text-center">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">Our Programs</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Discover the perfect program for your skill level and goals. From beginner clinics to elite performance training, we have something for everyone.
            </p>
        </section>

        <section className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow bg-white flex flex-col h-full">
                         <div className="aspect-[4/3] relative">
                             <Image
                                src={program.image || "/placeholder.svg"}
                                alt={program.title}
                                fill
                                className="object-cover"
                             />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-teal-800">{program.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-gray-600 mb-4">{program.description}</p>
                            <div className="space-y-2 text-sm text-gray-500">
                                <p><strong className="text-teal-700">Level:</strong> {program.level}</p>
                                <p><strong className="text-teal-700">Schedule:</strong> {program.schedule}</p>
                                <p><strong className="text-teal-700">Price:</strong> {program.price}</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <BookingModal title={`Register for ${program.title}`} description={`Select a start date for ${program.title}.`}>
                                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                                    Register Now
                                </Button>
                            </BookingModal>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
