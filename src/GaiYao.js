import React from "react";
import GaiYaoPc from "./images/gaiyao/pc.jpg";
import GaiYaoMobile from "./images/gaiyao/mobile.jpg";
export default function() {
  return (
    <div className="gaiyao container">
      <div className="pc_gaiyao">
        <a>
          <img src={GaiYaoPc} />
        </a>
      </div>
      <div className="m_gaiyao">
        <a>
          <img src={GaiYaoMobile} />
        </a>
      </div>
    </div>
  );
}
