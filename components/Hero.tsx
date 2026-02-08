"use client"

import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
    return (
        <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/logo.png"
            alt="Tennis courts at sunset"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-teal-900/90"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pt-20">
          <p className="uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4 animate-fade-in-up">
            9 World-Class Clay Courts
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 max-w-4xl tracking-tight leading-tight drop-shadow-lg">
            GROW YOUR GAME WITH THE PROFESSIONALS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mb-10 drop-shadow-md">
            Southern Slam Academy offers world-class tennis coaching and facilities for players of all levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white border-none text-lg py-6 px-8 h-auto">
                <Link href="/programs">
                  Explore Programs
                </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-900 text-lg py-6 px-8 h-auto">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </div>
        </div>
      </section>
    );
};

export default Hero;
