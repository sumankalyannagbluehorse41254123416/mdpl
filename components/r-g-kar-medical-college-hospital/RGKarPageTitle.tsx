"use client";

import Link from "next/link";
import React from "react";

export default function RGKarPageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>R.G.Kar Medical College & Hospital</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/r-g-kar-medical-college-hospital">R.G.Kar Medical College & Hospital</Link></li>
        </ul>
      </div>
    </div>
  );
}