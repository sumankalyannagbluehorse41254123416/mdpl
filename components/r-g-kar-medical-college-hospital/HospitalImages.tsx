"use client";

import React from "react";
import Image from "next/image";

export default function HospitalImages() {
  const images = [
    "/images/1650019957075.jpeg",
    "/images/1650019982532.jpeg",
    "/images/1650020009030.jpeg",
    "/images/1650020028761.jpeg",
    "/images/1650020051565.jpeg",
    "/images/1650020084423.jpeg",
    "/images/1650020118755.jpeg",
    "/images/1650020135397.jpeg",
    "/images/1650020153636.jpeg",
    "/images/1650020171726.jpeg",
    "/images/1650020187033.jpeg",
    "/images/1650020203320.jpeg",
    "/images/1650020222526.jpeg",
    "/images/1650020240656.jpeg",
    "/images/1650020280021.jpeg",
    "/images/1650020302006.jpeg",
    "/images/1650020319640.jpeg",
    "/images/1650020337906.jpeg",
    "/images/1650020356217.jpeg",
    "/images/1650020375535.jpeg",
    "/images/1650020393598.jpeg",
    "/images/1650020411024.jpeg",
    "/images/1650020427890.jpeg"
  ];

  return (
    <div className="container">
      <div className="row pt-4 top-img">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 col-lg-4 col-sm-6">
            <div className="scan-img">
              <Image
                src={image}
                alt="img"
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