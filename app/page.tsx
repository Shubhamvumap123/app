import dynamic from 'next/dynamic'
import Header from "@/components/header"
import Hero from "@/components/Hero"
import { Skeleton } from "@/components/ui/skeleton"

// Loading component to prevent layout shift
const SectionLoader = () => <Skeleton className="w-full h-[50vh] rounded-none" />

// Dynamically import below-the-fold components to improve initial load time
const About = dynamic(() => import('@/components/About'), { loading: SectionLoader })
const Quote = dynamic(() => import('@/components/Quote'), { loading: SectionLoader })
const KeyFeatures = dynamic(() => import('@/components/KeyFeatures'), { loading: SectionLoader })
const Glimpse = dynamic(() => import('@/components/Glimpse'), { loading: SectionLoader })
const Programs = dynamic(() => import('@/components/Programs'), { loading: SectionLoader })
const Values = dynamic(() => import('@/components/Values'), { loading: SectionLoader })
const Contact = dynamic(() => import('@/components/Contact'), { loading: SectionLoader })
const Coaches = dynamic(() => import('@/components/Coaches'), { loading: SectionLoader })
const Facilities = dynamic(() => import('@/components/Facilities'), { loading: SectionLoader })
const Footer = dynamic(() => import('@/components/Footer'), { loading: SectionLoader })

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Quote Section */}
     <Quote/>

      {/* Key Features */}
      <KeyFeatures />

      {/* Glimpse of Excellence */}
      <Glimpse />
     

      {/* Programs */}
      <Programs />

      {/* Values */}
      <Values />

      {/* Contact/Info Section */}
      <Contact />

      {/* Meet Our Professionals */}
      <Coaches />
      

      {/* Facilities */}
      <Facilities />

      {/* Footer */}
      <Footer />

      {/* Optional: Add a back-to-top button */}
    </div>
  )
}
