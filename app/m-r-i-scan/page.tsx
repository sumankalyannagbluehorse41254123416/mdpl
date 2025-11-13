import PageTitleMRI from "@/components/mri/PageTitleMRI";
import MRIScanSection from "@/components/mri/MRIScanSection";
import MRIServices from "@/components/mri/MRIServices";
import MRIScanTestimonials from "@/components/mri/MRIScanTestimonials";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// ✅ Define CMS structure types
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

// ✅ Server Component (async allowed)
export default async function MRIPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // ✅ Fetch "MRI" page data from CMS
    siteData = await fetchPageData(
      { host, ...headersObj },
      "8ca66d60-f818-4368-a45b-3d4fbc2b54bf"
    );
  } catch (error) {
    console.error("MRI Page Fetch error:", error);
  }

  // ✅ Extract sections
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  const mriScanSection = sections[13] || {};
  const mriServicesSection = sections[14] || {}; 
  //  const mriTestimonialsSection = sections[15] || {}; 

  return (
    <>
      <PageTitleMRI />
      <MRIScanSection section={mriScanSection} />
      <MRIServices section={mriServicesSection} /> 
      <MRIScanTestimonials />
    </>
  );
}
