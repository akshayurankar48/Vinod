import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 relative">
                                <img
                                    src="/nexus-logo.png"
                                    alt="Nexus Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Nexus <span className="text-red-600">Engineering</span>
                            </span>
                        </div>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            Bridging the gap between innovation and execution with precision-driven engineering solutions.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-all">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-all">
                                <Twitter size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {['Manufacturing Design', 'Quality Control', 'Software Sales & Training', 'Automation', 'Packaging Solutions'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600/50"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Services', href: '/services' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'Careers', href: '#' },
                                { name: 'Privacy Policy', href: '#' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-red-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-red-600 mt-1 shrink-0" size={18} />
                                <span>Nexus Engineering HQ<br />City, State, ZIP Code</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-red-600 shrink-0" size={18} />
                                <span>+1 (XXX) XXX-XXXX</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-red-600 shrink-0" size={18} />
                                <span>info@nexusengineering.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Nexus Engineering. All rights reserved.
                    </p>
                    <div className="text-zinc-500 text-sm flex gap-6">
                        <Link href="#" className="hover:text-amber-400">Terms of Service</Link>
                        <Link href="#" className="hover:text-amber-400">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
