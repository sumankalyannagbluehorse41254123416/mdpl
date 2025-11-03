"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("newscan-0");
  const [selectedPrice, setSelectedPrice] = useState("");

  const services = [
    {
      id: "newscan-0",
      name: "C.T.SCAN",
      hospitals: [
        { value: "389:Rs.150/-", label: "R.G.KAR MEDICAL COLLEGE AND HOSPITAL" },
        { value: "392:Rs.200/-", label: "COLLEGE OF MEDICINE AND SAGOREDUTTA HOSPITAL" }
      ]
    },
    {
      id: "newscan-1",
      name: "M.R.I SCAN",
      hospitals: [
        { value: "390:Rs.150/-", label: "R.G.KAR MEDICAL COLLEGE AND HOSPITAL" },
        { value: "393:Rs.250/-", label: "CALCUTTA NATIONAL MEDICAL COLLEGE AND HOSPITAL" }
      ]
    },
    {
      id: "newscan-2",
      name: "DIGITAL X-RAY",
      hospitals: [
        { value: "391:Rs.150/-", label: "R.G.KAR MEDICAL COLLEGE AND HOSPITAL" },
        { value: "394:Rs.100/-", label: "COLLEGE OF MEDICINE AND SAGOREDUTTA HOSPITAL" },
        { value: "395:Rs.300/-", label: "HOWRAH DISTRICT HOSPITAL" },
        { value: "396:Rs.350/-", label: "MIDNAPORE MEDICAL COLLEGE AND HOSPITAL" },
        { value: "397:Rs.450/-", label: "CALCUTTA NATIONAL MEDICAL COLLEGE AND HOSPITAL" }
      ]
    }
  ];

  const handleHospitalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedPrice(value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-7">
          <h4 className="hs_heading">Leave a Message</h4>
          <form className="hs_comment_form" action="https://www.mdpl.co/home/save" method="POST">
            <input type="hidden" name="_token" value="yfi6pGTwaeeufDLN7W4cNXOLJRiINxkVYGpdwXPB" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-success" type="button"><i className="fa fa-user"></i></button>
                  </span>
                  <input id="name" name="fname" type="text" className="form-control" placeholder="Full Name" pattern="^[a-zA-Z\s]{1,100}$" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-success" type="button"><i className="fa fa-envelope"></i></button>
                  </span>
                  <input id="email" name="email" type="text" className="form-control" placeholder="Email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="input-group">
                  <input type="date" id="datePicker" name="date" className="form-control" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                {/* Empty div for layout */}
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="tophead56">
                    <label htmlFor="usr">Service *</label>
                    <div className="input-group">
                      <input type="text" id="case" name="case" className="form-control price_append" placeholder="price" value={selectedPrice} readOnly />
                    </div>
                  </div>
                  <div className="radio service_row">
                    <ul className="nav nav-tabs">
                      {services.map((service) => (
                        <li key={service.id} className={activeTab === service.id ? "active" : ""}>
                          <a 
                            href={`#${service.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTab(service.id);
                              setSelectedPrice("");
                            }}
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="tab-content" style={{ borderBottom: 0 }}>
                      {services.map((service) => (
                        <div 
                          key={service.id} 
                          id={service.id} 
                          className={`tab-pane fade ${activeTab === service.id ? "active in" : ""}`}
                          style={{ display: activeTab === service.id ? "block" : "none" }}
                        >
                          <h3>{service.name}</h3>
                          <div className="form-group">
                            <input type="hidden" name="selected_scan_id" id="selected_scan_id" value={service.id.split('-')[1]} />
                            <select 
                              className="form-control select_scan selectnewscanid" 
                              name="select_scan" 
                              id={`select_scan-${service.id.split('-')[1]}`}
                              onChange={handleHospitalChange}
                              style={{ display: 'block' }}
                            >
                              <option value="">--Select hospital--</option>
                              {service.hospitals.map((hospital, index) => (
                                <option key={index} value={hospital.value}>
                                  {hospital.label}
                                </option>
                              ))}
                            </select>
                            <span id="error_scan" style={{ color: '#FF0000' }}></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span id="error_hospital" style={{ color: '#FF0000' }}></span>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea id="message" name="message" className="form-control" rows={8}></textarea>
                </div>
              </div>
              <p id="err"></p>
              <div className="form-group">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" id="hs_checkbox" name="hscheckbox" className="css-checkbox lrg" defaultChecked />
                      <span className="css-label lrg hs_checkbox">Receive Your Comments By Email</span>
                    </label>
                    <div className="g-recaptcha" id="rcaptcha" data-sitekey="6LdB5dofAAAAADPkr_Kjfq5rPTVwWPXh0wRK2nxs"></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <input type="hidden" id="phone" name="phone" />
                  <input type="hidden" id="url" name="url" />
                  <input type="hidden" id="date" name="date" />
                  <button id="em_sub" className="btn btn-success pull-right btn-gap" type="button">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <h4 className="hs_heading">Our Contact Details</h4>
          <div className="hs_contact">
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <p>38, Bentick Street, Room No 4,1st Floor , Kolkata - 700069</p>
              </li>
            </ul>
            <ul>
              <li>
                <i className="fa fa-phone"></i>
                <p><a href="tel:+91 8016322388">+91 8016322388</a></p>
              </li>
            </ul>
            <ul>
              <li>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:helpdesk@mdpl.co">helpdesk@mdpl.co</a></p>
              </li>
            </ul>
          </div>
          <div className="hs_contact_social">
            <div className="hs_profile_social">
              <ul>
                <li><a href="https://www.facebook.com/mdpl.co" target="_blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/mdpl_co" target="_blank"><i className="fa fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}