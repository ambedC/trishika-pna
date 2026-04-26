import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pnaassociates.com"),
  title: {
    default: "PNA Associates | Premium Spa & Wellness",
    template: "%s | PNA Associates"
  },
  description: "Trishika Saloon & Wellness Spa and Trayam Wellness Spa. Premium wellness spa offering massage therapies, body treatments, and relaxation experiences.",
  keywords: ["Spa", "Wellness", "Massage Therapy", "Body Treatments", "PNA Associates", "Trishika", "Trayam"],
  icons: {
    icon: "/trishika/logo.jpg",
    apple: "/trishika/logo.jpg",
  },
  openGraph: {
    title: "PNA Associates | Premium Spa & Wellness",
    description: "Premium wellness spa offering massage therapies, body treatments, and relaxation experiences.",
    url: "https://pnaassociates.com",
    siteName: "PNA Associates",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "PNA Associates Spa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-gray-200">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
