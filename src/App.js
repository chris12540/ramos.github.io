import React, { Component } from "react";
import MainSlider from "./components/MainSlider";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainSlider>
          <Home />
          <About />
          <Work />
          <Contact />
        </MainSlider>
        <div className="social">
          <a href="" target="_blank">
            <i class="fab fa-github" />
          </a>
          <a href="" target="_blank">
            <i class="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
