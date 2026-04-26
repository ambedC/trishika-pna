"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

type ContactTarget = "Trishika" | "Trayam" | "PNA Associates";

const CONTACT_NUMBERS: Record<ContactTarget, string> = {
  "Trishika": "917994402099",
  "Trayam": "917994404099",
  "PNA Associates": "917994402099",
};

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<ContactTarget>("Trishika");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const number = CONTACT_NUMBERS[activeTab];
    const text = `Hi, I would like to contact ${activeTab}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service || "N/A"}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    window.open(`https://wa.me/${number}?text=${encodedText}`, "_blank");
  };

  return (
    <SectionWrapper id="contact" className="bg-brand-surface border-t border-brand-blue-light/50 !py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-brand-gold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Select a location or contact our main office directly.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 p-2 bg-brand-bg rounded-2xl border border-brand-blue-light">
          {(["Trishika", "Trayam", "PNA Associates"] as ContactTarget[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] px-6 py-3 rounded-xl text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "bg-brand-gold text-brand-blue shadow-lg shadow-brand-gold/20"
                  : "text-gray-400 hover:text-brand-gold hover:bg-brand-surface"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <motion.form 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm tracking-widest uppercase text-brand-gold-dark font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-brand-bg border border-brand-blue-light rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-light"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm tracking-widest uppercase text-brand-gold-dark font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-brand-bg border border-brand-blue-light rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-light"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="text-sm tracking-widest uppercase text-brand-gold-dark font-medium">Interested Service (Optional)</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-brand-bg border border-brand-blue-light rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-light appearance-none"
            >
              <option value="">Select a service...</option>
              <option value="Aroma Therapy">Aroma Therapy</option>
              <option value="Swedish Massage">Swedish Massage</option>
              <option value="Deep Tissue Massage">Deep Tissue Massage</option>
              <option value="Balinese Massage">Balinese Massage</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm tracking-widest uppercase text-brand-gold-dark font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-brand-bg border border-brand-blue-light rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all font-light resize-none"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-brand-gold text-brand-blue hover:bg-brand-gold-light hover:shadow-brand-gold/20"
            >
              Send via WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
