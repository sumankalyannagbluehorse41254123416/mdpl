import WhoWeAreSection from "@/components/WhoWeAreSection";
import OurCentersSlider from "@/components/OurCentersSlider";
import ClientTestimonials from "@/components/ClientTestimonials";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
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

export default async function Home() {
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
    console.error("Fetch error:", error);
  }
  console.log(siteData);
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ✅ HeroSlider data (first section)
  const heroSection = sections[0] || {};
  const heroData = {
    title: stripHtml(heroSection.title || ""),
    shortDescription: stripHtml(heroSection.shortDescription || ""),
    imageUrl:
      heroSection.image ||
      heroSection.bannerImage ||
      "/images/default-banner.jpg",
    subsections: heroSection.subsections || [],
  };

  // ✅ ServicesSection data (second section)
  const servicesSection = sections[1] || {};
  const servicesData = {
    title: stripHtml(servicesSection.title || ""),
    shortDescription: stripHtml(servicesSection.shortDescription || ""),
    subsections:
      servicesSection.subsections?.map((sub) => ({
        id: sub.id,
        title: stripHtml(sub.title || ""),
        description: stripHtml(sub.description || ""),
        image: sub.image || "",
      })) || [],
  };

  // ✅ WhoWeAreSection data (third section)
const whoWeAreSection = sections[2] || {};
const whoWeAreData = {
  title: stripHtml(whoWeAreSection.title || ""),
  shortDescription: whoWeAreSection.shortDescription || "",
  image: whoWeAreSection.image || "/images/1649074807374.jpg",
};

// ✅ OurCentersSlider data (fourth section)
const ourCentersSection = sections[3] || {};
const ourCentersData = {
  title: stripHtml(ourCentersSection.title || ""),
  subsections:
    ourCentersSection.subsections?.map((sub, index) => ({
      id: sub.id ?? index, // default numeric id
      title: stripHtml(sub.title || ""),
      description: stripHtml(sub.description || ""),
      image: sub.image || "",
    })) || [],
};


  return (
    <div className="page-content">
      <HeroSlider data={heroData} />
      <ServicesSection data={servicesData} />
      <WhoWeAreSection data={whoWeAreData} />
      <OurCentersSlider data={ourCentersData} />
      <ClientTestimonials />
    </div>
  );
}
