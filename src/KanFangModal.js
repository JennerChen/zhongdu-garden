import React, { useState } from "react";

export default function ({ setKanFangModal, title }) {

  const [name, setName] = useState("");

  const [tel, setTel] = useState("")

  return <div className="page-updiv">
    <div className="updiv-con">
      <h3><span>{ title }</span>[中都·华庭]</h3>
      <a className="updel" onClick={ () => setKanFangModal(false) }/>
      <div className="updiv-wrap">
        <form id="yourformid">
          <div className="updiv-input">
            <label>姓名</label>
            <input type="text" value={name} onChange={({target: {value}}) => setName(value)} name="userName"
                   placeholder="请输入您的姓名" />
          </div>
          <div className="updiv-input">
            <label>电话</label>
            <input type="tel" value={tel} name="userPhone" onChange={({target: {value}}) => setTel(value)}
                   placeholder="请输入您的联系方式" />
          </div>
          <div className="updiv-input">
            <a className="btn-submit" href="javascript:void(0);" id="submit">提交</a>
          </div>
        </form>
      </div>
    </div>
  </div>
}
