"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface WhoWeAreProps {
  data?: {
    title?: string;
    shortDescription?: string;
    image?: string;
  };
}

export default function WhoWeAreSection({ data }: WhoWeAreProps) {
  const {
    title = "About Us",
    shortDescription = `A victorious pathway towards our human world, We Midnapore Diagnostics
      Private Limited, started our auspicious journey with the prudence to
      develop an integrated diagnostic centre in West Bengal in India, under
      PPP model, with the support of Swasthya Bhawan, Dept. of Health & Family
      Welfare. In the medical arena, We have started our journey from R.G.Kar
      Medical College & Hospital with CT Scan Machine since decade, later on we
      installed M.R.I Scan Machine in 2010.`,
    image = "/images/1649074807374.jpg",
  } = data || {};

  return (
    <div className="container">
      <div className="row">
        <div className="who">
          <h3>Who We Are</h3>
        </div>

        <div className="col-lg-8 col-md-6 col-sm-6">
          <Image
            src={image}
            alt={title || "About Us"}
            className="about-img"
            width={455}
            height={355}
            priority
          />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="about-text">
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: shortDescription }} />
            <Link href="/about" className="btn btn-default">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
