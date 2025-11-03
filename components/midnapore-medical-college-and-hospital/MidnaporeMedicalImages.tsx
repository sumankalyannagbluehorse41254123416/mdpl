"use client";

import React from "react";
import Image from "next/image";

export default function MidnaporeMedicalImages() {
  const images = [
    "/images/1650023056814.jpeg",
    "/images/1650023073808.jpeg",
    "/images/1650023090655.jpeg",
    "/images/1650023108763.jpeg"
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