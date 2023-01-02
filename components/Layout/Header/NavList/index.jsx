import Link from "next/link";
import React from "react";

const NAVLIST_DATA = [
  { id: 1, link: "processor" },
  { id: 2, link: "motherboard" },
  { id: 1, link: "laptops" },
  { id: 1, link: "networking" },
  { id: 1, link: "accessories" },
  { id: 1, link: "services" },
  { id: 1, link: "new in" },
  { id: 1, link: "best sellers" },
  { id: 1, link: "all products" },
];

const NavList = ({ className = "" }) => {
  return (
    <ul
      style={{
        justifyContent: "center",
      }}
      className={"navlinks " + className}
    >
      {NAVLIST_DATA.map((navlink) => (
        <li
          key={navlink.id}
          className="imp-links"
          style={{
            textTransform: "uppercase",
          }}
        >
          <Link href={"/" + navlink.link.toLocaleLowerCase().replace(" ", "_")}>
            {navlink.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
