"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface Testimonial {
  id: number;
  title: string; // author name
  description: string; // testimonial text
}

interface TestimonialsData {
  title: string; // section title
  subsections: Testimonial[];
}

// ✅ Helper to clean text
function decodeHtmlEntities(str: string) {
  if (!str) return "";
  return str
    .replace(/&nbsp;/g, " ")   // replace non-breaking spaces
    .replace(/&amp;/g, "&")    // replace ampersand
    .replace(/&lt;/g, "<")     // replace less-than
    .replace(/&gt;/g, ">")     // replace greater-than
    .replace(/&quot;/g, '"')   // replace double quote
    .replace(/&#39;/g, "'")    // replace single quote
    .trim();                   // remove leading/trailing spaces
}

export default function ClientTestimonials({ data }: { data: TestimonialsData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stageOuterRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [itemWidth, setItemWidth] = useState(555);

  const testimonials = data.subsections || [];

  // ✅ Prevent recreation using useCallback
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev >= testimonials.length - visibleCount ? 0 : prev + 1
    );
  }, [testimonials.length, visibleCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  }, [testimonials.length, visibleCount]);

  // ✅ Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // ✅ Responsive item width calculation
  useEffect(() => {
    const calc = () => {
      if (!stageOuterRef.current) return;

      const containerW = stageOuterRef.current.clientWidth;
      const itemMargin = 30;
      const isDesktop = window.innerWidth >= 992;
      const count = isDesktop ? 2 : 1;

      const width = (containerW - (count - 1) * itemMargin) / count;

      setVisibleCount(count);
      setItemWidth(width);
    };

    calc();
    const ro = new ResizeObserver(calc);
    if (stageOuterRef.current) ro.observe(stageOuterRef.current);

    window.addEventListener("resize", calc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, []);

  const itemMargin = 30;
  const totalItemWidth = itemWidth + itemMargin;
  const stageWidth = totalItemWidth * testimonials.length;
  const translateX = -currentSlide * totalItemWidth;

  if (!testimonials.length) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="who">
            <h3>{decodeHtmlEntities(data.title)}</h3>
          </div>

          <div className="our_partners">
            <div
              id="our_partners_slider"
              className="owl-carousel owl-theme owl-loaded owl-drag"
            >
              <div className="owl-stage-outer" ref={stageOuterRef}>
                <div
                  className="owl-stage"
                  style={{
                    display: "flex",
                    transform: `translate3d(${translateX}px, 0px, 0px)`,
                    transition: "0.45s",
                    width: `${stageWidth}px`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`owl-item ${
                        index >= currentSlide && index < currentSlide + visibleCount
                          ? "active"
                          : ""
                      }`}
                      style={{
                        flex: `0 0 ${itemWidth}px`,
                        width: `${itemWidth}px`,
                        marginRight: `${itemMargin}px`,
                        boxSizing: "border-box",
                      }}
                    >
                      <div className="our_partners_slider_item">
                        <p>{decodeHtmlEntities(testimonial.description)}</p>
                        <strong>{decodeHtmlEntities(testimonial.title)}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="customNavigation text-right">
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
      </div>
    </div>
  );
}
