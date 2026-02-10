"use client"

import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/BookingModal"

export default function CoachesPage() {
  const coaches = [
    {
      name: "Craig Peel",
      title: "Director of Tennis",
      bio: "Former ATP player with over 20 years of coaching experience. Craig has developed numerous national champions and specializes in high-performance strategy.",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Stephen Powell",
      title: "Head Coach",
      bio: "Certified PTR Professional with a focus on junior development. Stephen is known for his energetic coaching style and technical expertise.",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Matthew Paulson",
      title: "Performance Coach",
      bio: "Specialist in biomechanics and physical conditioning. Matthew helps players optimize their movement and prevent injuries.",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Sarah Jenkins",
      title: "Senior Coach",
      bio: "Former collegiate player with a passion for teaching beginners and intermediate players. Sarah focuses on building a strong foundation.",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "David Chen",
      title: "Assistant Coach",
      bio: "David brings a fresh perspective to our coaching team. He works primarily with our junior academy and summer camps.",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Emily Rodriguez",
      title: "Fitness Trainer",
      bio: "Certified strength and conditioning specialist. Emily designs personalized fitness programs to enhance on-court performance.",
      image: "/placeholder.svg?height=400&width=400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header forceScrolled={true} />

      <main className="flex-grow pt-24 pb-12 bg-teal-50">
        <section className="container mx-auto px-4 mb-12 text-center">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">Meet Our Team</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our world-class coaching staff is dedicated to helping you achieve your tennis goals.
            </p>
        </section>

        <section className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coaches.map((coach, index) => (
                    <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 overflow-hidden flex flex-col items-center p-6 text-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-teal-100 mb-6 relative shadow-md">
                             <Image
                                src={coach.image || "/placeholder.svg"}
                                alt={coach.name}
                                fill
                                className="object-cover"
                             />
                        </div>
                        <h2 className="text-2xl font-bold text-teal-900 mb-1">{coach.name}</h2>
                        <p className="text-teal-600 font-semibold mb-4">{coach.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{coach.bio}</p>
                        <BookingModal title={`Book a Lesson with ${coach.name}`} description="Select a date and time for your lesson.">
                            <Button variant="outline" className="mt-auto border-teal-600 text-teal-600 hover:bg-teal-50">
                                Book a Lesson
                            </Button>
                        </BookingModal>
                    </Card>
                ))}
            </div>
        </section>

        <section className="py-16 mt-12 bg-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-teal-900 mb-4">Join Our Team</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Are you a passionate tennis professional looking to make a difference? We are always looking for talented coaches to join our academy.
                </p>
                <Link href="/#contact">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                        Careers at SA
                    </Button>
                </Link>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
