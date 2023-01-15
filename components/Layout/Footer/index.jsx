import React from "react";
import Img1 from "./short/short1.jpeg";
import Img2 from "./short/short2.jpeg";
import Img3 from "./short/short3.jpeg";
import Img4 from "../../../public/img/short/short1.jpeg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="hr-line"></div>
      <div className="short">
        <div className="short-items">
          <Image width="100" height="100" src="/img/short/short1.jpeg" />
          <p>All India Shipping</p>
        </div>
        <div className="short-items">
          <Image width="100" height="100" src="/img/short/short2.jpeg" />

          <p>1 Year Warranty</p>
        </div>
        <div className="short-items">
          <Image width="100" height="100" src="/img/short/short3.jpeg" />

          <p>Free Fast Shipping</p>
        </div>
        <div className="short-items">
          <Image width="100" height="100" src="/img/short/short4.jpeg" />

          <p>60 Day Returns</p>
        </div>
      </div>
      <section className="subs"></section>

      <div className="footer-links">
        <ul>
          <li className="link-heads">
            <a>Information</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Delivery Information</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
        <ul>
          <li className="link-heads">
            <a>Customer Service</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
        <ul>
          <li className="link-heads">
            <a>Extras</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
          {/* <li>
            <a href="#">Gift Certificates</a>
          </li>
          <li>
            <a href="#">Affiliate</a>
          </li>
          <li>
            <a href="#">Specials</a>
          </li> */}
        </ul>
        {/* <ul>
          <li className="link-heads">
            <a>My Account</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Order History</a>
          </li>
          <li>
            <a href="#">Wish List</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
        </ul> */}
      </div>
      <hr />
      <div className="copyright">
        <span>
          Powered By <a href="index.html">John Doe</a>
        </span>
        <span>
          <a href="#">John Doe</a> © 2023
        </span>
        <br />
        <div className="social-links">
          <p>All rights reserved © 2021 John Doe Ltd</p>
          <div>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
