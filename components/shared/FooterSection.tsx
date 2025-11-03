"use client";

import React, { useEffect } from "react";

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
                      <a href="https://www.mdpl.co">
                        <img
                          src="https://www.mdpl.co/images/logo-White.png"
                          alt="logo"
                          width="180"
                          height="60"
                        />
                      </a>
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
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/mdpl_co"
                              target="_blank"
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
                          <a href="https://www.mdpl.co">Home</a>
                        </li>
                        <li>
                          <a href="https://www.mdpl.co/about-us">About Us</a>
                        </li>
                        <li>
                          <a href="https://www.mdpl.co/our-services">
                            Our Services
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mdpl.co/our-centers">
                            Our Centers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mdpl.co/contact-us">Contact Us</a>
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

        {/* ------------------ Chat Tool ------------------ */}
        <div className="page-wraper">
          <div className="chat_tool">
            <div className="chat_window">
              {/* Welcome Page */}
              <div className="welcome_page active">
                <div className="chat_win_intro">
                  <h3>Welcome to Chat Tool</h3>
                  <p>
                    Search the Help Center or start a chat. We're here to help you
                    24x7.
                  </p>
                </div>

                <div className="ch_theme_button">
                  <button className="gotoForm">
                    <ion-icon class="ion-android-send n_con_icon"></ion-icon>
                    New Conversation
                  </button>
                </div>
              </div>

              {/* User Form */}
              <div className="user_form">
                <div className="chat_header">
                  <div className="chat_header_inner">
                    <button
                      className="chat_back_button"
                      title="Back"
                    >
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                <form id="firstForm" method="post">
                  <div className="user_form_inner">
                    <div className="fieldrow">
                      <input
                        className="user_form_input first-not-space"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="fieldrow">
                      <input
                        className="user_form_input first-not-space"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="fieldrow">
                      <input
                        className="user_form_input first-not-space"
                        type="text"
                        name="contact_no"
                        placeholder="Contact No."
                        required
                      />
                    </div>
                    <div className="fieldrow">
                      <textarea
                        className="user_form_input first-not-space"
                        name="first_message"
                        rows={3}
                        placeholder="write message here..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="ch_theme_button">
                    <button className="chatSMS" type="submit">
                      <ion-icon class="ion-android-send n_con_icon"></ion-icon>
                      Start Chat
                    </button>
                  </div>
                </form>
              </div>

              {/* Chat Conversation */}
              <div className="chat_con">
                <div className="chat_header">
                  <div className="chat_header_inner">
                    <button
                      className="chat_back_button"
                      title="Back"
                    >
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div className="chat_con_body">
                  <div className="chat_con_inner"></div>
                </div>
                <div className="chat_footer">
                  <form className="chat-form">
                    <div className="chat_footer_inner">
                      <input
                        type="text"
                        id="m"
                        className="chat_reply_input first-not-space"
                        placeholder="Write message here..."
                        required
                      />
                      <input type="hidden" name="userId" id="userId" value="" />
                      <button
                        className="chat_reply_submit"
                        title="Submit"
                      >
                        <ion-icon class="ion-android-send"></ion-icon>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Floating Chat Button */}
            <button className="call_button">
              <i className="fa fa-comments" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
