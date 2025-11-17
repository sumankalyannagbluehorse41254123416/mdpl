import SagoreDuttaContent from "@/components/college-of-medicine-sagoreduttahospital/SagoreDuttaContent";
import SagoreDuttaImages from "@/components/college-of-medicine-sagoreduttahospital/SagoreDuttaImages";
import SagoreDuttaPageTitle from "@/components/college-of-medicine-sagoreduttahospital/SagoreDuttaPageTitle";
import SagoreDuttaTestimonials from "@/components/college-of-medicine-sagoreduttahospital/SagoreDuttaTestimonials";

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

// SERVER COMPONENT (dynamic)
export default async function CollegeOfMedicineSagoreDuttaHospital() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "8ca66d60-f818-4368-a45b-3d4fbc2b54bf" // ✔ replace with correct CMS ID
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  // Extract sections from CMS
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // Assign CMS sections by index
  const contentSection = sections[28] ?? undefined;
   const imagesSection = sections[29] ?? undefined; 
   const testimonialSection = sections[30] ?? undefined;

  return (
    <>
      <SagoreDuttaPageTitle />
      <SagoreDuttaContent section={contentSection} />
      <SagoreDuttaImages section={imagesSection}/>
      <SagoreDuttaTestimonials section={testimonialSection}/>
    </>
  );
}
