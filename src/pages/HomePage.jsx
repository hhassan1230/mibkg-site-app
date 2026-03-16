import { useSEO } from "@/hooks/useSEO";
import Hero from "@/components/home/Hero";
import GallerySection from "@/components/home/GallerySection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  useSEO({
    title: "Made in Brooklyn Games",
    description:
      "Made in Brooklyn Games — Home to underrepresented creators in gaming. Explore our VR titles, merch, and more.",
  });

  return (
    <>
      <Hero />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
