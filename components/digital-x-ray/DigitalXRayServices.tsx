"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: {
    title?: string;
    description?: string;
    image?: string;
  }[];
}

const cleanText = (text: string = "") =>
  text
    .replace(/&nbsp;/gi, " ")     // remove &nbsp;
    .replace(/<\/?p[^>]*>/g, "")  // remove <p> </p>
    .replace(/<[^>]*>/g, "")      // remove HTML tags
    .trim();

export default function DigitalXRayServices({ section }: { section?: Section }) {
  const [activeTab, setActiveTab] = useState("newtab-0");

  const hospitals = (section?.subsections || []).map((sub, index) => ({
    id: `newtab-${index}`,
    name: cleanText(sub.title || `Hospital ${index + 1}`),
    image: sub.image || "/images/default.jpg",
    price: cleanText(sub.description || "Price not available")
  }));

  return (
    <div className="container">
      <div className="row hs_page_mri_module">

        <div className="col-md-7 col-lg-7 col-sm-6 hs_page_mri_service">
          <h3>
            {cleanText(section?.title || "Digital X-Ray services information goes here...")}
          </h3>

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
              className={`hs_page_cost tab-pane fade ${
                activeTab === hospital.id ? "active in" : ""
              }`}
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
