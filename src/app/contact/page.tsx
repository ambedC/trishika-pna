import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PNA Associates. Book an appointment at Trishika Saloon & Wellness Spa or Trayam Wellness Spa.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 pb-12 bg-brand-blue relative">
        <div className="absolute inset-0 bg-[url('/images/trayam.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-brand-gold tracking-wide mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to schedule your appointment.
          </p>
        </div>
      </div>
      <div>
        <ContactSection />
      </div>
    </>
  );
}
