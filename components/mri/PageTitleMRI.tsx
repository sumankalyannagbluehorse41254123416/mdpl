"use client";

import React from "react";
import Link from "next/link";

export default function PageTitleMRI() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>M.R.I SCAN</h3>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/m-r-i-scan">M.R.I SCAN</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
