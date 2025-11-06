"use client";

import React from "react";
import Image from "next/image";

export default function DigitalXRaySection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-6">
          <div className="scan-img">
            <Image
              src="/images/1647938644091.jpg"
              alt="DIGITAL X-RAY"
              width={400}
              height={400}
              className="img-fluid"
              priority
            />
          </div>
        </div>
        <div className="col-md-8 col-lg-8 col-sm-6 mb-4">
          <div className="m-r-i-text">
            <h3 className="m-top">DIGITAL X-RAY</h3>
            <p>Digital radiography is a form of X-ray imaging, where digital X-ray sensors are used instead of traditional photographic film. Advantages include time efficiency through bypassing chemical processing and the ability to digitally transfer and enhance images.Also less radiation can be used to produce an image of similar contrast to conventional radiography.Instead of X-ray film, digital radiography uses a digital image capture device. This gives advantages of immediate image preview and availability; elimination of costly film processing steps; a wider dynamic range, which makes it more forgiving for over- and under-exposure; as well as the ability to apply special image processing techniques that enhance overall display of the image.Digital dental radiography comes in two forms: direct, that connect directly to the computer via USB and provides immediate images, and indirect (photostimulable phosphor plates, or PSP) w... hich uses plates that are radiated and then digitally scanned</p>
          </div>
          <a href="/contact-us" className="btn btn-default">Book Now</a>
        </div>
      </div>
    </div>
  );
}