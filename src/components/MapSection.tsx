"use client";

import { motion } from "framer-motion";

interface MapSectionProps {
  embedUrl: string;
  title?: string;
}

export default function MapSection({ embedUrl, title = "Our Location" }: MapSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-12 w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-brand-blue-light/30 shadow-2xl"
    >
      <div className="relative w-full h-[400px] md:h-[500px]">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="grayscale invert opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
        ></iframe>
        
        {/* Aesthetic Overlay to blend with brand */}
        <div className="absolute inset-0 pointer-events-none border-[12px] border-brand-surface/20 rounded-3xl"></div>
      </div>
    </motion.div>
  );
}
