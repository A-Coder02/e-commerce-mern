import React from "react";
import CategoryBreadCrumb from "../components/category/CategoryBreadCrumb";
import CategoryHeader from "../components/category/CategoryHeader";
import NetworkingForm from "../components/services/NetworkingForm";

const Networking = () => {
  return (
    <section>
      <CategoryBreadCrumb />
      <CategoryHeader />
      <NetworkingForm />
    </section>
  );
};

export default Networking;
