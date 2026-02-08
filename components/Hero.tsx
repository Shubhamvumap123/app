import React from 'react';
import Image from "next/image"
import Link from "next/link"
const Hero = () => {
    return (
        <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/logo.png"
            alt="Tennis courts at sunset"
            fill
            className="object-cover brightness-7"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/30 to-teal-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pt-20">
          <p className="uppercase tracking-widest text-sm mb-2">9 Clay Courts</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
            GROW YOUR GAME WITH THE PROFESSIONALS
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Southern Slam Academy offers world-class tennis coaching and facilities for players of all levels
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/programs"
              className="bg-white text-teal-900 px-6 py-3 rounded font-medium hover:bg-teal-100 transition-colors"
            >
              Explore Our Programs
            </Link>
      
          </div>
        </div>
      </section>
    );
};

export default Hero;