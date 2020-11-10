import React, {Component} from 'react';
import './CSS/Skills.css'

export default class Skills extends Component{
    render(){
        return(
            <div className="skills_container">
                <div className="loading">
                    <h2 className="animation_text">Currently Loading Skills</h2>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}