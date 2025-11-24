// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [menuIconActive, setMenuIconActive] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleToggle = () => {
//     setMenuIconActive(!menuIconActive);
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header id="hs_header" className="fixed">
//       <div className="row">
//         <div className="col-lg-3 col-md-3 col-sm-3">
//           <div id="hs_logo">
//             <Link href="/">
//               <Image
//                 src="/images/logo-White.png"
//                 alt="logo"
//                 width={150}
//                 height={50}
//                 priority
//               />
//             </Link>
//           </div>
//         </div>
        
//         <div className="col-lg-6 col-md-6 col-sm-6">
//           <button
//             type="button"
//             className={`hs_nav_toggle navbar-toggle ${menuOpen ? "" : "collapsed"}`}
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//             aria-expanded={menuOpen}
//             aria-controls="bs-example-navbar-collapse-1"
//             onClick={handleToggle}
//           >
//             <span className="menu-dis">Menu</span>
//             <div id="iconvar" className={menuIconActive ? "change" : ""}>
//               <div className="bar1"></div>
//               <div className="bar2"></div>
//               <div className="bar3"></div>
//             </div>
//           </button>
          
//           <nav id="topManu">
//             <ul
//               className={`hs_menu navbar-collapse collapse ${menuOpen ? "show" : ""}`}
//               id="bs-example-navbar-collapse-1"
//               style={menuOpen ? {} : { height: "0.8px" }}
//             >
//               <li>
//                 <Link className="active" id="Home-top" href="/">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link className="" id="About-Us-top" href="/about">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <a className="" id="Our-Services-top" href="">
//                   Our Services
//                 </a>
//                 <ul>
//                   <li>
//                     <Link id="m-r-i-scan-top" href="/m-r-i-scan">
//                       M.R.I SCAN
//                     </Link>
//                   </li>
//                   <li>
//                     <Link id="c-t-scan-top" href="/c-t-scan">
//                       C.T SCAN
//                     </Link>
//                   </li>
//                   <li>
//                     <Link id="DIGITAL-X-RAY-top" href="/digital-x-ray">
//                       DIGITAL X-RAY
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a className="" id="Our-Centers-top" href="">
//                   Our Centers
//                 </a>
//                 <ul>
//                   <li>
//                     <Link id="RGKar-MCH-top" href="/r-g-kar-medical-college-hospital">
//                       R.G.Kar Medical College & Hospital
//                     </Link>
//                   </li>
//                   <li>
//                     <Link id="CNMCH-top" href="/calcutta-national-medical-college-hospital">
//                       Calcutta National Medical College & Hospital
//                     </Link>
//                   </li>
//                   <li>
//                     <Link id="CMSDH-top" href="/college-of-medicine-sagoreduttahospital">
//                       College of Medicine & Sagore Dutta Hospital
//                     </Link>
//                   </li>
//                   <li>
//                     <Link id="HDH-top" href="/howrah-district-hospital">
//                       Howrah District Hospital
//                     </Link>
//                   </li>
//                   <li>
//                     <Link id="MMCH-top" href="/midnapore-medical-college-and-hospital">
//                       Midnapore Medical College and Hospital
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link className="" id="Contact-Us-top" href="/contact-us">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
        
//         <div className="col-lg-3 col-md-3 col-sm-3">
//           <div className="hs_appoint">
//             <Link href="/contact-us" className="appoint-btn">
//               Make An Appointment
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuIconActive, setMenuIconActive] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleToggle = (): void => {
    setMenuIconActive(!menuIconActive);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="hs_header" className={isScrolled ? "fixed" : ""}>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div id="hs_logo">
            <Link href="/">
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
        
        <div className="col-lg-6 col-md-6 col-sm-6">
          <button
            type="button"
            className={`hs_nav_toggle navbar-toggle ${menuOpen ? "" : "collapsed"}`}
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded={menuOpen}
            aria-controls="bs-example-navbar-collapse-1"
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
              id="bs-example-navbar-collapse-1"
              style={menuOpen ? {} : { height: "0.8px" }}
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
                <a className="" id="Our-Centers-top" href="">
                  Our Centers
                </a>
                <ul>
                  <li>
                    <Link id="RGKar-MCH-top" href="/r-g-kar-medical-college-hospital">
                      R.G.Kar Medical College & Hospital
                    </Link>
                  </li>
                  <li>
                    <Link id="CNMCH-top" href="/calcutta-national-medical-college-hospital">
                      Calcutta National Medical College & Hospital
                    </Link>
                  </li>
                  <li>
                    <Link id="CMSDH-top" href="/college-of-medicine-sagoreduttahospital">
                      College of Medicine & Sagore Dutta Hospital
                    </Link>
                  </li>
                  <li>
                    <Link id="HDH-top" href="/howrah-district-hospital">
                      Howrah District Hospital
                    </Link>
                  </li>
                  <li>
                    <Link id="MMCH-top" href="/midnapore-medical-college-and-hospital">
                      Midnapore Medical College and Hospital
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="" id="Contact-Us-top" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="hs_appoint">
            <Link href="/contact-us" className="appoint-btn">
              Make An Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}