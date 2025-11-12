"use client";

import React from "react";

interface HelplineProps {
  section?: {
    shortDescription?: string;
  };
}

// ✅ Helper → safely clean & decode HTML entities (no "document")
const decodeHtmlEntities = (html?: string): string => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, ""); // remove HTML tags

  const entities: Record<string, string> = {
    "&nbsp;": " ",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };

  return text.replace(
    /&nbsp;|&amp;|&lt;|&gt;|&quot;|&#39;/g,
    (match) => entities[match] || match
  );
};

export default function HelplineSection({ section }: HelplineProps) {
  const cleanText =
    decodeHtmlEntities(section?.shortDescription) ||
    "Helpline No. +91 8016322388";

  return (
    <div className="helpline">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-8">
            <h3>{cleanText}</h3>
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
