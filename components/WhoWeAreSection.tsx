"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import the Next.js Image component

export default function WhoWeAreSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="who">
          <h3>Who We Are</h3>
        </div>

        <div className="col-lg-8 col-md-6 col-sm-6">
          {/* ✅ Replaced <img> with <Image /> for optimization */}
          <Image
            src="/images/1649074807374.jpg"
            alt="About Us"
            className="about-img"
            width={455} // ✅ must specify width
            height={355} // ✅ must specify height
            priority // ✅ improve LCP (loads early)
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="about-text">
            <h3>About Us</h3>
            <p>
              A victorious pathway towards our human world, We Midnapore Diagnostics
              Private Limited, started our auspicious journey with the prudence to
              develop an integrated diagnostic centre in West Bengal in India, under
              PPP model, with the support of Swasthya Bhawan, Dept. of Health &amp;
              Family Welfare. In the medical arena, We have started our journey from
              R.G.Kar Medical College &amp; Hospital with CT Scan Machine since decade,
              later on we installed M.R.I Scan Machine in 2010.
            </p>

            <Link href="/about" className="btn btn-default">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
