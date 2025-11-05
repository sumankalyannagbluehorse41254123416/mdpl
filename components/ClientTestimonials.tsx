// "use client";

// import React, { useState, useEffect } from "react";

// export default function ClientTestimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       text: "\"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work.\"",
//       author: "Rajeev Kumar, Customer"
//     },
//     {
//       id: 2,
//       text: "\"Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.\"",
//       author: "Suman Adhikary, Customer"
//     },
//     {
//       id: 3,
//       text: "\"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work.\"",
//       author: "Rajeev Kumar, Customer"
//     },
//     {
//       id: 4,
//       text: "“Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.”",
//       author: "Suman Adhikary, Customer"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className="who">
//             <h3>CLIENT TESTIMONIALS</h3>
//           </div>
//           <div className="our_partners">
//             <div id="our_partners_slider" className="owl-carousel owl-theme owl-loaded owl-drag">
//               <div className="owl-stage-outer">
//                 <div 
//                   className="owl-stage" 
//                   style={{ 
//                     transform: `translate3d(-${currentSlide * 485}px, 0px, 0px)`,
//                     transition: '0.45s',
//                     width: '3880px'
//                   }}
//                 >
//                   {testimonials.map((testimonial, index) => (
//                     <div 
//                       key={testimonial.id}
//                       className={`owl-item ${index === currentSlide ? 'active' : ''}`}
//                       style={{ width: '455px', marginRight: '30px' }}
//                     >
//                       <div className="our_partners_slider_item">
//                         {testimonial.text}
//                         <br />
//                         <strong>{testimonial.author}</strong>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="owl-nav disabled">
//                 <button type="button" role="presentation" className="owl-prev">
//                   <span aria-label="Previous">‹</span>
//                 </button>
//                 <button type="button" role="presentation" className="owl-next">
//                   <span aria-label="Next">›</span>
//                 </button>
//               </div>
//               <div className="owl-dots disabled"></div>
//             </div>
//             <div className="customNavigation text-right"> 
//               <a className="btn_prev prev" onClick={prevSlide}>
//                 <i className="fa fa-chevron-left"></i>
//               </a> 
//               <a className="btn_next next" onClick={nextSlide}>
//                 <i className="fa fa-chevron-right"></i>
//               </a> 
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ClientTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stageOuterRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);   // 1 on mobile, 2 on desktop
  const [itemWidth, setItemWidth] = useState(555);      // fallback

  const testimonials = [
    {
      id: 1,
      text: '"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work."',
      author: "Rajeev Kumar, Customer",
    },
    {
      id: 2,
      text: '"Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results."',
      author: "Suman Adhikary, Customer",
    },
    {
      id: 3,
      text: '"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work."',
      author: "Rajeev Kumar, Customer",
    },
    {
      id: 4,
      text: "“Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.”",
      author: "Suman Adhikary, Customer",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= testimonials.length - visibleCount ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  // Auto-play (still 5 s)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  // ---------- RESPONSIVE CALCULATION ----------
  useEffect(() => {
    const calc = () => {
      if (!stageOuterRef.current) return;

      const container = stageOuterRef.current;
      const containerW = container.clientWidth;
      const itemMargin = 30;

      // Desktop >= 992px → show 2 items
      // Tablet / Mobile < 992px → show 1 item
      const isDesktop = window.innerWidth >= 992;
      const count = isDesktop ? 2 : 1;

      // width = (container - (count-1)*margin) / count
      const width =
        (containerW - (count - 1) * itemMargin) / count;

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
  // -------------------------------------------

  const itemMargin = 30;
  const totalItemWidth = itemWidth + itemMargin;
  const stageWidth = totalItemWidth * testimonials.length;
  const translateX = -currentSlide * totalItemWidth;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="who">
            <h3>CLIENT TESTIMONIALS</h3>
          </div>

          <div className="our_partners">
            <div
              id="our_partners_slider"
              className="owl-carousel owl-theme owl-loaded owl-drag"
            >
              {/* <-- stage outer gets the ref --> */}
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
                        {testimonial.text}
                        <br />
                        <strong>{testimonial.author}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots disabled"></div>
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
  );
}