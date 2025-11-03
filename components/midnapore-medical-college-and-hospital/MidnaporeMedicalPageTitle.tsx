"use client";

import React from "react";
import Link from "next/link";

export default function MidnaporeMedicalPageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>Midnapore Medical College and Hospital</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/midnapore-medical-college-and-hospital">Midnapore Medical College and Hospital</Link></li>
        </ul>
      </div>
    </div>
  );
}