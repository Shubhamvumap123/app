"use client"

import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header forceScrolled={true} />

      <main className="flex-grow pt-24">
        <section className="bg-teal-900 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Southern Academy</h1>
                <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                    Where passion meets performance. We are dedicated to nurturing the next generation of tennis champions.
                </p>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-teal-900 mb-6">Our Story</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Founded in 2010, Southern Academy began with a simple mission: to provide world-class tennis training in a supportive and inclusive environment. What started as a small clinic with just two courts has grown into a premier tennis destination with state-of-the-art facilities and a team of expert coaches.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            We believe that tennis is more than just a sport; it's a vehicle for personal growth, discipline, and community building. Our holistic approach focuses on technical skills, physical fitness, and mental toughness.
                        </p>
                    </div>
                    <div className="relative">
                         <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl bg-gray-200">
                             <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="About Us Image"
                                fill
                                className="object-cover"
                             />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl font-bold text-teal-900 mb-8">See Us In Action</h2>
                 <div className="max-w-4xl mx-auto aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer">
                    {/* Video Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-teal-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                             </div>
                        </div>
                    </div>
                    <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Video Thumbnail"
                        fill
                        className="object-cover opacity-60"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-left">
                        <p className="font-bold text-lg">Training Highlights</p>
                        <p className="text-sm text-gray-300">Experience the intensity and fun of our training sessions.</p>
                    </div>
                 </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-teal-900 mb-4">Our Mission & Values</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Excellence", description: "Striving for the highest standards in coaching and facility management." },
                        { title: "Community", description: "Building a supportive network of players, families, and coaches." },
                        { title: "Integrity", description: "Fostering sportsmanship, honesty, and respect on and off the court." }
                    ].map((value, i) => (
                        <div key={i} className="bg-teal-50 p-8 rounded-lg border border-teal-100 text-center">
                            <h3 className="text-xl font-bold text-teal-800 mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
