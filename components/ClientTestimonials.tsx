"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface Testimonial {
  id: number;
  title: string;
  description: string;
}

interface TestimonialsData {
  title: string;
  subsections: Testimonial[];
}

function decodeHtmlEntities(str: string) {
  if (!str) return "";
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

export default function ClientTestimonials({ data }: { data: TestimonialsData }) {
  const [currentSlide, setCurrentSlide] = useState(1); // start from 1 because of clone
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1);
  const [itemWidth, setItemWidth] = useState(555);
  const stageOuterRef = useRef<HTMLDivElement>(null);

  const testimonials = data.subsections || [];

  // duplicate first and last slides for infinite loop
  const extendedSlides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => prev - 1);
    setIsTransitioning(true);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Responsive width setup
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
  const stageWidth = totalItemWidth * extendedSlides.length;
  const translateX = -currentSlide * totalItemWidth;

  // ✅ Handle infinite loop reset (no flicker)
  const handleTransitionEnd = () => {
    if (currentSlide === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(1); // jump to first real
    } else if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(extendedSlides.length - 2); // jump to last real
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

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
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    display: "flex",
                    transform: `translate3d(${translateX}px, 0px, 0px)`,
                    transition: isTransitioning ? "transform 0.45s ease" : "none",
                    width: `${stageWidth}px`,
                  }}
                >
                  {extendedSlides.map((testimonial, index) => (
                    <div
                      key={index}
                      className="owl-item"
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
