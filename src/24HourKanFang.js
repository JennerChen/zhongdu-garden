import React from "react";

import styled from "styled-components";
import { UserName, Tel, Submit } from "./form";
const Title = styled.label`
  color: #990000;
`;

export default function() {
  return (
    <div className="allday-yy container">
      <h3>
        <Title>24小时</Title>报名享团购价
      </h3>
      <p>已经提交896人</p>
      <div className="div24">
        <form id="allday">
          <div className="div24-input">
            <label>姓名</label>
            <UserName type="text" name="userName02" placeholder="姓名" />
          </div>
          <div className="div24-input">
            <label>电话</label>
            <Tel type="text" name="userPhone02" placeholder="电话" />
          </div>
          <Submit className="btn-allday" id="submit02" >立即预约</Submit>
        </form>
      </div>
      <div className="success-div">
        <img src="/images/kanfang/success.gif" />
      </div>
    </div>
  );
}
