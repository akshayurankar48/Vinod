"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <Section className="bg-white min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-gray-600 text-lg mb-12 max-w-lg">
                            Whether you're looking for expert guidance on a new design, need quality control solutions, or want to discuss training, we're ready to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0 border border-red-100">
                                    <Phone className="text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-semibold mb-1">Phone</h3>
                                    <p className="text-gray-600">+1 (XXX) XXX-XXXX</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0 border border-red-100">
                                    <Mail className="text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-semibold mb-1">Email</h3>
                                    <p className="text-gray-600">info@nexusengineering.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0 border border-red-100">
                                    <Clock className="text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-semibold mb-1">Office Hours</h3>
                                    <p className="text-gray-600">Monday – Friday</p>
                                    <p className="text-gray-600">9:00 AM – 5:00 PM CST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0 border border-red-100">
                                    <MapPin className="text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-semibold mb-1">Visit Us</h3>
                                    <p className="text-gray-600">Nexus Engineering HQ</p>
                                    <p className="text-gray-600">[Your Office Address Here]</p>
                                    <p className="text-gray-600">City, State, ZIP Code</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-red-600 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-red-600 transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone (Optional)</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-red-600 transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                                    <input
                                        id="company"
                                        type="text"
                                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-red-600 transition-colors"
                                        placeholder="Company Name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-red-600 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button type="submit" className="w-full gap-2 text-base h-12">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
