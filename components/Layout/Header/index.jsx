import React from "react";
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

const Header = () => {
  return (
    <>
      <header>
        {/* <ul className="slider-menu" id="sliderMenu">
          <a>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search Products..." />
          </a>
          <a href="processor.html">PROCESSOR</a>
          <a href="motherboard.html">MOTHERBOARD</a>
          <a href="laptop.html">lAPTOPS</a>
          <a href="networking.html">NETWORKING</a>
          <a href="accesories.html">ACCESSORIES</a>
          <a href="newin.html">NEW IN</a>
          <a href="service.html">SERVICES</a>
          <a href="all-products.html">ALL PRODUCTS</a>
          <a className="log-l" href="login.html">
            LOGIN
          </a>
          <a className="log-l" href="sign.html">
            CREATE ACCOUNT
          </a>
          <a className="log-l" href="contact.html">
            CONTACT US
          </a>

          <div className="aa1"></div>
        </ul> */}
        <MobileNavList />
        <div className="overlay hidden"></div>

        <div className="cart-section" id="cart-slot">
          <section className="cart-header">
            <h3>
              Your Shopping Cart <br />
              <small>
                (<span id="cart-item-number">1</span> item)
              </small>
            </h3>
            <i id="cart-close" className="fas fa-times" onClick={closeCart}></i>
          </section>
          <ul className="cart-item-list" type="none">
            <li className="cart-item">
              <img
                className="cart-item-img"
                src="img/products/products-img/product-11.jpeg"
              />
              <p className="cart-item-name">Leather MacPad</p>
              <span className="cart-item-close">
                Close<i className="fas fa-times"></i>
              </span>
              <p className="cart-item-spec">
                {`WITH FELT PADDING 13" - 33.5 X 24 CM (13.1" X 9.4" INCHES) /`}
                Navy
              </p>
              <div className="cart-item-div">
                &#8377;<span className="cart-item-price">6085</span>{" "}
                <span>
                  Qty : <span className="qty">1</span>
                </span>
              </div>
            </li>
            <li className="cart-item">
              <img
                className="cart-item-img"
                src="img/products/products-img/product-21.jpeg"
              />
              <p className="cart-item-name">Leather MacPad</p>
              <span className="cart-item-close">
                Close<i className="fas fa-times"></i>
              </span>
              <p className="cart-item-spec">
                {` WITH FELT PADDING 13" - 33.5 X 24 CM (13.1" X 9.4" INCHES) /`}
                Navy
              </p>
              <div className="cart-item-div">
                &#8377;<span className="cart-item-price">6085</span>{" "}
                <span>
                  Qty : <span className="qty">1</span>
                </span>
              </div>
            </li>
          </ul>
          <div className="for-a-gift-wrapper">
            <label for="giftWrap">
              <input type="checkbox" name="giftWrap" id="giftWrap" value="" />
              This is a gift (Free gift wrapping){" "}
              <i className="fas fa-gift"></i>
            </label>
            <p>
              <a style={{ textDecoration: "underline" }} onClick={giftL}>
                Click Here
              </a>
              to leave a Gift Message or special instructions to seller.
            </p>
            <label for="giftLabel">
              <textarea
                name="note"
                maxlength="160"
                id="giftLabel"
                rows="2"
                cols="50"
                style={{
                  position: "relative",
                  margin: "5px 11.4444px 0px 0px",
                  width: "100%",
                  height: "58px",
                }}
              ></textarea>
            </label>
          </div>
          <div className="subtotal-div">
            <h3>
              SubTotal
              <span
                style={{
                  display: "inline-block",
                  paddingLeft: "8rem",
                }}
              >
                Rs. <span className="subtotal">9999</span>
              </span>
            </h3>
            <div
              style={{
                paddingTop: 0,
                display: "flex",
                justifyContent: "center",
                fontSize: "0.7em",
              }}
            >
              Free Shipping* | 60 Days Returns | 1 Year Warranty
            </div>
            <button className="btns cart-btns">GO TO CHECKOUT</button>
            <p>Taxes included, discounts applied at checkout.</p>
            <span className="checkout-cards">
              <img src="img/pay-options.jpg" />
            </span>
          </div>
        </div>

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
              <li>
                <a href="sign.html">Sign In</a>
              </li>
              <li>
                <a href="login.html">Create Account </a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
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
            <div>
              <i
                id="openSliderMenuButton"
                className="fas fa-bars hide-i"
                onClick={openSliderMenu}
              ></i>
              <i
                id="closeSliderMenuButton"
                className="fas fa-times hide-i"
                onClick={closeSliderMenu}
              ></i>
            </div>
            <a className="tr" href="index.html">
              TECH MECHANIC
            </a>
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
