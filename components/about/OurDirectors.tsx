"use client";

import React from "react";
import Image from "next/image";

export default function OurDirectors() {
  const directors = [
    {
      id: 1,
      image: "/images/1673508317136.jpg",
      alt: "Director 1",
      name: ""
    },
    {
      id: 2,
      image: "/images/1673508615444.jpg",
      alt: "MR. BISWANATH ROY",
      name: ""
    },
    {
      id: 3,
      image: "/images/1673531849532.jpg",
      alt: "MR. SUKESH AGARWAL",
      name: ""
    }
  ];

  return (
    <div className="container home_director">
        <h2 className="our-drt">Our Directors</h2>
      <div className="row justify-content-center">
        <div className="col-lg-9" style={{float:"none",margin:"0 auto"}}>
          <div className="row">
            {directors.map((director) => (
              <div key={director.id} className="col-lg-4 col-md-4 sec_texxt bodd">
                <div className="wde">
                  <Image
                    src={director.image}
                    alt={director.alt}
                    width={200}
                    height={200}
                    className="img-fluid"
                  />
                </div>
                <h2>{director.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}