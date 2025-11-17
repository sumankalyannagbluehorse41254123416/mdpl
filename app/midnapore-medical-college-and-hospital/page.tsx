import MidnaporeMedicalContent from "@/components/midnapore-medical-college-and-hospital/MidnaporeMedicalContent";
import MidnaporeMedicalImages from "@/components/midnapore-medical-college-and-hospital/MidnaporeMedicalImages";
import MidnaporeMedicalPageTitle from "@/components/midnapore-medical-college-and-hospital/MidnaporeMedicalPageTitle";
import MidnaporeMedicalTestimonials from "@/components/midnapore-medical-college-and-hospital/MidnaporeMedicalTestimonials";

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

// SERVER COMPONENT (Dynamic)
export default async function MidnaporeMedicalCollegeAndHospital() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "8ca66d60-f818-4368-a45b-3d4fbc2b54bf" // <<< Replace with CMS Page ID
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  // Extract CMS Sections
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // Assign sections by index (same pattern you follow)
  const contentSection = sections[32] ?? undefined;
  const imagesSection = sections[33] ?? undefined;
  const testimonialSection = sections[34] ?? undefined;

  return (
    <>
      <MidnaporeMedicalPageTitle />
      <MidnaporeMedicalContent section={contentSection} />
      <MidnaporeMedicalImages section={imagesSection}/>
      <MidnaporeMedicalTestimonials section={testimonialSection}/>
    </>
  );
}
