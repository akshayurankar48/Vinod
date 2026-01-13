"use client";

import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 shadow-sm"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-red-200 group-hover:bg-red-100">
                    <Icon className="w-7 h-7 text-red-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>

                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
