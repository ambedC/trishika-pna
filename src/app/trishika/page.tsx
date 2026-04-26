import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Trishika Saloon & Wellness Spa",
  description: "Experience pure tranquility and premium wellness treatments at Trishika Saloon & Wellness Spa located in Ernakulam.",
  openGraph: {
    title: "Trishika Saloon & Wellness Spa",
    description: "Experience pure tranquility and premium wellness treatments at Trishika Saloon & Wellness Spa.",
    images: ["/images/trishika.jpg"],
  },
};
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

const services = [
  { name: "Aroma Therapy", price: "3000", imageSrc: "/services/aroma.webp", description: "A gentle massage using essential oils to promote relaxation and relieve stress." },
  { name: "Swedish Massage", price: "3000", imageSrc: "/services/swedish.webp", description: "Classic massage technique using long strokes to ease tension and improve circulation." },
  { name: "Deep Tissue Massage", price: "3500", imageSrc: "/services/deep.webp", description: "Focuses on the deepest layers of muscle tissue to release chronic muscle tension." },
  { name: "Hot Stone Therapy", price: "4000-5800", imageSrc: "/services/hotStone.webp", description: "Smooth, heated stones are placed on specific parts of the body to warm and relax muscles." },
  { name: "Moroccan Bath", price: "6000-9000", imageSrc: "/services/morrocan.webp", description: "Traditional cleansing ritual that exfoliates and hydrates the skin." },
  { name: "Steam Bath", price: "600", imageSrc: "/services/steam.webp", description: "Relaxing steam session to open pores and detoxify the body." },
  { name: "Couples Retreat", price: "6399", imageSrc: "/services/ayurvedic.webp", description: "A shared spa experience designed for relaxation and bonding." },
  { name: "Signature Massage", price: "6500", imageSrc: "/services/detox.webp", description: "Our exclusive, customized massage blending the best techniques for ultimate rejuvenation." },
];

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
        <div className="inline-flex items-center gap-3 bg-brand-surface border border-brand-blue-light rounded-full px-8 py-4 shadow-lg shadow-brand-blue-light/20">
          <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">Location:</span>
          <span className="text-gray-200 font-light tracking-wide">Ayyappankavu, Chittoor Road, Ernakulam</span>
        </div>
      </SectionWrapper>

      <SectionWrapper id="services" className="bg-brand-surface/30">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-brand-gold mb-6">Our Services</h2>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Discover our range of premium therapies designed to restore balance and vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              name={service.name}
              price={service.price}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </SectionWrapper>

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
