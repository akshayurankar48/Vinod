"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Factory, Ruler, MonitorPlay, Settings, Package, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      title: "Manufacturing Design",
      description: "From fixture and tooling design to full production line layouts.",
      icon: Factory,
      href: "/services",
      image: "/service_manufacturing_1767762943369.png"
    },
    {
      title: "Quality Control",
      description: "Precision-driven quality control solutions and inspection planning.",
      icon: Ruler,
      href: "/services",
      image: "/service_qc_1767762965410.png"
    },
    {
      title: "Software Sales & Training",
      description: "Industry-leading design and inspection software tools.",
      icon: MonitorPlay,
      href: "/services",
      image: "/service_software_1767762981692.png"
    },
    {
      title: "Automation",
      description: "Maximize efficiency with smart automation solutions.",
      icon: Settings,
      href: "/services",
      image: "/service_automation_1767762998054.png"
    },
    {
      title: "Packaging Solutions",
      description: "Durable, efficient packaging solutions ensuring safety.",
      icon: Package,
      href: "/services",
      image: "/service_manufacturing_1767762943369.png" // Fallback/Placeholder
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* Hero Section - Asymmetric Split */}
      <section ref={containerRef} className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-white">

        {/* Left Content */}
        <div className="w-full lg:w-[55%] relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-3 py-1 mb-6 border border-red-600/30 rounded-full bg-red-50 text-red-600 text-xs font-mono tracking-widest uppercase">
              System Status: Operational
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-950 mb-8 leading-[0.9]">
              PRECISE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                ENGINEERED.
              </span><br />
              SOLUTIONS.
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed border-l-2 border-red-600 pl-6">
              Nexus delivers end-to-end manufacturing intelligence. We transform complex engineering challenges into streamlined, automated realities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="rounded-none bg-red-600 hover:bg-red-700 text-white min-w-[160px] h-14 text-lg tracking-wide border-0 shadow-lg shadow-red-600/20">
                  EXPLORE SERVICES
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-none border-gray-900 text-gray-900 hover:bg-gray-100 min-w-[160px] h-14 text-lg tracking-wide">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Technical Decor */}
          <div className="absolute bottom-10 left-20 hidden lg:flex gap-8 text-xs font-mono text-gray-400">
            <div>COORD: 34.0522° N, 118.2437° W</div>
            <div>EST. 2024</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              ONLINE
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="w-full lg:w-[45%] relative h-[50vh] lg:h-auto bg-gray-100">
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.png"
              alt="Industrial Facility"
              fill
              className="object-cover grayscale contrast-125"
              priority
            />
            <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 lg:to-white" />
          </div>

          {/* Floating Technical Elements */}
          <div className="absolute top-1/4 right-10 w-64 h-64 border border-white/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
            <div className="w-60 h-60 border border-white/10 rounded-full border-dashed" />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bridging the gap between <span className="text-red-600">innovation</span> and <span className="text-gray-500">execution</span>.
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Nexus Engineering is a multifaceted engineering solutions provider. We align with your production goals
              to streamline operations, enhance product quality, and upskill your team.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With a strong foundation in engineering excellence, we serve the automotive, medical,
              construction, and consumer product sectors.
            </p>
            <Link href="/about">
              <Button variant="secondary" className="gap-2">
                More About Us <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 shadow-xl"
          >
            <Image
              src="/about-bg.png"
              alt="Engineering Blueprints"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block px-4 py-2 rounded-lg bg-red-500/10 backdrop-blur-md border border-red-500/20 text-red-600 font-semibold text-sm">
                Precision Engineering
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services Grid */}
      {/* Services Grid - Masonry/Industrial Style */}
      <Section className="bg-gray-950 text-white min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
              OUR <span className="text-red-600">CAPABILITIES</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive range of services designed to support every stage of your product lifecycle.
              Merging digital precision with physical manufacturing.
            </p>
          </div>
          <Link href="/services">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none h-12 px-8">
              VIEW ALL SERVICES <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden bg-gray-900 border border-gray-800 hover:z-10 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-60 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100 group-hover:mix-blend-normal"
                />
                <div className={`absolute inset-0 opacity-40 mix-blend-multiply bg-gradient-to-br from-red-900 to-black`} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 text-red-600 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <service.icon size={48} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>

                <p className="text-gray-400 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {service.description}
                </p>

                <div className="absolute top-6 right-6 text-gray-700 font-mono text-sm group-hover:text-red-600 transition-colors">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-white">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Nexus?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Experienced Team", desc: "Skilled engineers and toolmakers ready for challenges." },
              { title: "Cross-Industry", desc: "Broad knowledge across automotive, medical, and more." },
              { title: "Customer-Focused", desc: "We adapt to your needs, deadlines, and budget." },
              { title: "End-to-End", desc: "From design to delivery, we stay with you." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white pt-0 pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-200 px-6 py-20 text-center group">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-50" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build <span className="text-red-600">Something Better</span>.
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Have a project in mind? Contact us today to find out how Nexus Engineering can support your team.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
