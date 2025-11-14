"use client";

import React from "react";
import Image from "next/image";

interface Section {
  image?: string;
  title?: string;
  shortDescription?: string;
}

function cleanText(text: string = "") {
  return text
    .replace(/&nbsp;/g, "")
    .replace(/nn+/g, "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

export default function CTScanSection({ section = {} }: { section?: Section }) {
  return (
    <div className="container">
      <div className="row">

        {/* Left Column - Dynamic Image */}
        <div className="col-md-4 col-lg-4 col-sm-6">
          <div className="scan-img">
            <Image
              src={section.image || "/images/default.jpeg"}
              alt={section.title || "CT Scan"}
              width={400}
              height={400}
              className="img-fluid"
            />
          </div>
        </div>

        {/* Right Column - Dynamic Text */}
        <div className="col-md-8 col-lg-8 col-sm-6 mb-4">
          <div className="m-r-i-text">
            <h3 className="m-top">{section.title}</h3>

            <p>{cleanText(section.shortDescription || "")}</p>
          </div>

          <a
            href="/contact-us"
            className="btn btn-default"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>

      </div>
    </div>
  );
}
