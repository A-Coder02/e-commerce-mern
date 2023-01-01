import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CategoryBreadCrumb = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <div className=" product-main-para-head">
      <div className="product-link-main">
        <Link href="/">HOME</Link> {">"}
        <a style={{ textTransform: "uppercase" }}>
          {router.asPath.slice(1).replace("_", " ")}
        </a>
      </div>
    </div>
  );
};

export default CategoryBreadCrumb;
