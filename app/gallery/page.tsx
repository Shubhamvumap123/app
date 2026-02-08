"use client"

import React, { useState } from 'react';
import Header from "@/components/header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function GalleryPage() {
  const images = [
    { src: "/placeholder.svg?height=600&width=800", alt: "Tournament Final", category: "Tournaments" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Junior Training", category: "Training" },
    { src: "/placeholder.svg?height=600&width=600", alt: "Clay Courts", category: "Facilities" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Awards Ceremony", category: "Events" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Coach Stephen", category: "Coaches" },
    { src: "/placeholder.svg?height=600&width=600", alt: "New Gym Equipment", category: "Facilities" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Summer Camp Group", category: "Camps" },
    { src: "/placeholder.svg?height=800&width=600", alt: "Action Shot", category: "Tournaments" },
    { src: "/placeholder.svg?height=600&width=600", alt: "Sunset Courts", category: "Facilities" },
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Tournaments", "Training", "Facilities", "Events", "Coaches", "Camps"];

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header forceScrolled={true} />

      <main className="flex-grow pt-24 pb-12 bg-white">
        <section className="container mx-auto px-4 mb-12 text-center">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">Photo Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
                Capturing moments of passion, dedication, and triumph.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filter === category
                                ? "bg-teal-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </section>

        <section className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredImages.map((image, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div className="relative group overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    width={600}
                                    height={600}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-semibold text-lg">{image.alt}</span>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-transparent border-none p-0 shadow-none">
                             <div className="relative w-full h-[80vh]">
                                <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    fill
                                    className="object-contain"
                                />
                             </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
