import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header  className="fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/SSA.svg" alt="9 Clay Courts" width={120} height={40} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Home", "About", "Programs", "Facilities", "Coaches", "Events", "Gallery", "Blog", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white text-sm font-medium hover:text-teal-300 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-white text-teal-900 px-4 py-2 rounded text-sm font-medium hover:bg-teal-100 transition-colors"
            >
              Book a Court
            </Link>
            <button className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/logo.png"
            alt="Tennis courts at sunset"
            fill
            className="object-cover brightness-7"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/30 to-teal-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pt-20">
          <p className="uppercase tracking-widest text-sm mb-2">9 Clay Courts</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
            GROW YOUR GAME WITH THE PROFESSIONALS
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Southern Slam Academy offers world-class tennis coaching and facilities for players of all levels
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/programs"
              className="bg-white text-teal-900 px-6 py-3 rounded font-medium hover:bg-teal-100 transition-colors"
            >
              Explore Our Programs
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors"
            >
              Book a Court
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-teal-900 mb-4">About Us</h2>
              <p className="text-gray-700 mb-6">
                Located in the most scenic area of the country, our 9 world-class clay courts are at your location and
                available. Find your ideal tennis academy experience at Southern Slam Tennis Academy, where passion and
                excellence meet.
              </p>
              <p className="text-gray-700 mb-8">
                Our state-of-the-art facilities and professional coaching staff are dedicated to helping players of all
                levels improve their game.
              </p>
              <Link href="/about" className="inline-flex items-center text-teal-900 font-medium hover:text-teal-700">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition-colors">
                    <svg className="w-8 h-8 text-teal-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-100 rounded-lg z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
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

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Key Features</h2>
            <div className="w-20 h-1 bg-teal-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-900 font-bold">
                    {item}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">
                    {item === 1 && "Top-quality clay courts"}
                    {item === 2 && "Professional coaching staff"}
                    {item === 3 && "Personalized training programs"}
                    {item === 4 && "Modern facilities and equipment"}
                    {item === 5 && "Video analysis technology"}
                    {item === 6 && "Fitness and conditioning center"}
                    {item === 7 && "Tournament preparation"}
                    {item === 8 && "All skill levels welcome"}
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glimpse of Excellence */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">A Glimpse of Excellence</h2>
            <div className="w-20 h-1 bg-teal-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Historic tennis player"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Aerial view of tennis courts"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-right mt-4">
            <Link href="/gallery" className="inline-flex items-center text-teal-900 font-medium hover:text-teal-700">
              View Gallery <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
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

      {/* Values */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-teal-900 font-bold text-xl">
            <span>ADOPT</span>
            <span className="text-teal-300">•</span>
            <span>DELIVER</span>
            <span className="text-teal-300">•</span>
            <span>ADAPT</span>
            <span className="text-teal-300">•</span>
            <span>NURTURE</span>
          </div>
        </div>
      </section>

      {/* Contact/Info Section */}
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

      {/* Meet Our Professionals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Meet our professionals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
              <div key={index} className="text-center">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg mb-4 mx-auto max-w-xs">
                  <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">{coach.name}</h3>
                <p className="text-gray-600">{coach.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/coaches" className="inline-flex items-center text-teal-900 font-medium hover:text-teal-700">
              View All Coaches <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
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

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logo-white.svg"
                alt="Southern Slam Academy"
                width={150}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-teal-100 text-sm">
                Southern Slam Academy is dedicated to developing tennis players of all levels in a supportive and
                professional environment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Programs", "Facilities", "Coaches"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-teal-100 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-teal-100">
                <li>123 Court Avenue</li>
                <li>Tennis Valley, CA 90210</li>
                <li>+1 (555) 123-4567</li>
                <li>info@southernslam.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                  <Link
                    key={social}
                    href={`https://${social}.com`}
                    className="text-teal-100 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center">
                      <span className="sr-only">{social}</span>
                      {/* Social icons would go here */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-teal-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-teal-100">
              © {new Date().getFullYear()} Southern Slam Academy. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-teal-100 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-teal-100 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
