import React, {Component} from 'react';
import './CSS/HeaderNav.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
 
    render(){
        return(
            <nav className="header_nav">
                <div className="nav_open">
                    <div className="nav_links"><a href="#projects">Projects</a></div>
                    <div className="nav_links"><a href="#about">About</a></div>
                    <div className="nav_links"><a href="#contact">Contact</a></div>
                </div>
            </nav>
        )
    }
}