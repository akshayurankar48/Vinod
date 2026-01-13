"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative py-20 md:py-32 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Empowering manufacturers with <span className="text-red-600">tools</span>, <span className="text-red-600">knowledge</span>, and <span className="text-red-600">support</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                            At Nexus Engineering, we bridge the gap between innovation and execution. We are driven by precision, efficiency, and long-term value.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <Section className="bg-gray-50 border-y border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our mission is to empower manufacturers with the tools, knowledge, and support they need to thrive in a competitive global market. We deliver solutions that work where it matters most: on your production floor.
                        </p>
                        <div className="flex flex-col gap-4">
                            {['Precision', 'Efficiency', 'Long-term Value'].map((item) => (
                                <div key={item} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="text-red-600" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Work With</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            With a strong foundation in engineering excellence, we support clients across diverse sectors. Whether you're streamlining production or enhancing product quality, we are your partner in progress.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {['Automotive', 'Medical', 'Construction', 'Consumer Products'].map((item) => (
                                <div key={item} className="p-4 bg-white border border-gray-200 rounded-lg text-center text-gray-600 hover:border-red-500/50 transition-colors shadow-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Why Nexus Detail */}
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Nexus Engineering?</h2>
                    <p className="text-gray-600">
                        We bring technical expertise to support high-precision, production-ready results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Experienced Team",
                            desc: "Our team consists of skilled engineers and toolmakers ready to support your toughest challenges."
                        },
                        {
                            title: "Cross-Industry Expertise",
                            desc: "Broad knowledge across sectors helps us offer scalable, proven solutions for your specific needs."
                        },
                        {
                            title: "Customer-Focused",
                            desc: "We adapt to your needs, deadlines, and budget without compromising quality."
                        },
                        {
                            title: "End-to-End Services",
                            desc: "From concept design to final delivery, we stay with you every step of the way."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white hover:shadow-md transition-all"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-white pt-0">
                <div className="border-t border-gray-200 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to optimize your production?</h3>
                        <p className="text-gray-600">Let's discuss how we can help your team.</p>
                    </div>
                    <Link href="/contact">
                        <Button size="lg" className="gap-2">
                            Get in Touch <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
