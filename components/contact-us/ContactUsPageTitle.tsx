"use client";

import Link from "next/link";
import React from "react";

export default function ContactUsPageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>CONTACT US</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/contact-us">CONTACT US</Link></li>
        </ul>
      </div>
    </div>
  );
}