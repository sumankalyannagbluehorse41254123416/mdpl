"use client";

import React from "react";
import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "C T SCAN",
      link: "/c-t-scan",
      image: "/images/1648536194241.jpg",
      description:
        "X-ray Computed Tomography s a technology that uses computer-processed X-rays to produce tomographic images(virtual 'slices') of specific areas of a scanned object. Digital geometry processing is used to generate a three-dimensional.",
      buttonLink: "/contact-us",
    },
    {
      id: 2,
      title: "M R I SCAN",
      link: "/m-r-i-scan",
      image: "/images/1648536288049.png",
      description:
        "Magnetic Resonance Imaging (MRI),Nuclear Magnetic Resonance Imaging (NMRI),or Magnetic Resonance Tomography (MRT) is a medical imaging technique used in radiology to investigate the anatomy and physiology of the body in both health.",
      buttonLink: "/contact-us",
    },
    {
      id: 3,
      title: "Digital X RAY",
      link: "/digital-x-ray",
      image: "/images/1648536330302.png",
      description:
        "Digital Radiography is a form of X-ray imaging, where digital X-ray sensors are used instead of traditional photographic film.Advantages include time efficiency through bypassing chemical processing and the ability to digitally transfer.",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-4 col-sm-4">
              <div className="service-scan">
                <h3>
                  <a href={service.link}>{service.title}</a>
                </h3>
              </div>
              <Image
                className="scan_img"
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
              />
              <div className="scan-bg">
                <p>{service.description}</p>
                <a href={service.buttonLink}>Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hs_margin_40"></div>
    </div>
  );
}
