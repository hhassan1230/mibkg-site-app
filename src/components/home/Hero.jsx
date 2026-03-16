import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Desktop video */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="https://anima-uploads.s3.amazonaws.com/projects/60523ff4ec5e2ec86a4add42/files/mibkg-highlight-reel.mp4"
        loop
        autoPlay
        playsInline
        muted
      />
      {/* Mobile fallback */}
      <img
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        src="https://media.giphy.com/media/6Uuw2GuTPtlWqEBTSg/giphy.gif"
        alt="Made in Brooklyn Games highlight reel"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      {/* Branding */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <ScrollReveal>
          <img
            src="/assets/img/desktop--logo-AA8B0E5F-9464-4A51-A450-F117749E1AC0@2x.png"
            alt="Made in Brooklyn Games"
            className="h-16 md:h-24"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
