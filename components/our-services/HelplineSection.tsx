"use client";

import React from "react";

interface HelplineSectionProps {
  data: {
    shortDescription: string;
  };
}

export default function HelplineSection({ data }: HelplineSectionProps) {
  return (
    <div className="helpline">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-8">
            <h3>{data.shortDescription}</h3>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-4">
            <div className="book-now">
              <a href="/contact-us">BOOKING</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
