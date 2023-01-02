import Link from "next/link";
import React from "react";

const Box = () => {
  return (
    <div className="box">
      <section
        className="box-items"
        style={{
          background: "url(./img/box/box1.jpg)",
        }}
      >
        <Link href="/processors">
          <h2>Ultimate built CPUs for all your tech</h2>
          <p>
            CPU, motherboard, RAM & cases for Gaming, Architectures & Office
            work. Protect your gear with head-turning covers that fit like a
            thermal pastes, all generations covered.
          </p>
        </Link>
      </section>
      <section
        className="box-items"
        // style="background:url('img/box/box2.jpg');"
        style={{
          background: "url(./img/box/box2.jpg)",
        }}
      >
        <Link href="/accesories">
          <h2>Carry your gear like never before</h2>
          <p>
            Constructed with durable materials and branded keyboards, mouses,
            mouse pad, camera and UPS.
          </p>
        </Link>
      </section>
      <section
        className="box-items"
        // style="background:url('img/box/box3.jpg');"
        style={{
          background: "url(./img/box/box3.jpg)",
        }}
      >
        <Link href="/laptops">
          <h2>Bloody worthy Laptops</h2>
          <p>Nicely priced for any occasion and in budget</p>
        </Link>
      </section>
      <section
        className="box-items"
        // style="background:url('img/box/box4.jpg');"
        style={{
          background: "url(./img/box/box4.jpg)",
        }}
      >
        <Link href="/gpu">
          <h2>Enhance performance with NVIDEA</h2>
          <p>All GPUs available with great prices and performances.</p>
        </Link>
      </section>
    </div>
  );
};

export default Box;
