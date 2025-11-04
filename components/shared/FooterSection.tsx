"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  useEffect(() => {
    // ✅ jQuery-based scripts (if any DOM manipulation or animation needed)
    if (typeof window !== "undefined") {
      // Example: toggle chat tool visibility
      const chatButton = document.querySelector(".call_button");
      const chatTool = document.querySelector(".chat_tool");
      const backButtons = document.querySelectorAll(".chat_back_button");
      const gotoForm = document.querySelector(".gotoForm");

      if (chatButton && chatTool) {
        chatButton.addEventListener("click", () => {
          chatTool.classList.toggle("active");
        });
      }

      backButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelector(".user_form")?.classList.remove("active");
          document.querySelector(".chat_con")?.classList.remove("active");
          document.querySelector(".welcome_page")?.classList.add("active");
        });
      });

      if (gotoForm) {
        gotoForm.addEventListener("click", () => {
          document.querySelector(".welcome_page")?.classList.remove("active");
          document.querySelector(".user_form")?.classList.add("active");
        });
      }
    }
  }, []);

  return (
    <>
      {/* ✅ Footer Section */}
      <footer id="hs_footer">
        <div className="container">
          <div className="hs_footer_content">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="row">
                  <div className="hs_footer_about_us">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <Link href="https://www.mdpl.co">
                        <Image
                          src="/images/logo-White.png"
                          alt="logo"
                          width={180}
                          height={60}
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <h4 className="hs_heading">Quick Contact</h4>
                    <div className="hs_contact_detail">
                      <p>
                        <i
                          className="fa fa-map-marker quick_col"
                          aria-hidden="true"
                        ></i>{" "}
                        38,Bentick Street, Room No 4,1st Floor , Kolkata - 700069
                      </p>
                      <p>
                        <a className="ph_number" href="tel:+8016322388">
                          <i className="fa fa-phone" aria-hidden="true"></i> +91
                          8016322388
                        </a>
                      </p>

                      <div className="clearfix"></div>
                      <div className="hs_social">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/mdpl.co"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/mdpl_co"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <h4 className="hs_heading">Useful Links</h4>
                    <div className="clearfix"></div>
                    <div className="hs_footer_link">
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/our-services">
                            Our Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/our-centers">
                            Our Centers
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-4 col-md-4 col-sm-4">
                <h3 className="hs_heading">Twitter Widget</h3>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 hs_twitter_widget">
                    <a
                      className="twitter-timeline"
                      href="https://twitter.com/mdpl_co"
                      data-width="400"
                      data-height="300"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-link-color="#E95F28"
                      data-theme="#00ac7a"
                      data-tweet-limit="2"
                    >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}