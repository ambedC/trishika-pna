import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-105 hover:shadow-lg";
  
  const variants = {
    primary: "bg-brand-gold text-brand-blue hover:bg-brand-gold-light hover:shadow-brand-gold/20",
    outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
