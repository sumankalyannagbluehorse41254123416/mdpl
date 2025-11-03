"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function DigitalXRayServices() {
  const [activeTab, setActiveTab] = useState("newtab-4");

  const hospitals = [
    {
      id: "newtab-0",
      name: "1. R.G.KAR MEDICAL COLLEGE & HOSPITAL",
      image: "/images/1655892456476.jpeg",
      price: "Rs. 100/-(CHEST)"
    },
    {
      id: "newtab-1",
      name: "2. CALCUTTA NATIONAL MEDICAL COLLEGE &HOSPITAL",
      image: "/images/1655892620200.jpg",
      price: "Rs. 100/-(CHEST)"
    },
    {
      id: "newtab-2",
      name: "3. COLLEGE OF MEDICINE & SAGOREDUTTA HOSPITAL",
      image: "/images/1655892698488.jpg",
      price: "Rs. 100/-(CHEST)"
    },
    {
      id: "newtab-3",
      name: "4. HOWRAH DISTRICT HOSPITAL",
      image: "/images/1655892751191.jpeg",
      price: "Rs. 100/-(CHEST)"
    },
    {
      id: "newtab-4",
      name: "5. MIDNAPORE MEDICAL COLLEGE AND HOSPITAL",
      image: "/images/1655892809180.jpeg",
      price: "Rs. 100/-(CHEST)"
    }
  ];

  return (
    <div className="container">
      <div className="row hs_page_mri_module">
        <div className="col-md-7 col-lg-7 col-sm-6 hs_page_mri_service">
          <h3>We have installed latest state-of-art Digital X-Ray (DR) of AFGA DX-600  at following Medical  colleges in joint venture project under PPP Model with department of Health & Family Welfare, Government of West Bengal</h3>
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
                    aria-expanded={activeTab === hospital.id}
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