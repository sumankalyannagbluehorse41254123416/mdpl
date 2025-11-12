import OurCentersPageTitle from "@/components/our-centers/OurCentersPageTitle";
import OurCentersGrid from "@/components/our-centers/OurCentersGrid";
import OurCentersText from "@/components/our-centers/OurCentersText";
import CentersDetails from "@/components/our-centers/CentersDetails";
import HelplineSection from "@/components/our-centers/HelplineSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Helper: remove HTML tags
// const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

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

// ✅ Server Component
export default async function OurCenters() {
  // ✅ FIX: add `await`
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // Fetch CMS page data (Server Side)
    siteData = await fetchPageData(
      { host, ...headersObj },
      "8ca66d60-f818-4368-a45b-3d4fbc2b54bf"
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ✅ Index 10 → Centers Grid
  const centersSection = sections[10] || {};

  // ✅ Index 7 → Helpline Section
  const helplineSection = sections[7] || {};

  const OurCentersTextSection = sections[11] || {};
  const centersDetailsSection = sections[12] || {};

  return (
    <>
      <OurCentersPageTitle />
      <OurCentersGrid section={centersSection} />
      <OurCentersText section={OurCentersTextSection} />
      <CentersDetails section={centersDetailsSection} />
      <HelplineSection section={helplineSection} />
    </>
  );
}
