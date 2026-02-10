"use client"

import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen flex flex-col">
      <Header forceScrolled={true} />

      <main className="flex-grow pt-24 pb-12 bg-white">
        <article className="container mx-auto px-4 max-w-3xl">
            <div className="mb-8">
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                        src="/placeholder.svg?height=600&width=1000"
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <h1 className="text-4xl font-bold text-teal-900 mb-4">{title}</h1>
                <div className="flex items-center text-gray-500 mb-8 text-sm">
                    <span className="mr-4">Published on April 15, 2024</span>
                    <span>By SA Team</span>
                </div>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2>Key Takeaways</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Tip 1: Focus on your footwork.</li>
                    <li>Tip 2: Keep your eye on the ball.</li>
                    <li>Tip 3: Practice consistency over power.</li>
                </ul>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
