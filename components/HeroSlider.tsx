"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// ✅ Helper: decode & strip empty <p></p> or HTML tags
const decodeHTML = (text: string = ""): string => {
  if (!text) return "";

  return text
    .replace(/&nbsp;/g, " ") // replace non-breaking spaces
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<p>\s*<\/p>/g, "") // remove empty <p></p> tags
    .replace(/<\/?[^>]+(>|$)/g, "") // strip all HTML tags
    .trim(); // remove leading/trailing whitespace
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

  // ✅ If CMS subsections exist, use them; else fallback to static slides
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

  // ✅ Create extended slides array with clones for infinite loop
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

  // ✅ Infinite loop effect
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

  // ✅ Auto-play every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        {/* ============ ADD THIS CSS ONCE (globals.css or inside <style> tag) ============ */}
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
          padding-top: 60px;
        }
    
      
        .health_slider .owl-nav {
          position: absolute;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          pointer-events: none;
        }


      `}</style>

      <div className="health_slider">
        <div className="owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: `translate3d(-${currentSlide * 100}%, 0px, 0px)`,
                transition: isTransitioning
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
            >
              {extendedSlides.map((slide, index) => (
                <div
                  key={`${slide.id}-${index}`}
                  className={`owl-item ${
                    index === currentSlide ? "active" : ""
                  }`}
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

          <div className="owl-nav">
            <button
              type="button"
              role="presentation"
              className="owl-prev"
              onClick={prevSlide}
            >
              <span aria-label="Previous">‹</span>
            </button>
            <button
              type="button"
              role="presentation"
              className="owl-next"
              onClick={nextSlide}
            >
              <span aria-label="Next">›</span>
            </button>
          </div>

          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </>
  );
}
