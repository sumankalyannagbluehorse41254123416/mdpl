"use client";

import MidnaporeMedicalContent from "@/components/midnapore-medical-college-and-hospital/MidnaporeMedicalContent";
import MidnaporeMedicalImages from "@/components/midnapore-medical-college-and-hospital/MidnaporeMedicalImages";
import MidnaporeMedicalPageTitle from "@/components/midnapore-medical-college-and-hospital/MidnaporeMedicalPageTitle";
import MidnaporeMedicalTestimonials from "@/components/midnapore-medical-college-and-hospital/MidnaporeMedicalTestimonials";

export default function MidnaporeMedicalCollegeAndHospital() {
  return (
    <>
    <MidnaporeMedicalPageTitle />
    <MidnaporeMedicalContent />
    <MidnaporeMedicalImages />
    <MidnaporeMedicalTestimonials />
    </>
  );
}