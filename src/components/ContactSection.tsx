"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

import MapSection from "./MapSection";

type ContactTarget = "Trishika" | "Trayam" | "PNA Associates";

const CONTACT_INFO: Record<ContactTarget, { number: string, address: string, mapUrl: string }> = {
  "Trishika": {
    number: "917994408099",
    address: "Ayyappankavu, Chittoor Road, Ernakulam",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2563563912254!2d76.280687!3d9.9956705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0867f35071%3A0x285f680682fdd336!2sTrishika%20saloon%20and%20wellness%20spa!5e0!3m2!1sen!2sin!4v1777208347475!5m2!1sen!2sin"
  },
  "Trayam": {
    number: "917994808001",
    address: "Saj Earth Resort, Nedumbasherry, Kochi",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.225711594769!2d76.3850071!3d10.162299899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d7f1af955d7%3A0xd6522eec2e3fa7a2!2sSAJ%20Earth%20Resort%20%26%20Convention%20Center!5e0!3m2!1sen!2sin!4v1777208296396!5m2!1sen!2sin"
  },
  "PNA Associates": {
    number: "917994404099",
    address: "Ayyappankavu, Chittoor Road, Kochi",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2563563912254!2d76.280687!3d9.9956705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0867f35071%3A0x285f680682fdd336!2sTrishika%20saloon%20and%20wellness%20spa!5e0!3m2!1sen!2sin!4v1777208347475!5m2!1sen!2sin"
  },
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
    
    const number = CONTACT_INFO[activeTab].number;
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

          {/* Location Info & Map */}
          <div className="mt-16 pt-16 border-t border-white/5 text-center">
            <h4 className="text-brand-gold font-serif tracking-widest uppercase mb-4">Location</h4>
            <p className="text-gray-300 font-light text-lg mb-8 italic">
              {CONTACT_INFO[activeTab].address}
            </p>
            <MapSection 
              embedUrl={CONTACT_INFO[activeTab].mapUrl}
              title={`${activeTab} Location Map`}
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
