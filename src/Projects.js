import React, { Component } from 'react';
import './CSS/Projects.css';
import shark from './Images/shark.png';
import eco from './Images/eco.png';
import mountains from './Images/mountains.png';

export default class Projects extends Component{
    render(){
        return(<>
        <h2>Projects</h2>
            <div className="project_main_container">
                <section className="project_container">
                    <span className="project_image image_1" aria-label="shark"></span>
                    <label className="project_label"><h2>Label for Project Here</h2></label>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </section>
                <section className="project_container">
                    <span className="project_image image_2" aria-label="leaf"></span>
                    <label className="project_label"><h2>Label for Project Here</h2></label>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </section>
                <section className="project_container">
                    <span className="project_image image_3" aria-label="sunset"></span>
                    <label className="project_label"><h2>Label for Project Here</h2></label>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </section>
            </div>
            </>
        )
    }
}