import HeroSection from "@/components/HeroSection";
import ServicePreview from "@/components/ServicePreview";

export default function Home() {
  return (
    <>
      <HeroSection 
        title="Elegance begins the moment you enter."
        subtitle="Leave with confidence, wrapped in calm."
        ctaText="Explore Trishika"
        ctaLink="/trishika"
        backgroundImage="/images/hero-bg.jpg"
      />

      <ServicePreview
        title="Trishika Saloon & Wellness Spa"
        description="Premium wellness spa offering massage therapies, body treatments, and relaxation experiences designed to rejuvenate your mind and body."
        services={[
          "Aroma Therapy",
          "Swedish Massage",
          "Deep Tissue Massage",
          "Balinese Massage",
          "Body Scrub",
          "Candle Massage",
          "Moroccan Bath"
        ]}
        ctaText="See More"
        ctaLink="/trishika"
        imageSrc="/images/trishika.jpg"
      />

      <ServicePreview
        title="Trayam Wellness Spa"
        location="Saj Earth Resort, Nedumbasherry"
        description="Experience the ultimate relaxation oasis located within the luxurious Saj Earth Resort. Discover a world of calm with our exclusive therapies."
        services={[
          "Aroma Therapy",
          "Swedish Massage",
          "Deep Tissue Massage",
          "Balinese Massage",
          "Wine Massage",
          "Honey Massage",
          "Steam Bath"
        ]}
        ctaText="See More"
        ctaLink="/trayam"
        imageSrc="/images/trayam.jpg"
        reverse
      />
    </>
  );
}
