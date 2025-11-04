"use client";

import Link from "next/link";
import React from "react";

export default function OurCentersPageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>OUR CENTERS</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/our-centers">OUR CENTERS</Link></li>
        </ul>
      </div>
    </div>
  );
}