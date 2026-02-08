import Header from "../components/header"
import Hero from "../components/Hero"
import About from "../components/About"
import Quote from "../components/Quote"
import KeyFeatures from "../components/KeyFeatures"
import Glimpse from "../components/Glimpse"
import Programs from "../components/Programs"
import Values from "../components/Values"
import Contact from "../components/Contact"
import Coaches from "../components/Coaches"
import Facilities from "../components/Facilities"
import Footer from "../components/Footer"
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
