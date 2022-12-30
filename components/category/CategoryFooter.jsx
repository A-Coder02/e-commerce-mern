import React from "react";

const CategoryFooter = () => {
  return (
    <div className="pbi-wrapper">
      <div className="pbi-flex">
        {new Array(4).fill(0).map((item, index) => (
          <div className="pbi-flex-item" key={index}>
            <img src="img/pbi/pbi-w1.jpg" />
            <div>
              <h3>Title Here</h3>
              <p>Description Here</p>
            </div>
          </div>
        ))}
      </div>
      <section
        className="pbi-para"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ padding: "1rem" }}>Title Here</h3>
        <p>Description Here</p>
      </section>
    </div>
  );
};

export default CategoryFooter;
