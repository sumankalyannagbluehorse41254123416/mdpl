"use client";

import React from "react";
import Link from "next/link";

export default function DigitalXRayPageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>DIGITAL X-RAY</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/digital-x-ray">DIGITAL X-RAY</Link></li>
        </ul>
      </div>
    </div>
  );
}