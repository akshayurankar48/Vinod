"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Factory, Ruler, MonitorPlay, Settings, Package, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const detailedServices = [
    {
        id: "manufacturing-design",
        title: "Manufacturing Design Services",
        description: "From fixture and tooling design to full production line layouts, we provide robust, cost-effective manufacturing design solutions that align with your production goals and quality standards.",
        icon: Factory,
        features: [
            "Fixture & Gauge Design",
            "Tooling & Mold Design",
            "CAD Modeling & 2D Drawing Support",
            "Design for Manufacturability (DFM)"
        ]
    },
    {
        id: "quality-control",
        title: "Quality Control & Inspection",
        description: "We help you maintain world-class standards with precision-driven quality control solutions. From metrology fixture design to inspection process planning, we ensure your parts meet exact specifications.",
        icon: Ruler,
        features: [
            "Attribute & Analog Check Fixtures",
            "CMM Fixture Design",
            "Process Capability Analysis",
            "Quality Documentation & Standards Compliance"
        ]
    },
    {
        id: "software-training",
        title: "Software Sales & Training",
        description: "We provide industry-leading design and inspection software tools along with hands-on training to ensure your team gets the most out of every feature.",
        icon: MonitorPlay,
        features: [
            "CAD, CAM, and Metrology Software Solutions",
            "On-site & Virtual Software Training",
            "Custom Training Programs",
            "Post-Implementation Support"
        ]
    },
    {
        id: "automation",
        title: "Manufacturing & Automation",
        description: "Maximize efficiency and reduce downtime with our smart automation solutions tailored to your workflow.",
        icon: Settings,
        features: [
            "Semi-automated & Fully Automated Systems",
            "Process Optimization",
            "Custom Workstations & Equipment",
            "Integration with Existing Systems"
        ]
    },
    {
        id: "packaging",
        title: "Packaging Solutions",
        description: "We design and supply durable, efficient packaging solutions to ensure your parts arrive safely and organized—ready for the next step.",
        icon: Package,
        features: [
            "Custom Part Packaging Design",
            "Returnable Packaging Solutions",
            "Protective Foam & Insert Design",
            "Packaging Process Consulting"
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-white py-20 border-b border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Engineering Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Precision-Driven Engineering Solutions Across Industries. From concept to production.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <Section className="bg-white">
                <div className="flex flex-col gap-24">
                    {detailedServices.map((service, index) => {
                        const Icon = service.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                id={service.id}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* Visual */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-red-50/30" />

                                        {/* Icon Watermark */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                                            <Icon size={120} className="text-red-600" />
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-100 to-transparent">
                                            <div className="w-16 h-16 rounded-xl bg-red-600/10 border border-red-100 flex items-center justify-center mb-4 backdrop-blur-sm">
                                                <Icon size={32} className="text-red-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <ul className="grid grid-cols-1 gap-4">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-gray-700">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-red-600/20 text-red-600 flex items-center justify-center shrink-0">
                                                    <Check size={12} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8">
                                        <Link href="/contact">
                                            <Button variant="outline" className="gap-2">
                                                Get a Quote <ArrowRight size={16} />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* CTA Footer */}
            <section className="bg-gray-900 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h2>
                    <Link href="/contact">
                        <Button size="lg">Contact Us Today</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
