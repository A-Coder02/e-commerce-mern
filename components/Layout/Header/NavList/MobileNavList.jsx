import Link from "next/link";
import React from "react";

const NAVLIST_DATA = [
  { id: 1, link: "Processor" },
  { id: 2, link: "motherboard" },
  { id: 1, link: "laptops" },
  { id: 1, link: "networking" },
  { id: 1, link: "accessories" },
  { id: 1, link: "services" },
  { id: 1, link: "new in" },
  { id: 1, link: "best sellers" },
  { id: 1, link: "all products" },
];

const MobileNavList = ({ className = "" }) => {
  return (
    <ul className="slider-menu" id="sliderMenu">
      <a>
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search Products..." />
      </a>
      <Link href="processor.html">PROCESSOR</Link>
      <Link href="motherboard.html">MOTHERBOARD</Link>
      <Link href="laptop.html">lAPTOPS</Link>
      <Link href="networking.html">NETWORKING</Link>
      <Link href="accesories.html">ACCESSORIES</Link>
      <Link href="newin.html">NEW IN</Link>
      <Link href="service.html">SERVICES</Link>
      <Link href="all-products.html">ALL PRODUCTS</Link>
      <Link className="log-l" href="login.html">
        LOGIN
      </Link>
      <Link className="log-l" href="sign.html">
        CREATE ACCOUNT
      </Link>
      <Link className="log-l" href="contact.html">
        CONTACT US
      </Link>

      <div className="aa1"></div>
    </ul>
  );
};

export default MobileNavList;
