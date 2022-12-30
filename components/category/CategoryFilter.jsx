import React from "react";

const CategoryFilter = () => {
  return (
    <div className="custom-select">
      <div>
        <label for="brand">
          {" "}
          Brands
          <select id="brand">
            <option value="0" selected>
              All
            </option>
            <option style={{ padding: "20px" }} value="1">
              HP
            </option>
            <option value="2">LENOVO</option>
            <option value="3">ASUS</option>
            <option value="4">ACCER</option>
            <option value="5">DELL</option>
            <option value="6">APPLE</option>
          </select>
        </label>
        <label for="price">
          {" "}
          Sort By
          <select id="price">
            <option value="0" selected>
              Featured
            </option>
            <option value="2">Price: Low To High</option>
            <option value="3">Price: High To Low</option>
            <option value="5">Newest Arrivals</option>
          </select>
        </label>
      </div>
      <form>
        <label for="searchProducts">
          Search
          <input type="search" id="searchProducts" />
          <button
            className="btn btn-primary fas fa-search"
            type="submit"
          ></button>
        </label>
      </form>
    </div>
  );
};

export default CategoryFilter;
