"use client";

import React from "react";
import Image from "next/image";

export default function CTScanSection() {
  return (
    <div className="container">
      <div className="row">
        {/* Left Column - Image */}
        <div className="col-md-4 col-lg-4 col-sm-6">
          <div className="scan-img">
            <Image
              src="/images/1647938474919.jpg"
              alt="C.T SCAN"
              width={400}
              height={400}
              className="img-fluid"
              priority
            />
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="col-md-8 col-lg-8 col-sm-6 mb-4">
          <div className="m-r-i-text">
            <h3 className="m-top">C.T SCAN</h3>
            <p>
              X-ray computed tomography (X-ray CT) is a technology that uses computer-processed X-rays to produce tomographic images (virtual ‘slices’) of specific areas of a scanned object, allowing the user to see inside the object without cutting. Digital geometry processing is used to generate a three-dimensional image of the inside of the object from a large series of two-dimensional radiographic images taken around a single axis of rotation.Medical imaging is the most common application of X-ray CT. Its cross-sectional images are used for diagnostic and therapeutic purposes in various medical disciplines. The rest of this article discusses medical-imaging X-ray CT; industrial applications of X-ray CT are discussed at industrial computed tomography scanning.As X-ray CT is the most common form of CT in medicine and various other contexts, the term computed tomography alone (or CT) is often used to refer to X-ray CT, although o... ther types exist (such as positron emission tomography [PET] and single-photon emissioncomputed tomography [SPECT]). Older and less preferred terms that also refer to X-ray CT are computed axial tomography (CAT scan) and computer-aided/assisted tomography. X-ray CT is a form of radiography, although the word “radiography” used alone usually refers, by wide convention, to non-tomographic radiography
            </p>
          </div>

          <a
            href=""
            className="btn btn-default"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}