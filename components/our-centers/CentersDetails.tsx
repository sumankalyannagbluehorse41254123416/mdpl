"use client";

import React from "react";
import Image from "next/image";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

interface CentersDetailsProps {
  section?: {
    subsections?: Subsection[];
  };
}

// ✅ Utility: Clean HTML tags and decode entities
function cleanText(html?: string): string {
  if (!html) return "";
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, "");
  // Decode common HTML entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  return text.trim();
}

export default function CentersDetails({ section }: CentersDetailsProps) {
  const subsections = section?.subsections || [];

  // ✅ Static links in the same order as subsections
  const staticLinks = [
    "/r-g-kar-medical-college-hospital",
    "/calcutta-national-medical-college-hospital",
    "/college-of-medicine-sagoreduttahospital",
    "/howrah-district-hospital",
    "/midnapore-medical-college-and-hospital",
  ];

  const buttonLink = "/contact-us";

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          {subsections.map((sub, index) => {
            const link = staticLinks[index] || "#";
            const cleanDescription = cleanText(sub.description);

            return (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                <div className="service-scan">
                  <h3>
                    <a href={link}>{sub.title}</a>
                  </h3>
                </div>

                {sub.image && (
                  <Image
                    className="scan_img"
                    src={sub.image}
                    alt={sub.title || "Center Image"}
                    width={400}
                    height={300}
                  />
                )}

                <div className="clg-bg">
                  <p>{cleanDescription}</p>
                  <a href={buttonLink}>Book Now</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
