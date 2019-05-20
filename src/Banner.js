import React from "react";

export default function() {
  return (
    <div className="banner">
      <div className="pc_banner">
        <a href="tel:400-070-5918">
          <img
            alt={"banner"}
            src="/images/banner/pc.jpg"
            className="img-responsive"
          />
        </a>
      </div>
      <div className="m_banner">
        <a href="tel:400-070-5918">
          <img
            alt={"banner"}
            src="/images/banner/mobile.jpg"
            className="img-responsive"
          />
        </a>
      </div>
    </div>
  );
}
