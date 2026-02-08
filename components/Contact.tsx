import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
const Contact = () => {
    return (
        <section className="py-20 bg-teal-900 text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Southern Slam Academy Tennis Center</h2>
                  <p className="mb-8">123 Court Avenue, Tennis Valley, CA 90210</p>
    
                  <div className="space-y-4 mb-8">
                    {[
                      { label: "Phone", value: "+1 (555) 123-4567" },
                      { label: "Email", value: "info@southernslam.com" },
                      { label: "Hours", value: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-7pm" },
                    ].map((item, index) => (
                      <div key={index} className="flex">
                        <div className="w-32 font-medium">{item.label}:</div>
                        <div>{item.value}</div>
                      </div>
                    ))}
                  </div>
    
                  <Link href="/contact" className="inline-flex items-center text-white font-medium hover:text-teal-300">
                    Contact Us <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Aerial view of tennis facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
};

export default Contact;