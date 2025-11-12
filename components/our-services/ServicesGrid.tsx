"use client";

import React from "react";
import Image from "next/image";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonLink: string;
}

interface ServicesGridProps {
  data: ServiceItem[];
}

export default function ServicesGrid({ data }: ServicesGridProps) {
  const services = data || [];

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
