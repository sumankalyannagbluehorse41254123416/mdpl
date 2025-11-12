"use client";

import React from "react";
import Image from "next/image";

interface Section {
  id?: number;
  title?: string;
  image?: string;
  subsections?: Section[];
}

interface OurCentersGridProps {
  section: Section;
}

export default function OurCentersGrid({ section }: OurCentersGridProps) {
  const centers = section?.subsections || [];

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          {centers.length > 0 ? (
            centers.map((center, index) => (
              <div
                key={index}
                className="col-lg-2 col-md-3 col-sm-6 col-xs-12"
              >
                <div className="clg-hptl">
                  <Image
                    className="clg_img"
                    src={center.image || "/images/default.jpg"}
                    alt={center.title || "Center"}
                    width={200}
                    height={150}
                  />
                  <p>{center.title}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No centers available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
