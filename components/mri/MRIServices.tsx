"use client";

import { useState } from "react";
import Image from "next/image";

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

interface MRIServicesProps {
  section?: Section;
}

const MRIServices: React.FC<MRIServicesProps> = ({ section }) => {
  const [activeTab, setActiveTab] = useState("newtab-0");

  const hospitals = section?.subsections || [];

  return (
    <div className="container">
      <div className="row hs_page_mri_module">
        {/* LEFT SIDE — Titles and Tabs */}
        <div className="col-md-7 col-lg-7 col-sm-6 hs_page_mri_service">
          <h3>{section?.title}</h3>
          <div className="hs_page_mri-clg">
            <ul className="nav nav-tabs hs_page_cost">
              {hospitals.map((hospital, index) => {
                const tabId = `newtab-${index}`;
                return (
                  <li
                    key={tabId}
                    className={activeTab === tabId ? "active" : ""}
                  >
                    <a
                      href={`#${tabId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(tabId);
                      }}
                    >
                      {hospital.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE — Images and Prices */}
        <div className="col-md-5 col-lg-5 col-sm-6">
          {hospitals.map((hospital, index) => {
            const tabId = `newtab-${index}`;
            return (
              <div
                key={tabId}
                className={`hs_page_cost tab-pane ${
                  activeTab === tabId ? "active in" : "fade"
                }`}
                style={{
                  display: activeTab === tabId ? "block" : "none",
                }}
              >
                {hospital.image && (
                  <div className="hs_page_cost_img">
                    <Image
                      src={hospital.image}
                      alt={hospital.title || "MRI hospital"}
                      width={500}
                      height={350}
                      className="img-fluid rounded shadow-sm"
                      priority={activeTab === tabId}
                    />
                  </div>
                )}
                <div className="hs_page_cost_text">
                  {/* ✅ Fix: Render description HTML safely */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: hospital.description || "",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MRIServices;
