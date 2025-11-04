"use client";

import React from "react";
import Image from "next/image";

export default function OurCentersGrid() {
  const centers = [
    {
      id: 1,
      name: "R.G.Kar Medical College & Hospital",
      image: "/images/1648541289208.jpg"
    },
    {
      id: 2,
      name: "Calcutta National Medical College & Hospital",
      image: "/images/1648541351615.jpg"
    },
    {
      id: 3,
      name: "College of Medicine & Sagore Dutta Hospital",
      image: "/images/1648541389890.jpg"
    },
    {
      id: 4,
      name: "Howrah District Hospital",
      image: "/images/1650271392051.jpeg"
    },
    {
      id: 5,
      name: "Midnapore Medical College and Hospital",
      image: "/images/1648541459242.jpg"
    },
    {
      id: 6,
      name: "SSKM Hospital",
      image: "/images/1648541487413.jpg"
    }
  ];

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          {centers.map((center) => (
            <div key={center.id} className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
              <div className="clg-hptl">
                <Image 
                  className="clg_img"
                  src={center.image}
                  alt={center.name}
                  width={200}
                  height={150}
                />
                <p>{center.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}