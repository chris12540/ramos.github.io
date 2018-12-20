import React, { Component } from "react";
import Slider from "react-slick";

class MainSlider extends Component {
  render() {
    const pages = ["Home", "About", "Work", "Contact"];
    const settings = {
      customPaging: function(i) {
        return <p className="nav">{pages[i]}</p>;
      },
      dots: true,
      dotsClass: "slick-dots",
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return <Slider {...settings}>{this.props.children}</Slider>;
  }
}

export default MainSlider;
