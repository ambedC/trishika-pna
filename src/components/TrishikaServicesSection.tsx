"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "./ServiceCard";
import HighlightCard from "./HighlightCard";

/* ─── Premium Experiences Data ─── */

interface PremiumExperience {
  title: string;
  description: string;
  includes: string[];
  imageSrc: string;
}

const premiumExperiences: PremiumExperience[] = [
  {
    title: "Signature Massage",
    description:
      "A complete wellness experience designed for deep relaxation and total rejuvenation.",
    includes: [
      "120-minute session",
      "Full body massage",
      "Steam bath",
      "Body scrub",
    ],
    imageSrc: "/services/detox.webp",
  },
  {
    title: "Couples Retreat",
    description:
      "A curated relaxation experience for couples — unwind together with our most sought-after therapies.",
    includes: [
      "Aroma Therapy + Swedish Massage",
      "OR Deep Tissue + Body Scrub + Steam Bath",
    ],
    imageSrc: "/services/couples.jpg",
  },
];

/* ─── Core Services Data ─── */

interface ServiceCategory {
  category: string;
  items: { name: string; description: string; imageSrc?: string }[];
}

const coreServices: ServiceCategory[] = [
  {
    category: "Body & Wellness",
    items: [
      { name: "Hot Stone Therapy", description: "Heated stones placed on the body to warm muscles and melt away tension.", imageSrc: "/services/hotStone.webp" },
      { name: "Moroccan Bath", description: "Traditional cleansing ritual that exfoliates and deeply hydrates the skin.", imageSrc: "/services/morrocan.webp" },
      { name: "Body Scrub + Steam Bath", description: "Complete detox combining deep exfoliation with a rejuvenating steam session.",imageSrc:'/services/bodyscrub.png' },
      { name: "Steam Bath", description: "Relaxing steam session to open pores and detoxify the body.", imageSrc: "/services/steam.webp" },
      { name: "Body Scrub", description: "Exfoliating treatment that removes dead skin and reveals a radiant glow.", imageSrc: "/services/scrub.webp" },
    ],
  },
  {
    category: "Massage & Therapy",
    items: [
      { name: "Nuru Massage", description: "A unique full-body experience using a special gel for ultimate relaxation.,",imageSrc: "/services/nuru.webp" },
      { name: "Candle Massage", description: "A warm and soothing massage using melted, skin-safe massage candles.", imageSrc: "/services/candle.webp" },
      { name: "Ayurvedic Massage", description: "Ancient Indian therapy restoring balance through warm herbal oils.", imageSrc: "/services/ayurvedic.webp" },
      { name: "Lomi Lomi", description: "Traditional Hawaiian massage using flowing, rhythmic strokes for deep relaxation.", imageSrc:'/services/lomi.webp' },
      { name: "Balinese Massage", description: "A full-body, deep-tissue holistic treatment blending stretching and acupressure.", imageSrc: "/services/balinese.webp" },
      { name: "Deep Tissue Massage", description: "Targets the deepest muscle layers to release chronic tension.", imageSrc: "/services/deep.webp" },
      { name: "Swedish Massage", description: "Classic technique using long strokes to ease tension and improve circulation.", imageSrc: "/services/swedish.webp" },
      { name: "Aroma Therapy", description: "A gentle massage using essential oils to promote relaxation and relieve stress.", imageSrc: "/services/aroma.webp" },
    ],
  },
];

/* ─── Stagger animation variants ─── */

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ─── Component ─── */

export default function TrishikaServicesSection() {
  return (
    <>
      {/* ── SECTION 1: Premium Experiences ── */}
      <SectionWrapper id="premium" className="bg-brand-surface/30">
        <header className="text-center mb-16 md:mb-20">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-brand-gold/70 mb-4">
            Exclusive
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-brand-gold mb-6">
            Premium Experiences
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Indulge in our most luxurious offerings — crafted for those who seek the extraordinary.
          </p>
        </header>

        <div className="space-y-12 lg:space-y-16">
          {premiumExperiences.map((exp, index) => (
            <HighlightCard
              key={exp.title}
              title={exp.title}
              description={exp.description}
              includes={exp.includes}
              imageSrc={exp.imageSrc}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ── SECTION 2: Core Services ── */}
      <SectionWrapper id="services">
        <header className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-brand-gold mb-6">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Discover our range of premium therapies designed to restore balance and vitality.
          </p>
        </header>

        {coreServices.map((category) => (
          <div key={category.category} className="mb-16 last:mb-0">
            <h3 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-white/90 mb-10 text-center">
              {category.category}
            </h3>

            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {category.items.map((service) => (
                <motion.div key={service.name} variants={gridItemVariants}>
                  <ServiceCard
                    name={service.name}
                    description={service.description}
                    imageSrc={service.imageSrc}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </SectionWrapper>
    </>
  );
}
