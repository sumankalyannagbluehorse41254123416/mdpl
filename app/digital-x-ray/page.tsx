import DigitalXRayPageTitle from "@/components/digital-x-ray/DigitalXRayPageTitle";
import DigitalXRaySection from "@/components/digital-x-ray/DigitalXRaySection";
import DigitalXRayServices from "@/components/digital-x-ray/DigitalXRayServices";
import DigitalXRayTestimonials from "@/components/digital-x-ray/DigitalXRayTestimonials";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

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

export default async function DigitalXRayPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "8ca66d60-f818-4368-a45b-3d4fbc2b54bf"        
    );
  } catch (error) {
    console.error("Digital X-Ray Page Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ⭐ Assign your section indexes here
  const xraySection = sections[19] || {};
  const xrayServicesSection = sections[20] || {};
  const xrayTestimonialsSection = sections[21] || {};

  return (
    <>
      <DigitalXRayPageTitle />
      <DigitalXRaySection section={xraySection} />
      <DigitalXRayServices section={xrayServicesSection} />
      <DigitalXRayTestimonials section={xrayTestimonialsSection} />
    </>
  );
}
