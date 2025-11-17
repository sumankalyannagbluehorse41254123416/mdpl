"use client";

import React from "react";

interface Section {
  title?: string;
  shortDescription?: string;
}

// Remove HTML tags like <p>, <strong>, <br>, etc.
const stripHtml = (html: string = "") => {
  return html.replace(/<[^>]+>/g, "").trim();
};

export default function CalcuttaNationalContent({ section }: { section?: Section }) {
  const cleanText = stripHtml(section?.shortDescription || "");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12 mb-4">
          <div className="m-r-i-text">
            <h3 className="m-top text-center">
              {section?.title || "Calcutta National Medical College & Hospital"}
            </h3>

            <p>
              {cleanText || "Content not available at the moment."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
