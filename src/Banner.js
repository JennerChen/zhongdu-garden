import React from "react";
import BannerPc from "./images/banner/pc.jpg";
import BannerMobile from "./images/banner/mobile.jpg";

export default function() {
  return (
    <div className="banner">
      <div className="pc_banner">
        <a href="tel:400-070-5918">
          <img alt={"banner"} src={BannerPc} className="img-responsive" />
        </a>
      </div>
      <div className="m_banner">
        <a href="tel:400-070-5918">
          <img alt={"banner"} src={BannerMobile} className="img-responsive" />
        </a>
      </div>
    </div>
  );
}
