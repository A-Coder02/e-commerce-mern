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

const MobileNavList = ({ className = "", isOpen }) => {
  return (
    <ul
      className="slider-menu"
      id="sliderMenu"
      style={{
        width: !isOpen ? "300px" : "0px",
      }}
    >
      <a>
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search Products..." />
      </a>
      {NAVLIST_DATA.map((nav) => (
        <Link href={nav.link} key={nav.id}>
          {nav.link}
        </Link>
      ))}

      <div className="aa1"></div>
    </ul>
  );
};

export default MobileNavList;
