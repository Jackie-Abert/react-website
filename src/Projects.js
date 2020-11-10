import React, { Component } from "react";
import "./CSS/Projects.css";
import fish from "./Images/fish.png";
import rocketboy from "./Images/rocketboy.jpg";
import battleship from "./Images/battleship.png";

export default class Projects extends Component {
  render() {
    return (
      <>
        <h2>Projects</h2>
        <div className="project_main_container">
          <section className="project_container">
            <div>
              <img
                src={fish}
                alt="shark"
                className="project_image"
                aria-label="shark"
              />
            </div>
            <label className="project_label">
              <h2>Blackjack</h2>
            </label>
            <p>
              Built for a two week solo coding challenge, this was my very
              first, and successful, attempt at a full-stack game application.
              It was built for future expansion of multiplayer, smarter AI,
              achievements, and ultimately, the final goal of expanding into a
              full poker suite
            </p>
            <ul>
              Tech Stack Used
              <li>React</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>JWT</li>
            </ul>
            <a target="_blank"  rel="noopener noreferrer" href="https://blackjack-iokoj8agm.vercel.app/">
              Live App
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/Jackie-Abert/jax-blackjack"
            >
              Client Code
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/Jackie-Abert/blackjack-server/"
            >
              Server Code
            </a>
          </section>
          <section className="project_container">
            <div>
              <img
                src={rocketboy}
                alt="shark"
                className="project_image"
                aria-label="shark"
              />
            </div>
            <label className="project_label">
              <h2>Spaced Repetition</h2>
            </label>
            <p>
              I was design lead for this full stack application that was a take on the
              game Battleship. I used space elements to give new life to an old
              concept. I also utilized elements from the main background image to
              create a cohesive application design scheme.
            </p>
            <ul>
              Tech Stack Used
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>Vanilla CSS</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="https://spaced-repetition-delta.vercel.app/">
              Live App
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/Jackie-Abert/spaced-repetition-client"
            >
              Client Code
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/Jackie-Abert/spaced-repetition-server"
            >
              Server Code
            </a>
          </section>
          <section className="project_container">
            <div>
              <img
                src={battleship}
                alt="shark"
                className="project_image"
                aria-label="shark"
              />
            </div>
            <label className="project_label">
              <h2>Space Battleship</h2>
            </label>
            <p>
              I was design lead for this full stack application that was a take on the
              game Battleship. I used space elements to give new life to an old
              concept. I also utilized elements from the main background image to
              create a cohesive application design scheme.
            </p>
            <ul>
              Tech Stack Used
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>Vanilla CSS</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="https://spacebattleship.vercel.app/">
              Live App
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/mloldacre/battleship-jmkbh"
            >
              Client Code
            </a>
          </section>
        </div>
      </>
    );
  }
}
