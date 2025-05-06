import React from 'react';
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Menu } from "lucide-react"

const Quote = () => {
    return (
        <section className="py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              "We have created an environment ideal for learning craft. Our goal is to be recognized as the premier
              tennis academy in the region."
            </h2>
            <p className="font-medium">Craig Peel, Director</p>
          </div>
        </div>
      </section>
    );
};


export default Quote;