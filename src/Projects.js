import React, { Component } from "react";
import "./CSS/Projects.css";
import fish from "./Images/fish.png";
import rocketboy from "./Images/rocketboy.jpg";
import battleship from "./Images/battleship.png";


export default class Projects extends Component {
  render() {
    return (
      <>
        <h2 id="projects">Projects</h2>
        <h3 className="center">
          Click on a project image to go to the live site
        </h3>
        <div className="project_main_container">
          {/* blackjack project */}
          <div className="project_container">
            <div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blackjack-iokoj8agm.vercel.app/"
                >
                  <img
                    src={fish}
                    alt="koi"
                    className="project_image blackjack"
                    aria-label="koi"
                  />
                </a>
              </div>
              <label className="project_label">
                <h2>Blackjack</h2>
              </label>
              <p>
                This app was built for a two week solo coding challenge.
                It was built on a modular foundation for future addition of multiplayer, multiple game levels,
                achievements, and ultimately, the final goal of expanding into a
                full poker suite
              </p>
              <h3>Tools</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JWT</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Balsamiq</li>
              </ul>
            </div>
            <div className="buttons">
              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Jackie-Abert/jax-blackjack"
                >
                  Client Code
                </a>
              </div>
              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Jackie-Abert/blackjack-server/"
                >
                  Server Code
                </a>
              </div>
            </div>
          </div>

          {/* spaced repetition project */}

          <div className="project_container">
            <div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://spaced-repetition-delta.vercel.app/"
                >
                  <img
                    src={rocketboy}
                    alt="rocketboy"
                    className="project_image repetition"
                    aria-label="rocketboy"
                  />
                </a>
              </div>
              <label className="project_label">
                <h2>Spaced Repetition</h2>
              </label>
              <p>
                This was a team effort to implement a linked list into a language learning application. 
                It was built upon a bare bones framework and needed the pieces put into place. 
              </p>
              <h3>Tools</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>

            <div className="buttons">
              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Jackie-Abert/spaced-repetition-client"
                >
                  Client Code
                </a>
              </div>
              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Jackie-Abert/spaced-repetition-server"
                >
                  Server Code
                </a>
              </div>
            </div>
          </div>
          {/* space battleship project */}
          <div className="project_container">
            <div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://spacebattleship.vercel.app/"
                >
                  <img
                    src={battleship}
                    alt="spacestation"
                    className="project_image battleship"
                    aria-label="spacestation"
                  />
                </a>
              </div>
              <label className="project_label">
                <h2>Space Battleship</h2>
              </label>
              <p>
                I was design lead for this full stack application that was a
                take on the game Battleship. I used space elements to give new
                life to an old concept. I also utilized elements from the main
                background image to create a cohesive application design scheme.
              </p>
              <h3>Tools</h3>
              <ul>
                <li>React.JS</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
            <div className="buttons">
              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mloldacre/battleship-jmkbh"
                >
                  Client Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
