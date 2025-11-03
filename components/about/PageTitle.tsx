"use client";

import React from "react";
import Link from "next/link";

export default function PageTitle() {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>ABOUT US</h3>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
