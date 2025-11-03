"use client";

import PageTitleMRI from "@/components/mri/PageTitleMRI";
import MRIScanSection from "@/components/mri/MRIScanSection";
import MRIServices from "@/components/mri/MRIServices";
import MRIScanTestimonials from "@/components/mri/MRIScanTestimonials";
export default function MRIPage() {
  return (
    <>
      <PageTitleMRI />
      <MRIScanSection />
      <MRIServices />
      <MRIScanTestimonials />
    </>
  );
}