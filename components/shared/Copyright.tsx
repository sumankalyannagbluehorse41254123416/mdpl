"use client";

import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div className="hs_copyright">
      Copyright © 2022 MDPL Powered by{" "}
      <Link href="https://iudyog.com/" target="_blank">
        Iudyog
      </Link>
    </div>
  );
};

export default Copyright;
