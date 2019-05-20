import React from "react";

export default function () {
  return <div className="content-bg">

    <div className="house-mess container">
      <img alt="" src="/images/loupanxinxin/1.jpg" />
      <img alt="" src="/images/loupanxinxin/2.jpg" />
      <img alt="" src="/images/loupanxinxin/3.jpg" />
      <img alt="" src="/images/loupanxinxin/4.jpg" />
      <img alt="" src="/images/loupanxinxin/5.jpg" />
      <img alt="" src="/images/loupanxinxin/6.jpg" />
    </div>

    <div className="yuyue-img">
      <a href="tel:400-070-5918">
        <h3><strong>
          <label>VIP</label></strong>服务热线：<strong>400-070-5918</strong></h3>
      </a>
    </div>

    <div className="tuan-div container">
      <h3>中都·华庭 团购意向申请</h3>
      <p>中都·华庭火热认筹中，优质户型等您来选！</p>
      <p>1.人多力量大，一人也团购，底价再购房！</p>
      <p>2.到访前预约还需至售楼处指定人员确认后有效！</p>
      <p>3.此活动不含售楼处老客户，中间渠道复访客！</p>
      <h5>请留下您的联系方式，以便于我们的客服及时与您取得联系：</h5>
      <div className="input-div">
        <form id="FormInput">
          <div className="form-div">
            <label>姓名：</label>
            <input type="text" value="" name="userName01" placeholder="请输入您的姓名" />
          </div>
          <div className="form-div">
            <label>电话：</label>
            <input type="tel" value="" name="userPhone01" placeholder="请输入您的联系方式" />
          </div>
          <div className="form-div">
            <a className="btn-submit01" href="javascript:void(0);" id="submit01">提交</a>
          </div>
        </form>
      </div>
    </div>

    <div className="pagemess">
      <p>Copyright©2019&nbsp;&nbsp;中都·华庭&nbsp;&nbsp;&nbsp;&nbsp;备案号 <a href="http://www.beian.miit.gov.cn/"
                                                                       target="_blank">苏ICP备18017747号</a>&nbsp;&nbsp;&nbsp;&nbsp;技术支持：<a
        target="_blank">昆山甄寰营销策划有限公司</a></p>
    </div>

    <div className="footer">
      <ul>
        <li className="foot-li01">
          <a>免费专车</a>
        </li>
        <li className="foot-li02">
          <a>预约看房</a>
        </li>
        <li className="foot-li03">
          <a href="tel:400-070-5918">
            <span><img src="/images/footer/1.png" /></span>
            <label></label>
            售楼处热线

          </a>
        </li>
        <li className="foot-li04">
          <a>在线咨询</a>
        </li>
        <li className="foot-li05">
          <a>获取地址</a>
        </li>
      </ul>
    </div>
  </div>
}