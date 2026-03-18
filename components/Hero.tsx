import React from 'react';
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-teal-900">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-black opacity-90"></div>

        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="relative container mx-auto px-4 flex flex-col justify-center items-center text-center text-white z-10">
          <p className="uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6 text-teal-300 animate-fade-in-up">
            9 World-Class Clay Courts
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 max-w-5xl tracking-tight leading-none drop-shadow-2xl animate-fade-in-up delay-100">
            GROW YOUR GAME <br/> <span className="text-teal-400">WITH THE PROS</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mb-12 drop-shadow-lg animate-fade-in-up delay-200 leading-relaxed">
            Southern Slam Academy offers world-class tennis coaching, state-of-the-art facilities, and a community for players of all levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-fade-in-up delay-300">
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-400 text-white border-none text-xl py-8 px-10 h-auto rounded-full shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300">
                <Link href="/programs">
                  Explore Programs
                </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-900 text-xl py-8 px-10 h-auto rounded-full hover:scale-105 transition-all duration-300">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
            </Button>
          </div>
        </div>
      </section>
    );
};

export default Hero;
