"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import CTAButton from "./CTAButton";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  logoSrc?: string;
  brochureSrc?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = "/images/hero-bg.jpg",
  logoSrc,
  brochureSrc,
  children,
}: HeroSectionProps) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 bg-gradient-to-t from-brand-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {children ? (
          children
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 flex flex-col items-center"
          >
            {logoSrc && (
              <div className="mb-4">
                <Image 
                  src={logoSrc} 
                  alt={title || "Logo"} 
                  width={160} 
                  height={160} 
                  className="object-contain rounded-2xl shadow-lg shadow-black/20 p-2 bg-white/5 backdrop-blur-md border border-white/10" 
                />
              </div>
            )}
            {title && (
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-brand-gold leading-[1.1] tracking-wide">
                {title}
              </h1>
            )}
            
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
                {subtitle}
              </p>
            )}

            {(ctaText || brochureSrc) && (
              <div className="pt-10 flex flex-col sm:flex-row items-center gap-4">
                {ctaText && ctaLink && (
                  <CTAButton href={ctaLink}>{ctaText}</CTAButton>
                )}
                {brochureSrc && (
                  <a
                    href={brochureSrc}
                    download
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105 border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10 hover:shadow-lg hover:shadow-brand-gold/10"
                  >
                    <Download size={16} />
                    Download Brochure
                  </a>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-brand-gold/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent"
        />
      </motion.div>
    </div>
  );
}
