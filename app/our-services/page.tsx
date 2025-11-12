import OurServicesContent from "@/components/our-services/OurServicesContent";
import OurServicesPageTitle from "@/components/our-services/OurServicesPageTitle";
import ServicesGrid from "@/components/our-services/ServicesGrid";
import HelplineSection from "@/components/our-services/HelplineSection";
import { fetchPageData } from "@/services/fetchData.service";
import { headers } from "next/headers";

// Helper: remove HTML tags
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

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

export default async function OurServices() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    // ✅ Using your same CMS page ID
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

  // ✅ Section index 7 — Helpline Section
  const helplineSection = sections[7] || {};
  const helplineData = {
    shortDescription: stripHtml(helplineSection.shortDescription || ""),
  };

  // ✅ Our Services Content comes from section index 8
  const ourServicesSection = sections[8] || {};
  const ourServicesData = {
    title: stripHtml(ourServicesSection.title || "Our Services"),
    shortDescription: stripHtml(ourServicesSection.shortDescription || ""),
    description: stripHtml(
      ourServicesSection.subsections?.[0]?.description || ""
    ),
  };

  // ✅ Section index 9 — Services Grid
  const servicesGridSection = sections[9] || {};
  const servicesGridData =
    servicesGridSection.subsections?.map((sub, index) => ({
      id: sub.id ?? index,
      title: stripHtml(sub.title || ""),
      description: stripHtml(sub.description || ""),
      image: sub.image || "/images/default-service.jpg",
      link: ["/c-t-scan", "/m-r-i-scan", "/digital-x-ray"][index] || "#",
      buttonLink: "/contact-us",
    })) || [];

  return (
    <div className="page-content">
      <OurServicesPageTitle />
      <OurServicesContent data={ourServicesData} />
      <ServicesGrid data={servicesGridData} />
      <HelplineSection data={helplineData} />
    </div>
  );
}
