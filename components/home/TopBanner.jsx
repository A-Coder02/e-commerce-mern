import Link from "next/link";
import Script from "next/script";
import React from "react";

const TopBanner = () => {
  return (
    <div className="top-banner">
      {/* <video
        id="vid1"
        className="intro-video"
        width="500"
        height="281"
        autoplay
        muted
        loop
      >
        <source src="back1.mp4" type="video/mp4" />
        <source src="back1.ogv" type="video/ogg" />
        <source src="back1.webm" type="video/webm" />
      </video>
      <section className="content-banner">
        <div>
          <h1>Games have so much freedom. you can go anywhere you want.</h1>
          <p>
            WE BUILD GAMING CPU, ARCHITECTURE CPU WITH REQUIREMENTS & GREAT RIGS
            WITH WARRENTY + GURANTEE
          </p>
        </div>
        <button className="btns">
          <a href="all-products.html">Shop Now</a>
        </button>
      </section> */}
      <Link href="/custom-build">
        <img width={"100%"} height="100%" src="./banner.png" />
      </Link>
    </div>
  );
};

export default TopBanner;
