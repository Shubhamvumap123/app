"use client"

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("Message sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
    };

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

                <Card className="bg-white text-gray-900 border-none shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-teal-900">Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name <span className="text-red-500" aria-hidden="true">*</span>
                                    </label>
                                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required aria-required="true" autoComplete="name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email <span className="text-red-500" aria-hidden="true">*</span>
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required aria-required="true" autoComplete="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                                </label>
                                <Input id="subject" placeholder="Program Inquiry" value={formData.subject} onChange={handleChange} required aria-required="true" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message <span className="text-red-500" aria-hidden="true">*</span>
                                </label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" value={formData.message} onChange={handleChange} required aria-required="true" />
                            </div>
                            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold" disabled={loading}>
                                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Send Message"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
              </div>
            </div>
          </section>
    );
};

export default Contact;
