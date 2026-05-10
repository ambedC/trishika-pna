import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicePreview from "@/components/ServicePreview";

export const metadata: Metadata = {
  title: "Trishika | Premium Saloon & Wellness Spa Ernakulam",
  description: "Trishika Saloon & Wellness Spa and Trayam Wellness Spa. Premium wellness spa in Ernakulam offering massage therapies, Moroccan bath, and body treatments.",
  alternates: {
    canonical: "https://www.trishikasaloonandwellnessspa.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Trishika Saloon & Wellness Spa",
  "image": "https://www.trishikasaloonandwellnessspa.com/images/trishika/logo.jpg",
  "@id": "https://www.trishikasaloonandwellnessspa.com/",
  "url": "https://www.trishikasaloonandwellnessspa.com/",
  "telephone": "+917994402299",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ayyappankavu, Chittoor Road",
    "addressLocality": "Ernakulam",
    "addressRegion": "KL",
    "postalCode": "682018",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.9956705,
    "longitude": 76.280687
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://www.facebook.com/people/Trishika-Saloon-Wellness-Spa/61586235514968/",
    "https://www.instagram.com/trishika_saloon_wellness_spa"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection 
        title="Trishika Saloon & Wellness Spa"
        subtitle="Elegance begins the moment you enter. Leave with confidence, wrapped in calm."
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
