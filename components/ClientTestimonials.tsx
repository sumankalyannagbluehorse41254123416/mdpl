"use client";

import React, { useState, useEffect } from "react";

export default function ClientTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "\"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work.\"",
      author: "Rajeev Kumar, Customer"
    },
    {
      id: 2,
      text: "\"Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.\"",
      author: "Suman Adhikary, Customer"
    },
    {
      id: 3,
      text: "\"We wanted a Diagnostics center with high-quality work, quick turn-around-time (TAT), and competitive pricing to do the diagnostics tests. Midnapore Diagnostics Private Limited has exceeded our expectations. Anyway, I am delighted with their work.\"",
      author: "Rajeev Kumar, Customer"
    },
    {
      id: 4,
      text: "“Midnapore Diagnostics Private Limited is a complete center for our entire diagnostic needs less than one roof. Staffs are very cooperative and most IMPORTANT the doctor is very soft spoken and gentle. The technology is up to date and quality of ultrasound is excellent. I am a regular patient of this diagnostic center and very happy with service and results.”",
      author: "Suman Adhikary, Customer"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="who">
            <h3>CLIENT TESTIMONIALS</h3>
          </div>
          <div className="our_partners">
            <div id="our_partners_slider" className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div 
                  className="owl-stage" 
                  style={{ 
                    transform: `translate3d(-${currentSlide * 485}px, 0px, 0px)`,
                    transition: '0.45s',
                    width: '3880px'
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id}
                      className={`owl-item ${index === currentSlide ? 'active' : ''}`}
                      style={{ width: '455px', marginRight: '30px' }}
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