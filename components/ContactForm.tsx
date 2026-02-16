"use client"

import React, { useState } from 'react';
import { Loader2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const ContactForm = () => {
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
        <Card className="bg-white text-gray-900 border-none shadow-2xl">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-teal-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                        <Input id="subject" placeholder="Program Inquiry" value={formData.subject} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" value={formData.message} onChange={handleChange} required />
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold" disabled={loading}>
                        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Send Message"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
