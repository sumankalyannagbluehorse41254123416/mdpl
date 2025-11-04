"use client";

import React from "react";
import Link from "next/link";

export default function OurServicesPageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>OUR SERVICES</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/our-service">OUR SERVICES</Link></li>
        </ul>
      </div>
    </div>
  );
}