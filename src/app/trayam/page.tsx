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
import MapSection from "@/components/MapSection";
import { MapPin, Phone } from "lucide-react";

const services = [
  { name: "Hot Oil Massage", imageSrc: "/services/hotoil.png", description: "A therapeutic treatment using warm, nutrient-rich oils to deeply nourish the skin and relax the muscles." },
  { name: "Ayurvedic Massage", imageSrc: "/services/ayurvedic.webp", description: "Ancient Indian therapy restoring balance through warm herbal oils and rhythmic massage techniques." },
  { name: "Steam Bath", imageSrc: "/services/steam.webp", description: "Relaxing steam session to open pores and detoxify the body." },
  { name: "Honey Massage", imageSrc: "/services/honey.webp", description: "A detoxifying massage using warm honey to deeply cleanse and nourish." },
  { name: "Wine Massage", imageSrc: "/services/wine.webp", description: "A luxurious therapy using antioxidant-rich wine to rejuvenate the skin." },
  { name: "Candle Massage", imageSrc: "/services/candle.webp", description: "A warm and soothing massage using melted, skin-safe massage candles." },
  { name: "Deep Tissue Massage", imageSrc: "/services/deep.webp", description: "Focuses on the deepest layers of muscle tissue to release chronic muscle tension." },
  { name: "Balinese Massage", imageSrc: "/services/balinese.webp", description: "A full-body, deep-tissue, holistic treatment." },
  { name: "Swedish Massage", imageSrc: "/services/swedish.webp", description: "Classic massage technique using long strokes to ease tension and improve circulation." },
  { name: "Aroma Therapy", duration: "40 min", imageSrc: "/services/aroma.webp", description: "A gentle massage using essential oils to promote relaxation and relieve stress." },
  { name: "Hair Cut", imageSrc: "/services/haircut.png", description: "Professional styling and precision cuts tailored to your unique look in a luxury setting." },
];

export default function TrayamPage() {
  return (
    <>
      <HeroSection 
        title="Trayam Wellness Spa"
        subtitle="Your serene escape within the luxurious Saj Earth Resort."
        backgroundImage="/images/trayam.jpg"
        logoSrc="/trayam/logo.png"
        brochureSrc="/trayam/brochure.pdf"
      />

      <SectionWrapper id="about" className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-brand-gold mb-8">About Us</h2>
        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8">
          Nestled within the Saj Earth Resort, Trayam Wellness Spa offers an exclusive sanctuary for those seeking profound relaxation. Our therapies blend traditional wisdom with modern luxury to deliver an unforgettable wellness journey.
        </p>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a 
              href="https://maps.app.goo.gl/jggB1px8N8ExowH3A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-surface border border-brand-blue-light rounded-full px-6 py-4 shadow-lg shadow-brand-blue-light/20 hover:border-brand-gold/50 transition-all duration-300 group"
            >
              <MapPin size={20} className="text-brand-gold flex-shrink-0" />
              <span className="text-gray-200 font-light tracking-wide group-hover:text-brand-gold transition-colors text-sm sm:text-base">Saj Earth Resort, Nedumbasherry</span>
            </a>
            
            <a href="tel:+917994808001" className="inline-flex items-center gap-3 bg-brand-surface border border-brand-blue-light rounded-full px-6 py-4 shadow-lg shadow-brand-blue-light/20 hover:border-brand-gold/50 transition-all duration-300 group text-gray-200 hover:text-brand-gold">
              <Phone size={20} className="text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-light tracking-widest text-sm sm:text-base">+91 79948 08001</span>
            </a>
            
            <a href="tel:+917994402099" className="inline-flex items-center gap-3 bg-brand-surface border border-brand-blue-light rounded-full px-6 py-4 shadow-lg shadow-brand-blue-light/20 hover:border-brand-gold/50 transition-all duration-300 group text-gray-200 hover:text-brand-gold">
              <Phone size={20} className="text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-light tracking-widest text-sm sm:text-base">+91 79944 02099</span>
            </a>
          </div>

          <MapSection 
            embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.225711594769!2d76.3850071!3d10.162299899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d7f1af955d7%3A0xd6522eec2e3fa7a2!2sSAJ%20Earth%20Resort%20%26%20Convention%20Center!5e0!3m2!1sen!2sin!4v1777208296396!5m2!1sen!2sin"
            title="Trayam Wellness Spa Location"
          />
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
