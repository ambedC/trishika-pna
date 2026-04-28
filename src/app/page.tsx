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
        logoSrc="/trishika/logo.jpg"
      />

      <ServicePreview
        title="Trishika Saloon & Wellness Spa"
        description="Premium wellness spa offering massage therapies, body treatments, and relaxation experiences designed to rejuvenate your mind and body."
        services={[
          "Nuru Massage",
          "Moroccan Bath",
          "Hot Stone Therapy",
          "Candle Massage",
          "Lomi Lomi",
          "Ayurvedic Massage",
          "Body Scrub + Steam Bath",
          "Balinese Massage",
          "Deep Tissue Massage",
          "Aroma Therapy",
          "Swedish Massage",
          "Body Scrub",
          "Steam Bath"
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
          "Hot Oil Massage",
          "Ayurvedic Massage",
          "Steam Bath",
          "Honey Massage",
          "Wine Massage",
          "Candle Massage",
          "Deep Tissue Massage",
          "Balinese Massage",
          "Swedish Massage",
          "Aroma Therapy",
          "Hair Cut"
        ]}
        ctaText="See More"
        ctaLink="/trayam"
        imageSrc="/images/trayam.jpg"
        reverse
      />
    </>
  );
}
