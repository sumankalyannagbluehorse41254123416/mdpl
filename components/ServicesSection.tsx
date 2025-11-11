"use client";

import React from "react";

interface Subsection {
  id?: number | string;
  title?: string;
  description?: string;
}

interface ServicesSectionProps {
  data?: {
    subsections?: Subsection[];
  };
}

// ✅ Helper: clean HTML entities & tags
const decodeHTML = (text: string = ""): string => {
  if (!text) return "";
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<p>\s*<\/p>/g, "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
};

export default function ServicesSection({ data }: ServicesSectionProps) {
  const subsections = data?.subsections || [];

  // ✅ Map each CMS subsection to a static layout
  const services = subsections.map((sub, index) => ({
    id: sub.id || index + 1,
    title: decodeHTML(sub.title || ""),
    description: decodeHTML(sub.description || ""),
    link:
      index === 0
        ? "/m-r-i-scan"
        : index === 1
        ? "/c-t-scan"
        : "/digital-x-ray", // static links by index
    icon:
      index === 0
        ? "fa fa-heartbeat"
        : index === 1
        ? "fa fa-plus-square"
        : "fa fa-wheelchair", // static icons by index
    buttonLink: "/contact-us",
  }));

  return (
    <div className="container">
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-lg-4 col-md-4 col-sm-4">
            <div className="hs_service">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <h4>
                    <a href={service.link}>{service.title}</a>
                  </h4>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-4"
                  style={{ textAlign: "center" }}
                >
                  <i className={service.icon}></i>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>{service.description}</p>
                  <a href={service.buttonLink} className="btn btn-default">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
