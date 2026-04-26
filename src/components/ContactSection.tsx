"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

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

  const inputStyles = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/50 focus:bg-white/10 transition-all font-light backdrop-blur-sm";
  const labelStyles = "block text-xs tracking-[0.2em] uppercase text-brand-gold/80 mb-3 ml-1";

  return (
    <SectionWrapper id="contact" className="!pt-12 !pb-32">
      <div className="max-w-4xl mx-auto">
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            {(["Trishika", "Trayam", "PNA Associates"] as ContactTarget[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3.5 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-500 ${
                  activeTab === tab
                    ? "bg-brand-gold text-brand-blue shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-brand-surface/40 backdrop-blur-xl border border-brand-blue-light/30 rounded-3xl p-8 md:p-14 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-brand-gold tracking-widest uppercase mb-2">
              Message {activeTab}
            </h3>
            <p className="text-gray-400 font-light text-sm">
              Fill out the form below and we will connect with you via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className={labelStyles}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles}
                  placeholder="e.g. John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelStyles}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyles}
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="service" className={labelStyles}>Interested Service <span className="text-gray-500 lowercase tracking-normal">(Optional)</span></label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputStyles} appearance-none pr-12 cursor-pointer`}
                >
                  <option value="" className="bg-brand-blue text-gray-400">Select a service...</option>
                  <option value="Aroma Therapy" className="bg-brand-blue text-white">Aroma Therapy</option>
                  <option value="Swedish Massage" className="bg-brand-blue text-white">Swedish Massage</option>
                  <option value="Deep Tissue Massage" className="bg-brand-blue text-white">Deep Tissue Massage</option>
                  <option value="Balinese Massage" className="bg-brand-blue text-white">Balinese Massage</option>
                  <option value="Other" className="bg-brand-blue text-white">Other</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold/50">
                  <ChevronDown size={20} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelStyles}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className={`${inputStyles} resize-none`}
                placeholder="How can we help you?"
              />
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-brand-gold text-brand-blue px-14 py-5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:bg-[#e6c143] w-full md:w-auto"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
