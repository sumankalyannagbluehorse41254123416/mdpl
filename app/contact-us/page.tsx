import ContactUsPageTitle from "@/components/contact-us/ContactUsPageTitle";
import ContactForm from "@/components/contact-us/ContactForm";

import { fetchPageData } from "@/services/fetchData.service";
import { fetchFormFields } from "@/services/fetchFormFields";
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
export default async function ContactUs() {
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

  // Extract CMS Sections
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  const contactSection = sections[35] ?? undefined;
  const serviceSection0 = sections[36] ?? undefined;
  const serviceSection1 = sections[37] ?? undefined;
  const serviceSection2 = sections[38] ?? undefined;

  let form = null;
  let fields = null;

  try {
    const formFields = await fetchFormFields(
      { host },
      process.env.FROM_UID || process.env.NEXT_PUBLIC_FROM_UID
    );
    form = formFields.form;
    fields = formFields.fields;
  } catch (error) {
    console.log("Error in fetching form fields:", error);
  }
  return (
    <>
      <ContactUsPageTitle />

      <ContactForm
        section={contactSection}
        serviceSections={[serviceSection0, serviceSection1, serviceSection2]}
        form={form}
        fields={fields}
      />
    </>
  );
}
