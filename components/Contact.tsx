"use client"

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "@/lib/schemas"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof contactSchema>) => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("Message sent! We'll get back to you soon.");
        form.reset();
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
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Program Inquiry" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold" disabled={loading}>
                                    {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Send Message"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
              </div>
            </div>
          </section>
    );
};

export default Contact;
