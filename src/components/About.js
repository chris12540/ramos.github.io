import React, { Component } from "react";
import me from "./me.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about">
        <h1>WHO AM I?</h1>
        <p>Hey there, my name is Christian Ramos and I love to code. </p>
        <img src={me} alt="" />
      </div>
    );
  }
}

export default About;
