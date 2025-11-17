import CalcuttaNationalContent from "@/components/calcutta-national-medical-college-hospital/CalcuttaNationalContent";
import CalcuttaNationalImages from "@/components/calcutta-national-medical-college-hospital/CalcuttaNationalImages";
import CalcuttaNationalPageTitle from "@/components/calcutta-national-medical-college-hospital/CalcuttaNationalPageTitle";
import CalcuttaNationalTestimonials from "@/components/calcutta-national-medical-college-hospital/CalcuttaNationalTestimonials";

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
  [key: string]: unknown; // ✔ replaces any
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function CalcuttaNationalMedicalCollegeHospitalPage() {
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

  const sections =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];

  const contentSection = sections[25] ?? undefined;
  const imagesSection = sections[26] ?? undefined;
  const testimonialsSection = sections[27] ?? undefined;

  return (
    <>
      <CalcuttaNationalPageTitle />
      <CalcuttaNationalContent section={contentSection} />
      <CalcuttaNationalImages section={imagesSection} />
      <CalcuttaNationalTestimonials section={testimonialsSection} />
    </>
  );
}
