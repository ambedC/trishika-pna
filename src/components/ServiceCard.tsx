"use client";

import { motion } from "framer-motion";

import Image from "next/image";

interface ServiceCardProps {
  name: string;
  description?: string;
  benefits?: string;
  price: string | number;
  duration?: string;
  imageSrc?: string;
}

export default function ServiceCard({ name, description, benefits, price, duration, imageSrc }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-brand-surface border border-brand-blue-light rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 group flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-brand-blue-light/50 flex items-center justify-center">
            <span className="text-brand-gold/50 font-serif tracking-widest text-sm uppercase">PNA Spa</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif font-light tracking-wide text-brand-gold group-hover:text-brand-gold-light transition-colors pr-2">
            {name}
          </h3>
          <div className="text-right shrink-0">
            <span className="text-xl font-light text-white block">₹{price}</span>
            {duration && <span className="text-xs tracking-wider uppercase text-gray-400 mt-1 block">{duration}</span>}
          </div>
        </div>
        
        {description && (
          <p className="text-gray-300 text-base font-light leading-relaxed mb-6 flex-1">
            {description}
          </p>
        )}
        
        {benefits && (
          <div className="mt-auto pt-4 border-t border-brand-blue-light/50">
            <p className="text-xs text-brand-gold/80 uppercase tracking-wider mb-2 font-medium">Benefits</p>
            <p className="text-gray-400 text-sm font-light leading-relaxed">{benefits}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
