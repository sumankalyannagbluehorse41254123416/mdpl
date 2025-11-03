"use client";

import Link from "next/link";
import React from "react";

export default function CalcuttaNationalPageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>Calcutta National Medical College & Hospital</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/calcutta-national-medical-college-hospital">Calcutta National Medical College & Hospital</Link></li>
        </ul>
      </div>
    </div>
  );
}