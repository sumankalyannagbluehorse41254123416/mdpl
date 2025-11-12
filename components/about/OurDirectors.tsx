"use client";

import React from "react";
import Image from "next/image";

// ✅ Props type definition
interface Section {
  title?: string;
  subsections?: {
    id?: number;
    image?: string;
  }[];
}

interface OurDirectorsProps {
  section?: Section;
}

export default function OurDirectors({ section }: OurDirectorsProps) {
  const title = section?.title || "Our Directors";
  const directors = section?.subsections || [];

  return (
    <div className="container home_director">
      {/* ✅ Dynamic title */}
      <h2 className="our-drt">{title}</h2>

      <div className="row justify-content-center">
        <div className="col-lg-9" style={{ float: "none", margin: "0 auto" }}>
          <div className="row">
            {directors.map((director, index) => (
              <div
                key={director.id || index}
                className="col-lg-4 col-md-4 sec_texxt bodd"
              >
                <div className="wde">
                  {/* ✅ Dynamic image from subsection.image */}
                  {director.image ? (
                    <Image
                      src={director.image}
                      alt={director.image.split("/").pop() || "Director"}
                      width={200}
                      height={200}
                      className="img-fluid"
                    />
                  ) : (
                    <div
                      style={{
                        width: 200,
                        height: 200,
                        background: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      No Image
                    </div>
                  )}
                </div>

                {/* ✅ Optional: director name if later added to CMS */}
                <h2>{/* {director.title || ""} */}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
