import RGKarPageTitle from "@/components/r-g-kar-medical-college-hospital/RGKarPageTitle";
import RGKarHospitalContent from "@/components/r-g-kar-medical-college-hospital/RGKarHospitalContent";
import HospitalImages from "@/components/r-g-kar-medical-college-hospital/HospitalImages";
import ServicesTestimonials from "@/components/r-g-kar-medical-college-hospital/ServicesTestimonials";

import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// CMS Types
interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

// SERVER COMPONENT
export default async function RGKarPage() {
  // Correct: await headers()
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // Fetch CMS Data
    siteData = await fetchPageData(
      { host, ...headersObj },
      "8ca66d60-f818-4368-a45b-3d4fbc2b54bf" // <-- Replace CMS PAGE ID
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // Now map sections like old code:
  const hospitalContentSection = sections[22] || {};
  const hospitalImagesSection = sections[23] || {};
  const servicesTestimonialSection = sections[24] || {};

  return (
    <>
      <RGKarPageTitle />
      <RGKarHospitalContent section={hospitalContentSection} />
      <HospitalImages section={hospitalImagesSection} />
      <ServicesTestimonials section={servicesTestimonialSection} />
    </>
  );
}
