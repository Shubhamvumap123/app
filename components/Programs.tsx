import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
const Programs = () => {
    return (
       <section className="py-20 bg-white">
               <div className="container mx-auto px-4">
                 <div className="text-center mb-16">
                   <h2 className="text-3xl font-bold text-teal-900 mb-4">Programs</h2>
                   <p className="text-gray-600 max-w-2xl mx-auto">
                     We offer a variety of programs designed to meet the needs of players at all levels, from beginners to
                     advanced competitors.
                   </p>
                 </div>
       
                 <div className="grid md:grid-cols-3 gap-8">
                   {[
                     { title: "Academy", image: "/placeholder.svg?height=300&width=400" },
                     { title: "Camps", image: "/placeholder.svg?height=300&width=400" },
                     { title: "Performance", image: "/placeholder.svg?height=300&width=400" },
                   ].map((program, index) => (
                     <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                       <div className="aspect-[4/3] relative">
                         <Image
                           src={program.image || "/placeholder.svg"}
                           alt={program.title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent"></div>
                       </div>
                       <div className="absolute bottom-0 left-0 right-0 p-6">
                         <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                         <Link
                           href={`/programs/${program.title.toLowerCase()}`}
                           className="text-white/80 text-sm hover:text-white"
                         >
                           Learn more
                         </Link>
                       </div>
                     </div>
                   ))}
                 </div>
       
                 <div className="text-center mt-12">
                   <Link href="/programs" className="inline-flex items-center text-teal-900 font-medium hover:text-teal-700">
                     View All Programs <ChevronRight className="h-4 w-4 ml-1" />
                   </Link>
                 </div>
               </div>
             </section>
    );
};

export default Programs;