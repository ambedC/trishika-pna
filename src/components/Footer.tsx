import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-20 pb-10 border-t border-brand-blue-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <h3 className="text-3xl font-serif text-brand-gold font-light tracking-[0.1em] uppercase mb-6">
              PNA Associates
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              With over 10+ years of experience, we bring spa management expertise and 
              premium wellness services to our clientele. Specializing in massage, wellness, 
              and training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-serif text-white font-light mb-6 tracking-[0.2em] uppercase">
              Our Locations
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/trishika" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Trishika Saloon & Wellness Spa
                </Link>
              </li>
              <li>
                <Link href="/trayam" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Trayam Wellness Spa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-serif text-white font-light mb-6 tracking-[0.2em] uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="text-brand-gold mt-0.5" size={18} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917994402099" className="hover:text-brand-gold transition-colors">
                    +91 7994402099
                  </a>
                  <a href="tel:+917994404099" className="hover:text-brand-gold transition-colors">
                    +91 7994404099
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-brand-gold mt-0.5" size={18} />
                <a href="mailto:info@pnaassociates.com" className="hover:text-brand-gold transition-colors">
                  info@pnaassociates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-blue-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} PNA Associates. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
