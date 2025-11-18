"use client";

import React from "react";
import Image from "next/image";

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

const stripPTags = (text: string = "") =>
  text.replace(/<\/?p[^>]*>/g, "").trim();

export default function DigitalXRaySection({ section }: { section?: Section }) {
  return (
    <div className="container">
      <div className="row">

        {/* LEFT IMAGE */}
        <div className="col-md-4 col-lg-4 col-sm-6">
          <div className="scan-img">
            <Image
              src={section?.image || "/images/default.jpg"}
              alt={section?.title || "DIGITAL X-RAY"}
              width={400}
              height={400}
              className="img-fluid"
              priority
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="col-md-8 col-lg-8 col-sm-6 mb-4">
          <div className="m-r-i-text">
            
            {/* TITLE */}
            <h3 className="m-top">
              {stripPTags(section?.title || "DIGITAL X-RAY")}
            </h3>

            {/* SHORT DESCRIPTION */}
            <p>
              {stripPTags(
                section?.shortDescription ||
                  "Digital radiography description goes here..."
              )}
            </p>
          </div>

          <a href="/contact-us" className="btn btn-default">Book Now</a>
        </div>
      </div>
    </div>
  );
}
