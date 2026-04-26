"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface HighlightCardProps {
  title: string;
  description: string;
  includes: string[];
  imageSrc: string;
  reverse?: boolean;
}

export default function HighlightCard({
  title,
  description,
  includes,
  imageSrc,
  reverse = false,
}: HighlightCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative group"
    >
      {/* Outer glow border */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-brand-gold/40 via-brand-gold/10 to-brand-gold/30 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" />

      <div
        className={`relative flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } rounded-3xl overflow-hidden bg-brand-surface/80 backdrop-blur-xl border border-brand-gold/20`}
      >
        {/* Image */}
        <div className="relative w-full lg:w-1/2 h-72 sm:h-80 lg:h-auto min-h-[320px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-surface/60 via-transparent to-transparent lg:bg-gradient-to-t lg:from-brand-surface/40 lg:via-transparent lg:to-transparent" />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={20} className="text-brand-gold" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-gold/80">
              Premium Experience
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light tracking-wide text-brand-gold mb-5 leading-tight">
            {title}
          </h3>

          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
            {description}
          </p>

          <div className="space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold/70 mb-3">
              Includes
            </p>
            <ul className="space-y-2.5" role="list">
              {includes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-200 font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
