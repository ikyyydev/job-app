import React from "react";
import Slider from "react-slick";
import "./companylist.css";

export const CompanyList = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div className="slider-logo py-5 overflow-hidden">
      <h2 className="text-center pb-5 fw-medium">
        Sejak 2010, kami telah bekerja sama dengan perusahaan terkemuka:
      </h2>
      <Slider {...settings}>
        <div className="single-slide">
          <img src="logo1.png" alt="" />
        </div>
        <div className="single-slide">
          <img src="logo2.png" alt="" />
        </div>
        <div className="single-slide">
          <img src="logo3.png" alt="" />
        </div>
        <div className="single-slide">
          <img src="logo4.png" alt="" />
        </div>
        <div className="single-slide">
          <img src="logo5.png" alt="" />
        </div>
        <div className="single-slide">
          <img src="logo6.png" alt="" />
        </div>
        <div className="single-slide">
          <img src="logo7.png" alt="" />
        </div>
        <div className="single-slide">
          <img src="logo8.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};
