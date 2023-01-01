import React from "react";

const CustomSearch = () => {
  return (
    <form>
      <label for="searchProducts">
        <span style={{ marginRight: "1rem" }}> Search</span>
        <input type="search" id="searchProducts" />
        <button
          className="btn btn-primary fas fa-search"
          type="submit"
        ></button>
      </label>
    </form>
  );
};

export default CustomSearch;
