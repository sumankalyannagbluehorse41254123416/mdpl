"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ComingSoonBanner() {
  return (
    <div className="banner-inner">
      <div className="text-bnr">
        <div className="container">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="sec-sec"><h1>Coming Soon</h1></div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 pull-right">
            <ol className="breadcrumb pull-right">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item about-item active">Coming Soon</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <Image
        title="Coming Soon"
        alt="Coming Soon"
        src="https://www.mdpl.co/images/banner.jpg"
        className="w-100"
        width={1200}
        height={400}
        layout="responsive"
      /> */}
    </div>
  );
}