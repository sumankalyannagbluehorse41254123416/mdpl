"use client";

import Link from "next/link";

const PageTitle = () => {
  return (
    <div className="hs_page_title">
      <div className="container">
        <h3>C.T.SCAN</h3>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/c-t-scan">C.T.SCAN</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default PageTitle;