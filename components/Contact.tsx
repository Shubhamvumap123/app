import React from 'react';
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "./ContactForm";

/**
 * Contact Component (Server Component)
 *
 * Optimization: The interactive form logic has been extracted to `ContactForm` (Client Component)
 * to reduce the initial JavaScript bundle size. The static content (icons, text) in this component
 * remains server-rendered and does not require hydration.
 */
const Contact = () => {
    return (
        <section className="py-20 bg-teal-900 text-white relative">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Get in Touch</h2>
                  <p className="mb-10 text-teal-100 text-lg max-w-md">
                    Have questions about our programs or want to book a court? Reach out to us!
                  </p>
    
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-teal-300 mr-4 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Location</h4>
                            <p className="text-teal-100">123 Court Avenue, Tennis Valley, CA 90210</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Phone className="h-6 w-6 text-teal-300 mr-4 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Phone</h4>
                            <p className="text-teal-100">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Mail className="h-6 w-6 text-teal-300 mr-4 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg">Email</h4>
                            <p className="text-teal-100">info@southernslam.com</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Clock className="h-6 w-6 text-teal-300 mr-4 mt-1" />
                         <div>
                            <h4 className="font-bold text-lg">Hours</h4>
                            <p className="text-teal-100">Mon-Fri: 7am-9pm</p>
                            <p className="text-teal-100">Sat-Sun: 8am-7pm</p>
                        </div>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </section>
    );
};

export default Contact;
