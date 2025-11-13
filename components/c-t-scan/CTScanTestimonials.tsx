// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// export default function CTScanTestimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Rajeev Kumar",
//       image: "/images/1st.jpeg",
//       comment: "\"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work.\""
//     },
//     {
//       id: 2,
//       name: "Suman Adhiakry",
//       image: "/images/2nd.jpeg",
//       comment: "\"Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.\""
//     },
//     {
//       id: 3,
//       name: "Priya",
//       image: "/images/3rd.jpeg",
//       comment: "\"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work.\""
//     },
//     {
//       id: 4,
//       name: "Sumita",
//       image: "/images/4th.jpeg",
//       comment: "\"Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.\""
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
//       <div className="col-lg-12 col-md-12 col-sm-12">
//         <h4 className="hs_heading hspt">C.T SCAN SERVICES OFFERED BY THESE HOSPITALS</h4>
//         <h6 className="hs_heading_text">With advanced technology you can get the Most accurate results</h6>

//         <div className="patients_testimonials">           
//           <div id="patients_testimonials_slider" className="owl-carousel owl-theme owl-loaded owl-drag">
//             <div className="owl-stage-outer">
//               <div 
//                 className="owl-stage" 
//                 style={{ 
//                   transform: `translate3d(-${currentSlide * 480}px, 0px, 0px)`,
//                   transition: 'all 0.5s ease',
//                   width: '1920px'
//                 }}
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <div 
//                     key={testimonial.id}
//                     className={`owl-item ${index === currentSlide ? 'active' : ''}`}
//                     style={{ width: '460px', marginRight: '20px' }}
//                   >
//                     <div className="patients_testimonials_slider_item"> 
//                       <Image
//                         className="pull-left"
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         width={80}
//                         height={80}
//                       />
//                       <h4>{testimonial.name}</h4>
//                       <p className="comment">{testimonial.comment}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="owl-nav disabled">
//               <button type="button" role="presentation" className="owl-prev">
//                 <span aria-label="Previous">‹</span>
//               </button>
//               <button type="button" role="presentation" className="owl-next">
//                 <span aria-label="Next">›</span>
//               </button>
//             </div>
//             <div className="owl-dots disabled"></div>
//           </div>

//           <div className="customNavigation text-right"> 
//             <a className="btn_prev prev" onClick={prevSlide}>
//               <i className="fa fa-chevron-left"></i>
//             </a> 
//             <a className="btn_next next" onClick={nextSlide}>
//               <i className="fa fa-chevron-right"></i>
//             </a> 
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CTScanTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  const testimonials = [
    {
      id: 1,
      name: "Rajeev Kumar",
      image: "/images/1st.jpeg",
      comment: "\"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work.\""
    },
    {
      id: 2,
      name: "Suman Adhiakry",
      image: "/images/2nd.jpeg",
      comment: "\"Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.\""
    },
    {
      id: 3,
      name: "Priya",
      image: "/images/3rd.jpeg",
      comment: "\"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work.\""
    },
    {
      id: 4,
      name: "Sumita",
      image: "/images/4th.jpeg",
      comment: "\"Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.\""
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = testimonials.length - slidesToShow;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [maxSlide]);

  const slideWidth = slidesToShow === 1 ? 100 : 50;
  const translateValue = currentSlide * slideWidth;

  return (
    <div className="mri_section ctScan_section">
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h4 className="hs_heading hspt">C.T SCAN SERVICES OFFERED BY THESE HOSPITALS</h4>
          <h6 className="hs_heading_text">With advanced technology you can get the Most accurate results</h6>

          <div className="patients_testimonials">
            <div id="patients_testimonials_slider" className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer" style={{ overflow: 'hidden' }}>
                <div
                  className="owl-stage"
                  style={{
                    transform: `translate3d(-${translateValue}%, 0px, 0px)`,
                    transition: 'all 0.5s ease',
                    display: 'flex',
                    width: '100%'
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`owl-item ${index >= currentSlide && index < currentSlide + slidesToShow ? 'active' : ''}`}
                      style={{
                        width: `${100 / slidesToShow}%`,
                        flex: `0 0 ${100 / slidesToShow}%`,
                        padding: '0 10px'
                      }}
                    >
                      <div className="patients_testimonials_slider_item" style={{ display: "flex" }}>
                        <Image
                          className="pull-left"
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                        />
                        <div>
                          <h4>{testimonial.name}</h4>
                          <p className="comment">{testimonial.comment}</p>
                        </div>
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
            <style jsx>{`
                .customNavigation a {
                  display: inline-block;
                  margin: 0 3px;
                  cursor: pointer;
                  transition: background 0.3s ease;
                }
                  .btn_prev, .btn_next{
                      padding:2px 5px;
                  }
        
            `     
            }
            </style>
          </div>
        </div>
      </div>
    </div>
  );
}