"use client";

import React from "react";
import Image from "next/image";

interface Subsection {
  image?: string;
}

interface Section {
  subsections?: Subsection[];
}

export default function HospitalImages({ section }: { section?: Section }) {
  const images = section?.subsections || [];

  return (
    <div className="container">
      <div className="row pt-4 top-img">
        {images.length > 0 ? (
          images.map((item, index) => (
            <div key={index} className="col-md-4 col-lg-4 col-sm-6">
              <div className="scan-img">
                <Image
                  src={item.image || "/images/default.jpg"}
                  alt={`Hospital Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hospital images available.</p>
        )}
      </div>
    </div>
  );
}
