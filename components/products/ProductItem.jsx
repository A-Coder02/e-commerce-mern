import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <div
      className="product-items"
      onClick={() => router.push(router.asPath + "/router")}
    >
      {/* <Link href="product"> */}
      <div style={{ position: "relative" }}>
        <span
          style={{
            display: "none",
          }}
        >
          NEW
        </span>
        <img
          className="show-img"
          src="./img/products/laptop/product1/front.jpg"
        />
      </div>
      <p>ASUS VivoBook Ultra K14 (2021), AMD Ryzen 7 5700U, 14-inch FHD</p>
      <div className="price">
        &#8377;<span>50112.30</span>
      </div>

      <span className="product-detail">
        8GB RAM/512GB SSD/Integrated Graphics/Office 2019/Windows 10/Transparent
        Silver/1.4 Kg
      </span>
      {/* </Link> */}
    </div>
  );
};

export default ProductItem;
