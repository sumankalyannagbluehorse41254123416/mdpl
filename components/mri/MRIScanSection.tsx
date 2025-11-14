"use client";

import React from "react";
import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
}

export default function MRIScanSection({ section }: { section?: Section }) {
  return (
    <div className="container">
      <div className="row">
        {/* Left Column - Image */}
        <div className="col-md-4 col-lg-4 col-sm-6">
          <div className="scan-img">
            {section?.image ? (
              <Image
                src={section.image}
                alt={section?.title || "M.R.I SCAN"}
                width={400}
                height={400}
                className="img-fluid"
                priority
              />
            ) : (
              <Image
                src="/images/1647938076249.jpg"
                alt="Default MRI Image"
                width={400}
                height={400}
                className="img-fluid"
                priority
              />
            )}
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="col-md-8 col-lg-8 col-sm-6 mb-4">
          <div className="m-r-i-text">
            <h3 className="m-top">{section?.title || "M.R.I SCAN"}</h3>
            {section?.shortDescription ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: section.shortDescription,
                }}
              />
            ) : (
              <p>
                “Midnapore Diagnostics Private Limited is a complete center for
                our entire diagnostic needs under one roof. Staffs are very
                cooperative and most IMPORTANT the doctor is very soft spoken and
                gentle. The technology is up to date and quality of ultrasound is
                excellent. I am a regular patient of this diagnostic center and
                very happy with service and results.”
              </p>
            )}
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
