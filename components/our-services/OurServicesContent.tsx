"use client";

import React from "react";

interface OurServicesContentProps {
  data: {
    title: string;
    shortDescription: string;
    description: string;
  };
}

export default function OurServicesContent({ data }: OurServicesContentProps) {
  return (
    <div className="container">
      <div className="our-service">
        <h2>{data.title}</h2>
        <p>{data.shortDescription}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
