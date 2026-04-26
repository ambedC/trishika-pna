"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MapPin, Phone, Mail, Award, ShieldCheck, Sparkles, UserCheck, Settings, Users } from "lucide-react";
import CTAButton from "./CTAButton";

// --- Subcomponents ---

const FooterSectionWrapper = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-24 px-6 md:px-12 w-full max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

const FooterCard = ({ title, icon, description }: { title: string, icon: React.ReactNode, description?: string }) => (
  <div className="bg-brand-surface border border-brand-blue-light/50 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-brand-blue-light/20 transition-all duration-300">
    <div className="text-brand-gold mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-serif tracking-wide text-brand-gold mb-2">{title}</h4>
    {description && <p className="text-gray-400 font-light text-sm">{description}</p>}
  </div>
);

// --- Main Footer Component ---

export default function Footer() {
  return (
    <footer className="bg-brand-bg relative overflow-hidden mt-20">
      
      {/* 1. TOP FOOTER HERO */}
      <div className="relative pt-32 pb-24 text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Spa Background" 
            fill 
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg to-brand-bg" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="PNA Associates" width={200} height={200} className="object-contain" />
            </div>
            <div className="w-24 h-[1px] bg-brand-gold/50 mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* 2. COMPANY INTRO SECTION */}
      <FooterSectionWrapper className="text-center max-w-4xl">
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed tracking-wide">
          With over <span className="text-brand-gold font-serif">10+ years</span> of rich experience in the wellness industry, 
          PNA Associates specializes in the complete management and operation of premium spa centers. 
          We transform spa spaces into luxurious havens of relaxation, providing world-class 
          therapies and unmatched customer experiences.
        </p>
      </FooterSectionWrapper>

      {/* 3. EXPERIENCE / CAPABILITIES */}
      <FooterSectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FooterCard 
            title="Spa Center Management" 
            icon={<Settings size={32} strokeWidth={1.5} />} 
            description="End-to-end operational takeover and facility management."
          />
          <FooterCard 
            title="Therapist Training" 
            icon={<Users size={32} strokeWidth={1.5} />} 
            description="Continuous upskilling and certification for our expert therapists."
          />
          <FooterCard 
            title="Customer Experience" 
            icon={<Sparkles size={32} strokeWidth={1.5} />} 
            description="Curating personalized and unforgettable wellness journeys."
          />
          <FooterCard 
            title="Hygiene & Safety" 
            icon={<ShieldCheck size={32} strokeWidth={1.5} />} 
            description="Strict adherence to global hygiene and safety protocols."
          />
          <FooterCard 
            title="Quality Operations" 
            icon={<Award size={32} strokeWidth={1.5} />} 
            description="Streamlined booking, supply chain, and quality control."
          />
        </div>
      </FooterSectionWrapper>

      {/* 4. EXISTING SPA CENTERS */}
      <FooterSectionWrapper>
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-brand-gold mb-4">
            Our Existing Spa Centers
          </h3>
          <p className="text-gray-400 font-light text-lg">Experience our standards of luxury across multiple locations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Trishika Salon & Wellness Spa", 
              loc: "Ayyappankavu, Kochi",
              href: "https://share.google/O1kw6QIWQXPCZPgrT"
            },
            { 
              name: "Trayam Wellness Spa", 
              loc: "Saj Earth Resort, Nedumbassery",
              href: "https://maps.app.goo.gl/jggB1px8N8ExowH3A"
            },
            { 
              name: "Budham Wellness Spa", 
              loc: "Bangalore",
              href: "https://share.google/O1kw6QIWQXPCZPgrT" // Reusing PNA link as per instructions for Bangalore/Budham if applicable, or just the same link
            }
          ].map((spa, i) => (
            <a 
              key={i} 
              href={spa.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-brand-surface rounded-2xl p-10 text-center border border-brand-blue-light/30 hover:border-brand-gold/30 transition-all duration-500 overflow-hidden block"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <MapPin className="text-brand-gold mx-auto mb-6 relative z-10" size={36} strokeWidth={1} />
              <h4 className="text-2xl font-serif text-white tracking-wide mb-3 relative z-10 group-hover:text-brand-gold transition-colors">{spa.name}</h4>
              <p className="text-gray-400 font-light text-sm uppercase tracking-widest relative z-10">{spa.loc}</p>
            </a>
          ))}
        </div>
      </FooterSectionWrapper>

      {/* 5. PROFESSIONAL STANDARDS */}
      <div className="relative py-32 border-y border-brand-blue-light/30">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/trishika.jpg" 
            alt="Spa Room" 
            fill 
            className="object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-brand-blue/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h3 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-brand-gold mb-6">
              Professional Standards
            </h3>
            <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed">
              We maintain the highest level of integrity and professionalism. Our strict hiring and maintenance protocols ensure a safe and premium environment.
            </p>
          </div>
          <div className="md:w-1/2 w-full space-y-6">
            {[
              { text: "Certified & Trained Therapists", icon: <Award className="text-brand-gold" size={24} /> },
              { text: "Valid Health Cards Maintained", icon: <ShieldCheck className="text-brand-gold" size={24} /> },
              { text: "Police Clearance for All Staff", icon: <UserCheck className="text-brand-gold" size={24} /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4 bg-brand-surface/50 backdrop-blur-md p-6 rounded-xl border border-brand-gold/10"
              >
                {item.icon}
                <span className="text-xl font-light tracking-wide text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. SERVICES GRID */}
      <FooterSectionWrapper>
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-brand-gold mb-4">
            Our Expertise
          </h3>
          <p className="text-gray-400 font-light text-lg">A comprehensive menu of world-class therapies.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-brand-surface p-10 rounded-2xl border border-brand-blue-light/50">
            <h4 className="text-2xl font-serif text-brand-gold tracking-widest uppercase mb-8 border-b border-brand-gold/20 pb-4">
              Massage Therapies
            </h4>
            <ul className="space-y-4">
              {["Aroma Therapy", "Swedish Massage", "Deep Tissue", "Balinese Massage", "Hot Stone Therapy", "Candle Massage", "Ayurvedic Massage"].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-light tracking-wide">
                  <Sparkles size={14} className="text-brand-gold" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-surface p-10 rounded-2xl border border-brand-blue-light/50">
            <h4 className="text-2xl font-serif text-brand-gold tracking-widest uppercase mb-8 border-b border-brand-gold/20 pb-4">
              Body Treatments
            </h4>
            <ul className="space-y-4">
              {["Full Body Scrub", "Moroccan Bath", "Steam Bath", "Wine Massage", "Honey Massage"].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-light tracking-wide">
                  <Sparkles size={14} className="text-brand-gold" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FooterSectionWrapper>

      {/* 7. WHY PARTNER WITH US */}
      <FooterSectionWrapper className="text-center max-w-5xl">
        <h3 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-brand-gold mb-16">
          Why Partner With Us?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "3", label: "Spa Centers" },
            { number: "100%", label: "Certified Staff" },
            { number: "A+", label: "Hygiene Standards" },
            { number: "1st", label: "In Quality" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl font-serif font-light text-brand-gold mb-2">{stat.number}</span>
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </FooterSectionWrapper>

      {/* 8. FINAL CTA SECTION */}
      <div className="py-24 bg-brand-gold text-brand-blue text-center px-6">
        <h3 className="text-3xl md:text-5xl font-serif font-light tracking-wide mb-10 max-w-3xl mx-auto leading-tight">
          Let’s create a premium wellness experience together.
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/contact"
            className="bg-brand-blue text-brand-gold px-10 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/20"
          >
            Contact Us
          </Link>
          <a 
            href="tel:+917994402099"
            className="border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105 hover:bg-brand-blue/10"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* 9. CONTACT FOOTER (ACTUAL FOOTER END) */}
      <div className="bg-[#050d1d] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Image src="/logo.png" alt="PNA Associates" width={80} height={80} className="object-contain mb-2" />
            <p className="text-gray-500 font-light text-sm tracking-wide mb-1">
              CEO: <span className="text-gray-300">Prem G Kollannoor</span>
            </p>
            <a 
              href="https://share.google/O1kw6QIWQXPCZPgrT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-brand-gold transition-colors text-sm font-light tracking-wide group"
            >
              <MapPin size={14} className="group-hover:scale-110 transition-transform" />
              <span>Ayyappankavu, Chittoor Road, Kochi</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
            <a href="tel:+917994402099" className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors group">
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-light tracking-widest">+91 7994402099</span>
            </a>
            <a href="tel:+917994404099" className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors group">
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-light tracking-widest">+91 7994404099</span>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 tracking-wider">
          <p>&copy; {new Date().getFullYear()} PNA Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
