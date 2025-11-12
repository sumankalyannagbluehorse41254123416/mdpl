"use client";

import React from "react";
import Link from "next/link";

// ✅ Type definition for props
interface HelplineSectionProps {
  section?: {
    shortDescription?: string;
  };
}

export default function HelplineSection({ section }: HelplineSectionProps) {
  const helplineText = section?.shortDescription || "Helpline No. +8016322388";

  return (
    <div className="helpline">
      <div className="">
        <div className="container">
          <div className="col-md-6 col-sm-6 col-lg-8">
            {/* ✅ Dynamic text from CMS */}
            <h3 dangerouslySetInnerHTML={{ __html: helplineText }} />
          </div>

          <div className="col-md-6 col-sm-6 col-lg-4">
            <div className="book-now">
              {/* ✅ Static link remains same */}
              <Link href="/contact-us">BOOKING</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
