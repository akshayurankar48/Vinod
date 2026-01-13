"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-white/90 backdrop-blur-md border border-gray-200 py-3 shadow-lg rounded-full mt-4 mx-4 md:mx-auto max-w-5xl"
                    : "bg-transparent py-6 border-b border-transparent"
            )}
        >
            <div className={cn(
                "container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all",
                scrolled ? "max-w-none" : ""
            )}>

                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        className="relative w-14 h-14"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        {/* Using the new logo image */}
                        <img
                            src="/nexus-logo.png"
                            alt="Nexus Logo"
                            className="w-full h-full object-contain drop-shadow-sm"
                        />
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">
                        NEXUS <span className="text-red-600">ENGINEERING</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm" className="gap-2">
                        Get a Quote <ChevronRight size={16} />
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-900 hover:text-red-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-900 hover:text-red-600 py-2 border-b border-gray-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4" onClick={() => setIsOpen(false)}>
                                Get a Quote
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
