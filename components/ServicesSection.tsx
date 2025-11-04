"use client";

import React from "react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "M.R.I SCAN",
      link: "https://www.mdpl.co/m-r-i-scan",
      icon: "fa fa-heartbeat",
      description: "Magnetic Resonance Imaging (MRI),Nuclear Magnetic Resonance Imaging (NMRI),or Magnetic Resonance Tomography (MRT) is a medical imaging technique used in radiology to investigate the anatomy and physiology of the body in both health.",
      buttonLink: "https://www.mdpl.co/contact-us"
    },
    {
      id: 2,
      title: "C.T SCAN",
      link: "https://www.mdpl.co/c-t-scan",
      icon: "fa fa-plus-square",
      description: "X-ray Computed Tomography s a technology that uses computer-processed X-rays to produce tomographic images(virtual 'slices') of specific areas of a scanned object. Digital geometry processing is used to generate a three-dimensional.",
      buttonLink: "https://www.mdpl.co/contact-us"
    },
    {
      id: 3,
      title: "Digital X-RAY",
      link: "https://www.mdpl.co/digital-x-ray",
      icon: "fa fa-wheelchair",
      description: "Digital Radiography is a form of X-ray imaging, where digital X-ray sensors are used instead of traditional photographic film.Advantages include time efficiency through bypassing chemical processing and the ability to digitally transfer.",
      buttonLink: "https://www.mdpl.co/contact-us"
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-lg-4 col-md-4 col-sm-4">
            <div className="hs_service">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <h4><a href={service.link}>{service.title}</a></h4>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4" style={{textAlign: 'center'}}> 
                  <i className={service.icon}></i> 
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>{service.description}</p>
                  <a href={service.buttonLink} className="btn btn-default">Book Now</a> 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}