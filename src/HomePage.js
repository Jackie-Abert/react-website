import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./CSS/HomePage.css";

export default class HomePage extends Component {
    // state ={
    //     opacity: "op1"
    // }
    // handleScroll = e => {
    //     if (window.scrollY > 500) {
    //       this.setState({opacity: "op0"})
    //     }
    //     if (window.scrollY < 500) {
    //         this.setState({opacity:"op1"})
    //     }
    //   }
    //   componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll, true);
    //   }
    render() {
    return (
      <div
        // onScroll={this.handleScroll}
        id="home"
        // className={`homepage_container ${this.state.opacity}`}
        className="homepage_container"
      >
        <div>
          <h1 className="default">Jackie Bishop</h1>
          <h2>Web Developer. Designer. Photographer.</h2>
        </div>
      </div>
    );
  }
}
