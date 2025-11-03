"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CTScanServices() {
  const [activeTab, setActiveTab] = useState("newtab-0");

  const hospitals = [
    {
      id: "newtab-0",
      name: "1. R.G.Kar Medical College & Hospital",
      image: "/images/1655888108485.jpg",
      price: "Rs. 500/-(BRAIN)"
    },
    {
      id: "newtab-1",
      name: "2. College of Medicine & Sagore Dutta Hospital",
      image: "/images/1655888178822.jpg",
      price: "Rs. 250/-(BRAIN)"
    }
  ];

  return (
    <div className="container">
      <div className="row hs_page_mri_module">
        <div className="col-md-7 col-lg-7 col-sm-6 hs_page_mri_service">
          <h3>We are successfully running CT Scan Services under PPP module with govt. of West Bengal at a very responsible cost of at:-</h3>
          <div className="hs_page_mri-clg nav nav-tabs">
            <ul className="nav nav-tabs hs_page_cost">
              {hospitals.map((hospital) => (
                <li 
                  key={hospital.id} 
                  className={activeTab === hospital.id ? "active" : ""}
                >
                  <a 
                    href={`#${hospital.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(hospital.id);
                    }}
                  >
                    {hospital.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="col-md-5 col-lg-5 col-sm-6 tab-content">
          {hospitals.map((hospital) => (
            <div 
              key={hospital.id}
              className={`hs_page_cost tab-pane fade ${activeTab === hospital.id ? "active in" : ""}`}
              style={{ display: activeTab === hospital.id ? "block" : "none" }}
            >
              <Image
                src={hospital.image}
                alt={hospital.name}
                width={400}
                height={300}
                className="img-fluid"
              />
              <div className="hs_page_cost_text">
                <p>{hospital.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}