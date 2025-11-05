"use client";

import React from "react";
import Link from "next/link";

export default function HelplineSection() {
  return (
    
      <div className="helpline">
        <div className="">
          <div className="container">
            <div className="col-md-6 col-sm-6 col-lg-8">
              <h3>Helpline No. +8016322388</h3>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4">
              <div className="book-now">
                <Link href="/contact-us">BOOKING</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
