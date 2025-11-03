"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuIconActive, setMenuIconActive] = useState(false);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    setMenuIconActive(!menuIconActive);
  };

  return (
    <header id="hs_header">
      <div className="">
        {/* Logo Section */}
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div id="hs_logo">
            <Link href="/">
              <img
                src="https://www.mdpl.co/images/logo-White.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>

        {/* Menu Section */}
        <div className="col-lg-6 col-md-6 col-sm-6">
          <button
            type="button"
            className="hs_nav_toggle navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="menu-dis">Menu</span>
            <div
              onClick={handleToggle}
              id="iconvar"
              className={menuIconActive ? "change" : ""}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>

          <nav id="topManu">
            <ul
              className="hs_menu collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <li>
                <Link className="active" id="Home-top" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="" id="About-Us-top" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <a className="" id="Our-Services-top" href="">
                  Our Services
                </a>
                <ul>
                  <li>
                    <Link id="m-r-i-scan-top" href="/m-r-i-scan">
                      M.R.I SCAN
                    </Link>
                  </li>
                  <li>
                    <Link id="c-t-scan-top" href="/c-t-scan">
                      C.T SCAN
                    </Link>
                  </li>
                  <li>
                    <Link id="DIGITAL-X-RAY-top" href="/digital-x-ray">
                      DIGITAL X-RAY
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a className="" id="Our-Centers-top" href="javascript:void(0);">
                  Our Centers
                </a>
                <ul>
                  <li>
                    <Link
                      id="RGKar-MCH-top"
                      href="https://www.mdpl.co/r-g-kar-medical-college-hospital"
                    >
                      R.G.Kar Medical College &amp; Hospital
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="CNMCH-top"
                      href="https://www.mdpl.co/calcutta-national-medical-college-hospital"
                    >
                      Calcutta National Medical College &amp; Hospital
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="CMSDH-top"
                      href="https://www.mdpl.co/college-of-medicine-sagoreduttahospital"
                    >
                      College of Medicine &amp; Sagore Dutta Hospital
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="HDH-top"
                      href="https://www.mdpl.co/howrah-district-hospital"
                    >
                      Howrah District Hospital
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="MMCH-top"
                      href="https://www.mdpl.co/midnapore-medical-college-and-hospital"
                    >
                      Midnapore Medical College and Hospital
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="" id="Contact-Us-top" href="https://www.mdpl.co/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Appointment Button */}
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="hs_appoint">
            <Link href="https://www.mdpl.co/contact-us" className="appoint-btn">
              Make An Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
