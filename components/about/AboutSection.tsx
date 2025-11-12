"use client";

import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  section?: {
    title?: string;
    shortDescription?: string;
    image?: string;
  };
}

// ✅ Utility: Clean HTML & decode entities safely
function cleanText(html?: string): string {
  if (!html) return "";
  let text = html.replace(/<[^>]*>/g, "");
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  return text.trim();
}

export default function AboutSection({ section }: AboutSectionProps) {
  const title = section?.title || "About Us";
  const description = cleanText(section?.shortDescription);
  const imageSrc = section?.image || "/images/default-about.jpg";

  return (
    <div className="container">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <h4 className="hs_heading">About</h4>

        <div className="row hs_how_we_are">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <Image
                src={imageSrc}
                alt={title}
                width={455}
                height={370}
                className="img-fluid rounded shadow-sm"
                priority
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="hs_how_we_are_text">
                <h4>
                  <strong>{title}</strong>
                </h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
