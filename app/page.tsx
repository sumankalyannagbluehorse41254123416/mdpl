"use client";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import OurCentersSlider from "@/components/OurCentersSlider";
import ClientTestimonials from "@/components/ClientTestimonials";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <WhoWeAreSection />
      <OurCentersSlider />
      <ClientTestimonials />
    </>
  );
}
