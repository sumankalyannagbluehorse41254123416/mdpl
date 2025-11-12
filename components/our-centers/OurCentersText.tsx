"use client";

import React from "react";

interface CentersTextProps {
  section?: {
    title?: string;
    shortDescription?: string;
  };
}

// Helper → remove HTML tags safely
const stripHtml = (html?: string): string =>
  html ? html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ") : "";

export default function OurCentersText({ section }: CentersTextProps) {
  const title = stripHtml(section?.title) || "OUR CENTERS";
  const description =
    stripHtml(section?.shortDescription) ||
    "Our Mission is to provide high quality, cost effective health care to our clients in our centers because in all our centers we take your health to heart. Our Vision is to be recognized as the best Diagnostics Center in our community. Every Radiology services in our centers are undertaken with the supervision of our team of highly qualified and experienced Radiologists, to ensure that the results are clinically relevant and enable better diagnosis.";

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="center-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
