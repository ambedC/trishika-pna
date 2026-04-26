"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

interface ServicePreviewProps {
  title: string;
  description?: string;
  location?: string;
  services: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  reverse?: boolean;
}

export default function ServicePreview({
  title,
  description,
  location,
  services,
  ctaText,
  ctaLink,
  imageSrc,
  reverse = false,
}: ServicePreviewProps) {
  return (
    <SectionWrapper className="!py-16 md:!py-24 border-b border-brand-blue-light/30 last:border-0">
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 lg:gap-20 items-center`}>
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Decorative element */}
          <div className={`absolute -z-10 w-full h-full border border-brand-gold/30 rounded-3xl top-6 ${reverse ? "right-6" : "left-6"}`} />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide text-brand-gold mb-6 leading-[1.15]">
              {title}
            </h2>
            {location && (
              <p className="text-sm font-medium tracking-[0.2em] text-brand-gold-dark uppercase mb-6">
                {location}
              </p>
            )}
            {description && (
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <div className="space-y-6 pt-4">
            <h4 className="text-white font-serif font-light tracking-wider text-2xl">Featured Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 size={16} className="text-brand-gold flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <CTAButton href={ctaLink}>{ctaText}</CTAButton>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
