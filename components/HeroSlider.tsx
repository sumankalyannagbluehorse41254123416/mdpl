// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// export default function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       image: "/images/1649066240462.jpg",
//       title: "Welcome To Midnapore Diagnostics Pvt Ltd",
//       description: "A JOINT VENTURE PARTNER WITH DEPT. OF HEALTH AND FAMILY WELFARE,GOVT. OF WEST BENGAL",
//       buttonText: "OUR SERVICES",
//       buttonLink: "/our-services"
//     },
//     {
//       id: 2,
//       image: "/images/1649066261596.jpg",
//       title: "Welcome To Midnapore Diagnostics Pvt Ltd",
//       description: "A JOINT VENTURE PARTNER WITH DEPT. OF HEALTH AND FAMILY WELFARE,GOVT. OF WEST BENGAL",
//       buttonText: "OUR CENTERS",
//       buttonLink: "/our-centers"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="health_slider">
//       <div className="owl-carousel owl-theme owl-loaded owl-drag">
//         <div className="owl-stage-outer">
//           <div 
//             className="owl-stage" 
//             style={{ 
//               transform: `translate3d(-${currentSlide * 1097.2}px, 0px, 0px)`,
//               transition: '0.25s',
//               width: '6584px'
//             }}
//           >
//             {slides.map((slide, index) => (
//               <div 
//                 key={slide.id}
//                 className={`owl-item ${index === currentSlide ? 'active' : ''}`}
//                 style={{ width: '1087.2px', marginRight: '10px' }}
//               >
//                 <div className="item">
//                   <div className="hlc_slider_details">
//                     <Image 
//                       src={slide.image}
//                       alt={slide.title}
//                       width={1200}
//                       height={600}
//                       className="w-100 animated fadeInDown"
//                     />
//                     <div className="hlc_slider_details_text">
//                       <div className="container">
//                         <div className="row">
//                           <div className="col-lg-12 col-md-12 col-sm-12">
//                             <h1 className="hs_slider_title animated bounceInDown">{slide.title}</h1>
//                             <p className="lead animated pulse">{slide.description}</p>
//                             <a href={slide.buttonLink} className="btn btn-default animated fadeInRightBig">
//                               {slide.buttonText}
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="owl-nav">
//           <button type="button" role="presentation" className="owl-prev" onClick={prevSlide}>
//             <span aria-label="Previous">‹</span>
//           </button>
//           <button type="button" role="presentation" className="owl-next" onClick={nextSlide}>
//             <span aria-label="Next">›</span>
//           </button>
//         </div>
//         <div className="owl-dots disabled"></div>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [
    {
      id: 1,
      image: "/images/1649066240462.jpg",
      title: "Welcome To Midnapore Diagnostics Pvt Ltd",
      description: "A JOINT VENTURE PARTNER WITH DEPT. OF HEALTH AND FAMILY WELFARE,GOVT. OF WEST BENGAL",
      buttonText: "OUR SERVICES",
      buttonLink: "/our-services"
    },
    {
      id: 2,
      image: "/images/1649066261596.jpg",
      title: "Welcome To Midnapore Diagnostics Pvt Ltd",
      description: "A JOINT VENTURE PARTNER WITH DEPT. OF HEALTH AND FAMILY WELFARE,GOVT. OF WEST BENGAL",
      buttonText: "OUR CENTERS",
      buttonLink: "/our-centers"
    }
  ];

  // Create extended slides array with clones for infinite loop
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // Handle infinite loop logic
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

  // Auto-play
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
        }
        .health_slider .hlc_slider_details img {
          width: 100%;
          height: auto;
          max-height: 80vh;
          object-fit: cover;
          display: block;
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

        .health_slider .owl-prev { left: 20px; }
        .health_slider .owl-next { right: 20px; }

      `}</style>

      <div className="health_slider">
        <div className="owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div 
              className="owl-stage" 
              style={{ 
                transform: `translate3d(-${currentSlide * 100}%, 0px, 0px)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              }}
            >
              {extendedSlides.map((slide, index) => (
                <div 
                  key={`${slide.id}-${index}`}
                  className={`owl-item ${index === currentSlide ? 'active' : ''}`}
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
                              <h1 className="hs_slider_title animated bounceInDown">{slide.title}</h1>
                              <p className="lead animated pulse">{slide.description}</p>
                              <a href={slide.buttonLink} className="btn btn-default animated fadeInRightBig">
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
            <button type="button" role="presentation" className="owl-prev" onClick={prevSlide}>
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next" onClick={nextSlide}>
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </>
  );
}