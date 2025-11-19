"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Subsection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
}

interface Section {
  title?: string;
  shortDescription?: string;
  subsections?: Subsection[];
}

// ⭐ CLEANER FUNCTION — removes HTML + &nbsp; + nn
function cleanText(text: string): string {
  if (!text) return "";

  return text
    .replace(/&nbsp;/g, "")       // remove &nbsp;
    .replace(/nn+/g, "")          // remove "nn"
    .replace(/n+/g, "")           // remove extra n
    .replace(/<[^>]*>/g, "")      // remove HTML tags
    .replace(/\s+/g, " ")         // remove extra spaces
    .trim();
}

export default function DigitalXRayTestimonials({ section = {} }: { section?: Section }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // ⭐ Convert CMS subsections → testimonials array
  const testimonials =
    section.subsections?.map((sub) => ({
      id: sub.id,
      name: cleanText(sub.title || ""),
      image: sub.image || "/images/default.jpeg",
      comment: cleanText(sub.description || ""), // ⭐ CLEANED TEXT
    })) || [];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) setSlidesToShow(1);
      else setSlidesToShow(2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = testimonials.length - slidesToShow;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slideWidth = slidesToShow === 1 ? 100 : 50;
  const translateValue = currentSlide * slideWidth;

  return (
    <div className="mri_section ctScan_section">
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12">

          {/* ⭐ Dynamic Heading (CLEANED) */}
          <h4 className="hs_heading hspt">{cleanText(section.title || "")}</h4>
          <h6 className="hs_heading_text">
            {cleanText(section.shortDescription || "")}
          </h6>

          <div className="patients_testimonials">
            <div
              id="patients_testimonials_slider"
              className="owl-carousel owl-theme owl-loaded owl-drag"
            >
              <div className="owl-stage-outer" style={{ overflow: "hidden" }}>
                <div
                  className="owl-stage"
                  style={{
                    transform: `translate3d(-${translateValue}%, 0px, 0px)`,
                    transition: "all 0.5s ease",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`owl-item ${
                        index >= currentSlide &&
                        index < currentSlide + slidesToShow
                          ? "active"
                          : ""
                      }`}
                      style={{
                        width: `${100 / slidesToShow}%`,
                        flex: `0 0 ${100 / slidesToShow}%`,
                        padding: "0 10px",
                      }}
                    >
                      <div
                        className="patients_testimonials_slider_item"
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <Image
                          className="pull-left"
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <h4>{testimonial.name}</h4>
                          <p className="comment">{testimonial.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="customNavigation text-right mt-3">
              <a
                className={`btn_prev prev ${
                  currentSlide === 0 ? "disabled" : ""
                }`}
                onClick={prevSlide}
              >
                <i className="fa fa-chevron-left"></i>
              </a>
              <a
                className={`btn_next next ${
                  currentSlide >= maxSlide ? "disabled" : ""
                }`}
                onClick={nextSlide}
              >
                <i className="fa fa-chevron-right"></i>
              </a>
            </div>

            <style jsx>{`
              .customNavigation a {
                display: inline-block;
                margin: 0 5px;
                cursor: pointer;
                transition: background 0.3s ease;
                color: #333;
              }
              .btn_prev,
              .btn_next {
              padding: 4px 8px;
               color: #7f9aa0 !important;
              }
              .btn_prev:hover,
              .btn_next:hover {
                background: #f5f5f5;
              }
              .disabled {
                opacity: 0.4;
                pointer-events: none;
              }
            `}</style>

          </div>
        </div>
      </div>
    </div>
  );
}
