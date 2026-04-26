import Image from "next/image";

export default function TrishikaLoading() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-brand-bg">
      {/* Radial glow behind logo */}
      <div className="absolute w-72 h-72 rounded-full bg-brand-gold/5 blur-3xl animate-pulse" />

      {/* Logo with entrance + pulse animation */}
      <div className="relative animate-fade-in-up">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-brand-gold/30 shadow-2xl shadow-brand-gold/10 animate-logo-pulse">
          <Image
            src="/trishika/logo.jpg"
            alt="Trishika"
            width={144}
            height={144}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Gold shimmer bar */}
      <div className="mt-10 w-32 h-[2px] rounded-full overflow-hidden bg-brand-blue-light/30">
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-shimmer" />
      </div>
    </div>
  );
}
