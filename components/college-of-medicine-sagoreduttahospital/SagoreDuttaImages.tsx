"use client";

import React from "react";
import Image from "next/image";

export default function SagoreDuttaImages() {
  const images = [
    "/images/1650022494187.jpeg",
    "/images/1650022509808.jpg",
    "/images/1650022525702.jpg",
    "/images/1650022558514.jpg",
    "/images/1650022576305.jpg",
    "/images/1650022595399.jpg",
    "/images/1650022622386.jpg"
  ];

  return (
    <div className="container">
      <div className="row pt-4 top-img">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 col-lg-4 col-sm-6">
            <div className="scan-img">
              <Image
                src={image}
                alt="Image"
                width={400}
                height={300}
                className="img-fluid"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}