"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function OurCentersSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const centers = [
    {
      id: 1,
      name: "R.G.Kar Medical College & Hospital",
      image: "/images/1650270284351.jpeg",
      description: "R.G. Kar Medical College and Hospitalismedical school and hospital inKolkata, West Bengal, India.",
      link: "/r-g-kar-medical-college-hospital"
    },
    {
      id: 2,
      name: "Calcutta National Medical College & Hospital",
      image: "/images/1650270329592.jpg",
      description: "Calcutta National Medical College is locally known as Chittaranjan hospital. It was established in 1948.",
      link: "/calcutta-national-medical-college-hospital"
    },
    {
      id: 3,
      name: "College of Medicine & Sagore Dutta Hospital",
      image: "/images/1650270358380.jpeg",
      description: "The College of Medicine & SagoreDutta Hospital (also known as SagarDutta Medical College) is a medical college which has been set up by theGovernment of West Bengal in 2010",
      link: "/college-of-medicine-sagoreduttahospital"
    },
    {
      id: 4,
      name: "Howrah District Hospital",
      image: "/images/1650270391052.jpeg",
      description: "(10,Biplabi HarenGhoshSarani,Howrah.Near- Howrah MuniCipality) We are here to serve Digital X-Ray Facility @70/-(Per Plate)",
      link: "/howrah-district-hospital"
    },
    {
      id: 5,
      name: "Midnapore Medical College and Hospital",
      image: "/images/1650270414161.jpeg",
      description: "Located in Midnapore (West Bengal), Midnapore Medical College and Hospital was established in 2004.",
      link: "/midnapore-medical-college-and-hospital"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === centers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? centers.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="who">
          <h3>Our Centers</h3> 
        </div>             
        <div className="our_doctor_team">
          <div id="our_doctor_team_slider" className="owl-carousel owl-theme owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div 
                className="owl-stage" 
                style={{ 
                  transform: `translate3d(-${currentSlide * 323.333}px, 0px, 0px)`,
                  transition: '0.45s',
                  width: '3557px'
                }}
              >
                {centers.map((center, index) => (
                  <div 
                    key={center.id}
                    className={`owl-item ${index === currentSlide ? 'active' : ''}`}
                    style={{ width: '293.333px', marginRight: '30px' }}
                  >
                    <div className="our_doctor_team_slider_item"> 
                      <Image
                        src={center.image}
                        alt={center.name}
                        width={300}
                        height={200}
                        className="img-fluid"
                      />
                      <div className="hs_team_member_detail">
                        <h3>{center.name}</h3>
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
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots">
              {centers.map((_, index) => (
                <button 
                  key={index} 
                  role="button" 
                  className={`owl-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <span></span>
                </button>
              ))}
            </div>
          </div>
          <div className="customNavigation text-center"> 
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