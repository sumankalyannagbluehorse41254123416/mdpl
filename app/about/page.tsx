"use client";

import AboutSection from "@/components/about/AboutSection";
import PageTitle from "@/components/about/PageTitle";
import OurDirectors from "@/components/about/OurDirectors";
import HelplineSection from "@/components/about/HelplineSection";

export default function AboutPage() {
  return (
    <>
   <PageTitle />
   <AboutSection />
   <OurDirectors />
   <HelplineSection />
    </>
  );
}
