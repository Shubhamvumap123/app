import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Program {
  title: string;
  description: string;
  image: string;
}

// Define static data outside the component to prevent re-creation on every render.
const PROGRAMS: Program[] = [
  {
    title: "Academy",
    description: "Full-time training for aspiring professionals.",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Camps",
    description: "Intensive weekly camps for skill development.",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Performance",
    description: "High-performance coaching for tournament players.",
    image: "/placeholder.svg?height=300&width=400"
  },
];

// This component is a Server Component by default (no "use client" directive).
// This reduces the client-side JavaScript bundle size and improves initial page load performance.
const Programs = () => {
    return (
       <section className="py-20 bg-gray-50">
               <div className="container mx-auto px-4">
                 <div className="text-center mb-16">
                   <h2 className="text-4xl font-extrabold text-teal-900 mb-4 tracking-tight">Our Programs</h2>
                   <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                     We offer a variety of programs designed to meet the needs of players at all levels, from beginners to
                     advanced competitors.
                   </p>
                 </div>
       
                 <div className="grid md:grid-cols-3 gap-8">
                   {PROGRAMS.map((program, index) => (
                     <Card key={index} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                       <div className="aspect-[4/3] relative overflow-hidden">
                         <Image
                           src={program.image || "/placeholder.svg"}
                           alt={program.title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       </div>
                       <CardHeader>
                         <CardTitle className="text-2xl font-bold text-teal-900">{program.title}</CardTitle>
                       </CardHeader>
                       <CardContent>
                            <p className="text-gray-600">{program.description}</p>
                       </CardContent>
                       <CardFooter>
                         <Button variant="link" className="p-0 text-teal-600 hover:text-teal-800 font-semibold group-hover:underline">
                            <Link href={`/programs/${program.title.toLowerCase()}`} className="flex items-center">
                                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                         </Button>
                       </CardFooter>
                     </Card>
                   ))}
                 </div>
       
                 <div className="text-center mt-12">
                   <Button variant="outline" size="lg" className="border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white transition-colors">
                        <Link href="/programs" className="flex items-center">
                            View All Programs <ChevronRight className="h-4 w-4 ml-2" />
                        </Link>
                   </Button>
                 </div>
               </div>
             </section>
    );
};

export default Programs;
