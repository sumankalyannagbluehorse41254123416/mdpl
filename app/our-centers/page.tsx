"use client";

import OurCentersPageTitle from "@/components/our-centers/OurCentersPageTitle";
import OurCentersGrid from "@/components/our-centers/OurCentersGrid";
import OurCentersText from "@/components/our-centers/OurCentersText";
import CentersDetails from "@/components/our-centers/CentersDetails";
import HelplineSection from "@/components/our-centers/HelplineSection";
// import { fetchPageData } from "@/services/fetchData.service";
export default function OurCenters() {
  return (
    <>
   <OurCentersPageTitle />
   <OurCentersGrid />   
   <OurCentersText />
   <CentersDetails />
   <HelplineSection />
    </>
  );
}