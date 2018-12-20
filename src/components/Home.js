import React, { Component } from "react";
import R from "./R.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <p className="hook">
          "Design is not just what it looks like and feels like.
          <br />
          Design is how it works."
        </p>
        <div className="logo">
          <img src={R} alt="" className="R" />
          <div className="shadow" />
        </div>
      </div>
    );
  }
}

export default Home;
