import React from "react";
import { Form, Submit, UserName, Tel } from "./form";
export default function({ setKanFangModal, title }) {
  return (
    <div className="page-updiv">
      <div className="updiv-con">
        <h3>
          <span>{title}</span>[中都·华庭]
        </h3>
        <span className="updel" onClick={() => setKanFangModal(false)} />
        <div className="updiv-wrap">
          <Form id="yourformid">
            <div className="updiv-input">
              <label>姓名</label>
              <UserName
                type="text"
                name="userName"
                placeholder="请输入您的姓名"
              />
            </div>
            <div className="updiv-input">
              <label>电话</label>
              <Tel
                type="tel"
                name="userPhone"
                placeholder="请输入您的联系方式"
              />
            </div>
            <div className="updiv-input">
              <Submit
                className="btn-submit"
                href="javascript:void(0);"
                id="submit"
              >
                提交
              </Submit>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
