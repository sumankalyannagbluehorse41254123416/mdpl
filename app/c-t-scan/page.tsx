import PageTitle from "@/components/c-t-scan/PageTitle";
import CTScanContent from "@/components/c-t-scan/CTScanContent";
import CTScanServices from "@/components/c-t-scan/CTScanServices";
import CTScanTestimonials from "@/components/c-t-scan/CTScanTestimonials";
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

export default async function CTScanPage() {
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
    console.error("CT Scan Page Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ⭐ Your CT Scan content is at index 16
  const ctScanContent = sections[16] || {};
  const ctServicesSection = sections[17] || {};
    const ctTestimonialsSection = sections[18] || {};

  return (
    <>
      <PageTitle /> 
      <CTScanContent section={ctScanContent} />
      <CTScanServices section={ctServicesSection} />
      <CTScanTestimonials section={ctTestimonialsSection} />
    </>
  );
}
