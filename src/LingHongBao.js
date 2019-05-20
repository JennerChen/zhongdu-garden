import React from "react";

export default function({ setKanFangModal }) {
  return (
    <div className="page-box02">
      <div className="container clearfix">
        <div className="col-md-6 col-sm-6 col-xs-12 pbox02-left">
          <p>中都·华庭</p>
          <h3>
            <i>购房返现卡</i>
            <span>最高返¥6666</span>
          </h3>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 pbox02-right">
          <p>999人已领取</p>
          <a
            onClick={() =>
              setKanFangModal({
                title: "领取红包"
              })
            }
          >
            立即领取
          </a>
        </div>
      </div>
    </div>
  );
}
