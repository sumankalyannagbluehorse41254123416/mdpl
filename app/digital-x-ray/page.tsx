"use client";

import DigitalXRayPageTitle from "@/components/digital-x-ray/DigitalXRayPageTitle";
import DigitalXRaySection from "@/components/digital-x-ray/DigitalXRaySection";
import DigitalXRayServices from "@/components/digital-x-ray/DigitalXRayServices";   
import DigitalXRayTestimonials from "@/components/digital-x-ray/DigitalXRayTestimonials";

export default function DigitalXRayPage() {
  return (
    <>
     <DigitalXRayPageTitle />
     <DigitalXRaySection /> 
     <DigitalXRayServices />
     <DigitalXRayTestimonials />
    </>
  );
}