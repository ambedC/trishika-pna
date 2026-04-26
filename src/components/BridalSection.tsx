"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

/* ─── Bridal Card Component ─── */

interface BridalCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const BridalCard = ({ imageSrc, title, description }: BridalCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-brand-surface border border-brand-blue-light rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 group flex flex-col h-full"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-8 flex flex-col flex-1 text-center">
        <h3 className="text-2xl font-serif font-light tracking-wide text-brand-gold mb-4 group-hover:text-brand-gold-light transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm font-light leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

/* ─── Bridal Hero Component ─── */

const BridalHero = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden mb-16 lg:mb-24 shadow-2xl">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/40 via-transparent to-brand-blue z-10" />
      
      {/* Decorative Floral Overlay (Subtle Pattern) */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none z-20 bg-[url('https://www.transparenttextures.com/patterns/floral-paper.png')] bg-repeat" />

      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full min-h-[400px]">
        <Image
          src="/services/bridal-main.png"
          alt="Bridal Section Main Banner"
          fill
          priority
          className="object-cover"
        />
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-brand-bg/40 backdrop-blur-md p-8 md:p-12 rounded-full border border-brand-gold/20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-widest text-brand-gold uppercase">
              Bridal Section
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Bridal Section Component ─── */

const bridalServices = [
  {
    imageSrc: "/services/bridal-makeup.png",
    title: "Bridal Makeup",
    description: "Radiate elegance on your special day with our expert bridal makeup services, tailored to enhance your natural beauty and last from the first look to the final dance.",
  },
  {
    imageSrc: "/services/skin-care.png",
    title: "Skin Care",
    description: "Prepare your skin for a perfect glow with our curated bridal facials and skin treatments, designed to leave you with a smooth, luminous, and camera-ready complexion.",
  },
  {
    imageSrc: "/services/massage.png",
    title: "Massage",
    description: "Unwind and rejuvenate before your wedding day with our relaxing bridal massage therapies, melting away stress to ensure you walk down the aisle feeling calm and refreshed.",
  },
];

export default function BridalSection() {
  return (
    <SectionWrapper id="bridal" className="bg-brand-bg relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-light/20 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="relative z-10">
        {/* Bridal Hero Banner */}
        <BridalHero />

        {/* Bridal Services Row */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {bridalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BridalCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
