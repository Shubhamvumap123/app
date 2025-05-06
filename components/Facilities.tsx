import React from 'react';
import Image from "next/image"

const Facilities = () => {
    return (
       <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our world-class facilities provide everything you need to train, compete, and improve your game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Clay Courts", image: "/placeholder.svg?height=300&width=500" },
              { title: "Accommodation", image: "/placeholder.svg?height=300&width=500" },
              { title: "Fitness Center", image: "/placeholder.svg?height=300&width=500" },
              { title: "Swimming Pool", image: "/placeholder.svg?height=300&width=500" },
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-900 text-sm rounded-full">Feature 1</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-900 text-sm rounded-full">Feature 2</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Facilities;