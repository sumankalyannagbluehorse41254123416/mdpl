import PageTitle from "@/components/about/PageTitle";
import AboutSection from "@/components/about/AboutSection";
import OurDirectors from "@/components/about/OurDirectors";
import HelplineSection from "@/components/about/HelplineSection";
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
export default async function AboutPage() {
  // ✅ Await `headers()` for Next.js 14+
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // ✅ Fetch "About" page data from CMS
    siteData = await fetchPageData(
      { host, ...headersObj },
      "8ca66d60-f818-4368-a45b-3d4fbc2b54bf" // Replace with your About page UUID
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ✅ Index mapping (based on your CMS data)
  const aboutSection = sections[5] || {};
  const helplineSection = sections[7] || {};
  const directorsSection = sections[6] || {};


  // ✅ Return same layout as your old static page
  return (
    <>
      <PageTitle />
      <AboutSection section={aboutSection} />
      <OurDirectors section={directorsSection} />
      <HelplineSection section={helplineSection} />
    </>
  );
}
