import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout_wrapper">
      <Header />
      <main style={{ minHeight: "500px", paddingTop: "32px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
