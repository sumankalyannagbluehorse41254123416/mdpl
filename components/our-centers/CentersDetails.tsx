"use client";

import React from "react";
import Image from "next/image";

export default function CentersDetails() {
  const centers = [
    {
      id: 1,
      name: "R.G.Kar Medical College & Hospital",
      link: "/r-g-kar-medical-college-hospital",
      image: "/images/1650270530300.jpeg",
      address: "1, Kshudiram Bose Sarani, Kolkata-700004, Near – Five Point Crossing,Shyambazar",
      buttonLink: "/contact-us"
    },
    {
      id: 2,
      name: "Calcutta National Medical College & Hospital",
      link: "/calcutta-national-medical-college-hospital",
      image: "/images/1650270571328.jpg",
      address: "24, Gorachand Road, Beniapukur Kolkata-700014, Near- Park Circus",
      buttonLink: "/contact-us"
    },
    {
      id: 3,
      name: "College of Medicine & Sagore Dutta Hospital",
      link: "/college-of-medicine-sagoreduttahospital",
      image: "/images/1650270586677.jpeg",
      address: "578 BT Road, Kamarhati, Kolkata, West Bengal 700058",
      buttonLink: "/contact-us"
    },
    {
      id: 4,
      name: "Howrah District Hospital",
      link: "/howrah-district-hospital",
      image: "/images/1650270603803.jpeg",
      address: "10,Biplabi HarenGhoshSarani,Howrah.Near- Howrah MuniCipality",
      buttonLink: "/contact-us"
    },
    {
      id: 5,
      name: "Midnapore Medical College and Hospital",
      link: "/midnapore-medical-college-and-hospital",
      image: "/images/1650270626057.jpeg",
      address: "Hospital Road, Paschim Medinipur, Midnapore-721101",
      buttonLink: "/contact-us"
    }
  ];

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          {centers.map((center) => (
            <div key={center.id} className="col-lg-4 col-md-4 col-sm-6">
              <div className="service-scan">
                <h3><a href={center.link}>{center.name}</a></h3>
              </div>
              <Image 
                className="scan_img"
                src={center.image}
                alt={center.name}
                width={400}
                height={300}
              />
              <div className="clg-bg">
                <p>{center.address}</p>
                <a href={center.buttonLink}>Book Now</a>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}