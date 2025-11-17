"use client";

import React from "react";
import Image from "next/image";

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface Props {
  section?: Section;
}

export default function MidnaporeMedicalImages({ section }: Props) {
  // Extract images from subsection list
  const images: string[] =
    section?.subsections?.map((item) => item.image || "")?.filter(Boolean) || [];

  return (
    <div className="container">
      <div className="row pt-4 top-img">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="col-md-4 col-lg-4 col-sm-6">
              <div className="scan-img">
                <Image
                  src={img}
                  alt={`image-${index}`}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No images available.</p>
        )}
      </div>
    </div>
  );
}
