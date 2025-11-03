"use client";

import PageTitle from "@/components/c-t-scan/PageTitle";
import CTScanContent from "@/components/c-t-scan/CTScanContent";
import CTScanServices from "@/components/c-t-scan/CTScanServices";
import CTScanTestimonials from "@/components/c-t-scan/CTScanTestimonials";

export default function CTScanPage() {
  return (
    <>
      <PageTitle />
      <CTScanContent />
      <CTScanServices />
      <CTScanTestimonials />
    </>
  );
}