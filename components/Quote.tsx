"use client"

import React from 'react';
import { Quote as QuoteIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Quote = () => {
    const testimonials = [
        {
            text: "We have created an environment ideal for learning craft. Our goal is to be recognized as the premier tennis academy in the region.",
            author: "Craig Peel",
            role: "Director"
        },
        {
            text: "Southern Slam Academy transformed my game. The coaches are top-notch and the facilities are amazing.",
            author: "Sarah Johnson",
            role: "Academy Student"
        },
        {
            text: "The best place to learn tennis in the city. Highly recommended for kids and adults alike.",
            author: "Michael Chen",
            role: "Parent"
        }
    ]

    return (
        <section className="py-24 bg-teal-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex justify-center mb-8">
                <QuoteIcon className="h-12 w-12 text-teal-300 opacity-50" />
            </div>
            <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                             <div className="p-1">
                                <Card className="bg-transparent border-none shadow-none">
                                    <CardContent className="flex flex-col items-center text-center p-6">
                                        <blockquote className="text-2xl md:text-4xl font-bold mb-8 leading-relaxed text-white">
                                        "{testimonial.text}"
                                        </blockquote>
                                        <cite className="not-italic">
                                            <div className="font-bold text-xl text-teal-300">{testimonial.author}</div>
                                            <div className="text-teal-100">{testimonial.role}</div>
                                        </cite>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block">
                    <CarouselPrevious className="bg-teal-800 border-teal-700 hover:bg-teal-700 hover:text-white" />
                    <CarouselNext className="bg-teal-800 border-teal-700 hover:bg-teal-700 hover:text-white" />
                </div>
            </Carousel>
        </div>
      </section>
    );
};


export default Quote;
