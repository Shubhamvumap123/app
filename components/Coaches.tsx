import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Coaches = () => {
    return (
      <section className="py-20 bg-teal-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-extrabold text-teal-900 mb-4 tracking-tight">Meet Our Professionals</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our team of experienced coaches is dedicated to helping you improve your game and reach your full
                    potential.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: "Craig Peel", title: "Director", image: "/placeholder.svg?height=300&width=300" },
                    { name: "Stephen Powell", title: "Head Coach", image: "/placeholder.svg?height=300&width=300" },
                    { name: "Matthew Paulson", title: "Performance Coach", image: "/placeholder.svg?height=300&width=300" },
                  ].map((coach, index) => (
                    <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
                        <CardContent className="pt-8 pb-8 flex flex-col items-center">
                            <div className="relative h-40 w-40 mb-6 rounded-full overflow-hidden border-4 border-teal-100 shadow-md">
                                <Image
                                    src={coach.image || "/placeholder.svg"}
                                    alt={coach.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-teal-900 mb-2">{coach.name}</h3>
                            <p className="text-teal-600 font-medium">{coach.title}</p>
                        </CardContent>
                    </Card>
                  ))}
                </div>
      
                <div className="text-center mt-12">
                   <Button variant="link" size="lg" className="text-teal-900 hover:text-teal-700">
                        <Link href="/coaches" className="flex items-center text-lg">
                            View All Coaches <ChevronRight className="h-5 w-5 ml-2" />
                        </Link>
                   </Button>
                </div>
              </div>
            </section>
    );
};

export default Coaches;
