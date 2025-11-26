"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuIconActive, setMenuIconActive] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleToggle = (): void => {
    setMenuIconActive((prev) => !prev);
    setMenuOpen((prev) => !prev);
  };

  // CLOSE MENU WHEN LINK CLICKED
  const closeMenu = (): void => {
    setMenuOpen(false);
    setMenuIconActive(false);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="hs_header" className={isScrolled ? "fixed" : ""}>
      <div className="row">
        
        {/* Logo */}
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div id="hs_logo">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/images/logo-White.png"
                alt="logo"
                width={150}
                height={44}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="col-lg-6 col-md-6 col-sm-6">
          <button
            type="button"
            className={`hs_nav_toggle navbar-toggle ${menuOpen ? "" : "collapsed"}`}
            onClick={handleToggle}
          >
            <span className="menu-dis">Menu</span>
            <div id="iconvar" className={menuIconActive ? "change" : ""}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>

          <nav id="topManu">
            <ul
              className={`hs_menu navbar-collapse collapse ${menuOpen ? "show" : ""}`}
              style={menuOpen ? {} : { height: "0.8px" }}
            >
              <li>
                <Link href="/" className="active" id="Home-top" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" id="About-Us-top" onClick={closeMenu}>
                  About Us
                </Link>
              </li>

              <li>
                <a id="Our-Services-top">Our Services</a>
                <ul>
                  <li>
                    <Link href="/m-r-i-scan" onClick={closeMenu}>
                      M.R.I SCAN
                    </Link>
                  </li>
                  <li>
                    <Link href="/c-t-scan" onClick={closeMenu}>
                      C.T SCAN
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-x-ray" onClick={closeMenu}>
                      DIGITAL X-RAY
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a id="Our-Centers-top">Our Centers</a>
                <ul>
                  <li>
                    <Link href="/r-g-kar-medical-college-hospital" onClick={closeMenu}>
                      R.G.Kar Medical College & Hospital
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/calcutta-national-medical-college-hospital"
                      onClick={closeMenu}
                    >
                      Calcutta National Medical College & Hospital
                    </Link>
                  </li>
                  <li>
                    <Link href="/college-of-medicine-sagoreduttahospital" onClick={closeMenu}>
                      College of Medicine & Sagore Dutta Hospital
                    </Link>
                  </li>
                  <li>
                    <Link href="/howrah-district-hospital" onClick={closeMenu}>
                      Howrah District Hospital
                    </Link>
                  </li>
                  <li>
                    <Link href="/midnapore-medical-college-and-hospital" onClick={closeMenu}>
                      Midnapore Medical College and Hospital
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/contact-us" id="Contact-Us-top" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Button */}
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="hs_appoint">
            <Link href="/contact-us" className="appoint-btn" onClick={closeMenu}>
              Make An Appointment
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
