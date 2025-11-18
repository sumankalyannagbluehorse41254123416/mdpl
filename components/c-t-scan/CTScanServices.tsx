"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SubSection {
  id?: number | string;
  title?: string;
  image?: string;
  description?: string;
}

interface Section {
  title?: string;
  subsections?: SubSection[];
}

function cleanText(text: string = "") {
  return text
    .replace(/<[^>]*>/g, "")     // remove any <p> <br> etc
    .replace(/&nbsp;/g, " ")     // remove &nbsp;
    .replace(/\s+/g, " ")        // remove extra white space
    .replace(/nn+/gi, "")        // remove "nn"
    .trim();                     // final clean
}

export default function CTScanServices({ section = {} }: { section?: Section }) {
  const tabs = section.subsections || [];

  const [activeTab, setActiveTab] = useState(
    tabs.length > 0 ? `newtab-0` : ""
  );

  return (
    <div className="container">
      <div className="row hs_page_mri_module">

        <div className="col-md-7 col-lg-7 col-sm-6 hs_page_mri_service">
          <h3>{section.title}</h3>

          <div className="hs_page_mri-clg nav nav-tabs">
            <ul className="nav nav-tabs hs_page_cost">
              {tabs.map((sub, index) => (
                <li
                  key={index}
                  className={activeTab === `newtab-${index}` ? "active" : ""}
                >
                  <a
                    href={`#newtab-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(`newtab-${index}`);
                    }}
                  >
                    {sub.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-5 col-lg-5 col-sm-6 tab-content">
          {tabs.map((sub, index) => (
            <div
              key={index}
              className={`hs_page_cost tab-pane fade ${
                activeTab === `newtab-${index}` ? "active in" : ""
              }`}
              style={{
                display: activeTab === `newtab-${index}` ? "block" : "none",
              }}
            >
              <Image
                src={sub.image || "/images/default.jpeg"}
                alt={sub.title || ""}
                width={400}
                height={300}
                className="img-fluid"
              />

              <div className="hs_page_cost_text">
                <p>{cleanText(sub.description || "")}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
