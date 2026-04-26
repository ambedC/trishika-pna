import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import TrishikaServicesSection from "@/components/TrishikaServicesSection";
import BridalSection from "@/components/BridalSection";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Trishika Saloon & Wellness Spa",
  description: "Experience pure tranquility and premium wellness treatments at Trishika Saloon & Wellness Spa located in Ernakulam.",
  openGraph: {
    title: "Trishika Saloon & Wellness Spa",
    description: "Experience pure tranquility and premium wellness treatments at Trishika Saloon & Wellness Spa.",
    images: ["/images/trishika.jpg"],
  },
};

const galleryImages = [
  "/trishika/img1.webp",
  "/trishika/img2.webp",
  "/trishika/img3.webp",
  "/trishika/img4.webp",
];

export default function TrishikaPage() {
  return (
    <>
      <HeroSection 
        title="Trishika Saloon & Wellness Spa"
        subtitle="Experience pure tranquility and premium wellness treatments."
        backgroundImage="/images/trishika.jpg"
        logoSrc="/trishika/logo.jpg"
        brochureSrc="/trishika/brochure.pdf"
      />

      <SectionWrapper id="about" className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-brand-gold mb-8">About Us</h2>
        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8">
          Welcome to a world of elegance. At Trishika, we offer a premium spa experience tailored to rejuvenate your mind, body, and spirit. From soothing massages to revitalizing body treatments, our expert therapists are dedicated to your complete relaxation.
        </p>
        <div className="flex flex-col items-center gap-8">
          <a 
            href="https://share.google/O1kw6QIWQXPCZPgrT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-surface border border-brand-blue-light rounded-full px-8 py-4 shadow-lg shadow-brand-blue-light/20 hover:border-brand-gold/50 transition-all duration-300 group"
          >
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">Location:</span>
            <span className="text-gray-200 font-light tracking-wide group-hover:text-brand-gold transition-colors">Ayyappankavu, Chittoor Road, Ernakulam</span>
          </a>

          <MapSection 
            embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2563563912254!2d76.280687!3d9.9956705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0867f35071%3A0x285f680682fdd336!2sTrishika%20saloon%20and%20wellness%20spa!5e0!3m2!1sen!2sin!4v1777208347475!5m2!1sen!2sin"
            title="Trishika Salon & Wellness Spa Location"
          />
        </div>
      </SectionWrapper>

      {/* Premium Experiences + Core Services */}
      <TrishikaServicesSection />

      {/* Dedicated Bridal Section */}
      <BridalSection />

      <SectionWrapper id="gallery" className="!pt-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-brand-gold mb-4">Gallery</h2>
          <p className="text-gray-400 font-light text-lg">A glimpse into our serene sanctuary.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group">
              <Image 
                src={img} 
                alt={`Trishika Gallery ${i + 1}`} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <CTAButton href="/contact">Book an Appointment</CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
