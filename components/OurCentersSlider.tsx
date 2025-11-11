"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Center {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CentersData {
  title: string;
  subsections: Center[];
}

export default function OurCentersSlider({ data }: { data: CentersData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // ✅ Your static links (edit freely)
  const staticLinks = [
    "/r-g-kar-medical-college-hospital",
    "/calcutta-national-medical-college-hospital",
    "/college-of-medicine-sagoreduttahospital",
    "/howrah-district-hospital",
    "/midnapore-medical-college-and-hospital",
  ];

  // ✅ Merge CMS data + static links
  const centers = data.subsections.map((item, index) => ({
    ...item,
    link: staticLinks[index] || "#",
  }));

  // Duplicate list for infinite loop effect
  const extendedCenters = [...centers, ...centers, ...centers];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === centers.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(centers.length);
      }, 450);
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(centers.length);
      }, 450);
    }
  }, [currentSlide, centers.length]);

  const slideWidth = 350;
  const slideMargin = 30;
  const totalSlideWidth = slideWidth + slideMargin;
  const stageWidth = extendedCenters.length * totalSlideWidth;
  const translateX = -currentSlide * totalSlideWidth;

  return (
    <div className="container">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="who">
          <h3>{data.title}</h3>
        </div>

        <div className="our_doctor_team">
          <div id="our_doctor_team_slider" className="owl-carousel owl-theme owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: `translate3d(${translateX}px, 0px, 0px)`,
                  transition: isTransitioning ? "0.45s" : "0s",
                  width: `${stageWidth}px`,
                }}
              >
                {extendedCenters.map((center, index) => (
                  <div
                    key={`${center.id}-${index}`}
                    className={`owl-item ${index === currentSlide ? "active" : ""}`}
                    style={{ width: "350px", marginRight: "30px" }}
                  >
                    <div className="our_doctor_team_slider_item">
                      <Image
                        src={center.image}
                        alt={center.title}
                        width={300}
                        height={200}
                        className="img-fluid rounded shadow-md"
                        priority={index === currentSlide}
                      />
                      <div className="hs_team_member_detail">
                        <h3>{center.title}</h3>
                        <p>{center.description}</p>
                      </div>
                      <a href={center.link} className="btn btn-default">
                        <p>Read More</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="owl-dots">
              {centers.map((_, index) => (
                <button
                  key={index}
                  role="button"
                  className={`owl-dot ${
                    index === currentSlide % centers.length ? "active" : ""
                  }`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentSlide(centers.length + index);
                  }}
                >
                  <span></span>
                </button>
              ))}
            </div>
          </div>

          <div className="customNavigation text-center mt-3">
            <a className="btn_prev prev" onClick={prevSlide}>
              <i className="fa fa-chevron-left"></i>
            </a>
            <a className="btn_next next" onClick={nextSlide}>
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
