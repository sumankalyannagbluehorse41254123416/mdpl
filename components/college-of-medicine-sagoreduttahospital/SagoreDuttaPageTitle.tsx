"use client";

import Link from "next/link";
import React from "react";

export default function SagoreDuttaPageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>College of Medicine & Sagore Dutta Hospital</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/college-of-medicine-sagoreduttahospital">College of Medicine & Sagore Dutta Hospital</Link></li>
        </ul>
      </div>
    </div>
  );
}