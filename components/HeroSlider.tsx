"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// ================================================
// CLEAN HTML TEXT (remove <p>, &nbsp;, etc.)
// ================================================
const decodeHTML = (text: string = ""): string => {
  if (!text) return "";

  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<p>\s*<\/p>/g, "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
};

interface Subsection {
  id?: number | string;
  image?: string;
  title?: string;
  description?: string;
}

interface HeroSliderProps {
  data?: {
    subsections?: Subsection[];
  };
}

export default function HeroSlider({ data }: HeroSliderProps) {
  const subsections = data?.subsections || [];

  // Use CMS slides OR fallback static slides
  const slides =
    subsections.length > 0
      ? subsections.map((sub, index) => ({
          id: sub.id || index + 1,
          image: sub.image || "/images/default-banner.jpg",
          title: decodeHTML(sub.title || ""),
          description: decodeHTML(sub.description || ""),
          buttonText: index % 2 === 0 ? "OUR SERVICES" : "OUR CENTERS",
          buttonLink: index % 2 === 0 ? "/our-services" : "/our-centers",
        }))
      : [
          {
            id: 1,
            image: "/images/1649066240462.jpg",
            title: "Welcome To Midnapore Diagnostics Pvt Ltd",
            description:
              "A JOINT VENTURE PARTNER WITH DEPT. OF HEALTH AND FAMILY WELFARE, GOVT. OF WEST BENGAL",
            buttonText: "OUR SERVICES",
            buttonLink: "/our-services",
          },
          {
            id: 2,
            image: "/images/1649066261596.jpg",
            title: "Welcome To Midnapore Diagnostics Pvt Ltd",
            description:
              "A JOINT VENTURE PARTNER WITH DEPT. OF HEALTH AND FAMILY WELFARE, GOVT. OF WEST BENGAL",
            buttonText: "OUR CENTERS",
            buttonLink: "/our-centers",
          },
        ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create extended slide list for infinite loop
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // Fix infinite loop jump
  useEffect(() => {
    if (currentSlide === slides.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(slides.length);
      }, 500);
    }
  }, [currentSlide, slides.length]);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===================== GLOBAL SLIDER CSS ===================== */}
      <style jsx global>{`
        .health_slider {
          position: relative;
          overflow: hidden;
        }
        .health_slider .owl-carousel {
          position: relative;
        }
        .health_slider .owl-stage-outer {
          overflow: hidden;
        }
        .health_slider .owl-stage {
          display: flex;
        }
        .health_slider .owl-item {
          flex: 0 0 100%;
          width: 100% !important;
          margin-right: 0 !important;
        }
        .health_slider .item {
          position: relative;
        
        }

        /* ============ FIXED — WORKING PREV/NEXT BUTTONS ============ */
        .health_slider .owl-nav {
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          z-index: 20;
        }
        .health_slider .owl-nav button {
          pointer-events: all;
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          border: none;
          padding: 12px 18px;
          font-size: 32px;
          cursor: pointer;
          border-radius: 50%;
          transition: 0.2s ease-in-out;
        }
        .health_slider .owl-nav button:hover {
          background: rgba(0, 0, 0, 0.7);
        }
      `}</style>

      {/* ===================== SLIDER HTML ===================== */}
      <div className="health_slider">
        <div className="owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
                transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
              }}
            >
              {extendedSlides.map((slide, index) => (
                <div
                  key={`${slide.id}-${index}`}
                  className={`owl-item ${index === currentSlide ? "active" : ""}`}
                >
                  <div className="item">
                    <div className="hlc_slider_details">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={1200}
                        height={600}
                        className="w-100 animated fadeInDown"
                        priority
                      />
                      <div className="hlc_slider_details_text">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <h1 className="hs_slider_title animated bounceInDown">
                                {slide.title}
                              </h1>
                              <p className="lead animated pulse">
                                {slide.description}
                              </p>
                              <a
                                href={slide.buttonLink}
                                className="btn btn-default animated fadeInRightBig"
                              >
                                {slide.buttonText}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next Buttons */}
          <div className="owl-nav">
            <button className="owl-prev" onClick={prevSlide}>
              <span aria-label="Previous">‹</span>
            </button>
            <button className="owl-next" onClick={nextSlide}>
              <span aria-label="Next">›</span>
            </button>
          </div>

          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </>
  );
}
