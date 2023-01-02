import Link from "next/link";
import React, { useState } from "react";
import {
  closeCart,
  closeSearchBox,
  closeSliderMenu,
  giftL,
  openCart,
  openCartM,
  openSearchBox,
  openSliderMenu,
} from "../../../script";
import NavList from "./NavList";
import MobileNavList from "./NavList/MobileNavList";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(!false);
  return (
    <>
      <header>
        <MobileNavList isOpen={menuToggle} setOpen={setMenuToggle} />
        <div className="overlay hidden"></div>

        <ShoppingCart />

        <div className="header-items header-items-top">
          <div id="search-box" className="search-box">
            <div>
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search Product..." />
              <i className="fas fa-times" onClick={closeSearchBox}></i>
            </div>
          </div>
          <div
            className="header-items-top-items"
            id="search-products"
            onClick={openSearchBox}
          >
            <i className="fas fa-search"></i>Search
          </div>

          <div className="header-items-top-items">
            <ul>
              <li onClick={openCart}>
                <i className="fas fa-shopping-cart">
                  <span id="cart-icon-item-num">1</span>
                </i>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-items header-items-bottom">
          <div className="header-items-bottom-items main-c">
            <div style={{ width: "20px" }}>
              <i
                id="openSliderMenuButton"
                className="fas fa-bars hide-i"
                onClick={() => setMenuToggle(!menuToggle)}
                style={{
                  display: menuToggle ? "block" : "none",
                  position: "static",
                }}
              ></i>
              <i
                id="closeSliderMenuButton"
                className="fas fa-times hide-i"
                onClick={() => setMenuToggle(!menuToggle)}
                style={{
                  display: !menuToggle ? "block" : "none",
                  position: "static",
                }}
              ></i>
            </div>
            <Link className="tr" href="/">
              TECH MECHANIC
            </Link>
            <a onClick={openCartM}>
              <i className="fas fa-shopping-cart hide-i">
                <span id="cart-icon-item-num">1</span>
              </i>
            </a>
          </div>
          <div className="header-items-bottom-items">
            <NavList />
          </div>
        </div>
      </header>
      <NavList className="show-ul" />
    </>
  );
};

export default Header;
