import React from "react";
import "./ComponentCss/footerCpn.css";

const footerCpn = (props) => {
  const config = {
    ...props.config,
    baseFooterFontSize: window.innerWidth < 1000 ? "14px" : "20px",
    titleFooterFontSize: window.innerWidth < 1000 ? "17px" : "25px",
  };
  const banQuyenList = [
    {
      name: 'Bản quyền thuộc về nhóm sinh viên nghiên cứu đề tài: "Thiết kế và xây dựng hệ thống ngữ liệu trực tuyến chữ Hán đa âm dành cho sinh viên ngành Ngôn ngữ Trung Quốc.".',
    },
  ];
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="footer-component bg-darkBlue p-3">
      <div className="row">
        <div className="copyright_item col-lg-8 col-md-6 col-sm-12">
          <div className="copyright_item-title text-white fw-bold" style={{ fontSize: config.titleFooterFontSize }}>
            Bản quyền
          </div>
          {banQuyenList.map((item, index) => (
            <div className="copyright_item-info mb-3">
              <span>
                <i className="fa-regular fa-copyright"></i>
              </span>
              <span key={index} className="nav-item text-white ms-2" style={{ fontSize: config.baseFooterFontSize }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="contact_item col-lg-4 col-md-6 col-sm-12">
          <div className="contact_item-wrapper">
            <div className="contact_item-title text-white fw-bold" style={{ fontSize: config.titleFooterFontSize }}>
              Liên hệ
            </div>

            <div
              onClick={() => handleClick("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=duoyinzi99@gmail.com")}
              key="1"
              className="contact_item-info nav-item text-white mb-1 hover-mouse"
              style={{ fontSize: config.baseFooterFontSize }}
              title="duoyinzi99@gmail.com"
            >
              <i className="fa-regular fa-envelope"></i>
              duoyinzi99@gmail.com
            </div>
            <div
              onClick={() => handleClick("https://www.facebook.com/profile.php?id=61557907629340&mibextid=ZbWKwL")}
              key="2"
              className="contact_item-info nav-item text-white mb-1 hover-mouse"
              style={{ fontSize: config.baseFooterFontSize }}
              title="Duoyin - Hệ thống ngữ liệu trực tuyến chữ Hán đa âm"
            >
              <i className="fa-brands fa-square-facebook"></i>
              <div>Duoyin - Hệ thống ngữ liệu trực tuyến chữ Hán đa âm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default footerCpn;
