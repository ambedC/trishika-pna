"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Trishika", href: "/trishika" },
  { name: "Trayam", href: "/trayam" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const logoSrc = pathname === "/" || pathname === "/trishika" 
    ? "/trishika/logo.jpg" 
    : "/trayam/logo.png";
  const altText = pathname === "/" || pathname === "/trishika" 
    ? "Trishika Logo" 
    : "Trayam Logo";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-blue/80 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src={logoSrc} 
              alt={altText} 
              width={48} 
              height={48} 
              className="object-contain rounded-full shadow-md bg-brand-bg/50 backdrop-blur-md p-1 border border-brand-gold/20" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors hover:text-brand-gold ${
                  pathname === link.href ? "text-brand-gold font-medium" : "text-gray-300 font-light"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border border-brand-gold text-brand-gold px-5 py-2 rounded-full hover:bg-brand-gold hover:text-brand-blue transition-all uppercase text-xs tracking-widest"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-gold"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — rendered outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-0 bg-brand-blue z-[100] flex flex-col justify-center items-center px-6"
          >
            <button
              className="absolute top-6 right-6 text-brand-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-serif tracking-widest uppercase ${
                    pathname === link.href ? "text-brand-gold" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 border border-brand-gold text-brand-gold px-8 py-3 rounded-full text-lg tracking-widest uppercase"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
