"use client";

import React from "react";
import Image from "next/image";

export default function CalcuttaNationalImages() {
  const images = [
    "/images/1650021487211.jpg",
    "/images/1650021504190.jpg",
    "/images/1650022097397.jpg",
    "/images/1650026933047.jpg",
    "/images/1650026951466.jpg",
    "/images/1650026972839.jpg",
    "/images/1650027632885.jpg",
    "/images/1650027939642.jpg",
    "/images/1650027967599.jpg"
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