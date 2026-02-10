"use client"

import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "5 Tips to Improve Your Serve",
      date: "April 10, 2024",
      author: "Craig Peel",
      excerpt: "The serve is the most important shot in tennis. Here are 5 simple tips to add power and consistency to your serve.",
      image: "/placeholder.svg?height=300&width=500",
      slug: "improve-your-serve"
    },
    {
      title: "Nutrition for Tennis Players",
      date: "March 25, 2024",
      author: "Emily Rodriguez",
      excerpt: "Fueling your body correctly can make a huge difference in your performance on the court. Learn what to eat before, during, and after a match.",
      image: "/placeholder.svg?height=300&width=500",
      slug: "nutrition-tips"
    },
    {
      title: "Choosing the Right Racquet",
      date: "March 15, 2024",
      author: "Stephen Powell",
      excerpt: "With so many options on the market, finding the right racquet can be overwhelming. We break down the key factors to consider.",
      image: "/placeholder.svg?height=300&width=500",
      slug: "choosing-racquet"
    },
    {
      title: "Mental Toughness: The Key to Winning",
      date: "February 28, 2024",
      author: "Dr. Sarah Miller",
      excerpt: "Tennis is as much a mental game as it is physical. Discover techniques to stay focused and resilient under pressure.",
      image: "/placeholder.svg?height=300&width=500",
      slug: "mental-toughness"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header forceScrolled={true} />

      <main className="flex-grow pt-24 pb-12 bg-gray-50">
        <section className="container mx-auto px-4 mb-12 text-center">
            <h1 className="text-4xl font-bold text-teal-900 mb-4">The Baseline Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Insights, tips, and news from the experts at Southern Academy.
            </p>
        </section>

        <section className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
                         <div className="aspect-video relative">
                             <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                             />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-xl font-bold text-teal-800 line-clamp-2">{post.title}</CardTitle>
                             <div className="flex items-center text-sm text-gray-500 gap-4 mt-2">
                                <div className="flex items-center">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <User className="w-3 h-3 mr-1" />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="p-0 text-teal-600 hover:text-teal-800 font-semibold">
                                <Link href={`/blog/${post.slug}`}>Read More</Link>
                            </Button>
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
