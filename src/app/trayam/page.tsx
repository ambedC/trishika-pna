import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Trayam Wellness Spa",
  description: "Your serene escape within the luxurious Saj Earth Resort. Discover a world of calm with our exclusive therapies.",
  openGraph: {
    title: "Trayam Wellness Spa",
    description: "Your serene escape within the luxurious Saj Earth Resort. Discover a world of calm with our exclusive therapies.",
    images: ["/images/trayam.jpg"],
  },
};
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";

const services = [
  { name: "Aroma Therapy", price: "2500", duration: "40 min", imageSrc: "/services/aroma.webp", description: "A gentle massage using essential oils to promote relaxation and relieve stress." },
  { name: "Swedish Massage", price: "2500", imageSrc: "/services/swedish.webp", description: "Classic massage technique using long strokes to ease tension and improve circulation." },
  { name: "Balinese Massage", price: "3000", imageSrc: "/services/balinese.webp", description: "A full-body, deep-tissue, holistic treatment." },
  { name: "Deep Tissue Massage", price: "3000", imageSrc: "/services/deep.webp", description: "Focuses on the deepest layers of muscle tissue to release chronic muscle tension." },
  { name: "Candle Massage", price: "3500", imageSrc: "/services/candle.webp", description: "A warm and soothing massage using melted, skin-safe massage candles." },
  { name: "Wine Massage", price: "5000", imageSrc: "/services/wine.webp", description: "A luxurious therapy using antioxidant-rich wine to rejuvenate the skin." },
  { name: "Honey Massage", price: "4500", imageSrc: "/services/honey.webp", description: "A detoxifying massage using warm honey to deeply cleanse and nourish." },
  { name: "Steam Bath", price: "500", imageSrc: "/services/steam.webp", description: "Relaxing steam session to open pores and detoxify the body." },
];

export default function TrayamPage() {
  return (
    <>
      <HeroSection 
        title="Trayam Wellness Spa"
        subtitle="Your serene escape within the luxurious Saj Earth Resort."
        backgroundImage="/images/trayam.jpg"
        logoSrc="/trayam/logo.png"
      />

      <SectionWrapper id="about" className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-brand-gold mb-8">About Us</h2>
        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8">
          Nestled within the Saj Earth Resort, Trayam Wellness Spa offers an exclusive sanctuary for those seeking profound relaxation. Our therapies blend traditional wisdom with modern luxury to deliver an unforgettable wellness journey.
        </p>
        <div className="inline-flex items-center gap-3 bg-brand-surface border border-brand-blue-light rounded-full px-8 py-4 shadow-lg shadow-brand-blue-light/20">
          <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">Location:</span>
          <span className="text-gray-200 font-light tracking-wide">Saj Earth Resort, Nedumbasherry</span>
        </div>
      </SectionWrapper>

      <SectionWrapper id="services" className="bg-brand-surface/30">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-brand-gold mb-6">Our Services</h2>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Experience our curated selection of bespoke spa treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              name={service.name}
              price={service.price}
              duration={service.duration}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <CTAButton href="/contact">Book an Appointment</CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
